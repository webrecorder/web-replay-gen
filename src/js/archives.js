/** Archives config */
import config from '../wrg-runtime-config.json';

class Archive {
  constructor({ name, url = '' }) {
    this.url = url;
    this.name =
      name || url.slice(url.lastIndexOf('/') + 1, url.lastIndexOf('.'));
  }
}

/**
 * @param {string|Object} data - URL string or { name: string; url: string }
 * @param {number} [idx] - Item index in array
 * @returns {Archive}
 */
function makeArchive(data, idx) {
  let name, url;

  if (typeof data === 'string') {
    url = data;
  } else if (
    typeof data === 'object' &&
    data.constructor === Object &&
    data.name &&
    data.url
  ) {
    name = data.name;
    url = data.url;
  }

  if (url) {
    return new Archive({ name, url });
  }

  console.error(`Invalid WACZ data at index ${idx || 'unknown'}, skipping`);
}

function getArchives() {
  return config.archives.map(makeArchive);
}

export default getArchives();
