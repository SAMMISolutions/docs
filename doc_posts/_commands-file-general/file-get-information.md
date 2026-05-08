---
title: "File: Get Information"
num: 2.4
version: 202640
redirect_from:
  - commands/361
---

Gets information about a file and saves the selected value to a variable.

{% include alert.html text="Available in SAMMI Pro." type="info" %}

| Box Name | Type | Description |
|-------|--------|--------
|File Path|File Select|File to get information from.
|Type|Dropdown|Information to retrieve from the file.
|Save Variable As|String|Variable name to save the result.
{:class='table table-primary'}

Example using `C:/SAMMI/files/example.txt`:

| Type | Save Variable As | Saved Value Example |
|-------|--------|--------
|File Name|fileName|example
|File Extension|fileExt|.txt
|Folder Path|folderPath|C:/SAMMI/files/
|File Size|fileSize|1428
|Created Date|createdDate|2026-05-08 13:42:10
|Modified Date|modifiedDate|2026-05-08 14:05:31
{:class='table table-secondary w-auto table-hover text-break'}

Returned date formats may depend on the system and the SAMMI_V2.dll helper used by the command.
