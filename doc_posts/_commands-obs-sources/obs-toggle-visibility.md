---
title: "Toggle Visibility"
num: 1.5
redirect_from:
  - commands/296
---

Toggles the visibility of a source. If the source is visible it's turn off and vice versa.

{% include alert.html text="If you want to turn a source on or off you should use Source Change Visibility command" type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS)|
|Scene Name|	String	|Scene name containing the source. Select from the menu or type manually. Leave blank for current active scene.
|Source Name|	String|	Source name. Select from the menu or type manually. 
{:class='table table-primary'}

**OBS WebSocket 5 Request:** `SetSceneItemEnabled`

SAMMI reads the current visibility state from its internal cache and then calls `SetSceneItemEnabled` with the inverted value.

| Request Field | Type | Description |
|-------|--------|--------
| sceneName | String | Name of the scene the source is in. |
| sceneItemId | Number | Scene item ID resolved internally by SAMMI from the source name. |
| sceneItemEnabled | Boolean | The toggled visibility state (opposite of current). |
{:class='table table-secondary w-auto table-hover text-break'}

{% include example_public.html src="/docs/assets/images/commands-obs-sources/obsTogVis_Ex.png" size="100" title="Toggle source visibility" pastebin="bhbqhRuy" %}  
