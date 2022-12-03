---
title: "Trigger OBS Hotkey Sequence"
num: 4
---
Executes hotkey routine.\
Does not actually perform the key presses, it simply activates any hotkey action you've set. 

{% include alert.html text="If your hotkey in OBS is set to <b>ctrl+A</b>, setting <b>OBS_KEY_A</b> and the <b>Ctrl</b> checkbox will trigger it." type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS)|
|Key ID	|String|	Main key ID. It must be the OBS name for it, such as OBS_KEY_A. <br/> All OBS hotkeys can be found in [OBS Studio's documentation](https://github.com/obsproject/obs-studio/blob/master/libobs/obs-hotkeys.h).
|Ctrl|	Checkbox	|Whether to include Ctrl key
|Alt|	Checkbox|	Whether to include Alt key
|Shift|	Checkbox	|Whether to include Shift key
{:class='table table-primary'}









