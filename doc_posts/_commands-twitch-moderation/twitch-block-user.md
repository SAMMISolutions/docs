---
title: "Block User"
num: 11
version: 202610
redirect_from:
  - commands/331
---

Blocks a Twitch user for the specified account.
For more information, check out the [Twitch API Reference Guide for Block User](https://dev.twitch.tv/docs/api/reference/#block-user).

| Box Name | Type | Description | 
|-------|--------|--------
|Channel|Dropdown|Twitch account to block the user from.
|User Name|String|The username of the person to block.
{:class='table table-primary'}

{% include alert.html text="Requires the <code>user:manage:blocked_users</code> and <code>user:read:email</code> Twitch scopes." type="info" %}

**Twitch API Endpoint:** `PUT /helix/users/blocks`

| Request Field | Type | Description |
|-------|--------|--------
| target_user_id | String | The ID of the user to block |
| source_context | String | Optional. Context for blocking the user: `chat`, `whisper` |
| reason | String | Optional. Reason for blocking: `harassment`, `spam`, `other` |
{:class='table table-secondary w-auto table-hover text-break'}

