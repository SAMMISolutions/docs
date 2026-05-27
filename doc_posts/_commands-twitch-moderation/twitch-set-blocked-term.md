---
title: "Set Blocked Term"
num: 9
version: 202322
redirect_from:
  - commands/315
---

Adds a new blocked term to the specified Twitch channel.

If **Channel** is empty, SAMMI uses the default Twitch account.

| Box Name | Type | Description | 
|-------|--------|--------
|Channel|String|Channel name to add new blocked term
|Term|String|New term to be blocked
{:class='table table-primary'}

{% include alert.html text="Requires the <code>moderator:manage:blocked_terms</code> Twitch scope." type="info" %}

**Twitch API Endpoint:** `POST /helix/moderation/blocked_terms`

| Request Field | Type | Description |
|-------|--------|--------
| broadcaster_id | String | The ID of the broadcaster whose blocked terms list to add to |
| moderator_id | String | The ID of the moderator or broadcaster adding the term |
| text | String | The term to block (2–500 characters). Supports wildcards with `*` |
{:class='table table-secondary w-auto table-hover text-break'}
