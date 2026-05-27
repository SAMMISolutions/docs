---
title: "Change Stream Status"
num: 8.1
version: 20999999
redirect_from:
  - commands/172
---

Modifies your channel information.

<div class="alert alert-warning mt-2" role="alert">This command is deprecated. Please use <a href="/docs/commands/twitch-modify-channel-info">Modify Channel Information</a> instead.</div>

| Box Name | Type | Description | 
|-------|--------|--------
|Login Name | Dropdown |Your Twitch login name (all lowercase characters) to change the stream status of
|Title|String|The title of the stream. Value must not be an empty string.
|Game Name|String|The current game name being played on the channel, for example `Doom`. 
|Language|String|The language of the channel. A language value must be either the ISO 639-1 two-letter code for a supported stream language or `other`.
{:class='table table-primary'}

{% include alert.html text="Requires the <code>channel:manage:broadcast</code> Twitch scope." type="info" %}

**Twitch API Endpoint:** `PATCH /helix/channels`

| Request Field | Type | Description |
|-------|--------|--------
| broadcaster_id | String | The ID of the broadcaster whose channel information is being updated |
| game_id | String | Optional. The ID of the game (category) to update to |
| broadcaster_language | String | Optional. ISO 639-1 two-letter language code (e.g. `en`, `de`) or `other` |
| title | String | Optional. The title of the stream (max 140 characters) |
{:class='table table-secondary w-auto table-hover text-break'}











