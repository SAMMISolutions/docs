---
title: "Event Pull"
num: 1.1
version: 202250
redirect_from:
  - commands/260
---

Similar to 'Trigger Pull Data' command, but for OBS Websocket 5 Events.\
This command will return a response from the OBS Event Trigger that was used.\
More information about all possible OBS events can be found in [Official OBS Websocket Documentation](https://github.com/obsproject/obs-websocket/blob/master/docs/generated/protocol.md#general-events).


| Box Name | Type | Description | 
|-------|--------|--------
|Save Variable As|String|Variable name where the value will be saved to.|
|Pull Value|Dropdown|Select value from the dropdown list. Typing `all` will return the full response object.
{:class='table table-primary' }
