---
title: "Change Scale"
num: 3
redirect_from:
  - commands/32
---
Changes the size of a source.\
Use negative values for a horizontal (mirror) or vertical source flip.\
The way the source resized is based on source's positional alignment in OBS (source-Transform-Edit Transform).

{% include alert.html text="Use Source Motion: Scale command instead to change the size gradually." type="info" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS)|
|Scene Name|	String	|Scene name containing the source. Select from the menu or type manually. Leave blank for current active scene.
|Source Name|	String|	Source name. Select from the menu or type manually. 
|X Scale |Real (optional) {% include asterisk.html%}	|X Scaling to set the source to. Leave blank to not modify it. `1.0` is 100%.
|Y Scale |Real (optional) {% include asterisk.html%}|	Y Scaling to set the source at. Leave blank to not modify it. `1.0` is 100%.
{:class='table table-primary'}









