const wrgConfig = require('../../getConfig')();

module.exports = {
  runtimeOnlyArchives: wrgConfig.runtimeOnlyArchives || false,
  archivesPath: wrgConfig.archives,
};
