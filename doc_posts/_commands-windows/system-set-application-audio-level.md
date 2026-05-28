---
title: "System: Set Application Audio Level"
num: 22
version: 202650
redirect_from:
  - commands/447
---

Sets the audio volume (0–100) of a specific running application's audio session.

{% include alert.html text="Available in SAMMI Pro." type="info" %}

{% include alert.html text="Not all applications are supported. Only apps with an active audio session appear in the dropdown. Check the dropdown to see which applications are currently active and supported." type="warning" %}

| Box Name | Type | Description |
|-------|--------|--------
|Process Name|Dropdown/String|The name of the application whose audio level you want to set. Select from the dropdown or type a name manually.
|Volume|Number|The volume level to set (0–100).
{:class='table table-primary'}

The **Process Name** dropdown lists all applications that currently have an active audio session. Only these applications are supported — if your target app is not in the list, it may be using an audio API that is not compatible.

**Typical workflow:**
1. Open the command and check the **Process Name** dropdown for your target application.
2. Enter the desired volume (0 = mute, 100 = full volume).
