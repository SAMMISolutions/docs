---
title: "Send Chat Message "
num: 0
---

Sends a message to your Twitch chat from your default account that is connected to SAMMI.\
You can send emotes, whispers and chat commands (if your account has the privileges). See a list of **[all possible chat commands](https://help.twitch.tv/s/article/chat-commands?language=en_US#AllMods)**.\
Whispers might not natively work - instead, use the [Send Whispers](twitch#sendwhispers) command.\
With the [announcement of the deprecation of chat commands through IRC](https://discuss.dev.twitch.tv/t/deprecation-of-chat-commands-through-irc/40486), slash commands will stop working via this command in February 2023. Most of them already have an API call you can make using the [HTTP Request]({{ "commands/misc#httprequest" | relative_url }}) command.

{% include alert.html text="If you have linked more than one Twitch account to SAMMI, you must specify the channel name, otherwise the message is sent to your Twitch account's channel that has <code>Join Channel</code> checked in your Twitch Connections menu" type="warning" %}

| Box Name | Type | Description |
|-------|--------|--------
|Chat Message|String | The message to be sent over the chat.|
|Channel Name |	String	| Channel Name (all lowercase) to send the message to. Leave blank unless you have multiple accounts connected to SAMMI.
{:class='table table-primary'}

| Chat Message Example | Description |
|-------|--------|--------
|/followers|Sets the chat to follower mode|
|/emoteonly|Sets chat to emote only mode
|/clear|Clears the chat|
|/ban silverlink| Bans Silverlink|
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }









