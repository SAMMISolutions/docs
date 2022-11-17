---
title: "Motion: Position Curve"
num: 1
---
Gradually moves a Source from point A to point B over a given duration and curves it in a circle pattern.\
You can make a source complete a half circle or have a slight curve in its transition.\
If you want to move a source from its current position, you can use the command OBS Pull Source Value Value to find current source's X and Y position and incorporate it into this command.

{% include alert.html text="The higher your SAMMI's FPS (max 60) the smoother the animation is going to be." type="info" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS)|
|Scene |	String	|Scene name containing the source. Select from the menu or type manually. Leave blank for current active scene.
|Source|	String|	Source name. Select from the menu or type manually. 
|X Start  |	Number{% include asterisk.html%}|	Starting X position
|Y Start  |	Number{% include asterisk.html%}|	Starting Y position
|X End |	Number{% include asterisk.html%}|	Final X position
|Y End |	Number{% include asterisk.html%}|	Final Y position
|Curve % |	Number{% include asterisk.html%}|	The amplitude of the curve. Can be negative or over 100. <br/> **100%** = perfect half circle, **0%** = straight line with a slower start and slower finish. <br/> **-200%** elongated half circle on the opposite side.
|Duration |	Int {% include asterisk.html%}|	Duration of the transition in milliseconds
|Smooth|	Dropdown |	Type of transition.<br/> **None** = Normal, **Out** = Starts out fast and ends slow, **In** = Starts out slow and ends fast,  <br/> **In/Out**= Starts out slow, gets faster and then slows down at the end again.
{:class='table table-primary'}









