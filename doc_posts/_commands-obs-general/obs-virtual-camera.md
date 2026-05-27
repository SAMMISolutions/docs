---
title: "Control Virtual Camera"
num: 5
redirect_from:
  - commands/417
---

Controls the OBS Virtual Camera — Start, Stop, or Toggle it using the dropdown.

{% include alert.html text="Only available for OBS Websocket 5" type="info" %}

| Box Name | Type | Description |
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to, if using multiple OBS connections.
|Action|Dropdown|Whether to **Start**, **Stop**, or **Toggle** the Virtual Camera.
{:class='table table-primary'}

The OBS Virtual Camera creates a virtual webcam device that other applications (Zoom, Discord, Teams, etc.) can use as a camera input. It is included by default in OBS 26.1 and later — no additional plugin required.

**OBS WebSocket 5 Request:** `StartVirtualCam` / `StopVirtualCam` / `ToggleVirtualCam`

| Action | Request Sent |
|--------|--------
| Start  | `StartVirtualCam` |
| Stop   | `StopVirtualCam` |
| Toggle | `ToggleVirtualCam` |
{:class='table table-secondary w-auto table-hover text-break'}

`ToggleVirtualCam` returns an `outputActive` boolean indicating whether the Virtual Camera is now active. Use **Get Virtual Camera Status** to check the current state before toggling.
