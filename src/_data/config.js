/** Process wrg-config.json */
const path = require('path');
const fsPromises = require('fs/promises');
const normalize = require('normalize-path');
const fg = require('fast-glob');
const wrgConfig = require('../../getConfig')();

function formatReplayBaseURL() {
  let replayBaseURL = wrgConfig.replayBaseURL;

  if (replayBaseURL) {
    replayBaseURL = replayBaseURL.replace(/\/+$/, '');
  } else {
    replayBaseURL = `https://cdn.jsdelivr.net/npm/replaywebpage`;
  }

  return replayBaseURL;
}

function formatArchives() {
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
   * Get JSON file contents
   * @param {string} filePath
   * @returns {Archive[]}
   */
  async function getJSONFile(filePath) {
    try {
      const data = await fsPromises.readFile(filePath);

      return JSON.parse(data);
    } catch (err) {
      console.debug(err);
    }

    return {};
  }

  /**
   * Map local WACZ files to archive page data
   * @param {string} filePath
   * @returns {Archive[]}
   */
  async function mapLocalFiles(filePath) {
    const entries = await fg(path.join(filePath, '**/*.wa{cz,rc}'));

    return entries;
  }

  /**
   * Map local JSON file to archive page data
   * @param {string} filePath
   * @returns {Archive[]}
   */
  async function mapJSONFile(filePath) {
    try {
      const { archives } = await getJSONFile(filePath);

      return archives;
    } catch (err) {
      console.debug(err);
    }

    return [];
  }

  /**
   * Map local text file to archive page data
   * @param {string} filePath
   * @returns {Archive[]}
   */
  async function mapTextFile(filePath) {
    const data = await fsPromises.readFile(filePath, 'utf8');

    return data.toString().split('\n');
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

  try {
    if (wrgConfig.archivesPath || typeof wrgConfig.archives === 'string') {
      return handleStringOpt(wrgConfig.archivesPath || wrgConfig.archives);
    }

    if (Array.isArray(wrgConfig.archives)) {
      return wrgConfig.archives;
    }
  } catch (e) {
    console.debug(e);
  }

  console.warn('Unrecognized config `archives` option, returning empty array.');

  return [];
}

module.exports = async () => {
  return {
    site: { ...wrgConfig.site },
    replay: { ...wrgConfig.replay },
    replayBaseURL: formatReplayBaseURL(),
    archives: await formatArchives(),
  };
};
