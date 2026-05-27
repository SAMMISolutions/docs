---
title: "Filter Toggle Visibility"
num: 3
redirect_from:
  - commands/297
---
Toggles the visibility of a filter. If the filter is visible it’s turn off and vice versa.

{% include alert.html text="If you want to turn a filter on or off you should use Filter Change Visibility command" type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS)|
|Source	Name|String	| Source name containing the filter. Select from dropdown or input manually.
|Filter	Name|String	| Filter name to change the visibility. Select from dropdown or input manually.
{:class='table table-primary'}

**OBS WebSocket 5 Request:** `SetSourceFilterEnabled`

SAMMI reads the current filter state from its internal cache and calls `SetSourceFilterEnabled` with the inverted value.

| Request Field | Type | Description |
|-------|--------|--------
| sourceName | String | Name of the source the filter is applied to. |
| filterName | String | Name of the filter to toggle. |
| filterEnabled | Boolean | The toggled state (opposite of the current visibility). |
{:class='table table-secondary w-auto table-hover text-break'}
