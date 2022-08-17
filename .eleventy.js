module.exports = function (eleventyConfig) {
  // Copy the `css` folders to the output
  eleventyConfig.addPassthroughCopy('src/style.css');

  return {
    // When a passthrough file is modified, rebuild the pages:
    passthroughFileCopy: true,
    dir: {
      input: 'src',
    },
  };
};
