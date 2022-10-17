const path = require('path');
const fsPromises = require('fs/promises');
const normalize = require('normalize-path');
const fg = require('fast-glob');
const wrgConfig = require('../../getConfig')();

/**
 * @typedef {Object} Archive
 * @returns {string} name - Name of archive
 * @returns {string} url - URL to WACZ file
 */

/**
 * @param {string} filePath
 * @returns {boolean}
 */
function isRelativePath(filePath) {
  return !/^([a-z0-9]+:)?[\\/]/i.test(filePath);
}

/**
 * @param {string} filePath
 * @returns {boolean}
 */
function isInRoot(filePath) {
  const absPath = path.resolve(filePath);

  return absPath.startsWith(process.env.ELEVENTY_ROOT);
}

/**
 * Transform archives data to site page data
 * @param {string|Object} data - WACZ data, can be URL string or { name: string; url: string }
 * @returns {Archive}
 */
function mapToPage(data, idx) {
  let name, url;

  if (typeof data === 'string') {
    url = data;
  } else if (
    typeof data === 'object' &&
    data.constructor === Object &&
    data.name &&
    data.url
  ) {
    name = data.name;
    url = data.url;
  }

  if (url) {
    if (!name) {
      // Use filename without extension
      name = path.parse(url).name;
    }

    return { name, url };
  }

  console.warn(`Invalid WACZ data at index ${idx}, skipping`);
}

/**
 * Map local WACZ files to archive page data
 * @param {string} filePath
 * @returns {Archive[]}
 */
async function mapLocalFiles(filePath) {
  const entries = await fg(path.join(filePath, '**/*.wa{cz,rc}'));

  return entries.map(mapToPage);
}

/**
 * Map local JSON file to archive page data
 * @param {string} filePath
 * @returns {Archive[]}
 */
async function mapJSONFile(filePath) {
  const data = await fsPromises.readFile(filePath);

  const { archives } = JSON.parse(data);

  return archives.map(mapToPage);
}

/**
 * Map local text file to archive page data
 * @param {string} filePath
 * @returns {Archive[]}
 */
async function mapTextFile(filePath) {
  const data = await fsPromises.readFile(filePath, 'utf8');

  return data.toString().split('\n').map(mapToPage);
}

/**
 * Derive archive data list from config archives option
 * @param {string} val - Config option value
 * @returns {Archive[]}
 */
function handleStringOpt(val) {
  const normalized = normalize(val);

  if (!isRelativePath(normalized)) {
    throw new Error(
      'Invalid config `archives` option: Only relative paths are supported at this time'
    );
  }

  if (!isInRoot(normalized)) {
    throw new Error(
      'Invalid config `archives` option: Path must share root directory with Eleventy project'
    );
  }

  switch (path.extname(val)) {
    case '.json':
      return mapJSONFile(normalized);
    case '.txt':
      return mapTextFile(normalized);
    default:
      break;
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
  } catch (e) {
    console.debug(e);
  }

  console.warn('Unrecognized config `archives` option, returning empty array.');

  return [];
};
