require('dotenv').config();

const path = require('path');
const wrgConfigPath = path.resolve(
  process.cwd(),
  process.env.WRG_CONFIG_NAME || 'wrg-config.json'
);

module.exports = () => require(wrgConfigPath);
