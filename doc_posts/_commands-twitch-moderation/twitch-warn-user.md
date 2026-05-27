---
title: "Warn User"
num: 10
version: 202430
redirect_from:
  - commands/336
---

Warns a user with a specified message.
Warnings force users to acknowledge the message you warn them with.

If **Channel** is empty, SAMMI uses the default Twitch account.

| Box Name | Type | Description | 
|-------|--------|--------
|Channel|String|The channel to warn the specified user in
|User Name|String|The username of the person to be warned
|Reason|String|(optional) The reason why you are warning them
{:class='table table-primary'}

{% include alert.html text="Requires the <code>moderator:manage:warnings</code> and <code>user:read:email</code> Twitch scopes." type="info" %}

**Twitch API Endpoint:** `POST /helix/moderation/warnings`

| Request Field | Type | Description |
|-------|--------|--------
| broadcaster_id | String | The ID of the broadcaster whose chat room the warning applies to |
| moderator_id | String | The ID of the moderator or broadcaster issuing the warning |
| data.user_id | String | The ID of the user to warn |
| data.reason | String | The reason the user is being warned |
{:class='table table-secondary w-auto table-hover text-break'}
