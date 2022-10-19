Web Archive files (`.wacz`, `.warc`) in this directory will be copied to the generated site. Web Archive files are ignored in git (see [.gitignore](../.gitignore).)

To list all files in this directory in your website, set the following option in `wrg-config.json`:

```json
{
  "archivesPath": "archives"
}
```
