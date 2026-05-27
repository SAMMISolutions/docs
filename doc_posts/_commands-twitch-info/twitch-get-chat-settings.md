---
title: "Get Chat Settings"
num: 5.1
version: 202310
redirect_from:
  - commands/286
---

Gets the chat settings for the specified channel.
For more information on what the response contains, check out the Response Body table in the [Twitch API Reference Guide for Get Chat Settings](https://dev.twitch.tv/docs/api/reference/#get-chat-settings)

{% include async.html %}

| Box Name | Type | Description | 
|-------|--------|--------
|Channel|String|Channel name to get the chat settings for
|Save Variable As|String|Variable to save the result
{:class='table table-primary'}

**Saved Payload:**

SAMMI saves the first chat settings object returned by Twitch (`data[0]`).

| Variable Name | Type | Description |
|-------|--------|--------|
|broadcaster_id|String|Twitch User ID of the broadcaster.
|moderator_id|String|Twitch User ID of the moderator account used for the request.
|emote_mode|Boolean|Whether emote-only mode is enabled.
|follower_mode|Boolean|Whether follower-only mode is enabled.
|follower_mode_duration|Number|Minimum follow duration in minutes, if follower-only mode is enabled.
|slow_mode|Boolean|Whether slow mode is enabled.
|slow_mode_wait_time|Number|Slow mode wait time in seconds, if slow mode is enabled.
|subscriber_mode|Boolean|Whether subscriber-only mode is enabled.
|unique_chat_mode|Boolean|Whether unique chat mode is enabled.
|non_moderator_chat_delay|Boolean|Whether non-moderator chat delay is enabled.
|non_moderator_chat_delay_duration|Number|Chat delay duration in seconds, if enabled.
{:class='table table-secondary w-auto table-hover text-break'}

**Twitch API Endpoint:** `GET /helix/chat/settings`

**Example SAMMI Response Object:**
```json
{
  "broadcaster_id": "98765432",
  "moderator_id": "98765432",
  "emote_mode": false,
  "follower_mode": true,
  "follower_mode_duration": 10,
  "slow_mode": false,
  "slow_mode_wait_time": null,
  "subscriber_mode": false,
  "unique_chat_mode": false,
  "non_moderator_chat_delay": false,
  "non_moderator_chat_delay_duration": null
}
```
