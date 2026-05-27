---
title: "Change Cropping"
num: 7
redirect_from:
  - commands/144
---

Changes the crop settings of a source.

{% include alert.html text="Use <a href='/docs2/commands/obs-motion#motionchangecropping'>Motion: Change Cropping</a> command instead to change the cropping gradually." type="info" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS)|
|Scene Name|	String	|Scene name containing the source. Select from the menu or type manually. Leave blank for current active scene.
|Source Name|	String|	Source name. Select from the menu or type manually. 
|Left|Number {% include asterisk.html%}|Left crop settings.
|Top|Number {% include asterisk.html%}|Top crop settings.
|Right|Number {% include asterisk.html%}|Right crop settings.
|Bottom|Number {% include asterisk.html%}|Bottom crop settings.
{:class='table table-primary'}

**OBS WebSocket 5 Request:** `SetSceneItemTransform`

| Request Field | Type | Description |
|-------|--------|--------
| sceneName | String | Scene containing the source. |
| sceneItemId | Number | Scene item ID resolved internally by SAMMI from the source name. |
| sceneItemTransform | Object | `{"cropLeft": 50, "cropTop": 0, "cropRight": 50, "cropBottom": 0}` — crop values in pixels. |
{:class='table table-secondary w-auto table-hover text-break'}









