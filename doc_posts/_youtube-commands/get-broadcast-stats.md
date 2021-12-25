---
title: Get My Broadcast Stats
num: 7
---

`Command: Send to Extension - YouTube Live Get My Broadcast Stats`\
Retrieves stats for your current broadcast. Refreshed once per minute. Broadcast must be live and connection status must be `listening`.
Stats are refreshed once every minute. This button can be spammed as it does not make any API calls.\
All stats will be saved in the stack name you specified (if successfully retrieved, else the stack will be empty).  

**Stats retrieved:**
- title: `[0]stackName`
- URL: `[1]stackName`
- duration (hours): `[2]stackName`
- view count: `[3]stackName`
- like count: `[4]stackName`
- dislike count: `[5]stackName`
- concurrent viewers: `[6]stackName`

| Box Name | Type | Description | 
|-------|--------|--------
|stackName|String|Name of the stack to save the stats into|
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break' }





