---
title: "Change Scene Transition"
num: 2
redirect_from:
  - commands/68
---

Temporarily changes the transition of a scene. Lasts until you use Remove Scene Transition command.

| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS)|
|Scene Name|	String	|Transition scene name. Select from dropdown or input manually.
|Transition Name	|String	|Name of the transition
|Duration (ms)	|Int {% include asterisk.html%}|	Duration of the transition in milliseconds
{:class='table table-primary'}

**OBS WebSocket 5 Request:** `SetSceneSceneTransitionOverride`

| Request Field | Type | Description |
|-------|--------|--------
| sceneName | String | The name of the scene to set the transition for. |
| transitionName | String | Name of the transition to use for this scene. |
| transitionDuration | Number | Duration of the transition in milliseconds. |
{:class='table table-secondary w-auto table-hover text-break'}









