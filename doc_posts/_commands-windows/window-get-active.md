---
title: "Window: Get Active"
num: 13
version: 202650
redirect_from:
  - commands/438
---

Returns the title of the currently focused (active) window.

{% include alert.html text="Available in SAMMI Pro." type="info" %}

| Box Name | Type | Description |
|-------|--------|--------
|Save Variable As|String|Variable name to save the active window title.
{:class='table table-primary'}

The saved value is the full window title string of whatever window currently has keyboard focus. Returns an empty string if no window is focused.

Useful for checking which application the user is currently in, or for branching logic based on what is active on screen.
