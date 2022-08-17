const path = require('path');
const wrgConfig = require(path.resolve(process.cwd(), 'wrg-config.json'));

if (!Array.isArray(wrgConfig.wacz_urls)) {
  throw new Error('Invalid `wacz_urls`, must be an Array.');
}

module.exports = wrgConfig.wacz_urls;
