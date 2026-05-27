---
title: "Remove Moderator"
num: 1.1
version: 202310
redirect_from:
  - commands/283
---

Removes moderator status from a user in the specified Twitch channel.

If **Channel** is empty, SAMMI uses the default Twitch account.

| Box Name | Type | Description | 
|-------|--------|--------
|Channel|String|The channel to demote the specified user in
|User Name|String|The username of the person to be demoted
{:class='table table-primary'}

{% include alert.html text="Requires the <code>channel:manage:moderators</code> and <code>user:read:email</code> Twitch scopes." type="info" %}

**Twitch API Endpoint:** `DELETE /helix/moderation/moderators`

| Request Field | Type | Description |
|-------|--------|--------
| broadcaster_id | String | The ID of the broadcaster removing the moderator |
| user_id | String | The ID of the user to remove from moderators |
{:class='table table-secondary w-auto table-hover text-break'}
