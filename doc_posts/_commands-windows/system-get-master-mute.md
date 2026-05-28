---
title: "System: Get Master Mute"
num: 19
version: 202650
redirect_from:
  - commands/444
---

Returns the current Windows master mute state as a boolean.

{% include alert.html text="Available in SAMMI Pro." type="info" %}

| Box Name | Type | Description |
|-------|--------|--------
|Save Variable As|String|Variable name to save the mute state.
{:class='table table-primary'}

**Saved Value:**

| Value | Type | Description |
|-------|------|-------------|
|true|Boolean|The system audio is currently muted.|
|false|Boolean|The system audio is not muted.|
{:class='table table-secondary w-auto table-hover text-break'}

This reads the Windows master mute state. Muting does not change the volume level — use **System: Get Master Volume** to check the current volume separately.
