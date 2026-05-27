---
title: "Add Suspicious User"
num: 12
version: 202610
redirect_from:
  - commands/350
---

Flags a Twitch user as suspicious in the specified channel.
For more information, check out the [Twitch API Reference Guide for Add Suspicious Status to Chat User](https://dev.twitch.tv/docs/api/reference/#add-suspicious-status-to-chat-user).

| Box Name | Type | Description | 
|-------|--------|--------
|Channel|Dropdown|Twitch channel to flag the user in.
|User Name|String|The username of the person to flag.
|Status|Dropdown|Suspicious user status to apply: `Active Monitoring` or `Restricted`.
{:class='table table-primary'}

{% include alert.html text="Requires the <code>moderator:manage:suspicious_users</code> and <code>user:read:email</code> Twitch scopes." type="info" %}

**Twitch API Endpoint:** `POST /helix/moderation/suspicious_users`

| Request Field | Type | Description |
|-------|--------|--------
| broadcaster_id | String | The ID of the broadcaster's channel to flag the user in |
| moderator_id | String | The ID of the moderator flagging the user |
| user_id | String | The ID of the user to flag as suspicious |
| status | String | Suspicious status to apply: `active_monitoring` or `restricted` |
{:class='table table-secondary w-auto table-hover text-break'}

