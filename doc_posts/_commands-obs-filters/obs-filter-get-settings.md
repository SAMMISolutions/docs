---
title: "Filter Get Settings"
num: 4
version: 202640
redirect_from:
  - commands/363
---

Gets the current settings of an OBS filter and saves them as an object.

{% include alert.html text="Available in SAMMI Pro." type="info" %}

{% include async.html %}

| Box Name | Type | Description |
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to, if using multiple OBS connections.
|Source Name|String|Source the filter belongs to. Select from dropdown or input manually.
|Filter Name|String|Filter to get settings from. Select from dropdown or input manually.
|Save Variable As|String|Variable name to save the filter settings object.
{:class='table table-primary'}

Example:

| Source Name | Filter Name | Save Variable As | Saved Object Example |
|-------|--------|--------|--------
|Webcam|Color Correction|filterSettings|Object containing filter settings such as brightness, contrast, opacity, or other values returned by OBS.
|Microphone|Noise Suppression|filterSettings|Object containing the settings returned by OBS for that audio filter.
{:class='table table-secondary w-auto table-hover text-break'}

This is useful for reading current filter values before changing them, creating backups, or debugging filter settings.

{% include alert.html text="The returned object depends on the filter type and only contains settings returned by OBS." type="info" %}
