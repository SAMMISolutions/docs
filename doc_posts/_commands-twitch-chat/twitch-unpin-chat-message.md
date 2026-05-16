---
title: "Unpin Chat Message"
num: 20.4
version: 202640
redirect_from:
  - commands/376
---

Unpins a Twitch chat message from the selected channel.
For more information, see the [Twitch API Reference Guide for Unpin Chat Message](https://dev.twitch.tv/docs/api/reference/#unpin-chat-message).

| Box Name | Type | Description |
|-------|--------|--------|
|Channel|Dropdown|Twitch channel where the message should be unpinned. Leave empty to use the default account.
|Message ID|String|Message ID to unpin. Leave empty to use `message_id` from the trigger pull data.
{:class='table table-primary'}

{% include alert.html text="Requires the <code>moderator:manage:chat_messages</code> Twitch scope." type="info" %}
