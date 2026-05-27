---
title: "Get Channel Point Rewards"
num: 5
version: 202310
redirect_from:
  - commands/280
---

Gets a list of the custom Channel Point Rewards for the specified channel. Will not return info on standard Rewards, like "Highlight This Message".
For more information on what the response contains, check out the Response Body table in the [Twitch API Reference Guide for Get Custom Reward](https://dev.twitch.tv/docs/api/reference/#get-custom-reward)

{% include async.html %}

| Box Name | Type | Description | 
|-------|--------|--------
|Channel|String|Channel name to get rewards for
|Save Variable As|String|Variable to save the result
{:class='table table-primary'}

**Saved Payload:**

SAMMI saves the full response object returned by Twitch.

| Variable Name | Type | Description |
|-------|--------|--------|
|data|Array|Array of custom Channel Point Reward objects returned by Twitch.
|data[`0-?`].id|String|Reward ID.
|data[`0-?`].broadcaster_id|String|Twitch User ID of the broadcaster.
|data[`0-?`].broadcaster_login|String|Login name of the broadcaster.
|data[`0-?`].broadcaster_name|String|Display name of the broadcaster.
|data[`0-?`].title|String|Reward title.
|data[`0-?`].prompt|String|Reward description shown to viewers.
|data[`0-?`].cost|Number|Channel Point cost.
|data[`0-?`].background_color|String|Reward background color.
|data[`0-?`].is_enabled|Boolean|Whether the reward is enabled.
|data[`0-?`].is_user_input_required|Boolean|Whether viewer input is required.
|data[`0-?`].is_paused|Boolean|Whether the reward is paused.
|data[`0-?`].is_in_stock|Boolean|Whether the reward can currently be redeemed.
|data[`0-?`].image|Object|Custom reward image URLs, if set.
|data[`0-?`].default_image|Object|Default reward image URLs.
|data[`0-?`].max_per_stream_setting|Object|Per-stream redemption limit settings.
|data[`0-?`].max_per_user_per_stream_setting|Object|Per-user per-stream redemption limit settings.
|data[`0-?`].global_cooldown_setting|Object|Global cooldown settings.
|data[`0-?`].should_redemptions_skip_request_queue|Boolean|Whether redemptions skip the request queue.
|data[`0-?`].redemptions_redeemed_current_stream|Number|Redemptions in the current stream, if available.
|data[`0-?`].cooldown_expires_at|String|When the global cooldown expires, if active.
{:class='table table-secondary w-auto table-hover text-break'}

**Twitch API Endpoint:** `GET /helix/channel_points/custom_rewards`

**Example SAMMI Response Object:**
```json
{
  "data": [
    {
      "id": "afaa7e34-6b17-49f0-a19a-d1e76eaaf673",
      "broadcaster_id": "98765432",
      "broadcaster_login": "examplestreamer",
      "broadcaster_name": "ExampleStreamer",
      "title": "Hydrate!",
      "prompt": "Make the streamer drink some water",
      "cost": 500,
      "background_color": "#00E5CB",
      "is_enabled": true,
      "is_user_input_required": false,
      "is_paused": false,
      "is_in_stock": true,
      "image": null,
      "default_image": {
        "url_1x": "https://static-cdn.jtvnw.net/custom-reward-images/default-1.png",
        "url_2x": "https://static-cdn.jtvnw.net/custom-reward-images/default-2.png",
        "url_4x": "https://static-cdn.jtvnw.net/custom-reward-images/default-4.png"
      },
      "max_per_stream_setting": { "is_enabled": false, "max_per_stream": 0 },
      "max_per_user_per_stream_setting": { "is_enabled": false, "max_per_user_per_stream": 0 },
      "global_cooldown_setting": { "is_enabled": false, "global_cooldown_seconds": 0 },
      "should_redemptions_skip_request_queue": false,
      "redemptions_redeemed_current_stream": null,
      "cooldown_expires_at": null
    }
  ]
}
```
