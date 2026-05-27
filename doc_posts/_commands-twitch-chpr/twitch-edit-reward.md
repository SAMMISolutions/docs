---
title: "Edit Reward"
num: 13.5
redirect_from:
  - commands/186
---

Updates a Custom Channel Points Reward created on your channel. 

{% include alert.html text="You can only edit rewards that were previously created with SAMMI (you can verify it says 'Owned' in Twitch Connections - Edit Rewards window, and dupe it if needed)" type="warning" %} 

| Box Name | Type | Description |
|-------|--------|--------
|Login Name | Dropdown |Your Twitch login name (all lowercase characters)
|Reward (ID required)|Dropdown|ID of the custom reward to update. You can select it from the dropdown menu or type manually.
|Name|String|The title of the reward
|Cost|Number {% include asterisk.html%}|The cost of the reward
|Enabled|Checkbox|If the reward is currently enabled or not. If not enabled, the reward won’t show up to viewers.
|Pause|Checkbox|If the reward is currently paused. If paused, viewers cannot redeem it.
{:class=’table table-primary’}

**Twitch API Endpoint:** `PATCH /helix/channel_points/custom_rewards`

| Request Field | Type | Description |
|-------|--------|--------
| broadcaster_id | string | The ID of the broadcaster that owns the custom reward. |
| id | string | The ID of the reward to update. |
| title | string | The reward’s title. |
| cost | integer | The cost of the reward, in channel points. |
| is_enabled | boolean | Whether the reward is enabled. |
| is_paused | boolean | Whether the reward is currently paused. |
{:class=’table table-secondary w-auto table-hover text-break’}










