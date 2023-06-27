---
layout: default
title: "Set Button Variable"
num: 2
redirect_from:
  - commands/160
---

Creates a new button variable or modifies an existing one.\
Button variables are other buttons local variables.\
If you need to set a button variable in non persisten button, please use [Set Button Instance Variable](#setbuttoninstancevariable) command instead.

{% include alert.html text="Variable names can contain numbers, letters and _, but cannot start with a number itself." type="warning" %}

| Box Name | Type | Description |
|-------|--------|--------
|Button ID | String | The button you want to set the variable for.
| Variable Name | String | Name of the variable. |
| Operator | Dropdown | Operator you wish to use on the value.|
| Variable/Number/String | {% include asterisk.html%} | Whatever you want to set the variable value to, including arrays and objects (2023.2.2 and up). Can contain complex math. 
{:class='table table-primary'}






