---
title: "Filter Change Visibility"
num: 2
redirect_from:
  - commands/29
---
Changes visibility of a filter in a given source.\

{% include alert.html text="Changing filter visibility on sources inside groups is very inconsistent. It's recommended to use nested scenes instead." type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS)|
|Source	Name|String	| Source name containing the filter. Select from dropdown or input manually.
|Filter	Name|String	| Filter name to change the visibility. Select from dropdown or input manually.
|Visible|checkbox| checked = visible, unchecked = not visible
{:class='table table-primary'}

**OBS WebSocket 5 Request:** `SetSourceFilterEnabled`

| Request Field | Type | Description |
|-------|--------|--------
| sourceName | String | Name of the source the filter is applied to. |
| filterName | String | Name of the filter to enable or disable. |
| filterEnabled | Boolean | `true` to enable (show), `false` to disable (hide) the filter. |
{:class='table table-secondary w-auto table-hover text-break'}









