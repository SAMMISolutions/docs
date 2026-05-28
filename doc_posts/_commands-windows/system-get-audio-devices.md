---
title: "System: Get Audio Devices"
num: 21
version: 202650
redirect_from:
  - commands/446
---

Returns an array of all available Windows audio output device names.

{% include alert.html text="Available in SAMMI Pro." type="info" %}

| Box Name | Type | Description |
|-------|--------|--------
|Save Variable As|String|Variable name to save the device list array.
{:class='table table-primary'}

The saved value is an array of strings, where each entry is the name of an available audio output device.

**Example SAMMI Response:**
```json
[
  "Speakers (Realtek Audio)",
  "Headphones (USB Audio Device)",
  "HDMI Output (NVIDIA High Definition Audio)"
]
```
