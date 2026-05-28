---
title: "System: Get Master Volume"
num: 17
version: 202650
redirect_from:
  - commands/442
---

Returns the current Windows master volume level as a number between 0 and 100.

{% include alert.html text="Available in SAMMI Pro." type="info" %}

| Box Name | Type | Description |
|-------|--------|--------
|Save Variable As|String|Variable name to save the current master volume level.
{:class='table table-primary'}

The saved value is the current system-wide master volume as an integer from `0` (muted/silent) to `100` (maximum).

This reads the Windows master volume, not the volume of a specific application. Use the OBS volume commands for OBS-specific audio control.
