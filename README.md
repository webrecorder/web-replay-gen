# Web Replay Gen

Generate a website for viewing web archive collections with minimal setup.

[View sample site](https://webrecorder.github.io/web-replay-gen/)

Compatible with web archives in [WACZ format](https://specs.webrecorder.net/wacz/latest/).

**Features:**

- Automatic deploy to GitHub Pages
- List & autocomplete-search web archives
- Embedded web archive replay
  <!-- - Automatic sitemap generation -->
  <!-- - IPFS support -->

## Getting Started

### 1. Create new project from template

[![Use this template](https://img.shields.io/badge/Use_this_template-informational)](https://github.com/webrecorder/web-replay-gen/generate)

Clone as usual after creating your new repository from this template.

### 2. Install dependencies

Navigate to your project directory and run:

```
npm install
```

### 4. Configure `wrg-config.json`

Web Replay Gen generates a static site for you based on a list of URLs to WACZ files. Update your `wrg-config.json` file with your website title and add your URLs to the `archives` array. Your updated `wrg-config.json` may look like this:

```json
{
  "site": {
    "title": "My Web Archives"
  },
  "archives": [
    "https://example.com/test.wacz",
    "https://example.com/abc/archive.wacz"
  ]
}
```

<!-- URLs can be relative paths to WACZ files in your local filesystem or remote URLs to WACZ files hosted online. -->

### 5. Generate static website

```
npm run build
```

This will output your new site to `/_site`.

### 6. Deploy

Push to `main` to automatically deploy your site to GitHub Pages :sparkles:

To disable publishing to Pages, simply delete the `publish-gh-pages.yml` workflow.

## Documentation

### `wrg-config.json` Options

<details>
<summary>

#### `site`

Object for configuring site details.

</summary>

| Key            | Default Value    | Value Type |                                                                     |
| -------------- | ---------------- | ---------- | ------------------------------------------------------------------- |
| `site`         | `{}`             | `Object`   |                                                                     |
| `site.title`   | `"Web Archives"` | `string`   | Website title, used in browser title bar and as the primary heading |
| `site.url`     | `""`             | `string`   | Website base URL                                                    |
| `site.logoSrc` | `""`             | `string`   | Website logo, any valid `<img>` `src`                               |

</details>

<details>
<summary>

#### `replay`

Object for configuring the [embedded ReplayWeb.page](https://replayweb.page/docs/embedding) `<replay-web-page>` tag.

</summary>

| Key              | Default Value                                  | Value Type                        |                                                                                                                     |
| ---------------- | ---------------------------------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `replay`         | `{}`                                           | `Object`                          |                                                                                                                     |
| `replay.embed`   | `"replayonly"`                                 | `"replayonly"\|"full"\|"default"` | ReplayWeb.page [`embed` option](https://replayweb.page/docs/embedding#embedding-options)                            |
| `replay.baseUrl` | `"https://cdn.jsdelivr.net/npm/replaywebpage"` | `string`                          | Base URL for ReplayWeb.page scripts. `replay.version` will be ignored if a base URL is specified.                   |
| `replay.version` | `""`                                           | `string`                          | ReplayWeb.page version. Omit for the latest. [See releases](https://github.com/webrecorder/replayweb.page/releases) |

</details>

<details>
<summary>

#### `archives`

Path or JSON used to find WACZ archive files

</summary>

| Key        | Default Value | Value Type                                     |     |
| ---------- | ------------- | ---------------------------------------------- | --- |
| `archives` | `"archives"`  | `string\|string[]\|{name:string;url:string}[]` |     |

The following are all acceptable values:

- Relative path to a directory containing `.wacz` files
- Relative path to a text file with newline-separated list of remote URLs
- JSON array of plain URL strings or an object with `name` and `url`
- Relative path to a JSON file with an `archives` key where the value is a JSON array

Example of a relative path:

```js
{
  "archives": "./archive-files/"
}
```

Example JSON array:

```js
{
  "archives": [
    // Entry 1:
    "s3://my-bucket/a/archive.wacz",
    // Entry 2:
    {
      "name": "My Web Archive",
      "url": "s3://my-bucket/b/archive.wacz"
    }
  ]
}
```

The default behavior is to list WACZ files in the `archives` directory. WACZ files (`.wacz`) are ignored in git and and copied over to the output `_site` by default, retaining their directory structure.

</details>

#### Development

You can use a separate `wrg-config.local.json` during local development. To point the generator to your dev file, create `.env` with the following:

```
WRG_CONFIG_NAME=wrg-config.local.json
```

### Templates

Web Replay Gen templates are written in [Nunjucks](https://mozilla.github.io/nunjucks/templating.html). You are free to use any templating language [Eleventy supports](https://www.11ty.dev/docs/languages/), like plain HTML, markdown, or ejs.

### Web Components

Web components in the `/components` directory are not pre-rendered at build time. Use the `<is-land>` tag to render web components at runtime. See `archive.njk` for an example and refer to the [11ty/is-land](https://github.com/11ty/is-land) docs.

### Styling

#### TailwindCSS

[TailwindCSS](https://tailwindcss.com/) is enabled in all [Eleventy template](https://www.11ty.dev/docs/languages/) files. You can install a specific Tailwind version with `npm install -D tailwindcss@{version}`.

Note: Tailwind is not available in web components (`/components/*.js`) due to limitations with the shadow DOM. See [workarounds](https://github.com/tailwindlabs/tailwindcss/discussions/1935) if you'd like to access Tailwind classes in web components.

#### Customization

Tailwind supports inline-style-like customization through [arbitrary values in class names](https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values). For a more global approach to customization (for example, if you have vendor CSS file) include a `<link rel="stylesheet">` tag in your template file. Any `.css` files in `/src` will be copied to the output site folder and can be referenced in the `<link>` tag.
