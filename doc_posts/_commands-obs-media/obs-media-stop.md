---
title: "Media Stop"
num: 3
redirect_from:
  - commands/53
---
Stop a media or VLC source.


| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS)|
|Source Name	|String	|Name of the source to stop. Select from dropdown or input manually. |
{:class='table table-primary'}

**OBS WebSocket 5 Request:** `TriggerMediaInputAction`

| Request Field | Type | Description |
|-------|--------|--------
| inputName | String | Name of the media source. |
| mediaAction | String | `OBS_WEBSOCKET_MEDIA_INPUT_ACTION_STOP` |
{:class='table table-secondary w-auto table-hover text-break'}
