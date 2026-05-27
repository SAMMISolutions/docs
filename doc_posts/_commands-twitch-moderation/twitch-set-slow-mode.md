---
title: "Set Slow Mode"
num: 6
version: 202310
redirect_from:
  - commands/288
---

Enables or disables Slow Mode in the specified channel.
Slow Mode restricts how often users can talk in a channel to once per specified amount of time.
VIPs and Moderators are not restricted.

If **Channel** is empty, SAMMI uses the default Twitch account.

| Box Name | Type | Description | 
|-------|--------|--------
|Channel|String|Channel name to set Slow Mode for
|Enabled|Dropdown|Enable/Disable
|Time|Number {% include asterisk.html%}|Amount of time, in seconds, that users must wait before they can chat again
{:class='table table-primary'}

{% include alert.html text="Requires the <code>moderator:manage:chat_settings</code> Twitch scope." type="info" %}
