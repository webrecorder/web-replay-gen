# Web Replay Gen

Generate a website for viewing web archive collections with minimal setup.

Compatible with web archives in [WACZ format](https://specs.webrecorder.net/wacz/latest/).

**Generated website features:**

- Index page listing web archives with search by filename
- Page for replaying individual web archives
- Automatic sitemap generation
<!-- - IPFS support -->

## Getting Started

### 1. Create new project

Start your project by creating a copy of this repo.

First, clone `web-replay-gen`:

```
git clone --depth=1 --branch=main https://github.com/webrecorder/web-replay-gen.git my-web-archive-site
```

Then, navigate to your new project directory and delete the `web-replay-gen` git history:

```
cd my-web-archive-site
rm -rf ./.git
```

### 2. Install dependencies

From your project directory, run:

```
npm install
```
