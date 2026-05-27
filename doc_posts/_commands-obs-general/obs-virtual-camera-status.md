---
title: "Get Virtual Camera Status"
num: 6
version: 202640
redirect_from:
  - commands/418
---

Gets the current active state of the OBS Virtual Camera and saves it as a boolean.

{% include alert.html text="Only available for OBS Websocket 5" type="info" %}

| Box Name | Type | Description |
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to, if using multiple OBS connections.
|Save Variable As|String|Variable name to save the status.
{:class='table table-primary'}

Use this to check whether the Virtual Camera is currently running before toggling it, or to update a button's appearance based on the camera state.

**Saved Value:**

| Value | Type | Description |
|-------|------|-------------|
|true|Boolean|Virtual Camera is currently active.|
|false|Boolean|Virtual Camera is stopped.|
|undefined|Undefined|Saved if OBS is not connected or ws5 is not in use.|
{:class='table table-secondary w-auto table-hover text-break'}

**OBS WebSocket 5 Request:** `GetVirtualCamStatus`

No request fields.

| Response Field | Type | Description |
|-------|--------|--------
| outputActive | Boolean | Whether the Virtual Camera is currently active. Saved directly to your variable. |
{:class='table table-secondary w-auto table-hover text-break'}

**Example SAMMI Response:**
```
false
```
