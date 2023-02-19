---
title: "Pull Source Value"
num: 0
redirect_from:
  - commands/143
---

Pulls the last known value of a source. Will return 0 if the source doesn't exist.\
Very useful command to use together with Motion commands. For example, you can pull the current X and Y position of a source and then use [Motion: Source Position]({{ "commands/obs-motion#motionsourceposition" | relative_url }}) to smoothly move it across the screen.

{% include alert.html text="This command might not work correctly if the source is inside a group. It's recommended to use nested scenes instead." type="danger" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|Scene Name|	String|	Scene name containing the source. Select from dropdown or input manually.
|Source Name|	String|	Source name to pull the value. Select from dropdown or input manually.
|Save Variable As	|String|	Variable name to save the pulled value into
|Pull Value|Dropdown menu| Type of the value you wish to pull
{:class='table table-primary'}


| Pull Type | Description | Possible values | 
|-------|--------|--------
|Visible | Returns boolean value whether the source is visible or not | 0 for not visible and 1 for visible
|X/Y position  | Returns X or Y position of the source | For example 500 
|X/Y scale | Returns scale of the source that affects its width (X) and height (Y) |  1 = 100% scale
|Default X/Y Size| Returns default size of the source | For example 800
|Current X/Y Size | Returns current size of the source (applies scaling, crop etc.)) | For example 600
|Crop Left/Top/Right/Bottom | Returns current crop values of the source | For example 50
|Rotation | Returns the degree of rotation of the source | 0-360
|Volume | Returns the volume of the source in percentage | 0-1
|Volume dB| Returns the volume of the source in deceibels | For example 50
|Muted | Returns boolean value whether the source is muted or not | 0 for unmuted and 1 for muted
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }

