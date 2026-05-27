---
title: "Get Channel Teams"
num: 1.31
version: 202440
redirect_from:
  - commands/340
---

Gets the list of Twitch teams for a channel.

If **Channel** is empty, SAMMI uses the default Twitch account. The command saves an array of team objects. If the channel is invalid or Twitch returns an error, the saved variable is set to `undefined`.

{% include async.html %}

| Box Name | Type | Description | 
|-------|--------|--------
|Channel|Twitch Account|Channel name to get teams for. Leave empty to use the default Twitch account.
|Save Variable As|String|Variable name to save the teams array.
{:class='table table-primary'}

**Saved Payload:**

| Variable Name | Type | Description |
|---------------|------|-------------|
|savedVariable|Array|Array of objects representing each team.
|savedVariable[`0-?`]|Object|Contains info about the team.
|savedVariable[`0-?`].background_image_url|String|The background image the team page uses.
|savedVariable[`0-?`].banner|String|The banner image the team page uses.
|savedVariable[`0-?`].thumbnail_url|String|The thumbnail image the team page uses.
|savedVariable[`0-?`].broadcaster_login|String|The login of the requested user.
|savedVariable[`0-?`].broadcaster_name|String|The display name of the requested user.
|savedVariable[`0-?`].broadcaster_id|String|The User ID of the requested user.
|savedVariable[`0-?`].id|String|The ID of the team.
|savedVariable[`0-?`].name|String|The internal name of the team.
|savedVariable[`0-?`].team_display_name|String|The display name of the team.
|savedVariable[`0-?`].info|String|The description on the team.
|savedVariable[`0-?`].updated_at|String|The time in Twitch format that the team was last updated.
|savedVariable[`0-?`].created_at|String|The time in Twitch format that the team was created.
{:class='table table-secondary w-auto table-hover text-break'}

**Twitch API Endpoint:** `GET /helix/teams/channel`

**Example SAMMI Response Object:**
```json
[
  {
    "broadcaster_id": "98765432",
    "broadcaster_login": "examplestreamer",
    "broadcaster_name": "ExampleStreamer",
    "background_image_url": "https://static-cdn.jtvnw.net/jtv_user_pictures/team-bg.png",
    "banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/team-banner.png",
    "thumbnail_url": "https://static-cdn.jtvnw.net/jtv_user_pictures/team-thumbnail.png",
    "id": "6b0AsbInuLay",
    "name": "exampleteam",
    "team_display_name": "Example Team",
    "info": "A friendly community of streamers.",
    "updated_at": "2023-11-01T00:00:00Z",
    "created_at": "2020-06-01T00:00:00Z"
  }
]
```
Note: SAMMI saves the raw `data` array directly (as `struct_to_map(data)`), so the variable stores an array-as-map where the key `default` holds the array of team objects.

{% include alert.html text="Requires the <code>user:read:email</code> Twitch scope for the selected channel/account." type="info" %}
