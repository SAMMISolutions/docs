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
Channel|Twitch Account|Channel name to get a random chatter from. Leave empty to use the default Twitch account.
Save Variable As|String|Variable name to save the viewer display name.
{:class='table table-primary'}

{% include alert.html text="Requires the <code>moderator:read:chatters</code> and <code>user:read:email</code> Twitch scopes for the selected channel/account." type="info" %}
