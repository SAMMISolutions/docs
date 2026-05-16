---
title: "Pin Chat Message"
num: 20.2
version: 202640
redirect_from:
  - commands/374
---

Pins an existing Twitch chat message in the selected channel.
For more information, see the [Twitch API Reference Guide for Pin Chat Message](https://dev.twitch.tv/docs/api/reference/#pin-chat-message).

| Box Name | Type | Description |
|-------|--------|--------|
|Channel|Dropdown|Twitch channel where the message should be pinned. Leave empty to use the default account.
|Message ID|String|Message ID to pin. Leave empty to use `message_id` from the trigger pull data.
|Duration (s)|Number|Optional pin duration in seconds. Twitch allows 30 to 1800 seconds. Leave empty to pin until the stream ends.
{:class='table table-primary'}

{% include alert.html text="Requires the <code>moderator:manage:chat_messages</code> Twitch scope." type="info" %}
