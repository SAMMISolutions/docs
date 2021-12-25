---
title: Ban or Unban User
num: 2
---

`Command: Send to Extension - YouTube Live Ban or Unban User`\
Ban or unban a viewer. Broadcast must be live and connection status must be `listening`.\
Provide either their [channel ID](https://commentpicker.com/youtube-channel-id.php) or chat display name.\
You can only unban a permanently banned user. If you want to remove a timeout, select `temporary ban` with `0 duration` (which will override the original timeout).

{% include alert.html text="If the viewer does not talk during your stream, there is no way for LioranBoard to associate their display name with their channel ID. In that case you must provide their channel ID." type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|displayName|String|Viewer's chat display name. Do not provide channel id if you already provided a display name.|
|channelid | string | Viewer's [channel ID](https://commentpicker.com/youtube-channel-id.php). Do not provide a display name if you already provided a channel ID.
|type|Dropdown|Whether you want to ban or unban the user. You can only unban a permanently banned user. 
|permanent|Boolean| Whether you want your ban to be permanent or temporary (=timeout).
|duration|Int|Duration (if you selected temporary ban) in minutes. Use 0 if you want to un-timeout a user. 
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break' }



