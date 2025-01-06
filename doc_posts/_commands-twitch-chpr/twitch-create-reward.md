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








