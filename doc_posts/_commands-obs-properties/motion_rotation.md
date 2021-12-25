---
title: "Source Motion: Rotation"
num: 9
---
Changes the rotation of a source over a set duration.\
The center point of the rotation is based on the Positional Alignment option (right click on the source in OBS-Transform-Edit Transform).\
You can use Math: Pull Source Value command to get the current rotation of a source and incorporate it in this command.

| Box Name | Type | Description | 
|-------|--------|--------
| scene	|String	|Scene name including the source.
| item	|String	|Source name to change the rotation.
| Start| Rotation {% include asterisk.html%}|	Real	Starting Rotation. 0-360
| Final| Rotation {% include asterisk.html%}|	Real	Final Rotation. 0-360
|Dur.(MS) {% include asterisk.html%}|	Int|	|Duration of the transition in milliseconds
|Smooth|	dropdown |	Type of transition.<br/> **None** = Normal, **Out** = Starts out fast and ends slow, **In** = Starts out slow and ends fast,  <br/> **In/Out**= Starts out slow, gets faster and then slows down at the end again.
{:class='table table-primary'}









