---
title: "Window: Hide"
num: 7
version: 202650
redirect_from:
  - commands/432
---

Hides a window from the screen and taskbar without closing it.

{% include alert.html text="Available in SAMMI Pro." type="info" %}

| Box Name | Type | Description |
|-------|--------|--------
|Window (Title or Handle)|String|The window title (e.g. `Notepad`) or a window handle variable returned by **Window: Find**.
{:class='table table-primary'}

The application continues to run in the background. Use **Window: Show** to make it visible again. The window will not appear in the taskbar while hidden.

You can pass either a partial window title as a string, or a numeric window handle retrieved from the **Window: Find** command. Using a handle is recommended since the window cannot be located by title once hidden.
