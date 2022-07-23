---
layout: default
title: "Set Button Variable"
num: 2
---

Creates a new button variable or modifies an existing one.\
Button variables are other buttons local variables. You cannot set a button variable for a button that has persistent variables disabled, this will crash SAMMI.

{% include alert.html text="Variable names can contain numbers, letters and _, but cannot start with a number itself. " type="warning" %}

| Box Name | Type | Description |
|-------|--------|--------
|Button ID | String | The button you want to set the variable for.
| Variable Name | String | Name of the variable. |
| Operation | Dropdown | Operator you wish to use on the value.|
| Value | Any {% include asterisk.html%} | Whatever you want to set the variable value to. Can contain complex math.
{:class='table table-primary'}






