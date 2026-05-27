---
title: "Create Reward"
num: 13.1
redirect_from:
  - commands/229
---

Creates a Channel Point Reward on Twitch that will be owned by SAMMI. Only rewards owned by SAMMI can be further modified from within SAMMI.

{% include async.html %}

| Box Name | Type | Description |
|-------|--------|--------
|Login Name | Dropdown |Your Twitch login name (all lowercase characters)
|Title|String|What you want to name your new reward.
|Cost|Number {% include asterisk.html%}|How much you want the reward to cost. You can use variables.
|Color| Color Picker |Display colour of the reward on Twitch.
|Input|Checkbox|If enabled, requires a viewer's input.
|Description|String|Description of the reward.
|Save ID Variable As|String|Variable to save the reward ID as.
|Enabled|Checkbox|Whether you want to enable the reward after creation.
{:class='table table-primary'}

**Saved Value:**

| Value | Type | Description |
|-------|------|-------------|
|savedVariable|String|ID of the newly created Channel Point Reward.|
|""|String|Saved as an empty string if Twitch does not return a reward ID.|
|undefined|Undefined|Saved if the Twitch account cannot be resolved or the required scope is missing.|
{:class='table table-secondary w-auto table-hover text-break'}

**Twitch API Endpoint:** `POST /helix/channel_points/custom_rewards`

| Request Field | Type | Description |
|-------|--------|--------
| broadcaster_id | string | The ID of the broadcaster to add the custom reward to. |
| title | string | The custom reward's title. |
| cost | integer | The cost of the reward, in channel points. |
| is_enabled | boolean | Whether the reward is enabled. |
| background_color | string | The background color to use for the reward (in Hex color code format, e.g. `#9147FF`). |
| is_user_input_required | boolean | Whether the user needs to enter information when redeeming the reward. |
| prompt | string | The prompt shown to the viewer when they redeem the reward. |
{:class='table table-secondary w-auto table-hover text-break'}






