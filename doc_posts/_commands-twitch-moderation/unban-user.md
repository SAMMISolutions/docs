---
title: "Unban User"
num: 4.1
version: 202310
redirect_from:
  - commands/274
---

Removes the ban or timeout for the specified user in the selected Twitch channel.

If **Channel** is empty, SAMMI uses the default Twitch account.

| Box Name | Type | Description | 
|-------|--------|--------|
|Channel|String|The channel to unban/untimeout the specified user in
|User Name|String|The username of the person to unban/untimeout
{:class='table table-primary'}

{% include alert.html text="Requires the <code>moderator:manage:banned_users</code> and <code>user:read:email</code> Twitch scopes." type="info" %}

**Twitch API Endpoint:** `DELETE /helix/moderation/bans`

| Request Field | Type | Description |
|-------|--------|--------
| broadcaster_id | String | The ID of the broadcaster whose chat room the user is unbanned from |
| moderator_id | String | The ID of the moderator or broadcaster removing the ban |
| user_id | String | The ID of the user to unban or remove timeout from |
{:class='table table-secondary w-auto table-hover text-break'}
