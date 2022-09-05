const wrgConfig = require('../../getConfig')();

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
