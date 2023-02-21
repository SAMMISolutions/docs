---
title: "If Statement"
num: 1
redirect_from:
  - commands/7
---

If statement is used to specify a block of commands to be executed if a condition (or multiple conditions) is true.\
Commands under Else statement are executed instead if a condition is false.\
You can think of it as `If something is true, then do something, otherwise do something else.`  

By pressing the **+** button, you can add:
- **And** - add another AND condition. All conditions must be true for the block to execute. If one of them is false, the whole IF statement will be also false and the ELSE block will be executed instead.
- **Or** - add another OR condition. At least one of the conditions must be true for the block to execute. If all of them are false, the whole IF statement will be also false and the ELSE block will be executed instead.
 
{% include alert.html text="You can nest IF statements inside another IF statements" type="info" %}  

| Box Name | Type | Description | 
|-------|--------|--------|
| Value| {% include asterisk.html%}	 | Left side of the comparison you want to evaluate. 
|Compare |	Dropdown menu |	Operator you wish to use to compare left and right side.
|Value  |	{% include asterisk.html%}|	Whatever value you want to compare the left side with.
{:class='table table-primary' }








