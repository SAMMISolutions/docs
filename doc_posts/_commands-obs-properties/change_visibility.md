---
title: "Source Change Visibility"
num: 1
---

Changes the visibility of a source.

{% include alert.html text="Changing visiblity of sources residing in groups has inconsistent results. It is advised to use nested scenes instead." type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|scene-name | String (optional)	|Scene name containing the source. Leave blank for current active scene.
|item	|String	| Source name
|visible |	boolean	| `True` for visible, `False` for not visible or `Toggle` to invert current visibility status <br/>  Toggle should be used only if it's a single button command.
{:class='table table-primary'}









