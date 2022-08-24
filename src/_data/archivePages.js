const wrgConfig = require('../../getConfig')();

module.exports = () =>
  wrgConfig.archives.map((url) => {
    return {
      name: url,
      url: `/archive/#/${encodeURIComponent(url)}`,
    };
  });
