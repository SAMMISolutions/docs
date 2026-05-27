---
title: "Change Volume"
num: 5
redirect_from:
  - commands/31
---

Changes the volume of a source.

{% include alert.html text="Use Source Motion: Volume command instead to change the volume gradually." type="info" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS)|
|Source Name|	String|	Source name. Select from the menu or type manually. 
|Volume |	Number {% include asterisk.html%}|	Percentage to set the volume to, between 0 and 1.
|Use dB| Checkbox | Whether you wish to use decibels for your values instead of percentage
{:class='table table-primary'}

**OBS WebSocket 5 Request:** `SetInputVolume`

| Request Field | Type | Description |
|-------|--------|--------
| inputName | String | Name of the source to change volume for. |
| inputVolumeMul | Number | Volume in multiplier (0.0–1.0, where 1.0 = 100%). Used when **Use dB** is unchecked. |
| inputVolumeDb | Number | Volume in decibels (−100 to +26 dB). Used when **Use dB** is checked. |
{:class='table table-secondary w-auto table-hover text-break'}

Only one of `inputVolumeMul` or `inputVolumeDb` is sent per request depending on the **Use dB** checkbox.









