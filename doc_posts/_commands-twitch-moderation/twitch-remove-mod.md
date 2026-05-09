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
Channel|String|The channel to demote the specified user in
User Name|String|The username of the person to be demoted
{:class='table table-primary'}

{% include alert.html text="Requires the <code>channel:manage:moderators</code> and <code>user:read:email</code> Twitch scopes." type="info" %}
