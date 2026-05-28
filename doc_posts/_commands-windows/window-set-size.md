---
title: "Window: Set Size"
num: 10
version: 202650
redirect_from:
  - commands/435
---

Resizes a window to the specified width and height in pixels.

{% include alert.html text="Available in SAMMI Pro." type="info" %}

| Box Name | Type | Description |
|-------|--------|--------
|Window (Title or Handle)|String|The window title (e.g. `Notepad`) or a window handle variable returned by **Window: Find**.
|Width|Number|The new width of the window in pixels.
|Height|Number|The new height of the window in pixels.
{:class='table table-primary'}

The window position is not changed, only its size. Some applications enforce minimum or maximum sizes and may not honor all values.
