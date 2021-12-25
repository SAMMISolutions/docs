---
title: "Source Change Scale"
num: 3
---
Changes the size of a source.\
Use negative values for a horizontal (mirror) or vertical source flip.\
The way the source resized is based on source's positional alignment in OBS (source-Transform-Edit Transform).

{% include alert.html text="Use Source Motion: Scale command instead to change the size gradually." type="info" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|scene-name	|String (optional)|	Scene name containing the source. Leave blank for current active scene.
|item	|String |	Source name to change size.
|X Scale {% include asterisk.html%}	|Real (optional)	|X Scaling to set the source to. Leave blank to not modify it. `1.0` is 100%.
|Y Scale {% include asterisk.html%}	|Real (optional)|	Y Scaling to set the source at. Leave blank to not modify it. `1.0` is 100%.
{:class='table table-primary'}









