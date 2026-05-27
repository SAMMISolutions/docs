---
title: "Set Stream Caption"
num: 5
redirect_from:
  - commands/425
---

Sends a text caption to the current OBS stream output.

{% include alert.html text="Available in SAMMI Pro." type="info" %}

{% include alert.html text="Only available for OBS Websocket 5" type="info" %}

| Box Name | Type | Description |
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to, if using multiple OBS connections.
|Text|String|The caption text to send to the stream.
{:class='table table-primary'}

Captions are sent as accessibility closed-caption data embedded in the stream. Support depends on the streaming service and player. The stream must be active for this to have any effect.

**OBS WebSocket 5 Request:** `SendStreamCaption`

| Request Field | Type | Description |
|-------|--------|--------
| captionText | String | The caption text to send to the stream output. |
{:class='table table-secondary w-auto table-hover text-break'}
