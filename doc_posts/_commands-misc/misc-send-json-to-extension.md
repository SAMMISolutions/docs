---
title: Send JSON to Extension
num: 10.1
version: 202322
redirect_from:
  - commands/317
---

 Allows you to send a payload to the Bridge without needing to use an Extension.

{% include alert.html text="Requires Developer Mode!" type="info" %} 


| Box Name | Type | Description | 
|-------|--------|--------
|Event Name|String|The name of the event to use in `sammiclient.on`
|JSON Payload|String|JSON string containing object data to be sent to the extension in bridge. can be accessed with `payload.Data.json`
{:class='table table-primary'}







