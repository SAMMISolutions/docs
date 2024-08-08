---
title: "Update Redemption Status"
num: 14
redirect_from:
  - commands/187
---

Updates the status of custom reward redemption that has UNFULFILLED status.

{% include alert.html text="You can only update rewards that were previously created with SAMMI (you can verify it says 'Owned' in Twitch Connections - Edit Rewards window, and dupe it if needed)" type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|Login Name | Dropdown |Your Twitch login name (all lowercase characters)
|Reward (ID required)|Dropdown|ID of the custom reward to change the status. You can select it from the dropdown menu or type manually.
|Redeem ID|String|ID of the Custom Reward Redemption to update
|Status|Dropdown|The new status to set redemptions to. Can be either FULFILLED or CANCELED. Updating to CANCELED will refund the user their channel points.
{:class='table table-primary'}











