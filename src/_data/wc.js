/** JS web component data */
const fg = require('fast-glob');

module.exports = async function () {
  return {
    filePaths: (await fg('src/components/**/*.js')).map((path) =>
      path.replace('src/', './')
    ),
  };
};
