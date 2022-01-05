---
title: "Motion: Filter Settings"
num: 11
---
Transitions specified filter settings over a set duration.\

| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS)|
|Source Name |	String	Source name containing the filter
|Filter Name	|String	| Filter name to transition the settings
|Settings|String|Settings to transition.
|Value Start {% include asterisk.html%}|Int|Starting value of the filter|
|Value End {% include asterisk.html%}|Int|Final value of the filter|
|Smooth|	dropdown |	Type of transition.<br/> **None** = Normal, **Out** = Starts out fast and ends slow, **In** = Starts out slow and ends fast,  <br/> **In/Out**= Starts out slow, gets faster and then slows down at the end again.
|Duration(ms) {% include asterisk.html%}|	Int|	Transition duration in milliseconds
{:class='table table-primary'}









