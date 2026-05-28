---
title: "Window: Get Info"
num: 11
version: 202650
redirect_from:
  - commands/436
---

Retrieves the title, position, and size of a window and saves them as an object.

{% include alert.html text="Available in SAMMI Pro." type="info" %}

| Box Name | Type | Description |
|-------|--------|--------
|Window (Title or Handle)|String|The window title (e.g. `Notepad`) or a window handle variable returned by **Window: Find**.
|Save Variable As|String|Variable name to save the window info object.
{:class='table table-primary'}

Use `Object Get Variable` to read individual fields from the returned object.

**Saved Payload:**

| Variable Name | Type | Description |
|-------|--------|--------
|title|String|The full title of the window.
|x|Number|The X position of the window's top-left corner in pixels.
|y|Number|The Y position of the window's top-left corner in pixels.
|width|Number|The width of the window in pixels.
|height|Number|The height of the window in pixels.
{:class='table table-secondary w-auto table-hover text-break'}

**Example SAMMI Response Object:**
```json
{
  "title": "Untitled - Notepad",
  "x": 100,
  "y": 200,
  "width": 800,
  "height": 600
}
```
