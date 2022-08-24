const wrgConfig = require('../../getConfig')();

module.exports = () => ({
  ...wrgConfig.replay,
});
