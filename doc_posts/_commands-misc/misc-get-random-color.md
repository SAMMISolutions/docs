---
title: "Get Random Color"
num: 14
version: 202640
redirect_from:
  - commands/368
---

Generates a random color value and saves it to a variable.

{% include alert.html text="Available in SAMMI Pro." type="info" %}

| Box Name | Type | Description |
|-------|--------|--------
|Save Variable As|String|Variable name to save the random color value.
{:class='table table-primary'}

Example:

| Save Variable As | Saved Value Example | Notes |
|-------|--------|--------
|randomColor|`FF0080`|A 6-character uppercase hex string in `RRGGBB` format, e.g. `FF0080` for a pink color.
{:class='table table-secondary w-auto table-hover text-break'}

The value is randomized each time the command runs. The string contains no `#` prefix.

{% include alert.html text="The returned value is a hex string such as `FF0080`. Convert it or prepend `#` if needed for use in contexts that require CSS-style colors." type="info" %}
