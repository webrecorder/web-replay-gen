const wrgConfig = require('../../getConfig')();

module.exports = () =>
  wrgConfig.wacz_urls.map((url) => {
    return {
      name: url,
      url: `/archive/#/${encodeURIComponent(url)}`,
    };
  });
