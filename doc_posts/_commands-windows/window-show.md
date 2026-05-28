---
title: "Window: Show"
num: 8
version: 202650
redirect_from:
  - commands/433
---

Makes a previously hidden window visible again.

{% include alert.html text="Available in SAMMI Pro." type="info" %}

| Box Name | Type | Description |
|-------|--------|--------
|Window (Title or Handle)|String|The window title or a window handle variable returned by **Window: Find**.
{:class='table table-primary'}

Restores the window to its normal state after it was hidden with **Window: Hide**. Use a window handle stored before hiding, since hidden windows cannot be found by title.
