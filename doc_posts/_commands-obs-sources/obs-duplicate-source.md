---
title: "Duplicate Source"
num: 16
redirect_from:
  - commands/49
  - commands/232
---

Duplicates a source, copying all transform and crop info. 

{% include alert.html text="Make sure you select the correct Duplicate Source command for your OBSws version" type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS)|
|Scene Name|String|Name of the scene where the source resides. Select from dropdown or input manually.|
|Source Name|String|Name of the source to duplicate. Select from dropdown or input manually.
|Insertion Scene Name|String|Name of the scene to add the duplicated source to. Select from dropdown or input manually.
{:class='table table-primary'}

**OBS WebSocket 5 Request:** `DuplicateSceneItem`

| Request Field | Type | Description |
|-------|--------|--------
| sceneName | String | Scene the original source is in. |
| sceneItemId | Number | Scene item ID resolved internally by SAMMI from the source name. |
| destinationSceneName | String (optional) | Scene to place the duplicated source in. Defaults to the same scene if not set. |
{:class='table table-secondary w-auto table-hover text-break'}

| Response Field | Type | Description |
|-------|--------|--------
| sceneItemId | Number | The scene item ID of the newly duplicated source. |
{:class='table table-secondary w-auto table-hover text-break'}









