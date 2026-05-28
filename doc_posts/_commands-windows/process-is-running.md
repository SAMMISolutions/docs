---
title: "Process: Is Running"
num: 14
version: 202650
redirect_from:
  - commands/439
---

Checks whether a process with the given name is currently running and saves the result as a boolean.

{% include alert.html text="Available in SAMMI Pro." type="info" %}

| Box Name | Type | Description |
|-------|--------|--------
|Process Name|String|The executable name of the process, including the `.exe` extension (e.g. `notepad.exe`).
|Save Variable As|String|Variable name to save the result as a boolean (`true` or `false`).
{:class='table table-primary'}

The check is case-insensitive. Returns `true` if at least one instance of the process is running, `false` otherwise.

**Saved Value:**

| Value | Type | Description |
|-------|------|-------------|
|true|Boolean|The process is currently running.|
|false|Boolean|No process with that name was found.|
{:class='table table-secondary w-auto table-hover text-break'}

**Example:** Check if OBS is running by entering `obs64.exe` as the process name.
