---
title: "Timeout User"
num: 4.2
version: 202310
redirect_from:
  - commands/275
---

Times out a user from participating in the specified broadcaster's chat room for the specified amount of time.
To remove the timeout, use [Unban User]({{ "commands/unban-user" | relative_url }}).

If **Channel** is empty, SAMMI uses the default Twitch account.

| Box Name | Type | Description | 
|-------|--------|--------
|Channel|String|The channel to timeout the specified user in
|User Name|String|The username of the person to be timed out
|Duration|Number{% include asterisk.html%}|How long to timeout the user, in seconds. If left blank, defaults to 5 minutes (300 seconds).
|Reason|String|(optional) The reason why you are timing them out (max 500 characters)
{:class='table table-primary'}

{% include alert.html text="If the reason exceeds 500 characters, SAMMI will show a warning and automatically truncate it before sending the request." type="warning" %}

{% include alert.html text="Requires the <code>moderator:manage:banned_users</code> and <code>user:read:email</code> Twitch scopes." type="info" %}

**Twitch API Endpoint:** `POST /helix/moderation/bans`

| Request Field | Type | Description |
|-------|--------|--------
| broadcaster_id | String | The ID of the broadcaster whose chat room the user is timed out from |
| moderator_id | String | The ID of the moderator or broadcaster applying the timeout |
| data.user_id | String | The ID of the user to time out |
| data.duration | Integer | The duration of the timeout in seconds (max 1,209,600 — 2 weeks) |
| data.reason | String | Optional. The reason for the timeout |
{:class='table table-secondary w-auto table-hover text-break'}
