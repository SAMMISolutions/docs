---
title: "Set Studio Mode Scene"
num: 10
redirect_from:
  - commands/420
---

Sets the OBS Studio Mode Preview scene without affecting the active Program output.

{% include alert.html text="Only available for OBS Websocket 5" type="info" %}

| Box Name | Type | Description |
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to, if using multiple OBS connections.
|Scene Name|String|Scene to load into the Preview. Supports **Current Scene** and **Previous Scene** aliases.
{:class='table table-primary'}

Studio Mode must be enabled in OBS (`View → Studio Mode`). This command loads a scene into the Preview panel without changing what viewers currently see on stream. Use **Activate Studio Mode Scene** afterwards to trigger the transition and move the Preview to Program.

**OBS WebSocket 5 Request:** `SetCurrentPreviewScene`

| Request Field | Type | Description |
|-------|--------|--------
| sceneName | String | Name of the scene to set as the current Preview scene. |
{:class='table table-secondary w-auto table-hover text-break'}
