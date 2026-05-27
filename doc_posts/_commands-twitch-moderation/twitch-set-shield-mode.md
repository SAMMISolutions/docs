---
title: "Set Shield Mode"
num: 6.4
version: 202310
redirect_from:
  - commands/269
---

Toggles Shield Mode on/off for the specified channel.
Click [here](https://safety.twitch.tv/s/article/Protect-your-channel-with-Shield-Mode) for more information on Shield Mode. 

If **Channel** is empty, SAMMI uses the default Twitch account.

| Box Name | Type | Description | 
|-------|--------|--------
|Channel|String|Channel to toggle Shield Mode for
|Enabled|Dropdown|Enable/Disable
{:class='table table-primary'}

{% include alert.html text="Requires the <code>moderator:manage:shield_mode</code> Twitch scope." type="info" %}

**Twitch API Endpoint:** `PUT /helix/moderation/shield_mode`

| Request Field | Type | Description |
|-------|--------|--------
| broadcaster_id | String | The ID of the broadcaster whose Shield Mode to activate or deactivate |
| moderator_id | String | The ID of the moderator or broadcaster toggling Shield Mode |
| is_active | Boolean | Set to `true` to activate Shield Mode, `false` to deactivate |
{:class='table table-secondary w-auto table-hover text-break'}
