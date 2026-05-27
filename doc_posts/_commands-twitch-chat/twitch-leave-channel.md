---
title: "Leave Channel"
num: 3
redirect_from:
  - commands/151
---

This command lets you leave a Twitch chat channel you previously joined.\
Can be your own channel as well.

| Box Name | Type | Description | 
|-------|--------|--------
|Channel Name |	String | Twitch channel name. Must be the login name, not display name.
{:class='table table-primary'}

**Twitch API Endpoint:** `IRC PART`

This command uses the Twitch IRC protocol, not the Helix API. SAMMI sends an IRC `PART` command to stop receiving chat events from the specified channel.

| Request Field | Type | Description |
|-------|--------|--------
| channel | String | IRC channel name prefixed with `#` (e.g. `#channelname`) |
{:class='table table-secondary w-auto table-hover text-break'}






