---
title: "Source Save Screenshot"
num: 18
version: 202610
redirect_from:
  - commands/353
---

Saves a screenshot of an OBS source or scene to a local PNG file.

{% include alert.html text="Available in SAMMI Pro." type="info" %} 
{% include alert.html text="This command requires OBS WebSocket 5." type="info" %}

| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to, if using multiple OBS connections.
|Source Name|String|Name of the OBS source or scene to capture.
|File Path|File Select|Local path to save the screenshot to.
{:class='table table-primary'}

**OBS WebSocket 5 Request:** `SaveSourceScreenshot`

| Request Field | Type | Description |
|-------|--------|--------
| sourceName | String | Name of the source or scene to capture. |
| imageFormat | String | Always `png` for this command. |
| imageFilePath | String | Full local file path to save the PNG image to (e.g. `C:/Screenshots/capture.png`). |
{:class='table table-secondary w-auto table-hover text-break'}

