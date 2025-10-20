---
layout: default
title: "Set Local Variable"
num: 1
redirect_from:
  - commands/15
---

Creates a new, or modifies an existing local variable via an expression.

Parameters:

| Name | Type | Value Type | Description |
|-------|--------|--------|----------|
| Variable Name | {% include cmd_param.html param="Text Box" %} | string | Name of the variable. Can use an [Accessor Path](/commands/variables#accessors). |
| Operator | {% include cmd_param.html param="Operator Box" %} | string | Operator you wish to use on the value.|
| Variable/Number/String | {% include cmd_param.html param="Expression Box" %} | {% include asterisk.html%} | Whatever you want to set the variable value to, including arrays and objects (2023.2.2 and up).|
{:class='table table-primary table-cmd-params'}

**Advanced Users**

Although it says "Set *Local* Variable", You can use this command to create and modify variables in different scopes, including global and button variables.\
You can also use this command to modify values and variables stored in Data Structures such as Objects and Arrays.

Lots of commands in SAMMI are redundant and rather targeted at users that don't know how to use Accessor Pathes.

Both Global and Button variables are internally stored in objects.\
Global Variables: in the `global` object
Button Variables: in an object named after your button's ID. Example: `ID138`