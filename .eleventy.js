module.exports = function (eleventyConfig) {
  // Copy assets, retain dir structure
  eleventyConfig.addPassthroughCopy('src/[!_data]**/*.{css,js,json}');

  // Keep web archive files in gitignore but remove from eleventyignore
  eleventyConfig.ignores.delete('*.wacz');
  eleventyConfig.ignores.delete('*.warc');
  // Copy web archive files, retain dir structure
  eleventyConfig.addPassthroughCopy('{,!(_site)/**/}*.wa{cz,rc}');

  // Copy node modules needed in client
  // TODO rollup?
  const litLibs = [
    'node_modules/@lit/reactive-element/reactive-element.js',
    'node_modules/@lit/reactive-element/css-tag.js',
    'node_modules/lit/index.js',
    'node_modules/lit-element/lit-element.js',
    'node_modules/lit-html/lit-html.js',
    'node_modules/lit-html/is-server.js',
    'node_modules/lit-html/directive.js',
    'node_modules/lit-html/directive-helpers.js',
  ].reduce(
    (acc, path) => ({
      ...acc,
      [path]: path,
    }),
    {}
  );
  eleventyConfig.addPassthroughCopy(litLibs);

  eleventyConfig.addWatchTarget('src/components/');

  return {
    // When a passthrough file is modified, rebuild the pages:
    passthroughFileCopy: true,
    dir: {
      input: 'src',
    },
  };
};
