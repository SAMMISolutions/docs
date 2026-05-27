---
title: "Add Moderator"
num: 1
version: 202310
redirect_from:
  - commands/282
---

Promotes a user to moderator in the specified Twitch channel. To demote a moderator, use [Remove Moderator]({{ "commands/twitch-remove-mod" | relative_url }}).

If **Channel** is empty, SAMMI uses the default Twitch account.

| Box Name | Type | Description | 
|-------|--------|--------
|Channel|String|The channel to promote the specified user in
|User Name|String|The username of the person to be promoted
{:class='table table-primary'}

{% include alert.html text="Requires the <code>channel:manage:moderators</code> and <code>user:read:email</code> Twitch scopes." type="info" %}

**Twitch API Endpoint:** `POST /helix/moderation/moderators`

| Request Field | Type | Description |
|-------|--------|--------
| broadcaster_id | String | The ID of the broadcaster adding the moderator |
| user_id | String | The ID of the user to add as moderator |
{:class='table table-secondary w-auto table-hover text-break'}
