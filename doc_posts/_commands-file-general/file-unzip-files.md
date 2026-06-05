---
title: "File: Unzip Files"
num: 2.6
version: 202650
redirect_from:
  - commands/450
---

Extracts the contents of a `.zip` archive into a target folder.

| Box Name | Type | Description |
|-------|--------|--------|
|File Name|File Select|The `.zip` archive you want to extract. Accepts both an absolute path and a relative path inside the SAMMI folder. If you omit the `.zip` extension, SAMMI adds it automatically. Supports dynamic paths via variables.|
|Target Folder|Folder Select|The folder the archive is extracted into. Accepts an absolute or relative path. The folder is created if it does not already exist.|
|Pause Button Execution|Checkbox|When checked, pauses the current button's execution until the archive has finished being extracted. Leave unchecked to let the button keep running while the files are extracted.|
{:class='table table-primary'}

Examples:

| File Name | Target Folder | Result |
|---|---|---|
| c:/SAMMI/backups/exports.zip | c:/SAMMI/exports | Extracts `exports.zip` into the `c:/SAMMI/exports` folder |
| backups/exports | restored | Extracts `backups/exports.zip` (inside the SAMMI folder) into the `restored` folder inside the SAMMI folder |
{:class='table table-secondary w-auto table-hover text-break'}

Notes:
- Relative paths are resolved inside the SAMMI installation folder. All paths are converted to lowercase and backslashes (`\`) are converted to forward slashes (`/`).
- If either box is left empty, the command does nothing.
- If the archive cannot be extracted (for example, the file does not exist or is not a valid ZIP archive), SAMMI shows an alert and nothing is extracted.
