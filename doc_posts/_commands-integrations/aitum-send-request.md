---
title: "Send Aitum Request"
num: 5
version: 202610
redirect_from:
  - commands/352
---

Sends a request to the Aitum plugin through OBS WebSocket.

You can use one of the premade request templates from the dropdown, or provide a custom OBS WebSocket request JSON.

{% include async.html %}

| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to, if using multiple OBS connections.
|Request JSON|JSON String|Aitum request JSON to send.
|Fetch Value|String|Optional value to fetch from the response.
|Save Variable As|String|Optional variable name to save the fetched response value.
{:class='table table-primary'}

{% include alert.html text="Requires OBS WebSocket 5 and the Aitum plugin." type="info" %}

