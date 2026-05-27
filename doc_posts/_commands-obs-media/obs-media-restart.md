---
title: "Media Restart"
num: 2
redirect_from:
  - commands/52
---
Restart a media or VLC source.


| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS)|
|Source Name	|String	|Name of the source to restart. Select from dropdown or input manually. |
{:class='table table-primary'}

**OBS WebSocket 5 Request:** `TriggerMediaInputAction`

| Request Field | Type | Description |
|-------|--------|--------
| inputName | String | Name of the media source. |
| mediaAction | String | `OBS_WEBSOCKET_MEDIA_INPUT_ACTION_RESTART` |
{:class='table table-secondary w-auto table-hover text-break'}
