const path = require('path');
const wrgConfig = require(path.resolve(process.cwd(), 'wrg-config.json'));

module.exports = {
  title: wrgConfig.title || '',
};
