---
title: "Toggle Mute"
num: 12
redirect_from:
  - commands/45
---

Inverts the mute status of a specified source. If the source was muted, it will be now unmuted and if the source was unmuted, it will be now muted.

{% include alert.html text="OBS gives no indication if a whole scene is muted by this command." type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS)|
| Source Name | String | Source name to be muted or unmuted. Can be a scene name as well. Select from dropdown or input manually. |
{:class='table table-primary'}

**OBS WebSocket 5 Request:** `ToggleInputMute`

| Request Field | Type | Description |
|-------|--------|--------
| inputName | String | Name of the source to toggle mute for. |
{:class='table table-secondary w-auto table-hover text-break'}

| Response Field | Type | Description |
|-------|--------|--------
| inputMuted | Boolean | The new mute state after toggling (`true` = muted, `false` = unmuted). |
{:class='table table-secondary w-auto table-hover text-break'}









