---
title: "Window: Maximize"
num: 3
version: 202650
redirect_from:
  - commands/428
---

Maximizes a window to fill the screen.

{% include alert.html text="Available in SAMMI Pro." type="info" %}

| Box Name | Type | Description |
|-------|--------|--------
|Window (Title or Handle)|String|The window title (e.g. `Notepad`) or a window handle variable returned by **Window: Find**.
{:class='table table-primary'}

You can pass either a partial window title as a string, or a numeric window handle retrieved from the **Window: Find** command. Using a handle is more reliable when multiple windows share the same title.
