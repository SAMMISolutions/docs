---
title: "Get Studio Mode Scene"
num: 9
version: 202640
redirect_from:
  - commands/419
---

Gets the name of the current Preview scene in OBS Studio Mode and saves it as a string variable.

{% include alert.html text="Only available for OBS Websocket 5" type="info" %}

| Box Name | Type | Description |
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to, if using multiple OBS connections.
|Save Variable As|String|Variable name to save the preview scene name.
{:class='table table-primary'}

Studio Mode must be enabled in OBS (`View → Studio Mode`) for this command to return a meaningful value. Use this to check what is currently staged in the Preview before triggering a transition.

**Saved Value:**

| Value | Type | Description |
|-------|------|-------------|
|savedVariable|String|Name of the scene currently in the OBS Studio Mode Preview.|
|undefined|Undefined|Saved if OBS is not connected, ws5 is not in use, or Studio Mode is disabled.|
{:class='table table-secondary w-auto table-hover text-break'}

**OBS WebSocket 5 Request:** `GetCurrentPreviewScene`

No request fields.

| Response Field | Type | Description |
|-------|--------|--------
| currentPreviewSceneName | String | Name of the current Preview scene. Saved directly to your variable. |
{:class='table table-secondary w-auto table-hover text-break'}

**Example SAMMI Response:**
```
Gameplay
```
