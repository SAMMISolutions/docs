---
title: Get Member Info
num: 8
---

{% include alert.html text="This command is not available now. Waiting for additional scope approval from Google." type="danger" %} 

`Command: Send to Extension - YouTube Live Get Member Info`\
Retrieves information about a member (same as Twitch subscriber) of your channel. Connection status must be `ready`.\
Provide either their [channel ID](https://commentpicker.com/youtube-channel-id.php) or chat display name.

{% include alert.html text="If the member does not talk during your stream, there is no way for LioranBoard to associate their display name with their channel ID. In that case you must provide their channel ID." type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|displayName|String|Viewer's chat display name. Do not provide channel id if you already provided a display name.|
|channelid | string | Viewer's [channel ID](https://commentpicker.com/youtube-channel-id.php). Do not provide a display name if you already provided a channel ID.
|stackName|String|Name of the stack to save the member info into|
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break' }

**Member info retrieved:**
- display name: `[0]stackName`
- channel ID: `[1]stackName`
- channel URL: `[2]stackName`
- profile image URL: `[3]stackName`
- highest member level: `[4]stackName`
- highest member level display name: `[5]stackName`
- membership duration in months: `[6]stackName`





