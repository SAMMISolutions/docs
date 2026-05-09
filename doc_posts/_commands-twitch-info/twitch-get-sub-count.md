---
title: "Get Subscriber Count"
num: 3.1
redirect_from:
  - commands/177
---

Returns the total subscriber count for a Twitch channel.

If **Login Name** is empty, SAMMI uses the default Twitch account. If Twitch is not connected, the channel cannot be resolved, or the request fails, the saved variable is set to `undefined`.

{% include async.html %}

| Box Name | Type | Description | 
|-------|--------|--------
|Login Name|Twitch Account|Twitch channel to get the subscriber count for. Leave empty to use the default Twitch account.
|Save Variable As|String|Variable name to save the subscriber count.
{:class='table table-primary'}

{% include alert.html text="Requires the <code>channel:read:subscriptions</code> Twitch scope." type="info" %}
