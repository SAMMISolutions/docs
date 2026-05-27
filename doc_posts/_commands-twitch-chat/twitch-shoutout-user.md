---
title: "Shoutout User"
num: 19
version: 202310
redirect_from:
  - commands/295
---

Shouts out a user in the specified chat room.<br>
A shoutout can only be sent once every 2 minutes, and the same user cannot be shouted out more than once an hour. You must be live with at least 1 viewer, and you cannot shoutout the broadcaster in their chat room.

| Box Name | Type | Description | 
|-------|--------|--------
|Channel|String|The channel to shoutout the specified user in
|User Name|String|The username of the person to be shouted out
{:class='table table-primary'}

**Twitch API Endpoint:** `POST /helix/chat/shoutouts`

| Request Field | Type | Description |
|-------|--------|--------
| from_broadcaster_id | String | The ID of the broadcaster giving the shoutout |
| to_broadcaster_id | String | The ID of the broadcaster receiving the shoutout |
| moderator_id | String | The ID of the moderator or broadcaster sending the shoutout request |
{:class='table table-secondary w-auto table-hover text-break'}