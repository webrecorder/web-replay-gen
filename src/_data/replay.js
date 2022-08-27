const wrgConfig = require('../../getConfig')();
/**
 * @returns {Object} archive
 * @returns {string} archive.name - Name of archive
 * @returns {string} archive.waczURL - URL to WACZ file
 * @returns {string} archive.pathname - Site page path
 */
module.exports = () => {
  const replay = {
    embed: 'replayonly',
    ...wrgConfig.replay,
  };

  if (replay.baseUrl) {
    replay.baseUrl = replay.baseUrl.replace(/\/+$/, '');
  } else {
    replay.baseUrl = `https://cdn.jsdelivr.net/npm/replaywebpage${
      replay.version ? `@${replay.version}` : ''
    }`;
  }

  return replay;
};
