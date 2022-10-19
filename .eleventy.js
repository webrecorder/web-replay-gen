const { filename } = require('./getConfig')();

module.exports = function (eleventyConfig) {
  // Copy config file
  eleventyConfig.addPassthroughCopy({
    [filename]: 'wrg-config.json',
  });

  // Copy assets, retain dir structure
  eleventyConfig.addPassthroughCopy('src/[!_data]**/*.{css,js}');

  // Keep web archive files in gitignore but remove from eleventyignore
  eleventyConfig.ignores.delete('*.wacz');
  eleventyConfig.ignores.delete('*.warc');
  // Copy web archive files, retain dir structure
  // TODO only copy files specified in `archives`
  eleventyConfig.addPassthroughCopy('{,!(_site)/**/}*.wa{cz,rc}');

  // Watch for changes to JS files
  eleventyConfig.addWatchTarget('src/**/*.js');

  return {
    // When a passthrough file is modified, rebuild the pages:
    passthroughFileCopy: true,
    dir: {
      input: 'src',
    },
  };
};
