---
title: "Filter Change Settings"
num: 1
---
Changes or adds settings to a filter in a specified source.\
Requires the same formatting that is used in the OBS JSON file.\
Easy way to see your current filter's settings is to use a Custom Packet command: `{"request-type":"GetSourceFilterInfo","sourceName":"YOURSOURCENAME","filterName":"YOURFILTERNAME","message-id":"6666"}`. Execute it and you will get back a JSON string of the filter's settings. Paste it into a document and extract the particular value you want to use.
{% include image_collapse.html w="100" name="filter_settings" src="filter_settings.png" alt="Find a filter settings value via Custom Packet and use it in the command" %}
Use [JSON string validator](https://jsonlint.com/) if you want to make sure your formatting is correct.

| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS)|
|Source	|String	| Source name containing the filter
|Filter	|String	| Filter name to change the settings
|Settings|JSON|JSON string containing the new filter settings
{:class='table table-primary'}









