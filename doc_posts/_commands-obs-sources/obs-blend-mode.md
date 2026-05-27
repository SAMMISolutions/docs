---
title: "Change Blend Mode"
num: 17
redirect_from:
  - commands/233
---

Changes the blend mode of a source.

{% include alert.html text="Only available for OBS Websocket 5" type="info" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS)|
|Scene Name|	String	|Scene name containing the source. Select from the menu or type manually. Leave blank for current active scene.
|Source Name|	String|	Source name. Select from the menu or type manually. 
|Blend Mode| Dropdown | Select the blend mode for the source: Normal, Additive, Subtract, Screen, Multiply, Lighten or Darken.
{:class='table table-primary'}

**OBS WebSocket 5 Request:** `SetSceneItemBlendMode`

| Request Field | Type | Description |
|-------|--------|--------
| sceneName | String | Scene containing the source. |
| sceneItemId | Number | Scene item ID resolved internally by SAMMI from the source name. |
| sceneItemBlendMode | String | Blend mode to apply. |
{:class='table table-secondary w-auto table-hover text-break'}

| Blend Mode Value | Description |
|-------|--------|
| `OBS_BLEND_NORMAL` | Normal compositing (default). |
| `OBS_BLEND_ADDITIVE` | Adds the pixel values together. |
| `OBS_BLEND_SUBTRACT` | Subtracts pixel values. |
| `OBS_BLEND_SCREEN` | Screen blend — brightens. |
| `OBS_BLEND_MULTIPLY` | Multiplies pixel values — darkens. |
| `OBS_BLEND_LIGHTEN` | Keeps the lighter of two values. |
| `OBS_BLEND_DARKEN` | Keeps the darker of two values. |
{:class='table table-secondary w-auto table-hover text-break'}









