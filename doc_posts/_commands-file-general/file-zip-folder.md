---
title: "File: Zip Folder"
num: 2.5
version: 202650
redirect_from:
  - commands/449
---

Compresses a folder (including its subfolders) into a single `.zip` archive.

| Box Name | Type | Description |
|-------|--------|--------|
|Folder Name|Folder Select|The folder you want to compress. Accepts both an absolute path and a relative path inside the SAMMI folder. Supports dynamic paths via variables.|
|ZIP Name|File Select|Destination path of the archive to create. Accepts an absolute or relative path. If you omit the `.zip` extension, SAMMI adds it automatically.|
|Pause Button Execution|Checkbox|When checked, pauses the current button's execution until the archive has finished being created. Leave unchecked to let the button keep running while the folder is zipped.|
{:class='table table-primary'}

Examples:

| Folder Name | ZIP Name | Result |
|---|---|---|
| c:/SAMMI/exports | c:/SAMMI/backups/exports | Zips the `exports` folder into `c:/SAMMI/backups/exports.zip` |
| exports | backups/exports.zip | Zips the `exports` folder (inside the SAMMI folder) into `backups/exports.zip` inside the SAMMI folder |
{:class='table table-secondary w-auto table-hover text-break'}

Notes:
- Relative paths are resolved inside the SAMMI installation folder. All paths are converted to lowercase and backslashes (`\`) are converted to forward slashes (`/`).
- If either box is left empty, the command does nothing.
- If the folder cannot be zipped (for example, the source folder does not exist or the target location is not writable), SAMMI shows an alert and the archive is not created.
