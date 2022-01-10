---
title: "Motion: Source Volume"
num: 10
---
Changes the volume of a given source from volume A to B over a duration.\
You can use OBS Pull Source Value command to get the current volume of a source and incorporate it in this command.


| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS)|
|source	|String	|Source name to change the volume
|Volume Start 	|Number {% include asterisk.html%}|Starting volume percentage. 0-100 range.
|Volume End |	Number {% include asterisk.html%}|	Final volume percentage. 0-100 range.
|Duration(ms) |	Int {% include asterisk.html%} |	Transition duration in milliseconds
{:class='table table-primary'}









