---
title: "Trigger Pull Data"
num: 1
redirect_from:
  - commands/66
---

Used in combination with any triggers you set up for the button.\
For example, if you set up a button with a Twitch Subs trigger, you can use this command to get the subscriber's name once the button is triggered.

Refer to our Triggers sections for [YouTube Live](https://sammi.solutions/docs/triggers/youtube) and [Twitch](https://sammi.solutions/docs/triggers/twitch) to learn more about triggers and their pull values.

| Box Name | Type | Description |
|-------|--------|--------|
|Save Variable As | String | Variable name to save the pulled value into. |
|Pull Value|Dropdown| Value you wish to pull from the trigger. Input manually or select from dropdown. Leavy empty or `all` to pull the whole object.
{:class='table table-primary' }

If you select **Trigger Type** in the dropdown menu, you can check what kind of event triggered the button. It will return a different numerical value for each type.

There is an array that lists all Trigger Types in the Global Variables section of the Variable Viewer in SAMMI.

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
|26|Webhook Trigger|
|27|Twitch Low Trust Users|
|28|Twitch Shoutout|
{:class='table table-secondary w-auto table-hover text-break' }
