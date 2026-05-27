---
title: "Edit All Rewards"
num: 13.7
redirect_from:
  - commands/265
---

Updates *all* custom channel point rewards on your channel.

{% include alert.html text="You can only edit rewards that were previously created with SAMMI (you can verify it says 'Owned' in Twitch Connections - Edit Rewards window, and dupe it if needed)" type="warning" %} 

| Box Name | Type | Description |
|-------|--------|--------
|Login Name | Dropdown |Your Twitch login name (all lowercase characters)
|Enabled|Dropdown|If the rewards are currently enabled or not. If not enabled, the rewards won’t show up to viewers.
|Pause|Dropdown|If the rewards are currently paused. If paused, viewers cannot redeem them.
{:class=’table table-primary’}

**Twitch API Endpoint:** `PATCH /helix/channel_points/custom_rewards`

| Request Field | Type | Description |
|-------|--------|--------
| broadcaster_id | string | The ID of the broadcaster that owns the custom rewards. |
| id | string | The ID of each reward to update (called once per reward). |
| is_enabled | boolean | Whether the reward is enabled. |
| is_paused | boolean | Whether the reward is currently paused. |
{:class=’table table-secondary w-auto table-hover text-break’}










