const wrgConfig = require('../../getConfig')();

/**
 * Transform archives data to site page data
 * @param {string|Object} data - WACZ data, can be URL string or { name: string; url: string }
 * @returns {Object} archive
 * @returns {string} archive.name - Name of archive
 * @returns {string} archive.waczURL - URL to WACZ file
 * @returns {string} archive.pathname - Site page path
 */
function mapToPage(data, idx) {
  let name, waczURL;

  if (typeof data === 'string') {
    waczURL = data;
  } else if (
    typeof data === 'object' &&
    data.constructor === Object &&
    data.name &&
    data.url
  ) {
    name = data.name;
    waczURL = data.url;
  }

  if (waczURL) {
    if (!name) {
      // Use filename without extension
      const extIdx = waczURL.toLowerCase().lastIndexOf('.wacz');
      name = waczURL.slice(0, extIdx).slice(waczURL.lastIndexOf('/') + 1);
    }

    const pathname = `/archive/#/${encodeURIComponent(waczURL)}`;

    return { name, waczURL, pathname };
  }

  console.warn(`Invalid WACZ data at index ${idx}, skipping`);
}

module.exports = () => wrgConfig.archives.map(mapToPage).filter((v) => v);
