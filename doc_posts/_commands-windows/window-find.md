---
title: "Window: Find"
num: 1
version: 202650
redirect_from:
  - commands/426
---

Searches for a window by title or process name and saves its window handle (HWND) into a variable.

{% include alert.html text="Available in SAMMI Pro." type="info" %}

| Box Name | Type | Description |
|-------|--------|--------
|Search By|Dropdown|Whether to search by **By Title** (window title) or **By Process Name** (executable name, e.g. `notepad.exe`).
|Input|String|The title or process name to search for. Partial matches are supported for title searches.
|Save Variable As|String|Variable name to save the window handle (HWND) as a number.
{:class='table table-primary'}

The returned handle is a number (HWND) that uniquely identifies the window. Pass this handle to other Window commands instead of a title for more reliable targeting — especially useful when multiple windows have similar titles.

If no matching window is found, the saved value will be `0`.

**Window Handle vs. Title:**

| Input Type | Example | When to Use |
|-------|--------|--------
|Window Title|`Notepad`|Simple one-off commands. May be ambiguous if multiple windows share the title.|
|Window Handle|Variable from Window: Find|Reliable targeting, especially across multiple operations on the same window.|
{:class='table table-secondary w-auto table-hover text-break'}

**Example flow:**

1. Use **Window: Find** with "By Title" and `"Notepad"` → saves handle to `myHandle`
2. Use **Window: Minimize** with `/$myHandle$/` → minimizes that exact window
