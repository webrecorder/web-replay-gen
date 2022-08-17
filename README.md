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

Web Replay Gen generates a static site for you based on a list of URLs to WACZ files. Update your `wrg-config.json` file with your website title and add your URLs to the `wacz_urls` array. Your updated `wrg-config.json` may look like this:

```json
{
  "title": "My Web Archives",
  "wacz_urls": [
    "https://example.com/test.wacz",
    "https://example.com/abc/archive.wacz",
    "./local-path/to/my_wacz.wacz"
  ]
}
```

<!-- URLs can be relative paths to WACZ files in your local filesystem or remote URLs to WACZ files hosted online. -->

### 5. Generate static website

```
npm run build
```

This will output your new site to `/_site`.
