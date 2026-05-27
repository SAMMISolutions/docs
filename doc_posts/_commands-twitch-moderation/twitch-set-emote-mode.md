---
title: "Set Emote Mode"
num: 6.3
version: 202310
redirect_from:
  - commands/290
---

Enables or disables Emote-Only Mode in the specified channel.
Emote-Only Mode restricts what can be said in chat to only emotes.
VIPs and Moderators are not restricted.

If **Channel** is empty, SAMMI uses the default Twitch account.

| Box Name | Type | Description | 
|-------|--------|--------
|Channel|String|Channel name to set Emote-Only Mode for
|Enabled|Dropdown|Enable/Disable
{:class='table table-primary'}

{% include alert.html text="Requires the <code>moderator:manage:chat_settings</code> Twitch scope." type="info" %}

**Twitch API Endpoint:** `PATCH /helix/chat/settings`

| Request Field | Type | Description |
|-------|--------|--------
| broadcaster_id | String | The ID of the broadcaster whose chat settings are being updated |
| moderator_id | String | The ID of a moderator or the broadcaster |
| emote_mode | Boolean | Set to `true` to enable Emote-Only Mode, `false` to disable |
{:class='table table-secondary w-auto table-hover text-break'}
