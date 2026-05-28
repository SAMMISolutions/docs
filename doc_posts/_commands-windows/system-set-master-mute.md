---
title: "System: Set Master Mute"
num: 20
version: 202650
redirect_from:
  - commands/445
---

Enables, disables, or toggles the Windows master mute state.

{% include alert.html text="Available in SAMMI Pro." type="info" %}

| Box Name | Type | Description |
|-------|--------|--------
|Action|Dropdown|**Enable** to mute, **Disable** to unmute, or **Toggle** to switch the current state.
{:class='table table-primary'}

Muting does not affect the volume level. Use **System: Set Master Volume** to control volume separately.

| Action | Effect |
|--------|--------
|Enable|Mutes the system audio.|
|Disable|Unmutes the system audio.|
|Toggle|Switches between muted and unmuted.|
{:class='table table-secondary w-auto table-hover text-break'}
