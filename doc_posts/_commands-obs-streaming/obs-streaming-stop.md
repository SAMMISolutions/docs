---
title: "Stop Streaming"
num: 3
redirect_from:
  - commands/59
---

Stops the active stream in the selected OBS instance.

Use this when you explicitly want OBS to stop streaming. If OBS is not currently streaming, OBS may ignore the request or return an error depending on the OBS WebSocket version.

| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS)|
{:class='table table-primary'}

{% include alert.html text="OBS must be connected to SAMMI before this command can run. If OBS is not currently streaming, OBS may ignore the request or return an error depending on the OBS WebSocket version." type="info" %}

**OBS WebSocket 5 Request:** `StopStream`

No request fields — stops the active stream. Returns an error if OBS is not currently streaming.
