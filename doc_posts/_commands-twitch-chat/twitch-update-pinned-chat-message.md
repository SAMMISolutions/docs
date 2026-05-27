---
title: "Update Pinned Chat Message"
num: 20.3
version: 202640
redirect_from:
  - commands/375
---

Updates the duration of an existing pinned Twitch chat message.
For more information, see the [Twitch API Reference Guide for Update Pinned Chat Message](https://dev.twitch.tv/docs/api/reference/#update-pinned-chat-message).

| Box Name | Type | Description |
|-------|--------|--------|
|Channel|Dropdown|Twitch channel where the pinned message exists. Leave empty to use the default account.
|Message ID|String|Pinned message ID to update. Leave empty to use `message_id` from the trigger pull data.
|Duration (s)|Number|Optional new pin duration in seconds, starting from now. Twitch allows 30 to 1800 seconds. Leave empty to pin until the stream ends.
{:class='table table-primary'}

{% include alert.html text="Requires the <code>moderator:manage:chat_messages</code> Twitch scope." type="info" %}

**Twitch API Endpoint:** `PATCH /helix/chat/pins`

| Request Field | Type | Description |
|-------|--------|--------
| broadcaster_id | String | The ID of the broadcaster's channel where the pinned message exists |
| moderator_id | String | The ID of a moderator or the broadcaster updating the pin |
| message_id | String | The ID of the pinned message to update |
| duration_seconds | Integer | Optional. New pin duration in seconds from now (30–1800). Omit to pin until stream ends |
{:class='table table-secondary w-auto table-hover text-break'}
