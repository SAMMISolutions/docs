---
layout: default
title: "Set Button Instance Variable"
num: 2
redirect_from:
  - commands/300
---

Functions similarly to the "Set Button Variable" command, but with the added capability of setting a variable within a non-persistent button, and also directly setting it to an object/array.\
To use this command, you must provide the instance ID, which is automatically included in an Extension Command as part of the payload (`Data.instanceId`).\
Button instances are ephemeral and are destroyed once the button's execution is complete. To successfully set a variable within a non-persistent button, the button must still be active at the time the command is executed. If the button has already completed its execution, the instance will be destroyed, and setting the variable will no longer be possible. 

{% include alert.html text="Available in Developer Mode." type="info" %}

| Box Name | Type | Description |
|-------|--------|--------
|Button ID | String | The button you want to set the variable for.
|Button Instance ID | String | The button instance ID to set the variable in
| Variable Name | String | Name of the variable. |
| Operator | Dropdown | Operator you wish to use on the value.|
| Variable/Number/String | {% include asterisk.html%} | Whatever you want to set the variable value to. Can contain complex math.
{:class='table table-primary'}






