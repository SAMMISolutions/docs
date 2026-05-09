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
Channel|String|The channel to unban/untimeout the specified user in
User Name|String|The username of the person to unban/untimeout
{:class='table table-primary'}

{% include alert.html text="Requires the <code>moderator:manage:banned_users</code> and <code>user:read:email</code> Twitch scopes." type="info" %}
