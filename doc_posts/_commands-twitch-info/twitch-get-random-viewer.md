---
title: "Get Random Viewer"
num: 6
version: 202430
redirect_from:
  - commands/338
---

Gets the display name of a random viewer currently connected to the broadcaster's chat session.

If **Channel** is empty, SAMMI uses the default Twitch account. The command reads up to the first 1000 chatters returned by Twitch and chooses one of them at random. If the channel is invalid, Twitch is not connected, or no chatters are returned, the saved variable is set to `undefined`.

{% include async.html %}

| Box Name | Type | Description | 
|-------|--------|--------
|Channel|Twitch Account|Channel name to get a random chatter from. Leave empty to use the default Twitch account.
|Save Variable As|String|Variable name to save the viewer display name.
{:class='table table-primary'}

**Saved Value:**

| Value | Type | Description |
|-------|------|-------------|
|savedVariable|String|Display name (`user_name`) of one randomly selected chatter from the first 1000 chatters returned by Twitch.|
|undefined|Undefined|Saved if Twitch is not connected, the channel cannot be resolved, no chatters are returned, required scopes are missing, or the request fails.|
{:class='table table-secondary w-auto table-hover text-break'}

{% include alert.html text="Requires the <code>moderator:read:chatters</code> and <code>user:read:email</code> Twitch scopes for the selected channel/account." type="info" %}
