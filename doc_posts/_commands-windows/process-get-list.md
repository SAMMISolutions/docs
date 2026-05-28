---
title: "Process: Get List"
num: 16
version: 202650
redirect_from:
  - commands/441
---

Returns an array of all currently running processes and saves it into a variable.

{% include alert.html text="Available in SAMMI Pro." type="info" %}

| Box Name | Type | Description |
|-------|--------|--------
|Save Variable As|String|Variable name to save the process list array.
{:class='table table-primary'}

The saved value is an array of objects. Each object contains information about one running process. Use `Array Get Variable` or `Object Get Variable` to read individual fields.

**Each array entry contains:**

| Variable Name | Type | Description |
|-------|--------|--------
|name|String|The executable name of the process (e.g. `notepad.exe`).
|pid|Number|The numeric process ID (PID).
{:class='table table-secondary w-auto table-hover text-break'}

**Example SAMMI Response:**
```json
[
  { "name": "notepad.exe", "pid": 1234 },
  { "name": "obs64.exe", "pid": 5678 }
]
```
