---
title: "OBS Get Scene List"
num: 8
version: 202640
redirect_from:
  - commands/364
---

Gets the current OBS scene list and saves the scene names as an array.

{% include alert.html text="Available in SAMMI Pro." type="info" %}

{% include async.html %}

| Box Name | Type | Description |
|-------|--------|--------
|OBS|Dropdown|OBS to get the scene list from, if using multiple OBS connections.
|Save Variable As|String|Variable name to save the scene name array.
{:class='table table-primary'}

Example:

| OBS Scenes | Save Variable As | Saved Array |
|-------|--------|--------
|Starting, Gameplay, BRB, Ending|sceneList|[`Starting`, `Gameplay`, `BRB`, `Ending`]
{:class='table table-secondary w-auto table-hover text-break'}

You can combine this command with `Array Get Size`, `Array Get Value`, or `Repeat` to loop through all OBS scenes.

**OBS WebSocket 5 Request:** `GetSceneList`

| Response Field | Type | Description |
|-------|--------|--------
| currentProgramSceneName | String | The name of the currently active scene. |
| currentPreviewSceneName | String | The name of the current preview scene (Studio Mode). |
| scenes | Array | Array of scene objects, each with `sceneName` and `sceneIndex`. |
{:class='table table-secondary w-auto table-hover text-break'}

SAMMI extracts the `sceneName` from each scene object and returns them as a plain string array.
