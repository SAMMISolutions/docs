---
title: "Process: Kill"
num: 15
version: 202650
redirect_from:
  - commands/440
---

Forcefully terminates a process by name or PID.

{% include alert.html text="Available in SAMMI Pro." type="info" %}

| Box Name | Type | Description |
|-------|--------|--------
|Process Name or PID|String|The executable name (e.g. `notepad.exe`) or the numeric process ID (PID).
{:class='table table-primary'}

This immediately and forcefully kills the process — there is no save prompt. Use **Window: Close** if you want to give the application a chance to save before exiting.

If multiple processes share the same name, all matching instances will be terminated. Use a PID for precise targeting.

**Example:** Provide `notepad.exe` to kill all Notepad windows, or a specific PID like `1234` to target only one instance.
