---
title: "Remove Suspicious Users"
num: 12.1
version: 202610
redirect_from:
  - commands/351
---

Removes the suspicious user status from a Twitch user in the specified channel.
For more information, check out the [Twitch API Reference Guide for Remove Suspicious Status From Chat User](https://dev.twitch.tv/docs/api/reference/#remove-suspicious-status-from-chat-user).

| Box Name | Type | Description | 
|-------|--------|--------
|Channel|Dropdown|Twitch channel to remove the status in.
|User Name|String|The username of the person to update.
{:class='table table-primary'}

{% include alert.html text="Requires the <code>moderator:manage:suspicious_users</code> and <code>user:read:email</code> Twitch scopes." type="info" %}

**Twitch API Endpoint:** `DELETE /helix/moderation/suspicious_users`

| Request Field | Type | Description |
|-------|--------|--------
| broadcaster_id | String | The ID of the broadcaster's channel to remove the suspicious status in |
| moderator_id | String | The ID of the moderator removing the status |
| user_id | String | The ID of the user to remove the suspicious status from |
{:class='table table-secondary w-auto table-hover text-break'}

