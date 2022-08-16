module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/style.css');

  return {
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      includes: '_includes',
      data: '_data',
      output: '_site',
    },
  };
};
