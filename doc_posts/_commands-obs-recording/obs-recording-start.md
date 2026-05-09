---
title: "Start Recording"
num: 2
redirect_from:
  - commands/61
---

Starts recording in the selected OBS instance.

Use this when you explicitly want OBS to begin a recording. If OBS is already recording, OBS may ignore the request or return an error depending on the OBS WebSocket version.

| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS)|
{:class='table table-primary'}

{% include alert.html text="OBS must be connected to SAMMI before this command can run. Recording output settings are handled by OBS, not by SAMMI." type="info" %}









