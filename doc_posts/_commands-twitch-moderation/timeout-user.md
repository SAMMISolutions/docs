---
title: "Ban User"
num: 
version: 202310
---

Times out a user from participating in the specified broadcaster's chat room for the specified amount of time.
To remove the timeout, use the [Unban User]({{ "commands/twitch-moderation#unban-user" | relative_url }}) command.

| Box Name | Type | Description | 
|-------|--------|--------
Channel|String|The channel to ban the specified user in
User Name|String|The username of the person to be banned
Duration|Number{% include asterisk.html%}|How long to timeout the user, in seconds. If left blank, defaults to 5 minutes (300 seconds).
Reason|String|(optional) The reason why you are banning them
{:class='table table-primary'}