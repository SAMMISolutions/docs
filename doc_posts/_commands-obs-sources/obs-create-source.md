---
title: "Create Source"
num: 14
redirect_from:
  - commands/47
---

Creates a new source and adds it to a scene.\
You can pass a JSON string containing the new source's settings as well.\
The source will be added at the top of the list. To reorder it, use a Send OBS Request command.

{% include alert.html text="If you want to add the newly created source into a group, you must do so manually." type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS)|
|Source Name|String|Name of the new OBS source
|Source Type|String|Type of the new source. Use the dropdown menu. If you do not see the desired source type (for example for some plugin sources), you should look at the OBS JSON file to figure out the correct value.
|Scene Name|String|Name of the scene to add the source to. Select from dropdown or input manually.|
|Settings |	JSON String |	Source settings. Same format which is used in Source Change Settings command.|
|Visible|	Checkbox	|Whether the source should be set visible upon creation. Checked = visible, Unchecked = not visible|
{:class='table table-primary'}

**OBS WebSocket 5 Request:** `CreateInput`

| Request Field | Type | Description |
|-------|--------|--------
| sceneName | String | Scene to add the source to. |
| inputName | String | Name of the new source. |
| inputKind | String | Source type ID (e.g. `browser_source`, `image_source`, `text_gdiplus_v2`). |
| inputSettings | Object (optional) | JSON object with source-specific settings (same keys as used in `SetInputSettings`). |
| sceneItemEnabled | Boolean (optional) | Whether the source is visible after creation. |
{:class='table table-secondary w-auto table-hover text-break'}

| Response Field | Type | Description |
|-------|--------|--------
| inputUuid | String | The UUID of the newly created source. |
| sceneItemId | Number | The scene item ID of the source in the specified scene. |
{:class='table table-secondary w-auto table-hover text-break'}

Common `inputKind` values: `browser_source`, `image_source`, `ffmpeg_source`, `vlc_source`, `text_gdiplus_v2`, `text_ft2_source_v2`, `color_source_v3`, `wasapi_input_capture`, `wasapi_output_capture`, `monitor_capture`, `window_capture`, `game_capture`, `dshow_input`.









