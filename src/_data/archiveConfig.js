const wrgConfig = require('../../getConfig')();

module.exports = {
  runtimeOnlyArchives: wrgConfig.runtimeOnlyArchives,
  archivesPath: wrgConfig.archives,
};
