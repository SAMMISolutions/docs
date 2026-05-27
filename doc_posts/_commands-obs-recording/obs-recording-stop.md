---
title: "Stop Recording"
num: 3
redirect_from:
  - commands/62
---

Stops the active recording in the selected OBS instance.

Use this when you explicitly want OBS to finish the current recording. The final file location and format are controlled by your OBS recording settings.

| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS)|
{:class='table table-primary'}

{% include alert.html text="OBS must be connected to SAMMI before this command can run. If OBS is not recording, OBS may ignore the request or return an error depending on the OBS WebSocket version." type="info" %}

**OBS WebSocket 5 Request:** `StopRecord`

No request fields — stops and finalizes the current recording.

| Response Field | Type | Description |
|-------|--------|--------
| outputPath | String | The file path of the saved recording (e.g. `C:/Videos/recording.mkv`). |
{:class='table table-secondary w-auto table-hover text-break'}
