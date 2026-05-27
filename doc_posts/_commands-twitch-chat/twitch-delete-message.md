---
title: "Delete Chat Message"
num: 0.5
version: 202250
redirect_from:
  - commands/263
---

Deletes a chat message.

| Box Name | Type | Description | 
|-------|--------|--------
|Login Name | Dropdown |Channel where the message needs to be deleted from. This must be linked in SAMMI.
|Message ID|String|Retrieve this from a 'Trigger Pull Data' command. Leave blank to clear the whole chat.
{:class='table table-primary'}

**Twitch API Endpoint:** `DELETE /helix/moderation/chat`

| Request Field | Type | Description |
|-------|--------|--------
| broadcaster_id | String | The ID of the broadcaster whose chat room the message will be deleted from |
| moderator_id | String | The ID of a user who has permission to moderate the channel |
| message_id | String | Optional. The ID of the message to delete. If not specified, clears all messages in the chat room |
{:class='table table-secondary w-auto table-hover text-break'}
