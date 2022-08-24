# Web Replay Gen

Generate a website for viewing web archive collections with minimal setup.

Compatible with web archives in [WACZ format](https://specs.webrecorder.net/wacz/latest/).

**Generated website features:**

- Index page listing web archives
- Page for replaying individual web archives
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
    "title": "My Web Archives",
    "url": "https://example.com"
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

## Documentation

### `wrg-config.json` Options

<details>
  <summary><code>site</code></summary>

#### Object for configuring site details.

| Key            | Default Value    | Value Type |                                                                     |
| -------------- | ---------------- | ---------- | ------------------------------------------------------------------- |
| `site`         | `{}`             | `Object`   |                                                                     |
| `site.title`   | `"Web Archives"` | `string`   | Website title, used in browser title bar and as the primary heading |
| `site.url`     | `""`             | `string`   | Website base URL                                                    |
| `site.logoSrc` | `""`             | `string`   | Website logo, any valid `<img>` `src`                               |

</details>

<details>
  <summary><code>replay</code></summary>

#### Object for configuring the [embedded ReplayWeb.page](https://replayweb.page/docs/embedding) `<replay-web-page>` tag.

| Key              | Default Value  | Value Type                        |                                                                                                                     |
| ---------------- | -------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `replay`         | `{}`           | `Object`                          |                                                                                                                     |
| `replay.version` | `"1.6.4"`      | `string`                          | ReplayWeb.page version. Omit for the latest. [See releases](https://github.com/webrecorder/replayweb.page/releases) |
| `replay.embed`   | `"replayonly"` | `"replayonly"\|"full"\|"default"` | ReplayWeb.page [`embed` option](https://replayweb.page/docs/embedding#embedding-options)                            |

</details>

<details>
  <summary><code>archives</code></summary>

#### Array of WACZ data.

| Key        | Default Value | Value Type           |     |
| ---------- | ------------- | -------------------- | --- |
| `archives` | `[]`          | `string[]\|Object[]` |     |

WACZ data can be a plain URL or an object with `name` and `url`. For example, both entries are valid:

```json
{
  "archives": [
    "s3://my-bucket/a/archive.wacz",
    {
      "name": "My Web Archive",
      "url": "s3://my-bucket/b/archive.wacz"
    }
  ]
}
```

</details>

#### Development

You can use a separate `wrg-config.local.json` during local development. To point the generator to your dev file, create `.env` with the following:

```
WRG_CONFIG_NAME=wrg-config.local.json
```
