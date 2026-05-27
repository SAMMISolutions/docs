---
title: "Send Whisper"
num: 1.1
version: 202250
redirect_from:
  - commands/254
---

This command will send a whisper over the Twitch API. The whisper will be sent via the account that is connected to chat.
This feature also has some limitations as imposed by Twitch, detailed [here](https://dev.twitch.tv/docs/api/reference#send-whisper)

| Box Name | Type | Description | 
|-------|--------|--------
|Chat Message|String|Message you want to send.
|User Name|String|User who shall receive the message.
{:class='table table-primary'}

**Twitch API Endpoint:** `POST /helix/whispers`

| Request Field | Type | Description |
|-------|--------|--------
| from_user_id | String | The ID of the user sending the whisper |
| to_user_id | String | The ID of the user receiving the whisper |
| message | String | The whisper message to send (max 10,000 characters) |
{:class='table table-secondary w-auto table-hover text-break'}
