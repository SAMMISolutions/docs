---
title: "Extra Edit Reward"
num: 13.6
redirect_from:
  - commands/231
---

Updates a Custom Channel Points Reward created on your channel, allowing you to change additional settings that are not accessible from the regular Edit Reward command (see above).

{% include alert.html text="You can only edit rewards that were previously created with SAMMI (you can verify it says 'Owned' in Twitch Connections - Edit Rewards window, and dupe it if needed)" type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|Login Name|Dropdown|Your Twitch login name (all lowercase characters). Leave empty for your default streamer account.
|Reward (ID required)|Dropdown|ID of the custom reward to update. 
|Description|String|Description of the reward.
|Color|Color Picker|Display colour of the reward on Twitch.
|User Input|Checkbox|If enabled, requires a viewer's input.
|Skip Queue|Checkbox|If enabled, allows the redemption to skip the queue.
|Cooldown (s)|Number {% include asterisk.html%}|Amount of seconds the reward will be on a cooldown.
|Max/User|Number {% include asterisk.html%}|Number of allowed redemptions per user.
|Max/Stream|Number {% include asterisk.html%}|Number of allowed redemptions per stream.
{:class='table table-primary'}

**Twitch API Endpoint:** `PATCH /helix/channel_points/custom_rewards`

| Request Field | Type | Description |
|-------|--------|--------
| broadcaster_id | string | The ID of the broadcaster that owns the custom reward. |
| id | string | The ID of the reward to update. |
| prompt | string | The prompt shown to the viewer when they redeem the reward. |
| background_color | string | The background color to use for the reward (in Hex color code format, e.g. `#9147FF`). |
| is_user_input_required | boolean | Whether the user needs to enter information when redeeming the reward. |
| should_redemptions_skip_request_queue | boolean | Whether redemptions should be immediately fulfilled. |
| global_cooldown_seconds | integer | The cooldown period in seconds between redemptions. |
| max_per_user_per_stream | integer | Maximum number of redemptions allowed per user per stream. |
| max_per_stream | integer | Maximum number of redemptions allowed per stream. |
{:class='table table-secondary w-auto table-hover text-break'}










