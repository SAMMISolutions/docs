---
title: "Modify Channel Information"
num: 8
version: 202310
redirect_from:
  - commands/293
---

Updates a channel's information, such as category, title, language, and tags.
Leave a box blank to not update that information. Requires at least 1 field to update.

If **Channel** is empty, SAMMI uses the default Twitch account.

| Box Name | Type | Description | 
|-------|--------|--------
|Channel|String|Channel name to change the information for
|Category|String|Category of the stream (game name, "Just Chatting", etc.)
|Language|Dropdown|The [ISO 639-1 2 letter language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes). Select from dropdown menu or manually input
|Title|String|Title of the stream
|Tags|Stringified array|Tags to apply to the channel, as a stringified array (`["Tag1", "Tag2"]`)
{:class='table table-primary'}

{% include alert.html text="Requires the <code>channel:manage:broadcast</code> Twitch scope." type="info" %}

**Twitch API Endpoint:** `PATCH /helix/channels`

| Request Field | Type | Description |
|-------|--------|--------
| broadcaster_id | String | The ID of the broadcaster whose channel information is being updated |
| game_id | String | Optional. The ID of the game (category) to update to |
| broadcaster_language | String | Optional. ISO 639-1 two-letter language code (e.g. `en`, `de`) or `other` |
| title | String | Optional. The title of the stream (max 140 characters) |
| tags | Array | Optional. Array of tag strings to apply to the channel (max 10 tags) |
{:class='table table-secondary w-auto table-hover text-break'}
