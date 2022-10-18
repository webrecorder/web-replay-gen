# Example: Runtime-Only Archives

Point `runtimeOnlyArchives` to a JSON file relative to `_site` to skip archive pre-processing and pre-rendering. The specified JSON file must have an `archives` array of `{ url }`. For example, given the following folder structure:

```
.
├── _site
│   ├── custom_data_source
│   │   └── archives.json
│   ├── index.html
│   └── wrg-runtime-config.json
└── wrg-config.json
```

Your `wrg-config.json` should look like this:

```json
{
  "runtimeOnlyArchives": "./custom_data_source/archives.json"
}
```

Now, visitors to your website will see up-to-date data from `custom_data_source/archives.json`.

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

To make sharing and updating archives easier, you can generate a formatted `wrg-archives.json` file to use as your runtime archives JSON.

Steps:

1. Specify unprocessed archive data as `archives` in your project root `wrg-config.json`.

```json
{
  "archives": "./tmp/my-archives.json"
}
```

2. Generate `wrg-archives.json` in `_site`.

```
npm run build:archives-json
```

3. Replace `archives` in project root `wrg-config.json` with `runtimeOnlyArchives` pointing to the generated file in `_site`.

```diff
{
-  "archives": "./tmp/my-archives.json"
+  "runtimeOnlyArchives": "./wrg-archives.json"
}
```

4. Update and deploy `_site/wrg-archives.json` without rebuilding your entire website.
