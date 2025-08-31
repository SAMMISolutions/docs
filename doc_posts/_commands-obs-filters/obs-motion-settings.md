---
title: "Motion: Filter Settings"
num: 11
redirect_from:
  - commands/42
---
Transitions specified filter settings over a set duration.

| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS)|
|Source Name | String	| Source name containing the filter. Select from dropdown or input manually.
|Filter Name	|String	| Filter name to transition the settings. Select from dropdown or input manually.
|Filter Setting| String |The string name of the setting you want to have transition. (use Check Settings to find out what string names can be used)
|Value Start |Int {% include asterisk.html%}|Starting value of the filter|
|Value End |Int {% include asterisk.html%}|Final value of the filter|
|Duration (ms) {% include asterisk.html%}|	Int|	Transition duration in milliseconds
|Smooth|	Dropdown |	Type of transition.<br/> **None** = Normal, **Out** = Starts out fast and ends slow, **In** = Starts out slow and ends fast,  <br/> **In/Out**= Starts out slow, gets faster and then slows down at the end again.
{:class='table table-primary'}









