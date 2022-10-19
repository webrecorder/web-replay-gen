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

if (typeof site.url === 'string') {
  site.url = site.url.replace(/\/+$/, '');
} else {
  const originURL = execSync('git config --get remote.origin.url').toString();

  if (
    hasGithubPagesWorkflow &&
    (originURL.startsWith('git@github.com:') ||
      originURL.startsWith('https://github.com/'))
  ) {
    const [org, repo] = originURL
      .trim()
      .slice(originURL.indexOf('github.com') + 11)
      .replace('.git', '')
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
