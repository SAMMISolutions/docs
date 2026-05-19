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
Channel|Twitch Account|Channel name to get teams for. Leave empty to use the default Twitch account.
Save Variable As|String|Variable name to save the teams array.
{:class='table table-primary'}

**Saved Payload:**

| Variable Name | Type | Description |
|---------------|------|-------------|
savedVariable|Array|Array of objects representing each team.
savedVariable[`0-?`]|Object|Contains info about the team.
savedVariable[`0-?`].background_image_url|String|The background image the team page uses.
savedVariable[`0-?`].banner|String|The banner image the team page uses.
savedVariable[`0-?`].thumbnail_url|String|The thumbnail image the team page uses.
savedVariable[`0-?`].broadcaster_login|String|The login of the requested user.
savedVariable[`0-?`].broadcaster_name|String|The display name of the requested user.
savedVariable[`0-?`].broadcaster_id|String|The User ID of the requested user.
savedVariable[`0-?`].id|String|The ID of the team.
savedVariable[`0-?`].name|String|The internal name of the team.
savedVariable[`0-?`].team_display_name|String|The display name of the team.
savedVariable[`0-?`].info|String|The description on the team.
savedVariable[`0-?`].updated_at|String|The time in Twitch format that the team was last updated.
savedVariable[`0-?`].created_at|String|The time in Twitch format that the team was created.
{:class='table table-secondary w-auto table-hover text-break'}

{% include alert.html text="Requires the <code>user:read:email</code> Twitch scope for the selected channel/account." type="info" %}
