const path = require('path');
const normalize = require('normalize-path');
const fg = require('fast-glob');
const wrgConfig = require('../../getConfig')();

/**
 * @typedef {Object} Archive
 * @returns {string} name - Name of archive
 * @returns {string} waczURL - URL to WACZ file
 * @returns {string} pathname - Site page path
 */

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
 * @returns {Archive}
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
 * Map local WACZ files to archive page data
 * @param {string} filePath
 * @returns {Archive[]}
 */
async function mapLocalFiles(filePath) {
  const entries = await fg(path.join(filePath, '**/*.wacz'));

  return entries.map(mapToPage);
}

/**
 * Map S3 bucket listing to archive page data
 * @param {string} url
 * @returns {Archive[]}
 */
async function mapS3List(url) {
  return [];
}

/**
 * Derive archive data list from config archives option
 * @param {string} val - Config option value
 * @returns {Archive[]}
 */
function handleStringOpt(val) {
  if (val.startsWith('s3://')) {
    return mapS3List(val);
  }

  const normalized = normalize(val);

  if (!isRelativePath(normalized)) {
    throw new Error('Invalid config `archives` option');
  }

  return mapLocalFiles(normalized);
}

/**
 * @returns {Archive[]}
 */
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
