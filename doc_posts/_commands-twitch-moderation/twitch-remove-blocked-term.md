---
title: "Remove Blocked Term"
num: 9.1
version: 202322
redirect_from:
  - commands/316
---

Removes a blocked term from the specified Twitch channel.

If **Channel** is empty, SAMMI uses the default Twitch account.

| Box Name | Type | Description | 
|-------|--------|--------
|Channel|String|Channel name to remove blocked term from
|Term ID|String|ID of term to be removed. Can be retrieved from [Twitch: Get Blocked Terms](twitch-info#getblockedterms).
{:class='table table-primary'}

{% include alert.html text="Requires the <code>moderator:manage:blocked_terms</code> Twitch scope." type="info" %}

**Twitch API Endpoint:** `DELETE /helix/moderation/blocked_terms`

| Request Field | Type | Description |
|-------|--------|--------
| broadcaster_id | String | The ID of the broadcaster whose blocked terms list to remove from |
| moderator_id | String | The ID of the moderator or broadcaster removing the term |
| id | String | The ID of the blocked term to remove |
{:class='table table-secondary w-auto table-hover text-break'}
