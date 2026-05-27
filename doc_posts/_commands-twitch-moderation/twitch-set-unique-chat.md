---
title: "Set Unique Chat"
num: 8.2
version: 202320
redirect_from:
  - commands/301
---

Enabling this setting prevents users from posting non-unique messages to the channel.\
It can be used to combat spam so that users cannot send the same things in chat multiple times.

If **Channel** is empty, SAMMI uses the default Twitch account.

| Box Name | Type | Description | 
|-------|--------|--------
|Channel | Dropdown |The Twitch channel the command will be used for.
|Enabled|Choice|Enabled: Turns the setting on. Disabled: Turns the setting off.
{:class='table table-primary'}

{% include alert.html text="Requires the <code>moderator:manage:chat_settings</code> Twitch scope." type="info" %}

**Twitch API Endpoint:** `PATCH /helix/chat/settings`

| Request Field | Type | Description |
|-------|--------|--------
| broadcaster_id | String | The ID of the broadcaster whose chat settings are being updated |
| moderator_id | String | The ID of a moderator or the broadcaster |
| unique_chat_mode | Boolean | Set to `true` to require unique messages only, `false` to disable |
{:class='table table-secondary w-auto table-hover text-break'}
