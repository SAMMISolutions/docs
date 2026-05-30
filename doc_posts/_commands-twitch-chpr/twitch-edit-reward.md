---
title: "Edit Reward"
num: 13.5
redirect_from:
  - commands/186
  - commands/231
  - commands/448
---

Updates a Custom Channel Points Reward created on your channel. All fields are optional — leave any field empty (or set to **No Change**) to keep the current value.

{% include alert.html text="You can only edit rewards that were previously created with SAMMI (you can verify it says 'Owned' in Twitch Connections - Edit Rewards window, and dupe it if needed)." type="warning" %}

| Box Name | Type | Description |
|-------|--------|--------
| Reward (ID required) | Dropdown | ID of the custom reward to update. Select from the dropdown or enter manually. |
| Channel Name | Dropdown | Your Twitch login name. Leave empty to use your default streamer account. |
| Name | String | The new title of the reward. Leave empty for no change. (max 45 characters) |
| Cost | Number | The new cost in channel points. Leave empty for no change. |
| Enabled | Dropdown | Enable or disable the reward. **No Change** keeps the current state. |
| Pause | Dropdown | Pause or unpause the reward. **No Change** keeps the current state. |
| Input Required | Dropdown | Whether viewers must enter text when redeeming. **No Change** keeps the current state. |
| Skip Queue | Dropdown | Whether redemptions skip the fulfillment queue. **No Change** keeps the current state. |
| Set Color | Checkbox | If checked, updates the reward's background color using the color picker below. |
| Background Color | Color Picker | New background color for the reward on Twitch. Only applied when **Set Color** is checked. |
| Cooldown (s) | Number | Global cooldown in seconds between any redemptions. Set to 0 to disable. Leave empty for no change. |
| Max/User | Number | Maximum redemptions per user per stream. Set to 0 to disable. Leave empty for no change. |
| Max/Stream | Number | Maximum redemptions per stream. Set to 0 to disable. Leave empty for no change. |
| Description | String | The prompt shown to viewers when redeeming. Leave empty for no change. (max 200 characters) |
{:class='table table-primary'}

{% include alert.html text="If the Name or Description exceeds the character limit, SAMMI will show a warning and automatically truncate it before sending the request." type="warning" %}

**Twitch API Endpoint:** `PATCH /helix/channel_points/custom_rewards`

| Request Field | Type | Description |
|-------|--------|--------
| broadcaster_id | string | The ID of the broadcaster that owns the custom reward. |
| id | string | The ID of the reward to update. |
| title | string | The reward's title. |
| cost | integer | The cost of the reward, in channel points. |
| is_enabled | boolean | Whether the reward is enabled. |
| is_paused | boolean | Whether the reward is currently paused. |
| prompt | string | The prompt shown to the viewer when they redeem the reward. |
| background_color | string | Background color in Hex format (e.g. `#9147FF`). |
| is_user_input_required | boolean | Whether the user needs to enter information when redeeming. |
| should_redemptions_skip_request_queue | boolean | Whether redemptions are immediately fulfilled. |
| global_cooldown_seconds | integer | Cooldown period in seconds between redemptions. |
| is_global_cooldown_enabled | boolean | Whether the global cooldown is active. |
| max_per_user_per_stream | integer | Maximum redemptions per user per stream. |
| is_max_per_user_per_stream_enabled | boolean | Whether the per-user limit is active. |
| max_per_stream | integer | Maximum redemptions per stream. |
| is_max_per_stream_enabled | boolean | Whether the per-stream limit is active. |
{:class='table table-secondary w-auto table-hover text-break'}
