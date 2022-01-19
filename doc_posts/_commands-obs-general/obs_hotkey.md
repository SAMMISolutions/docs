---
title: "Trigger OBS Hotkey Name"
num: 3
---
Activates any OBS hotkey without having to manually press it.\
You can find the unique name of a hotkey in one of these two locations: 
1. For general hotkeys: `basic.ini` file in `C:/Users/USERNAME/AppData/Roaming/obs-studio/basic/profiles/YOUR_CURRENT_PROFILE` 
2. For source-specific hotkeys: `YOURSCENENAME.JSON` file in `C:/Users/USERNAME/AppData/Roaming/obs-studio/basic/scenes`   
Once you open the file, look for `[HOTKEYS]` section which should have all your unique hotkey names listed.
<br/><br/>

| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS)|
|Hotkey Name|String|	Unique name of the hotkey
{:class='table table-primary'}









