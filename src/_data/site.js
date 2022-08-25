const wrgConfig = require('../../getConfig')();
const { execSync } = require('child_process');
const { existsSync } = require('fs');
const path = require('path');

const site = { ...wrgConfig.site };

if (site.url) {
  site.url = site.url.replace(/\/+$/, '');
} else {
  const hasGithubPagesWorkflow = existsSync(
    path.resolve(
      process.env.ELEVENTY_ROOT,
      '.github/workflows/publish-gh-pages.yml'
    )
  );
  const originURL = execSync('git config --get remote.origin.url').toString();

  if (hasGithubPagesWorkflow && originURL.startsWith('git@github.com:')) {
    const [org, repo] = originURL
      .replace('git@github.com:', '')
      .slice(0, -5)
      .toLowerCase()
      .split('/');

    site.url = `https://${org}.github.io/${repo}`;

    console.log(`This website will deploy to GitHub Pages at ${site.url}`);
  }

  site.url = site.url || '';
}

module.exports = site;
