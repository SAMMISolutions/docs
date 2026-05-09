---
title: "Start Streaming"
num: 2
redirect_from:
  - commands/58
---

Starts streaming in the selected OBS instance.

Use this when you explicitly want the stream to go live. If OBS is already streaming, OBS may ignore the request or return an error depending on the OBS WebSocket version.

| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS)|
{:class='table table-primary'}

{% include alert.html text="OBS must be connected to SAMMI before this command can run. If you use multiple OBS connections, choose the target OBS instance in the OBS dropdown." type="info" %}







