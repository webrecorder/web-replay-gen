module.exports = function (eleventyConfig) {
  // Copy assets, retain dir structure
  eleventyConfig.addPassthroughCopy('src/**/*.{css,js}');

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
