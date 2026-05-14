---
title: "Open Folder"
num: 2.41
version: 202640
redirect_from:
  - commands/372
---

Opens a folder in the operating system's file explorer.

| Box Name | Type | Description |
|-------|--------|--------|
|Folder Path|Folder Select|Folder to open. Can be an absolute path or a relative path inside the SAMMI folder.|
{:class='table table-primary'}

Examples:

| Folder Path | Result |
|---|---|
| C:/SAMMI/exports | Opens the `exports` folder in Windows Explorer |
| exports | Opens the `exports` folder relative to the SAMMI folder |
{:class='table table-secondary w-auto table-hover text-break'}

Notes:
- On Windows, SAMMI will open the folder using Explorer. On other platforms behavior may vary or be unsupported.