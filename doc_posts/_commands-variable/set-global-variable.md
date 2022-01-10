---
layout: default
title: "Set Global Variable"
num: 3
---

Creates a new global variable or modifies an existing one.\ 
Global variables are persistent and always accessible by all the buttons. Try to avoid creating them unless absolutely necessary to avoid polluting the global namespace. 

{% include alert.html text="Variable names can contain numbers, letters and _, but cannot start with a number itself. " type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------
| Variable Name | String | Name of the variable. |
| Operation | Dropdown | Operator you wish to use on the value.|
| Value | Any {% include asterisk.html%} | Whatever you want to set the variable value to. Can contain complex math.
{:class='table table-primary'}






