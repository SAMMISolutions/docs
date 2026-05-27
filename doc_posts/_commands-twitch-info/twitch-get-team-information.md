---
title: "Get Team Info"
num: 1.32
version: 202440
redirect_from:
  - commands/341
---

Gets information about a Twitch team.

{% include async.html %}
{% include alert.html text="The team name can be found in the URL of the team's page. You can also use <a href='/docs/commands/twitch-get-channel-teams'>Twitch: Get Channel Teams</a> to get the team name." type="info" %}

| Box Name | Type | Description | 
|-------|--------|--------
|Team Name|String|The internal Twitch team name to get information for.
|Save Variable As|String|Variable name to save the team info object.
{:class='table table-primary'}

**Saved Payload:**

| Variable Name | Type | Description |
|---------------|------|-------------|
|team_display_name|String|The display name of the team.
|name|String|The internal name of the team.
|id|String|The ID of the team.
|info|String|The description on the team.
|users|Array|Array of objects for each user in the team.
|users[`0-?`].user_id|String|User ID of that team member.
|users[`0-?`].user_login|String|User login of that team member.
|users[`0-?`].user_name|String|User display name of that team member.
|background_image_url|String|The background image the team page uses.
|banner|String|The banner image the team page uses.
|thumbnail_url|String|The thumbnail image the team page uses.
|updated_at|String|The time in Twitch format that the team was last updated.
|created_at|String|The time in Twitch format that the team was created.
{:class='table table-secondary w-auto table-hover text-break'}

**Twitch API Endpoint:** `GET /helix/teams`

**Example SAMMI Response Object:**
```json
{
  "id": "6b0AsbInuLay",
  "name": "exampleteam",
  "team_display_name": "Example Team",
  "info": "A friendly community of streamers.",
  "thumbnail_url": "https://static-cdn.jtvnw.net/jtv_user_pictures/team-thumbnail.png",
  "background_image_url": "https://static-cdn.jtvnw.net/jtv_user_pictures/team-bg.png",
  "banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/team-banner.png",
  "users": [
    { "user_id": "98765432", "user_login": "examplestreamer", "user_name": "ExampleStreamer" },
    { "user_id": "11111111", "user_login": "teammate2", "user_name": "Teammate2" }
  ],
  "created_at": "2020-06-01T00:00:00Z",
  "updated_at": "2023-11-01T00:00:00Z"
}
```

{% include alert.html text="If the team name is empty or Twitch cannot find the team, the saved variable is set to <code>undefined</code>." type="info" %}
