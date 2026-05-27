---
title: "Source Get Transform"
num: 21
version: 202640
redirect_from:
  - commands/370
---

Gets transform data for an OBS source in a scene and saves it as an object.

{% include alert.html text="Available in SAMMI Pro." type="info" %}

{% include async.html %}

| Box Name | Type | Description |
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to, if using multiple OBS connections.
|Scene Name|String|Scene the source is located in. Select from dropdown or input manually.
|Source Name|String|Source to get transform data from. Select from dropdown or input manually.
|Save Variable As|String|Variable name to save the transform object.
{:class='table table-primary'}

Example:

| Scene Name | Source Name | Save Variable As | Saved Object Example |
|-------|--------|--------|--------
|Gameplay|Webcam|webcamTransform|Object containing transform values returned by OBS.
{:class='table table-secondary w-auto table-hover text-break'}

Typical values can include:

| Key | Description |
|-------|--------
|positionX / positionY|Source position inside the scene.
|width / height|Current source size after transform.
|rotation|Source rotation.
|cropLeft / cropTop / cropRight / cropBottom|Crop values.
|sourceWidth / sourceHeight|Original source size.
{:class='table table-secondary w-auto table-hover text-break'}

The exact keys depend on what OBS returns for the selected source and OBS WebSocket version.

**OBS WebSocket 5 Request:** `GetSceneItemTransform`

| Request Field | Type | Description |
|-------|--------|--------
| sceneName | String | Scene the source is in. |
| sceneItemId | Number | Scene item ID resolved internally by SAMMI from the source name. |
{:class='table table-secondary w-auto table-hover text-break'}

| Response Field (saved to variable) | Type | Description |
|-------|--------|--------
| positionX / positionY | Number | Source position on the canvas in pixels. |
| width / height | Number | Rendered width/height after scaling. |
| scaleX / scaleY | Number | Scale multiplier (`1.0` = 100%). |
| sourceWidth / sourceHeight | Number | Original source dimensions in pixels. |
| rotation | Number | Rotation in degrees (0–360). |
| cropLeft / cropTop / cropRight / cropBottom | Number | Crop values in pixels. |
| boundsWidth / boundsHeight | Number | Bounding box dimensions if bounds are set. |
| alignment | Number | Positional alignment bitmask. |
{:class='table table-secondary w-auto table-hover text-break'}

**Example saved object:**
```json
{
  "positionX": 960,
  "positionY": 540,
  "width": 1920,
  "height": 1080,
  "scaleX": 1.0,
  "scaleY": 1.0,
  "rotation": 0,
  "cropLeft": 0,
  "cropTop": 0,
  "cropRight": 0,
  "cropBottom": 0,
  "sourceWidth": 1920,
  "sourceHeight": 1080
}
```
