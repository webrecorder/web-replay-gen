# Example: Runtime-Only Archives

Point `runtimeOnlyArchives` to a JSON file relative to `_site` to skip archive pre-processing and pre-rednering. The specified JSON file must have an `archives` array of `{ url }`. For example, given the following folder structure:

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
  "runtimeOnlyArchives": "./data_sources/archives.json"
}
```

Now, `data_sources/archives.json` will be refreshed every time someone visits your website.

Since `archives.json` will be loaded as-is and not processed by the generator, the only valid `archives` value is an array of objects with `name` and `url`. For example, the following is valid:

```json
{
  "archives": [
    {
      "name": "ReplayWeb.Page Example",
      "url": "https://replayweb.page/docs/assets/example.wacz"
    },
    {
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

To make sharing archives easier, you can first generate a `__generated__/archives.json` file through the normal build-time workflow.

Steps:

1. Specify unprocessed archive data as `archives` in `wrg-config.json`.

```json
{
  "archives": "./tmp/data_sources/archives.json"
}
```

2. Build `_site/__generated__/archives.json`.

```
npm run build
```

3. Replace `archives` in `wrg-config.json` with `runtimeOnlyArchives` pointing to the generated file.

```diff
{
-  "archives": "./tmp/data_sources/archives.json"
+  "runtimeOnlyArchives": "./__generated__/archives.json"
}
```

You can rename the `__generated__` so that it doesn't get accidentally replaced when rebuilding.
