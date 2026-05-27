---
title: "Add VIP"
num: 2
version: 202310
redirect_from:
  - commands/284
---

Promotes a user to VIP in the specified Twitch channel. To remove VIP status, use [Remove VIP]({{ "commands/twitch-remove-vip" | relative_url }}).

If **Channel** is empty, SAMMI uses the default Twitch account.

| Box Name | Type | Description | 
|-------|--------|--------
|Channel|String|The channel to promote the specified user in
|User Name|String|The username of the person to be promoted
{:class='table table-primary'}

{% include alert.html text="Requires the <code>channel:manage:vips</code> and <code>user:read:email</code> Twitch scopes." type="info" %}

**Twitch API Endpoint:** `POST /helix/channels/vips`

| Request Field | Type | Description |
|-------|--------|--------
| broadcaster_id | String | The ID of the broadcaster adding the VIP |
| user_id | String | The ID of the user to add as VIP |
{:class='table table-secondary w-auto table-hover text-break'}
