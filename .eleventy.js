const fg = require('fast-glob');
const litPlugin = require('@lit-labs/eleventy-plugin-lit');

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

  // Copy node modules needed in client
  // TODO rollup?
  const litLibs = [
    'node_modules/@lit/reactive-element/reactive-element.js',
    'node_modules/@lit/reactive-element/css-tag.js',
    'node_modules/@webcomponents/template-shadowroot/template-shadowroot.js',
    'node_modules/@webcomponents/template-shadowroot/_implementation/',
    'node_modules/@shoelace-style/shoelace/dist/',
    'node_modules/lit/experimental-hydrate-support.js',
    'node_modules/lit/index.js',
    'node_modules/lit-element/lit-element.js',
    'node_modules/lit-element/experimental-hydrate-support.js',
    'node_modules/lit-html/lit-html.js',
    'node_modules/lit-html/is-server.js',
    'node_modules/lit-html/directive.js',
    'node_modules/lit-html/directive-helpers.js',
    'node_modules/lit-html/experimental-hydrate.js',
    'node_modules/fuse.js/dist/fuse.esm.js',
  ].reduce(
    (acc, path) => ({
      ...acc,
      [path]: path,
    }),
    {}
  );
  eleventyConfig.addPassthroughCopy(litLibs);

  // Set up Lit SSR
  eleventyConfig.addPlugin(litPlugin, {
    mode: 'worker',
    componentModules: fg.sync('src/components/**/*.js'),
  });
  eleventyConfig.addWatchTarget('src/components/');

  return {
    // When a passthrough file is modified, rebuild the pages:
    passthroughFileCopy: true,
    dir: {
      input: 'src',
    },
  };
};
