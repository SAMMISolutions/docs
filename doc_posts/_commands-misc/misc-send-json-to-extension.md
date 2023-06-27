---
title: Send JSON to Extension
num: 10.1
version: 202322
redirect_from:
  - commands/317
---

Allows you to send payload to Bridge without needing to use an Extension Command.

{% include alert.html text="Requires Developer Mode" type="info" %} 

You can listen to these with event listeners in extensions, such as this: 

```
sammiclient.on('My Event Name', (payload) => {
  // DO SOMETHING WITH THE EXTENSION PAYLOAD
  // FromButton - button ID the extension command was triggered in 
  // instanceId - instance ID of a button the extension command was triggered in
  const { FromButton, instanceId }  = payload.Data 
});
```

| Box Name | Type | Description | 
|-------|--------|--------
|Event Name|String|The name of the event, or the 'hook' name to use in `sammiclient.on`
|JSON Payload|String|JSON string containing object data to be sent to the extension in bridge. Can be accessed with `payload.Data.json`
{:class='table table-primary'}







