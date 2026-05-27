---
title: "Change Studio Mode"
num: 2
redirect_from:
  - commands/21
---

Enables or disables studio mode in your OBS. 


| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS)|
| Enable | Checkbox | Checked = enable studio mode, unchecked = disable studio mode |
{:class='table table-primary' }

**OBS WebSocket 5 Request:** `SetStudioModeEnabled`

| Request Field | Type | Description |
|-------|--------|--------
| studioModeEnabled | Boolean | `true` to enable Studio Mode, `false` to disable it. |
{:class='table table-secondary w-auto table-hover text-break'}