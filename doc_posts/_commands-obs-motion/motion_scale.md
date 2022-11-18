---
title: "Motion: Source Scale"
num: 2
---
Gradually resizes a source from Size A to size B over a given duration.\
Due to the way the OBS source resizing work, the result might look a bit snappy sometimes.\
The way the source is resized is based on what the source's point of origin is set to in OBS.\
You can use negative values for a horizontal (mirror) or vertical source flip.\
You can use OBS Pull Source Value command to find current source's X and Y size and incorporate it into this command.

{% include alert.html text="The higher your SAMMI's FPS (max 60) the smoother the animation is going to be." type="info" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS)|
|Scene Name |	String	|Scene name containing the source. Select from the menu or type manually. Leave blank for current active scene.
|Source Name|	String|	Source name. Select from dropdown or input manually.
|X Scale Start |	Number {% include asterisk.html%}  	|Starting X size
|Y Scale Start |	Number {% include asterisk.html%} |	Starting Y size
|X Scale End |	Number {% include asterisk.html%} 	|Final X size
|Y Scale End |	Number {% include asterisk.html%} 	|Final Y size
|Duration (ms) |	Int|	Duration of the transition in milliseconds
|Smooth|	dropdown |	Type of transition.<br/> **None** = Normal, **Out** = Starts out fast and ends slow, **In** = Starts out slow and ends fast,  <br/> **In/Out**= Starts out slow, gets faster and then slows down at the end again.
{:class='table table-primary'}









