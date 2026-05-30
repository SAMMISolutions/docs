---
title: "Send Announcement"
num: 18
redirect_from:
  - commands/241
---

Sends a chat message in the 'Announcement' format.

| Box Name | Type | Description | 
|-------|--------|--------
|Announcement|String|Your announcement message (max 500 characters).
|Channel Name|String|Channel for the announcement to be made in. Leave blank for default.
{:class='table table-primary'}

{% include alert.html text="If the announcement exceeds 500 characters, SAMMI will show a warning and automatically truncate it before sending the request." type="warning" %}

**Twitch API Endpoint:** `POST /helix/chat/announcements`

| Request Field | Type | Description |
|-------|--------|--------
| broadcaster_id | String | The ID of the broadcaster's channel to send the announcement to |
| moderator_id | String | The ID of a user who has permission to moderate the channel |
| message | String | The announcement text to send (max 500 characters) |
| color | String | The color used to highlight the announcement: `blue`, `green`, `orange`, `purple`, `primary` (default) |
{:class='table table-secondary w-auto table-hover text-break'}
