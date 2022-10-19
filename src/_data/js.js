/** JS file data */
const fg = require('fast-glob');

module.exports = async function () {
  return {
    filePaths: (await fg('src/js/**/*.js')).map((path) =>
      path.replace('src/', './')
    ),
  };
};
