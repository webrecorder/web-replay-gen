require('dotenv').config();

const path = require('path');
const filename = process.env.WRG_CONFIG_NAME || 'wrg-config.json';
const wrgConfigPath = path.resolve(
  process.env.ELEVENTY_ROOT,
  process.env.WRG_CONFIG_NAME || 'wrg-config.json'
);

module.exports = () => ({
  filename,
  config: require(wrgConfigPath),
});
