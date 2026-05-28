---
title: "Window: Set Always On Top"
num: 12
version: 202650
redirect_from:
  - commands/437
---

Enables, disables, or toggles the always-on-top state of a window.

{% include alert.html text="Available in SAMMI Pro." type="info" %}

| Box Name | Type | Description |
|-------|--------|--------
|Window (Title or Handle)|String|The window title (e.g. `Notepad`) or a window handle variable returned by **Window: Find**.
|Action|Dropdown|**Enable** to pin on top, **Disable** to unpin, or **Toggle** to switch the current state.
{:class='table table-primary'}

When set to always-on-top, the window stays visible above all other windows, including maximized ones. This is equivalent to right-clicking a window's title bar in some apps and choosing "Always on Top".
