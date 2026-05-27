---
title: "Start Raid"
num: 3
version: 202310
redirect_from:
  - commands/271
---

Starts a raid, which sends the current viewers to the specified target channel after a 90 second countdown.

If **Channel** is empty, SAMMI uses the default Twitch account.

| Box Name | Type | Description | 
|-------|--------|--------
|Channel|String|Channel to start the raid in
|Raid Target|String|Channel to raid
{:class='table table-primary'}

{% include alert.html text="Requires the <code>channel:manage:raids</code> Twitch scope. The broadcaster can still cancel the raid before the countdown finishes." type="info" %}

**Twitch API Endpoint:** `POST /helix/raids`

| Request Field | Type | Description |
|-------|--------|--------
| from_broadcaster_id | String | The ID of the broadcaster initiating the raid |
| to_broadcaster_id | String | The ID of the broadcaster to raid |
{:class='table table-secondary w-auto table-hover text-break'}
