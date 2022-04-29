---
title: "Change Scale"
num: 3
---
Changes the size of a source.\
Use negative values for a horizontal (mirror) or vertical source flip.\
The way the source resized is based on source's positional alignment in OBS (source-Transform-Edit Transform).

The scale factor is relative to a percentage. For example, setting a source to a factor of 2, means it will scale up by 200%.

{% include alert.html text="Use Source Motion: Scale command instead to change the size gradually." type="info" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS)|
|Scene Name|	String	|Scene name containing the source. Select from the menu or type manually. Leave blank for current active scene.
|Source Name|	String|	Source name. Select from the menu or type manually. 
|X Scale {% include asterisk.html%}	|Real (optional)	|X Scaling to set the source to. Leave blank to not modify it. `1.0` is 100%.
|Y Scale {% include asterisk.html%}	|Real (optional)|	Y Scaling to set the source at. Leave blank to not modify it. `1.0` is 100%.
{:class='table table-primary'}









