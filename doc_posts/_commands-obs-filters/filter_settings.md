---
title: "Filter Change Settings"
num: 1
---
Changes or adds settings to a filter in a specified source.\
Requires the same formatting that is used in the OBS JSON file.\
Easy way to see your current filter's settings is to use the Check Settings button, after filling out the Source and Filter Name boxes. You will get a pop-up showing the filter's settings, excluding any still at default values.
{% include image_collapse.html w="100" name="filter_settings" src="filter_settings.png" alt="Find a Filter Setting's name" %}

| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS)|
|Source	|String	| Source name containing the filter
|Filter	|String	| Filter name to change the settings
|Settings|JSON|JSON string containing the new filter settings
{:class='table table-primary'}









