import config from '../wrg-config.json';

class Site {
  constructor({ title, logoSrc = '' }) {
    this.title = title || 'Web Archives';
    this.logoSrc = logoSrc;
  }
}

class Archive {
  constructor({ name, url = '', description = '' }) {
    this.url = url;
    this.description = description;
    this.name =
      name || url.slice(url.lastIndexOf('/') + 1, url.lastIndexOf('.'));
  }
}

class ReplayOptions {
  constructor({ embed, replayBase }) {
    this.embed = embed || 'embed';
    this.replayBase = replayBase || '../replay/';
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
    return new Archive({ name, url, description: data.description });
  }

  console.error(`Invalid WACZ data at index ${idx || 'unknown'}, skipping`);
}

class WRGConfig {
  constructor({ site, replay, archives }) {
    this.site = new Site(site || {});
    this.replay = new ReplayOptions(replay || {});
    this.archives = (archives || []).map(makeArchive);
  }
}

export default new WRGConfig(config);
