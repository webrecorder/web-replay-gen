# Example: Run-time-Only Archives

When skipping archive pre-processing and pre-rendering with `runtimeOnlyArchives`, the `archives` option must point to a JSON file relative to `_site`, with an `.archives` array of `{ name, url }`. For example, given the following folder structure:

```
.
├── _site
│   ├── index.html
│   └── data_sources
│       └── archives.json
└── wrg-config.json
```

Your `wrg-config.json` should look like this:

```json
{
  "archives": "./data_sources/archives.json"
}
```

When your website loads in the browser, it will load `archives.json` from `data_sources`.

Since `archives.json` will be loaded as-is and not processed by the generator, the only valid `archives` value is an array of objects with `name` and `url`. For example, the following is valid:

```json
{
  "archives": [
    {
      "name": "ReplayWeb.Page Example",
      "url": "https://replayweb.page/docs/assets/example.wacz"
    },
    {
      "name": "Netpreserve Twitter",
      "url": "s3://webrecorder-builds/warcs/netpreserve-twitter.warc"
    }
  ]
}
```

The following is not:

```json
{
  "archives": [
    "https://replayweb.page/docs/assets/example.wacz",
    "s3://webrecorder-builds/warcs/netpreserve-twitter.warc"
  ]
}
```
