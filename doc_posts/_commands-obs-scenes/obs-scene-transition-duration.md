---
title: "Set Transition Duration"
num: 6
redirect_from:
  - commands/71
---

Changes the duration of a specified transition.

| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS)|
|Transition|	String|	Name of the transition|
|Duration (ms)|Number	{% include asterisk.html%}|New duration in milliseconds|
{:class='table table-primary'}

**OBS WebSocket 5 Request:** `SetCurrentSceneTransitionDuration`

| Request Field | Type | Description |
|-------|--------|--------
| transitionDuration | Number | Duration of the transition in milliseconds (e.g. `300`). |
{:class='table table-secondary w-auto table-hover text-break'}









