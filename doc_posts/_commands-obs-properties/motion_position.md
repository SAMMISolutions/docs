---
title: "Motion: Source Position"
num: 6
---
Moves a source from point A to point B over a given duration.\
If you want to move a source from its current position, you can use the command OBS Pull Source Value to find the current source's X and Y position and incorporate it into this command.

{% include alert.html text="The higher your Receiver's FPS (max 60) the smoother the animation is going to be." type="info" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS)|
|Scene |	String	|Scene name containing the source. Select from the menu or type manually. Leave blank for current active scene.
|Source|	String|	Source name. Select from the menu or type manually. 
|X Start  {% include asterisk.html%}|	Number|	Starting X position
|Y Start  {% include asterisk.html%}|	Number|	Starting Y position
|X End {% include asterisk.html%}|	Number|	Final X position
|Y End {% include asterisk.html%}|	Number|	Final Y position
|Dur.(MS) {% include asterisk.html%}|	Int|	Duration of the transition in milliseconds
|Smooth|	dropdown |	Type of transition.<br/> **None** = Normal, **Out** = Starts out fast and ends slow, **In** = Starts out slow and ends fast,  <br/> **In/Out**= Starts out slow, gets faster and then slows down at the end again.
{:class='table table-primary'}









