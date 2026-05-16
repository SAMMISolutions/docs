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

{% include alert.html text="Requires the <code>moderator:read:chat_messages</code> or <code>moderator:manage:chat_messages</code> Twitch scope." type="info" %}
