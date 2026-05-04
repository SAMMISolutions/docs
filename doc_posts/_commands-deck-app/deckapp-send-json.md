---
title: "Deck App: Send JSON"
num: 5
version: 202610
redirect_from:
  - commands/328
---

Sends a custom JSON payload to one or all connected Deck App clients.

{% include alert.html text="Available in Deck Hopper Pro." type="info" %} 
{% include alert.html text="Requires Developer Mode." type="info" %}

| Box Name | Type | Description | 
|-------|--------|--------
|Client Name|String|Name of your Deck App. Leave empty to send to all connected Deck App clients.
|Event Name|String|Custom event name to send to the Deck App.
|JSON Payload|JSON String|JSON string containing the data to send.
{:class='table table-primary'}
