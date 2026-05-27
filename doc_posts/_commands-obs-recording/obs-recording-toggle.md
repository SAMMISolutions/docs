---
title: "Toggle Recording"
num: 1
redirect_from:
  - commands/60
---

Toggles recording on or off in the selected OBS instance.

Use this when the same button should start recording if OBS is idle, or stop recording if OBS is already recording.

| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS)|
{:class='table table-primary'}

{% include alert.html text="OBS must be connected to SAMMI before this command can run. If you need predictable one-way behavior, use Start Recording or Stop Recording instead." type="info" %}

**OBS WebSocket 5 Request:** `ToggleRecord`

No request fields — starts recording if idle, stops it if active.

| Response Field | Type | Description |
|-------|--------|--------
| outputActive | Boolean | `true` if recording is now active, `false` if it was stopped. |
{:class='table table-secondary w-auto table-hover text-break'}
