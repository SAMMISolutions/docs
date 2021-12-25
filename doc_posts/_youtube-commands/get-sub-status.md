---
title: Get Subscriber Status
num: 9
---

`Command: Send to Extension - YouTube Live Check Sub Status`\
Checks whether your viewer is subscribed to (follows) your channel. Connection status must be `ready`.\
Provide either their [channel ID](https://commentpicker.com/youtube-channel-id.php) or chat display name.\

{% include alert.html text="If the member does not talk during your stream, there is no way for LioranBoard to associate their display name with their channel ID. In that case you must provide their channel ID." type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|displayName|String|Viewer's chat display name. Do not provide channel id if you already provided a display name.|
|channelid | string | Viewer's [channel ID](https://commentpicker.com/youtube-channel-id.php). Do not provide a display name if you already provided a channel ID.
|variable|String|Variable name to save the result into. Will be 'true' if the user is a subscriber and 'false' if they're not.|
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break' }







