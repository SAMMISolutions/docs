---
title: "Join Channel"
num: 2
redirect_from:
  - commands/150
---

This command lets you join any Twitch chat channel.\
You do not need to use this command to join your own channel as long as it's linked to SAMMI, as it will join the chat automatically as soon as you launch Bridge.

{% include alert.html text="Use this command to join any alternate accounts you have linked to SAMMI and wish to listen to the chat traffic on." type="info" %}

| Box Name | Type | Description |
|-------|--------|--------
|Channel Name |	String | Twitch channel name. Must be the login name, not display name.
{:class='table table-primary'}

**Twitch API Endpoint:** `IRC JOIN`

This command uses the Twitch IRC protocol, not the Helix API. SAMMI sends an IRC `JOIN` command to begin receiving chat events from the specified channel.

| Request Field | Type | Description |
|-------|--------|--------
| channel | String | IRC channel name prefixed with `#` (e.g. `#channelname`) |
{:class='table table-secondary w-auto table-hover text-break'}









