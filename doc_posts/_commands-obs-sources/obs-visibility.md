---
title: "Change Visibility"
num: 1
redirect_from:
  - commands/30
---

Changes the visibility of a source.

{% include alert.html text="Changing visibility of sources residing in groups has inconsistent results. It is advised to use nested scenes instead." type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS)|
|Scene Name|	String	|Scene name containing the source. Select from the menu or type manually. Leave blank for current active scene.
|Source Name|	String|	Source name. Select from the menu or type manually. 
|Visible |	Checkbox	|Checked = visible, Unchecked  = not visible
{:class='table table-primary'}

**OBS WebSocket 5 Request:** `SetSceneItemEnabled`

| Request Field | Type | Description |
|-------|--------|--------
| sceneName | String | Name of the scene the source is in. |
| sceneItemId | Number | Scene item ID resolved internally by SAMMI from the source name. |
| sceneItemEnabled | Boolean | `true` to show, `false` to hide the source. |
{:class='table table-secondary w-auto table-hover text-break'}
