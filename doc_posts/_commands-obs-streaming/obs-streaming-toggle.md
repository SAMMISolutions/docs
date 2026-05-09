---
title: "Toggle Streaming"
num: 1
redirect_from:
  - commands/57
---

Toggles streaming on or off in the selected OBS instance.

Use this when the same button should start the stream if OBS is offline, or stop the stream if OBS is already live.

| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS)|
{:class='table table-primary'}

{% include alert.html text="OBS must be connected to SAMMI before this command can run. If you need predictable one-way behavior, use Start Streaming or Stop Streaming instead." type="info" %}







