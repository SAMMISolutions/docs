---
title: "Set Slow Mode"
num: 6
version: 202310
redirect_from:
  - commands/288
---

Enables or disables Slow Mode in the specified channel.
Slow Mode restricts how often users can talk in a channel to once per specified amount of time.
VIPs and Moderators are not restricted.

If **Channel** is empty, SAMMI uses the default Twitch account.

| Box Name | Type | Description | 
|-------|--------|--------
|Channel|String|Channel name to set Slow Mode for
|Enabled|Dropdown|Enable/Disable
|Time|Number {% include asterisk.html%}|Amount of time, in seconds, that users must wait before they can chat again
{:class='table table-primary'}

{% include alert.html text="Requires the <code>moderator:manage:chat_settings</code> Twitch scope." type="info" %}

**Twitch API Endpoint:** `PATCH /helix/chat/settings`

| Request Field | Type | Description |
|-------|--------|--------
| broadcaster_id | String | The ID of the broadcaster whose chat settings are being updated |
| moderator_id | String | The ID of a moderator or the broadcaster |
| slow_mode | Boolean | Set to `true` to enable Slow Mode, `false` to disable |
| slow_mode_wait_time | Integer | Optional. Time in seconds users must wait before chatting again (3–120) |
{:class='table table-secondary w-auto table-hover text-break'}
