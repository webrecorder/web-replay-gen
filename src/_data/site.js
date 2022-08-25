const wrgConfig = require('../../getConfig')();

const site = { ...wrgConfig.site };

site.url = (site.url || '').replace(/\/+$/, '');

module.exports = site;
