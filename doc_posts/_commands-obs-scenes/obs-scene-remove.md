---
title: "Remove Scene Transition"
num: 3
redirect_from:
  - commands/69
---

Removes temporarily changed transition of a scene (from executing Change Scene Transition command).

| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS)|
|Scene Name|	String	|Scene name that has a temporary transition added to it. Select from dropdown or input manually.|
{:class='table table-primary'}

**OBS WebSocket 5 Request:** `SetSceneSceneTransitionOverride`

Sends `SetSceneSceneTransitionOverride` with an empty `transitionName` to remove the override and restore the global transition for the specified scene.









