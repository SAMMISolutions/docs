---
title: "Change Position"
num: 2
redirect_from:
  - commands/22
---

Changes the position of a source.

{% include alert.html text="Use Source Motion: Position command instead for a smooth transition." type="info" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS)|
|Scene Name|	String	|Scene name containing the source. Select from the menu or type manually. Leave blank for current active scene.
|Source Name|	String|	Source name. Select from the menu or type manually. 
|X|	Number (optional)  {% include asterisk.html%}|	X position to set the source to. Can leave blank to not modify it.
|Y |	Number (optional) {% include asterisk.html%}	|Y position to set the source to. Can leave blank to not modify it.
{:class='table table-primary'}

**OBS WebSocket 5 Request:** `SetSceneItemTransform`

| Request Field | Type | Description |
|-------|--------|--------
| sceneName | String | Scene containing the source. |
| sceneItemId | Number | Scene item ID resolved internally by SAMMI from the source name. |
| sceneItemTransform | Object | `{"positionX": 100, "positionY": 200}` — only the fields being changed are included. |
{:class='table table-secondary w-auto table-hover text-break'}

Position `0, 0` is the top-left corner of the canvas. Coordinates are in pixels based on the canvas size (e.g. `1920×1080`).









