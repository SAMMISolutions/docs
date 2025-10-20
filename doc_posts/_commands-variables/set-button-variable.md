---
layout: default
title: "Set Button Variable"
num: 2
redirect_from:
  - commands/160
---

Creates a new, or modifies an existing button variable.\
Button variables are other buttons' local variables.

If you need to set a button variable in non persistent button, please use the [Set Button Instance Variable](#setbuttoninstancevariable) command instead.

Parameters:

| Name | Type | Value Type | Description |
|-------|--------|--------|----------|
| Button ID | {% include cmd_param.html param="Text Box" %} | string | The ID of the button you want to set the variable for. |
| Variable Name | {% include cmd_param.html param="Text Box" %} | string | Name of the variable. Can use an [Accessor Path](/commands/variables#accessors), but cannot access other scopes. |
| Operator | {% include cmd_param.html param="Operator Box" %} | string | Operator you wish to use on the value.|
| Variable/Number/String | {% include cmd_param.html param="Expression Box" %} | {% include asterisk.html%} | Whatever you want to set the variable value to, including arrays and objects (2023.2.2 and up).|
{:class='table table-primary table-cmd-params'}