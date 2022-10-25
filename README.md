# Web Replay Gen

Generate a website for viewing web archives.

:globe_with_meridians: [Live demo](https://webrecorder.github.io/web-replay-gen/)

## Features

- Compatible with web archives in [WACZ format](https://specs.webrecorder.net/wacz/latest/) (WARC also supported)
- Automatic deploy to GitHub Pages
- List & autocomplete-search web archives
- Embedded web archive replay
- Load web archives from any `https://` or `s3://` URLs.
- IPFS Support Coming soon

---

Jump to:

- [Quick Start](#quick-start)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [Dev Server](#dev-server)
- [Templates](#templates)
- [Web Components](#web-components)
- [Styling](#styling)

---

## Quick Start

### 1. Create new project from template

[![Use this template](https://img.shields.io/badge/Use_this_template-informational)](https://github.com/webrecorder/web-replay-gen/generate)

Clone as usual after creating your new repository from this template.

### 2. Install dependencies

Navigate to your project directory and run:

```shell
npm install
```

### 3. Update `wrg-config.json`

Add your website title and web archive URL:

```diff
{
  "site": {
    "title": "My Web Archives"
  },
  "archives": [
    "https://replayweb.page/docs/assets/example.wacz",
    "s3://webrecorder-builds/warcs/netpreserve-twitter.warc"
  ]
}
```

> See [Configuration](#configuration) for all options.

### 4. Preview website

To access your site from <http://localhost:8080>, run:

```shell
npm run serve
```

### 5. Deploy to GitHub Pages

Push to `main` to automatically deploy your site to GitHub Pages. :sparkles:

> You can also opt-out of Pages to use another hosting provider. See [Deployment](#deployment) for more information.

---

## Configuration

Configure options in `wrg-config.json`.

<details>
<summary>

#### `site`

Object for configuring site details.

</summary>

| Key            | Default Value    | Value Type |                                                                     |
| -------------- | ---------------- | ---------- | ------------------------------------------------------------------- |
| `site`         | `{}`             | `Object`   |                                                                     |
| `site.title`   | `"Web Archives"` | `string`   | Website title, used in browser title bar and as the primary heading |
| `site.logoSrc` | `""`             | `string`   | Website logo, any valid `<img>` `src`                               |

</details>

<details>
<summary>

#### `replay`

Object for configuring the [embedded ReplayWeb.page](https://replayweb.page/docs/embedding) `<replay-web-page>` tag.

</summary>

| Key                 | Default Value  | Value Type                        |                                                                                               |
| ------------------- | -------------- | --------------------------------- | --------------------------------------------------------------------------------------------- |
| `replay`            | `{}`           | `Object`                          |                                                                                               |
| `replay.embed`      | `"replayonly"` | `"replayonly"\|"full"\|"default"` | ReplayWeb.page [`embed` option](https://replayweb.page/docs/embedding#embedding-options)      |
| `replay.replayBase` | `"./replay/"`  | `"./replay/"\|string"`            | ReplayWeb.page [`replayBase` option](https://replayweb.page/docs/embedding#embedding-options) |

</details>

<details>
<summary>

#### `archives`

Configure location of web archive files.

</summary>

| Key        | Default Value | Value Type                                        |
| ---------- | ------------- | ------------------------------------------------- |
| `archives` | `[]`          | `undefined\|string[]\|{name:string;url:string}[]` |

Option values can be a JSON array of plain URL strings or an object with `name` and `url`

Example:

```js
{
  "archives": [
    // Plain URL string:
    "https://replayweb.page/docs/assets/example.wacz"

    // Plain URL string to S3 bucket
    "s3://my-bucket/a/archive.wacz",

    // Plain URL string to a file relative to output `_site`
    "./public-data/",

    // Object with name and URL:
    {
      "name": "My Web Archive",
      "url": "s3://my-bucket/b/archive.wacz"
    }
  ]
}
```

Setting `archivesPath` will override this option.

</details>

### Build-time options

The following options can only be set at build-time (i.e. when you run `npm run build`.) Updates to options in your output `_site/wrg-config.json` file will have no effect.

<details>
<summary>

#### `replayBaseURL` [_Build-time Only_]

Base URL for ReplayWeb.page scripts.

</summary>

| Key             | Default Value                                  | Value Type |                                     |
| --------------- | ---------------------------------------------- | ---------- | ----------------------------------- |
| `replayBaseURL` | `"https://cdn.jsdelivr.net/npm/replaywebpage"` | `string`   | Base URL for ReplayWeb.page scripts |

</details>

<details>
<summary>

#### `archivesPath` [_Build-time Only_]

Path to local web archive files.

</summary>

| Key            | Default Value | Value Type |
| -------------- | ------------- | ---------- |
| `archivesPath` | `undefined`   | `string`   |

Paths should be relative to your project root (i.e. where you execute `npm run build`.) Option values can be:

- Relative path to directory containing `.wacz` files
- Relative path to `.txt` file with newline-separated list of remote URLs
- Relative path to JSON file with an `archives` key where the value is a JSON array

Examples:

```js
{
  "archivesPath": "./wacz-files/"
}
```

```js
{
  "archivesPath": "./source_data/archives.json"
}
```

Take precedence over the `archives` array.

</details>

## Deployment

### Github Pages

By default, Web Replay Gen will deploy to Pages on every push to the `main` branch, as configured in [this GitHub Workflow](.github/workflows/publish-gh-pages.yml). To change the deployment workflow (e.g. to change the release branch) update the [`publish-gh-pages.yml`](.github/workflows/publish-gh-pages.yml) workflow file.

#### Local web archive support

Due to GitHub's [file size limit](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github#file-size-limits) and lack of support for [git LFS in Pages](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-git-large-file-storage), you may run into an issue with deploying large web archive files. To resolve the issue, you can create a separate workflow for uploading web archive files elsewhere (e.g. to an S3 bucket) and configure your site with the remote URLs. Alternatively, you can [self-host](#self-hosting).

#### Opt-Out

To prevent deployment to Pages, either disable the workflow [through the GitHub UI](https://docs.github.com/en/actions/managing-workflow-runs/disabling-and-enabling-a-workflow) or simply delete the workflow file (`publish-gh-pages.yml`.)

### Self-hosting

First, [remove the Pages workflow](#opt-out). Run the build script to output your site into a local directory:

```
npm run build
```

This will output a production-ready build to `/_site`. Transfer the contents of `/_site` to your host.

## Dev Server

Run the dev server with `npm run serve` to serve files from `/_site`.

Saving changes to `src` will automatically reload the page. See [11ty Browsersync docs](https://www.11ty.dev/docs/server-browsersync/) to customize the dev server.

### Local configuration

Create and configure options in `wrg-config.local.json` to specify different site options during local development.

To use `wrg-local.local.json`, run the following:

```
echo 'WRG_CONFIG_NAME=wrg-config.local.json' > .env
```

To disable, comment out the line in `.env`:

```
# WRG_CONFIG_NAME=wrg-config.local.json
```

## Templates

Web Replay Gen templates are written in [Nunjucks](https://mozilla.github.io/nunjucks/templating.html). You are free to use any templating language [Eleventy supports](https://www.11ty.dev/docs/languages/), like plain HTML, markdown, or ejs.

## Web Components & client-side JavaScript

JS files in `/js` will be copied as-is to `_site`. To include JS files in templates, import as ES modules and use [`module-shim`](https://github.com/guybedford/es-module-shims). For example, to render a Web Component called `my-component`:

```html
<!-- my-template.njk -->
<my-component></my-component>

<script type="module-shim">
  import('./js/my-component.js');
</script>
```

## Styling

### TailwindCSS

[TailwindCSS](https://tailwindcss.com/) is enabled in all [Eleventy template](https://www.11ty.dev/docs/languages/) files. You can install a specific Tailwind version with `npm install -D tailwindcss@{version}`.

Note: Tailwind is not available in web components (`/components/*.js`) due to limitations with the shadow DOM. See [workarounds](https://github.com/tailwindlabs/tailwindcss/discussions/1935) if you'd like to access Tailwind classes in web components.

### Customization

Tailwind supports inline-style-like customization through [arbitrary values in class names](https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values). For a more global approach to customization (for example, if you have vendor CSS file) include a `<link rel="stylesheet">` tag in your template file. Any `.css` files in `/src` will be copied to the output site folder and can be referenced in the `<link>` tag.
