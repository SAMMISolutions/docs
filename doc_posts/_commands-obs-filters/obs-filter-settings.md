---
title: "Filter Change Settings"
num: 1
redirect_from:
  - commands/37
---
Changes or adds settings to a filter in a specified source.\
Requires the same formatting that is used in the OBS JSON file.\
Easy way to see your current filter's settings is to use the **Check Settings button** - after filling out the Source and Filter Name boxe, you will get a pop-up showing the filter's settings, excluding any still at default values.

{% include image_collapse.html w="100" name="filter_settings" src="filter_settings.png" alt="Find a Filter Setting's name" %}

| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS)|
|Source	Name|String	| Source name containing the filter. Select from dropdown or input manually.
|Filter	Name|String	| Filter name to change the settings. Select from dropdown or input manually.
|Settings|JSON String|The filter settings to be included. Formatted as a [JSON String](https://www.w3schools.com/js/js_json_syntax.asp). Must be enclosed in `{}`.
{:class='table table-primary'}









