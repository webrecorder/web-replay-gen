module.exports = function (eleventyConfig) {
  // Copy assets, retain dir structure
  eleventyConfig.addPassthroughCopy('src/[!_data]**/*.{css,js}');
  // Copy public data
  eleventyConfig.addPassthroughCopy('src/public_data/[!.]*');

  // Keep web archive files in gitignore but remove from eleventyignore
  eleventyConfig.ignores.delete('*.wacz');
  eleventyConfig.ignores.delete('*.warc');
  // Copy web archive files, retain dir structure
  eleventyConfig.addPassthroughCopy('{,!(_site)/**/}*.wa{cz,rc}');

  // Copy library files to `/lib`
  eleventyConfig.addPassthroughCopy({
    'node_modules/@11ty/is-land/is-land.js': 'lib/is-land.js',
  });

  return {
    // When a passthrough file is modified, rebuild the pages:
    passthroughFileCopy: true,
    dir: {
      input: 'src',
    },
  };
};
