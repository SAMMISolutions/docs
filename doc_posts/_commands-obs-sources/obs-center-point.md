---
title: "Change Center Point"
num: 6
redirect_from:
  - commands/75
---

Changes the positional alignment of a source.

| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS)|
|Scene Name|	String	|Scene name containing the source. Select from the menu or type manually. Leave blank for current active scene.
|Source Name|	String|	Source name. Select from the menu or type manually. 
|Type| Dropdown |Type of the alignment. Select from the dropdown.
{:class='table table-primary'}

**OBS WebSocket 5 Request:** `SetSceneItemTransform`

| Request Field | Type | Description |
|-------|--------|--------
| sceneName | String | Scene containing the source. |
| sceneItemId | Number | Scene item ID resolved internally by SAMMI from the source name. |
| sceneItemTransform | Object | `{"alignment": 5}` — a bitmask value representing the anchor point. |
{:class='table table-secondary w-auto table-hover text-break'}

| Alignment Value | Position |
|-------|--------|
| `5` | Center |
| `4` | Top Center |
| `6` | Bottom Center |
| `1` | Top Left |
| `2` | Top Right |
| `9` | Bottom Left |
| `10` | Bottom Right |
| `8` | Middle Left |
| `0` | Middle Right |
{:class='table table-secondary w-auto table-hover text-break'}
