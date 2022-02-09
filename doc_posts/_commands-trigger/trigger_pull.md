---
title: "Trigger Pull Data"
num: 1
---

Used in combination with any triggers you set up for the button.\
For example, if you set up a button with a Twitch Subs trigger, you can use this command to get the subscriber's name once the button is triggered.
 
Refer to our [Triggers]({{ "/triggers/twitch" | relative_url }}) section to learn more about triggers and their pull values. 

| Box Name | Type | Description | 
|-------|--------|--------|
|Variable | String | Variable name to save the pulled value into. |
|Pull Value|Dropdown| Value you wish to pull from the trigger.
{:class='table table-primary' }

If you select **Trigger Type** in the dropdown menu, you can check what kind of event triggered the button (this replaces String: Get Trigger Type command from LB1). It will return a different numerical value for each type.

| Numerical Value | Trigger Type | 
|-------|--------|--------
|0|Twitch Chat|
|1|Twitch Subscriber|
|2|Twitch Community Gift|
|3|Twitch Channel Points Redeem|
|4|Twitch Raid|
|5|Twitch Bits|
|6|Twitch Follower|
|7||
|8||
|9|OBS Trigger|
|10|LioranBoard Trigger|
|11|Twitch Moderation|
|12|Extension Trigger|
|13|Twitch Whispers|
|14|Twitch Host|
{:class='table table-secondary w-auto table-hover text-break' }














