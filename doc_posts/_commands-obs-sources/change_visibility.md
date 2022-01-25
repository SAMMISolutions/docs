---
title: "Change Visibility"
num: 1
---

Changes the visibility of a source.

{% include alert.html text="Changing visiblity of sources residing in groups has inconsistent results. It is advised to use nested scenes instead." type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS)|
|Scene Name|	String	|Scene name containing the source. Select from the menu or type manually. Leave blank for current active scene.
|Source Name|	String|	Source name. Select from the menu or type manually. 
|Visible |	Checkbox	|Checked = visible, Unchecked  = not visible
{:class='table table-primary'}

{% include example_public.html src="https://i.imgur.com/FV2rq3Z.png" size="100" title="Toggle source visibility" pastebin="bhbqhRuy" %}  







