---
title: "Get Videos"
version: 202320
num: 16
redirect_from:
  - commands/302
---
Gets videos from a Twitch channel.\
Available types of videos:
- All Videos 
- Archives
- Highlights
- Uploads
- Clips

If 'All Videos' is selected, the response will not contain 'Clips'. The response received, depending on the size of the request will require some time to load, so please ensure you use a 'Wait until Variablle Exists' command with this one.

| Box Name | Type | Description | 
|-------|--------|--------
|Channel|Dropdown|Twitch channel to get videos from. This can be left empty.
|Type|Dropdown|Dropdown of video types that can be received from Twitch.
|Save Variable As|String|Name of the variable to save the response as.
{:class='table table-primary'}
