---
title: "Ban User"
num: 4
version: 202310
redirect_from:
  - commands/273
---

Bans a user from participating in the specified broadcaster's chat room. To remove the ban, use [Unban User]({{ "commands/unban-user" | relative_url }}).

If **Channel** is empty, SAMMI uses the default Twitch account.

| Box Name | Type | Description | 
|-------|--------|--------
|Channel|String|The channel to ban the specified user in
|User Name|String|The username of the person to be banned
|Reason|String|(optional) The reason why you are banning them
{:class='table table-primary'}

{% include alert.html text="Requires the <code>moderator:manage:banned_users</code> and <code>user:read:email</code> Twitch scopes." type="info" %}
