---
title: "Delete Source"
num: 15
redirect_from:
  - commands/48
---

Deletes a source.

{% include alert.html text="There's no way to revert this action." type="danger" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS)|
|Scene Name|String|Name of the scene the source resides in. Select from dropdown or input manually.
|Source Name|String|Name of the source to delete. Select from dropdown or input manually.
{:class='table table-primary'}

**OBS WebSocket 5 Request:** `RemoveSceneItem`

| Request Field | Type | Description |
|-------|--------|--------
| sceneName | String | Scene containing the source to remove. |
| sceneItemId | Number | Scene item ID resolved internally by SAMMI from the source name. |
{:class='table table-secondary w-auto table-hover text-break'}

{% include alert.html text="This removes the source from the scene. If the same source exists in multiple scenes, it is only removed from the specified scene. The underlying source is deleted only if it has no other references in any scene." type="warning" %}









