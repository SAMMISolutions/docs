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

| Save Variable As | Saved Value Example | Usage Example |
|-------|--------|--------
|randomColor|16711935|Use with button color commands, OBS color values, or other commands that expect a SAMMI color value.
{:class='table table-secondary w-auto table-hover text-break'}

The value is randomized each time the command runs.

{% include alert.html text="The returned value can be used with SAMMI commands that expect a color value." type="info" %}
