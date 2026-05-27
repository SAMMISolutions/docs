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

**Twitch API Endpoint:** `POST /helix/chat/messages`

| Request Field | Type | Description |
|-------|--------|--------
| broadcaster_id | String | The ID of the broadcaster's channel the message is sent to |
| sender_id | String | The ID of the user sending the message |
| message | String | The message to send (max 500 characters) |
| reply_parent_message_id | String | Optional. ID of the chat message to reply to |
{:class='table table-secondary w-auto table-hover text-break'}

**Response Fields:**

| Variable Name | Type | Description |
|-------|--------|--------
| message_id | String | The ID assigned to the message sent |
| is_sent | Boolean | Whether the message was sent |
| drop_reason.code | String | Reason code if the message was dropped (e.g. `channel_settings_block`) |
| drop_reason.message | String | Human-readable explanation if the message was dropped |
{:class='table table-secondary w-auto table-hover text-break'}






