---
title: "Send API Chat Message"
num: 20
version: 202410
redirect_from:
  - commands/333
---

Sends a message to your Twitch chat from your default account that is connected to SAMMI.\

{% include alert.html text="If you have linked more than one Twitch account to SAMMI, you must specify the channel name, otherwise the message is sent to your Twitch account's channel that has <code>Join Channel</code> checked in your Twitch Connections menu" type="warning" %}

{% include alert.html text="Sending a Chat Message via the API WILL cause SAMMI to trigger off these messages, be sure to not create a recursive loop of your bot auto-responding to itself." type="warning" %}

| Box Name | Type | Description |
|-------|--------|--------
|Chat Message|String | The message to be sent over the chat.|
|From|String|The channel you want to send messages from.
|Channel Name |String| Channel Name (all lowercase) to send the message to. Leave blank unless you have multiple accounts connected to SAMMI.
|Pin Message|Checkbox|If checked, the message is sent and pinned for 20 minutes.
{:class='table table-primary'}

{% include alert.html text="Pin Message requires the <code>moderator:manage:chat_messages</code> Twitch scope. If Twitch cannot pin the message, the message will not be sent." type="info" %}

For more information, see the [Twitch API Reference Guide for Send Chat Message](https://dev.twitch.tv/docs/api/reference/#send-chat-message).






