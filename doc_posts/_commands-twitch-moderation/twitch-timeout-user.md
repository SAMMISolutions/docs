---
title: "Timeout User"
num: 4.1
version: 202310
redirect_from:
  - commands/275
---

Times out a user from participating in the specified broadcaster's chat room for the specified amount of time.
To remove the timeout, use the [Unban User]({{ "commands/twitch-moderation#unban-user" | relative_url }}) command.

| Box Name | Type | Description | 
|-------|--------|--------
Channel|String|The channel to timeout the specified user in
User Name|String|The username of the person to be timed out
Duration|Number{% include asterisk.html%}|How long to timeout the user, in seconds. If left blank, defaults to 5 minutes (300 seconds).
Reason|String|(optional) The reason why you are timing them out
{:class='table table-primary'}