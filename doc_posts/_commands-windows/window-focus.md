---
title: "Window: Focus"
num: 6
version: 202650
redirect_from:
  - commands/431
---

Brings a window to the foreground and gives it keyboard focus.

{% include alert.html text="Available in SAMMI Pro." type="info" %}

| Box Name | Type | Description |
|-------|--------|--------
|Window (Title or Handle)|String|The window title (e.g. `Notepad`) or a window handle variable returned by **Window: Find**.
{:class='table table-primary'}

If the window is minimized, it will be restored before being focused. Useful for ensuring a specific application is in the foreground before sending keyboard input via **Keyboard Simulate Press**.

You can pass either a partial window title as a string, or a numeric window handle retrieved from the **Window: Find** command.
