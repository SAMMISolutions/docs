---
title: "Unblock User"
num: 11.1
version: 202610
redirect_from:
  - commands/332
---

Unblocks a Twitch user for the specified account.
For more information, check out the [Twitch API Reference Guide for Unblock User](https://dev.twitch.tv/docs/api/reference/#unblock-user).

| Box Name | Type | Description | 
|-------|--------|--------
|Channel|Dropdown|Twitch account to unblock the user from.
|User Name|String|The username of the person to unblock.
{:class='table table-primary'}

{% include alert.html text="Requires the <code>user:manage:blocked_users</code> and <code>user:read:email</code> Twitch scopes." type="info" %}

