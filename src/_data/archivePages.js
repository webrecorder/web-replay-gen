const path = require('path');
const normalize = require('normalize-path');
const fg = require('fast-glob');
const wrgConfig = require('../../getConfig')();

/**
 * @param {string} filePath
 * @returns {boolean}
 */
function isRelativePath(filePath) {
  return !/^([a-z0-9]+:)?[\\/]/i.test(filePath);
}

/**
 * Transform archives data to site page data
 * @param {string|Object} data - WACZ data, can be URL string or { name: string; url: string }
 * @returns {Object} archive
 * @returns {string} archive.name - Name of archive
 * @returns {string} archive.waczURL - URL to WACZ file
 * @returns {string} archive.pathname - Site page path
 */
function mapToPage(data, idx) {
  let name, waczURL;

  if (typeof data === 'string') {
    waczURL = data;
  } else if (
    typeof data === 'object' &&
    data.constructor === Object &&
    data.name &&
    data.url
  ) {
    name = data.name;
    waczURL = data.url;
  }

  if (waczURL) {
    if (!name) {
      // Use filename without extension
      const extIdx = waczURL.toLowerCase().lastIndexOf('.wacz');
      name = waczURL.slice(0, extIdx).slice(waczURL.lastIndexOf('/') + 1);
    }

    const pathname = `archive/#/${encodeURIComponent(waczURL)}`;

    return { name, waczURL, pathname };
  }

  console.warn(`Invalid WACZ data at index ${idx}, skipping`);
}

/**
 * @param {string} filePath
 */
async function handleRelativePath(filePath) {
  const entries = await fg(path.join(filePath, '**/*.wacz'));

  return entries.map(mapToPage);
}

/**
 * @param {string} val - Config option value
 */
function handleStringOpt(val) {
  if (val.startsWith('s3://')) {
    // TODO handle s3
    return true;
  }

  const normalized = normalize(val);

  if (!isRelativePath(normalized)) {
    throw new Error('Invalid config `archives` option');
  }

  return handleRelativePath(normalized);
}

module.exports = () => {
  try {
    if (!wrgConfig.archives) {
      return handleStringOpt('archives');
    }

    if (typeof wrgConfig.archives === 'string') {
      return handleStringOpt(wrgConfig.archives);
    }

    if (Array.isArray(wrgConfig.archives)) {
      return wrgConfig.archives.map(mapToPage).filter((v) => v);
    }
  } catch {}

  console.warn('Unrecognized config `archives` option, returning empty array.');

  return [];
};
