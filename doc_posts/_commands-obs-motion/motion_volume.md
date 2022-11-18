---
title: "Motion: Source Volume"
num: 4
---
Gradually changes the volume of a given source from volume A to B over a duration.\
You can use OBS Pull Source Value command to get the current volume of a source and incorporate it in this command.


| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS)|
|Source Name	|String	|Source name to change the volume. Select from dropdown or input manually.
|Volume Start 	|Number {% include asterisk.html%}|Starting volume percentage. 0-1 range.
|Volume End |	Number {% include asterisk.html%}|	Final volume percentage. 0-1 range.
|Duration (ms) |	Int {% include asterisk.html%} |	Transition duration in milliseconds
|Smooth|	dropdown |	Type of transition.<br/> **None** = Normal, **Out** = Starts out fast and ends slow, **In** = Starts out slow and ends fast,  <br/> **In/Out**= Starts out slow, gets faster and then slows down at the end again.
|Use dB| Checkbox | Whether you wish to use decibels for your values instead of percentage
{:class='table table-primary'}









