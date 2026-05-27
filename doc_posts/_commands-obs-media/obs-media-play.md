---
title: "Media Resume/Pause"
num: 1
redirect_from:
  - commands/51
---
Play (resume) or pause a media or VLC source.


| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS)|
|Source Name|	String|	Name of the source to play or pause. Select from dropdown or input manually. |
| pause	|Checkbox |	checked = pause, unchecked = resume |
{:class='table table-primary'}

**OBS WebSocket 5 Request:** `TriggerMediaInputAction`

| Request Field | Type | Description |
|-------|--------|--------
| inputName | String | Name of the media source. |
| mediaAction | String | `OBS_WEBSOCKET_MEDIA_INPUT_ACTION_PAUSE` to pause, `OBS_WEBSOCKET_MEDIA_INPUT_ACTION_PLAY` to resume. |
{:class='table table-secondary w-auto table-hover text-break'}
