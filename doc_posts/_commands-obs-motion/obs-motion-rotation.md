---
title: "Motion: Source Rotation"
num: 3
redirect_from:
  - commands/41
---
Gradually changes the rotation of a source over a set duration.\
The center point of the rotation is based on the Positional Alignment option (right click on the source in OBS-Transform-Edit Transform).\
You can use OBS Pull Source Value command to get the current rotation of a source and incorporate it in this command.

| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS)|
|Scene Name |	String	|Scene name containing the source. Select from the menu or type manually. Leave blank for current active scene.
|Source Name|	String|	Source name. Select from dropdown or input manually.
|Rotation Start |	Number {% include asterisk.html%}|	Starting rotation in degrees. 0-360
|Rotation End |	Number {% include asterisk.html%}|	Final rotation in degrees. 0-360
|Duration (ms) |	Number {% include asterisk.html%}|	Duration of the transition in milliseconds
|Smooth|	dropdown |	Type of transition.<br/> **None** = Normal, **Out** = Starts out fast and ends slow, **In** = Starts out slow and ends fast,  <br/> **In/Out**= Starts out slow, gets faster and then slows down at the end again.
{:class='table table-primary'}

**OBS WebSocket 5 Request:** `SetSceneItemTransform` (called repeatedly each SAMMI frame)

Sends `{"rotation": degrees}` as `sceneItemTransform` on every frame until the duration is complete.









