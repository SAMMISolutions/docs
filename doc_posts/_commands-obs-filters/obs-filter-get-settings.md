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

**OBS WebSocket 5 Request:** `GetSourceFilter`

| Request Field | Type | Description |
|-------|--------|--------
| sourceName | String | Name of the source the filter is on. |
| filterName | String | Name of the filter to get settings from. |
{:class='table table-secondary w-auto table-hover text-break'}

| Response Field | Type | Description |
|-------|--------|--------
| filterSettings | Object | All non-default filter settings. Saved directly to your variable. |
| filterEnabled | Boolean | Whether the filter is currently enabled. |
| filterKind | String | The filter type ID (e.g. `color_filter_v2`, `noise_suppress_filter_v2`). |
{:class='table table-secondary w-auto table-hover text-break'}

**Example saved objects by filter type:**

| Filter | Example filterSettings |
|-------|--------|
| Color Correction | `{"brightness": 0.1, "contrast": 0.2, "saturation": 0.5, "opacity": 1.0}` |
| Chroma Key | `{"key_color_type": "green", "similarity": 400, "smoothness": 80}` |
| Gain | `{"db": 5.0}` |
| Noise Suppression | `{"suppress_level": -30, "method": "rnnoise"}` |
{:class='table table-secondary w-auto table-hover text-break'}
