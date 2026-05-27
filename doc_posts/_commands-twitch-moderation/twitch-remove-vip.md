---
title: "Remove VIP"
num: 2.1
version: 202310
redirect_from:
  - commands/285
---

Removes VIP status from a user in the specified Twitch channel.

If **Channel** is empty, SAMMI uses the default Twitch account.

| Box Name | Type | Description | 
|-------|--------|--------
|Channel|String|The channel to demote the specified user in
|User Name|String|The username of the person to be demoted
{:class='table table-primary'}

{% include alert.html text="Requires the <code>channel:manage:vips</code> and <code>user:read:email</code> Twitch scopes." type="info" %}
