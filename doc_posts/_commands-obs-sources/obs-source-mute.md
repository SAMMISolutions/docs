---
title: "Mute"
num: 11
redirect_from:
  - commands/44
---

Mutes the sound of a source.

{% include alert.html text="OBS gives no indication if a whole scene is muted by this command." type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS)|
| Source  Name| String | Source name to be muted. Can be a scene name as well. Select from dropdown or input manually.  |
|Mute |	Checkbox	| Checked = mute, Unchecked = unmute
{:class='table table-primary'}

**OBS WebSocket 5 Request:** `SetInputMute`

| Request Field | Type | Description |
|-------|--------|--------
| inputName | String | Name of the source to mute or unmute. |
| inputMuted | Boolean | `true` to mute, `false` to unmute. |
{:class='table table-secondary w-auto table-hover text-break'}









