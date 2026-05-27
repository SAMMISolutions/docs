---
title: "Source Get Settings"
num: 19
version: 202640
redirect_from:
  - commands/362
---

Gets the current settings of an OBS source and saves them as an object.

{% include alert.html text="Available in SAMMI Pro." type="info" %}

{% include async.html %}

| Box Name | Type | Description |
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to, if using multiple OBS connections.
|Source Name|String|OBS source to get settings from. Select from dropdown or input manually.
|Save Variable As|String|Variable name to save the settings object.
{:class='table table-primary'}

Example:

| Source Name | Save Variable As | Saved Object Example |
|-------|--------|--------
|Browser Source|sourceSettings|Object containing keys such as `url`, `width`, `height`, and other settings returned by OBS.
|Image Source|sourceSettings|Object containing keys such as `file` and source-specific image settings returned by OBS.
{:class='table table-secondary w-auto table-hover text-break'}

After saving the object, use `Object Get Variable` or `JSON: Get Value` after stringifying the object to read a specific setting.

{% include alert.html text="The returned object depends on the OBS source type. Browser sources, image sources, media sources, and text sources all return different setting keys." type="info" %}
