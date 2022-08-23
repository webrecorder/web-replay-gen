require('dotenv').config();

const path = require('path');
const wrgConfigPath = path.resolve(
  process.cwd(),
  process.env.WRG_CONFIG_NAME || 'wrg-config.json'
);

const wrgConfig = require(wrgConfigPath);

module.exports = {
  title: wrgConfig.title || '',
  replay: wrgConfig.replay || {},
  wacz_urls: wrgConfig.wacz_urls || [],
};
