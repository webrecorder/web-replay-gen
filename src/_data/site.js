const wrgConfig = require('../../getConfig')();
const { execSync } = require('child_process');
const { existsSync } = require('fs');
const path = require('path');

const site = { ...wrgConfig.site };

const hasGithubPagesWorkflow = existsSync(
  path.resolve(
    process.env.ELEVENTY_ROOT,
    '.github/workflows/publish-gh-pages.yml'
  )
);

if (site.url) {
  site.url = site.url.replace(/\/+$/, '');
} else {
  const originURL = execSync('git config --get remote.origin.url').toString();

  console.log('originURL:', originURL);

  if (hasGithubPagesWorkflow && originURL.startsWith('git@github.com:')) {
    const [org, repo] = originURL
      .replace('git@github.com:', '')
      .slice(0, -5)
      .toLowerCase()
      .split('/');

    site.url = `https://${org}.github.io/${repo}`;
  }

  site.url = site.url || '';
}

if (hasGithubPagesWorkflow) {
  console.log(`This website will deploy to GitHub Pages (${site.url})`);
}

module.exports = site;
