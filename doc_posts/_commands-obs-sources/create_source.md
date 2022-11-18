---
title: "Create Source"
num: 14
---

Creates a new source and adds it to a scene.\
You can pass a JSON string containing the new source's settings as well.\
The source will be added at the top of the list. To reorder it, use a Send OBS Request command.

{% include alert.html text="If you want to add the newly created source into a group, you must do so manually." type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS)|
|Source Name|String|Name of the new OBS source
|Source Type|String|Type of the new source. Use the dropdown menu. If you do not see the desired source type (for example for some plugin sources), you should look at the OBS JSON file to figure out the correct value.
|Scene Name|String|Name of the scene to add the source to. Select from dropdown or input manually.|
|Settings |	JSON String |	Source settings. Same format which is used in Source Change Settings command.|
|Visible|	Checkbox	|Whether the source should be set visible upon creation. Checked = visible, Unchecked = not visible|
{:class='table table-primary'}









