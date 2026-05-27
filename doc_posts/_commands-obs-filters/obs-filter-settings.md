---
title: "Filter Change Settings"
num: 1
redirect_from:
  - commands/37
---
Changes or adds settings to a filter in a specified source.\
Requires the same formatting that is used in the OBS JSON file.\
An easy way to see your current filter's settings is to use the **Check Settings button** - after filling out the Source and Filter Name boxes, you will get a pop-up showing the filter's settings, excluding any still at default values.

{% include image_collapse.html w="100" name="filter_settings" src="filter_settings.png" alt="Find a Filter Setting's name" %}

| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS)|
|Source	Name|String	| Source name containing the filter. Select from dropdown or input manually.
|Filter	Name|String	| Filter name to change the settings. Select from dropdown or input manually.
|Settings|JSON String|The filter settings to be included. Formatted as a [JSON String](https://www.w3schools.com/js/js_json_syntax.asp). Must be enclosed in `{}`.
{:class='table table-primary'}

**OBS WebSocket 5 Request:** `SetSourceFilterSettings`

| Request Field | Type | Description |
|-------|--------|--------
| sourceName | String | Name of the source the filter belongs to. |
| filterName | String | Name of the filter to change settings for. |
| filterSettings | Object | JSON object with the settings to apply. |
| overlay | Boolean (optional) | `true` (default) = merge with existing settings, `false` = replace all settings. |
{:class='table table-secondary w-auto table-hover text-break'}

**Common filter setting keys by filter type:**

| Filter | Setting Keys | Example |
|-------|--------|--------|
| Color Correction | `brightness`, `contrast`, `saturation`, `hue_shift`, `opacity` | `{"brightness": 0.1, "opacity": 0.8}` |
| Color Key | `key_color_type`, `similarity`, `smoothness` | `{"similarity": 80}` |
| Chroma Key | `key_color_type`, `similarity`, `smoothness`, `spill` | `{"similarity": 400}` |
| Noise Suppression | `suppress_level` | `{"suppress_level": -30}` |
| Gain | `db` | `{"db": 5.0}` |
| Render Delay | `delay_ms` | `{"delay_ms": 500}` |
{:class='table table-secondary w-auto table-responsive table-hover'}

Use the **Check Settings** button in SAMMI or `Send OBS Request` with `GetSourceFilter` to inspect the current filter settings for your specific filter.









