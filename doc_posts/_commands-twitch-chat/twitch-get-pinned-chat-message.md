---
title: "Get Pinned Chat Message"
num: 20.1
version: 202640
redirect_from:
  - commands/373
---

Gets the currently pinned Twitch chat message for the selected channel and saves the response to a variable.
For more information on the response object, see the [Twitch API Reference Guide for Get Pinned Chat Message](https://dev.twitch.tv/docs/api/reference/#get-pinned-chat-message).

{% include async.html %}

| Box Name | Type | Description |
|-------|--------|--------|
|Channel|Dropdown|Twitch channel to read the pinned message from. Leave empty to use the default account.
|Save Variable As|String|Variable name to save the pinned message object. Saves `undefined` if no pinned message exists.
{:class='table table-primary'}

**Saved Payload:**

SAMMI saves the first pinned message object returned by Twitch (`data[0]`).

| Variable Name | Type | Description |
|-------|--------|--------|
message_id|String|ID of the pinned chat message.
created_at|String|Time in Twitch format when the message was pinned.
updated_at|String|Time in Twitch format when the pinned message was last updated.
expires_at|String|Time in Twitch format when the pin expires, if Twitch returns one.
duration_seconds|Number|Pin duration in seconds, if Twitch returns one.
{:class='table table-secondary w-auto table-hover text-break'}

{% include alert.html text="Requires the <code>moderator:read:chat_messages</code> or <code>moderator:manage:chat_messages</code> Twitch scope." type="info" %}
