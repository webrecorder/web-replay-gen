module.exports = function (eleventyConfig) {
  // Copy and watch assets, retain dir structure
  eleventyConfig.addPassthroughCopy('src/[!_]**/*.{css,js}');
  eleventyConfig.addWatchTarget('src/[!_]**/*.{css,js}');

  // Keep web archive files in gitignore but remove from eleventyignore
  eleventyConfig.ignores.delete('*.wacz');
  eleventyConfig.ignores.delete('*.warc');
  // Copy web archive files, retain dir structure
  // TODO only copy files specified in `archives`
  eleventyConfig.addPassthroughCopy('{,!(_site)/**/}*.wa{cz,rc}');

  return {
    // When a passthrough file is modified, rebuild the pages:
    passthroughFileCopy: true,
    dir: {
      input: 'src',
    },
  };
};
