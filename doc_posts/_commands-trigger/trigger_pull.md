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
|Pull Value|Dropdown| Value you wish to pull from the trigger. Click on the hamburguer icon on the right to choose the correct value.
{:class='table table-primary' }

[Parse Array/Object]({{ "/commands/object#parsearrayobject" | relative_url }})

If you select **Trigger Type** in the dropdown menu, you can check what kind of event triggered the button (this replaces String: Get Trigger Type command from LB1). It will return a different numerical value for each type.

There is also an array that lists all Trigger Types in the Global Variables section of the Variable Viewer in SAMMI.

| Numerical Value | Trigger Type |
|-------|--------|--------
|0|Twitch Chat|
|1|Twitch Subscriber|
|2|Twitch Community Gift|
|3|Twitch Channel Points Redeem|
|4|Twitch Raid|
|5|Twitch Bits|
|6|Twitch Follower|
|7|Hotkey|
|8|Interval Trigger|
|9|OBS Trigger|
|10|SAMMI Trigger|
|11|Twitch Moderation|
|12|Extension Trigger|
|13|Twitch Whispers|
|14|Twitch Host|
|15|Twitch Prediction|
|16|Twitch Poll|
|17|Twitch Hype Train|
|18|Youtube Chat|
|19|Youtube Subscriber|
|20|Youtube Superchat|
|21|Youtube Supersticker|
|22|Youtube Member|
|23|SAMMI Deck Button Press|
|24|Trigger Button|
|25|Trigger Button with Delay|
{:class='table table-secondary w-auto table-hover text-break' }
