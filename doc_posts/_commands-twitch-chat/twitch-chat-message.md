---
title: "Send Chat Message "
num: 0
redirect_from:
  - commands/148
---

Sends a message to your Twitch chat from your default account that is connected to SAMMI.\
For whispers use [Twitch: Send Whispe](twitch#sendwhispers) command.\
For other chat slash commands use their corresponding SAMMI commands. Although many slash commands are still functional for backwards compatibility reasons, we highly recommend that you start using SAMMI commands instead. 

{% include alert.html text="If you have linked more than one Twitch account to SAMMI, you must specify the channel name, otherwise the message is sent to your Twitch account's channel that has <code>Join Channel</code> checked in your Twitch Connections menu" type="warning" %}

| Box Name | Type | Description |
|-------|--------|--------
|Chat Message|String | The message to be sent over the chat.|
|Channel Name |	String	| Channel Name (all lowercase) to send the message to. Leave blank unless you have multiple accounts connected to SAMMI.
{:class='table table-primary'}

See below which SAMMI command corresponds to which chat slash command.

| Twitch Slash Command | SAMMI Command to use instead |
|-------|--------|
|/announce| Twitch: Send Announcement|
|/ban|Twitch: Ban User||
|/unban|Twitch: Unban User|
|/timeout and /untimeout|Twitch: Timeout User|
|/clear| Twitch: Delete Chat Message|
|/color|Twitch: Set User Color|
|/commercial|Twitch: Run Ad (Commercial) |
|/delete|Twitch: Delete Chat Message |
|/emoteonly and /emoteonlyoff|Twitch: Set Emote Mode|
|/followers and /followersoff |Twitch: Set Follower Mode |
|/marker|Twitch: Create Marker|
|/mod|Twitch: Add Moderator|
|/mods|Twitch: Get Moderators|
|/unmod|Twitch: Remove Moderator|
|/raid|Twitch: Start Raid|
|/unraid|Twitch: Cancel Raid|
|/slow and /slowoff|Twitch: Set Slow Mode|
|/subscribers and /subscribersoff|Twitch: Set Subscriber Mode|
|/uniquechat and /uniquechatoff|Twitch: API Call|
|/vip and /unvip|Twitch: Add VIP|
|/unvip|Twitch: Remove VIP|
|/vips |Twitch: Get VIPs|
|/w |Twitch: Send Whisper|
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }









