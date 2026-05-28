---
title: "System: Set Master Volume"
num: 18
version: 202650
redirect_from:
  - commands/443
---

Sets the Windows master volume level.

{% include alert.html text="Available in SAMMI Pro." type="info" %}

| Box Name | Type | Description |
|-------|--------|--------
|Volume (0-100)|Number|The desired volume level. `0` is silent, `100` is maximum.
{:class='table table-primary'}

Values are clamped to the range 0–100. This changes the system-wide master volume and affects all audio output. Setting this does not affect the mute state — use **System: Set Master Mute** to control muting separately.
