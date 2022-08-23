require('dotenv').config();

const path = require('path');
const wrgConfigPath = path.resolve(
  process.cwd(),
  process.env.WRG_CONFIG_NAME || 'wrg-config.json'
);

const wrgConfig = require(wrgConfigPath);

module.exports = {
  replay: wrgConfig.replay || {},
  pages: wrgConfig.wacz_urls.map((url) => ({
    name: url,
    url: `/archive/?wacz_url=${encodeURIComponent(url)}`,
  })),
};
