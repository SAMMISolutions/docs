---
title: "Window: Set Position"
num: 9
version: 202650
redirect_from:
  - commands/434
---

Moves a window to the specified X/Y position on screen.

{% include alert.html text="Available in SAMMI Pro." type="info" %}

| Box Name | Type | Description |
|-------|--------|--------
|Window (Title or Handle)|String|The window title (e.g. `Notepad`) or a window handle variable returned by **Window: Find**.
|X|Number|The horizontal position in pixels from the left edge of the primary monitor.
|Y|Number|The vertical position in pixels from the top edge of the primary monitor.
{:class='table table-primary'}

Position `0, 0` is the top-left corner of the primary monitor. Negative values or values beyond the screen resolution move the window off-screen or onto secondary monitors.

The window size is not changed, only its position.
