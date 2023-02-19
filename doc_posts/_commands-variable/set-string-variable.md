---
layout: default
title: "Set String Variable"
num: 1
redirect_from:
  - commands/20
---

Creates a new local variable containing text.\
Checking `relative` will cause it to do string addition. I.e. if a variable `myVariable` already exists and contains `Hello` and you enter `World` in the Text field, `myVariable` will be now `HelloWorld`. 


{% include alert.html text="Variable names can contain numbers, letters and _, but cannot start with a number itself. " type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------
| Variable Name | String | Name of the variable. |
|Relative|Checkbox|Checked = will be turned into string addition, Unchecked = replaces whatever is currently in the original variable if already populated
| Text | String | Whatever text you want to set the variable to. You can press ENTER to insert a new line.
{:class='table table-primary'}






