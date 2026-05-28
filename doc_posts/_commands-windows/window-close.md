---
title: "Window: Close"
num: 5
version: 202650
redirect_from:
  - commands/430
---

Sends a close request to a window, equivalent to clicking the X button.

{% include alert.html text="Available in SAMMI Pro." type="info" %}

| Box Name | Type | Description |
|-------|--------|--------
|Window (Title or Handle)|String|The window title (e.g. `Notepad`) or a window handle variable returned by **Window: Find**.
{:class='table table-primary'}

This sends a `WM_CLOSE` message to the window. Most applications will prompt to save unsaved work before closing. To force-terminate a process without a close dialog, use **Process: Kill** instead.

You can pass either a partial window title as a string, or a numeric window handle retrieved from the **Window: Find** command.
