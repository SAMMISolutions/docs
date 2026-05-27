---
title: "Delete Reward"
num: 13.8
redirect_from:
  - commands/230
---

Deletes your previously created reward.

{% include alert.html text="You can only delete rewards that were previously created with SAMMI (you can verify it says 'Owned' in Twitch Connections - Edit Rewards window, and dupe it if needed)" type="warning" %}  

| Box Name | Type | Description |
|-------|--------|--------
|Login Name | Dropdown |Your Twitch login name (all lowercase characters)
|Reward (ID required)|Dropdown|ID of the custom reward to delete.
{:class='table table-primary'}

**Twitch API Endpoint:** `DELETE /helix/channel_points/custom_rewards`

| Request Field | Type | Description |
|-------|--------|--------
| broadcaster_id | string | The ID of the broadcaster that owns the custom reward. |
| id | string | The ID of the custom reward to delete. |
{:class='table table-secondary w-auto table-hover text-break'}










