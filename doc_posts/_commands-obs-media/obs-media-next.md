---
title: "Media Next"
num: 4
redirect_from:
  - commands/54
---
Plays the next track. Can only be a VLC source.


| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS)|
|Source Name	|String	|Name of the source to skip a track. Select from dropdown or input manually. |
{:class='table table-primary'}

**OBS WebSocket 5 Request:** `TriggerMediaInputAction`

| Request Field | Type | Description |
|-------|--------|--------
| inputName | String | Name of the VLC source. |
| mediaAction | String | `OBS_WEBSOCKET_MEDIA_INPUT_ACTION_NEXT` |
{:class='table table-secondary w-auto table-hover text-break'}
