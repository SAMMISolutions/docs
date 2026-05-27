---
title: "Set Subscriber Mode"
num: 6.2
version: 202310
redirect_from:
  - commands/289
---

Enables or disables Subscriber-Only Mode in the specified channel.
Subscriber-Only Mode restricts who can talk in a channel to only subscribers.
VIPs and Moderators are not restricted.

If **Channel** is empty, SAMMI uses the default Twitch account.

| Box Name | Type | Description | 
|-------|--------|--------
|Channel|String|Channel name to set Subscriber-Only Mode for
|Enabled|Dropdown|Enable/Disable
{:class='table table-primary'}

{% include alert.html text="Requires the <code>moderator:manage:chat_settings</code> Twitch scope." type="info" %}
