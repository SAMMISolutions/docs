---
title: "File: Folder Get Files"
num: 2.3
version: 202640
redirect_from:
  - commands/360
---

Gets file paths from a folder and saves them as an array.

{% include alert.html text="Available in SAMMI Pro." type="info" %}

| Box Name | Type | Description |
|-------|--------|--------
|Folder Path|Folder Select|Folder to get files from.
|File Extensions|String|Optional comma-separated list of file extensions to include, for example `txt,png,jpg`. Leave empty to include all files.
|Save Variable As|String|Variable name to save the resulting array.
|Include Subfolders|Checkbox|If checked, SAMMI also get files from subfolders.
{:class='table table-primary'}

Examples:

| Folder Path | File Extensions | Include Subfolders | Save Variable As | Saved Value Example |
|-------|--------|--------|--------|--------
|C:/SAMMI/quotes|txt|false|files|[`C:/SAMMI/quotes/one.txt`, `C:/SAMMI/quotes/two.txt`]
|C:/SAMMI/media|png,jpg|true|images|[`C:/SAMMI/media/a.png`, `C:/SAMMI/media/sub/b.jpg`]
|exports||false|allFiles|All files directly inside the `exports` folder.
{:class='table table-secondary w-auto table-hover text-break'}

File extension examples:

| File Extensions | Description |
|-------|--------
|txt|Only `.txt` files.
|.txt, .png, .jpg|Only `.txt`, `.png`, and `.jpg` files.
| |All files.
{:class='table table-secondary w-auto table-hover text-break'}

The returned array contains full file paths. You can use `Array Get Value`, `Array Random`, or `Repeat` to work with the files afterwards.
