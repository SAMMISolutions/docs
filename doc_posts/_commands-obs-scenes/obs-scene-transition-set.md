---
title: "Set Transition"
num: 4
redirect_from:
  - commands/70
---

Change the current transition.

| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS)|
|Transition|	String|	Desired transition name to change to
{:class='table table-primary'}

**OBS WebSocket 5 Request:** `SetCurrentSceneTransition`

| Request Field | Type | Description |
|-------|--------|--------
| transitionName | String | Name of the transition to activate (e.g. `Fade`, `Cut`, `Stinger`). |
{:class='table table-secondary w-auto table-hover text-break'}









