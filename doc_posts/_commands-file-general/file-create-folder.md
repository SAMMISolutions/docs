---
title: "File: Create Folder"
num: 2.2
version: 202640
redirect_from:
  - commands/359
---

Creates a folder at the specified path.

| Box Name | Type | Description |
|-------|--------|--------
|Folder Path|String|Folder path to create. Accepts both relative and absolute paths.
{:class='table table-primary'}

Examples:

| Folder Path | Result |
|-------|--------
|exports|Creates an `exports` folder inside SAMMI's working directory.
|exports/screenshots|Creates a nested `screenshots` folder inside `exports`.
|C:/SAMMI/Backups|Creates or reuses the absolute folder path `C:/SAMMI/Backups`.
{:class='table table-secondary w-auto table-hover text-break'}

{% include alert.html text="If the folder already exists, the command will not create a duplicate folder." type="info" %}
