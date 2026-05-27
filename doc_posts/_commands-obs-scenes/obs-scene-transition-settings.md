---
title: "Set Transition Settings"
num: 5
redirect_from:
  - commands/72
---

Changes the current settings of a transition. Same as going to your OBS and clicking on 'Properties' in your Scene Transitions.\
Example: `{"transition_match": "Fade","switch_percentage": 30,"easing_match": 2,"position_in": 10}`

You can retrieve your current transition settings by executing a Send OBS Request command with the following JSON (OBSws 5): 
```json
{
  "op": 6,
  "d": {
    "requestType": "GetCurrentSceneTransition"
  }
}
```

| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS)|
|Transition Name|	String|	Name of the transition to modify|
|Settings (JSON) |JSON	|JSON string containing the transition settings|
{:class='table table-primary'}

**OBS WebSocket 5 Request:** `SetCurrentSceneTransitionSettings`

| Request Field | Type | Description |
|-------|--------|--------
| transitionSettings | Object | Object containing the transition settings to apply. |
| overlay | Boolean (optional) | If `true`, merges settings with existing ones. If `false`, replaces all settings. Defaults to `true`. |
{:class='table table-secondary w-auto table-hover text-break'}

The available keys in `transitionSettings` depend on the selected transition type. Use `Send OBS Request` with `GetCurrentSceneTransition` to view current settings.









