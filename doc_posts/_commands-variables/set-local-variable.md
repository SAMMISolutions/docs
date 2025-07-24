---
layout: default
title: "Set Local Variable"
num: 1
redirect_from:
  - commands/15
---

Creates a new local variable or modifies an existing one via an expression.

Also supports setting button variables directly to objects/arrays without having to parse and stringify them. This includes setting array values to other objects, too.\

#### Parameters:

| Name | Type | Value Type | Description |
|-------|--------|--------|----------|
| Variable Name | Text Box | string | Name of the variable. |
| Operator | {% include cmd_param.html param="Operator Box" %} | string | Operator you wish to use on the value.|
| Variable/Number/String | | {% include asterisk.html%} | Whatever you want to set the variable value to. Can contain complex math.
{:class='table table-primary'}

**Advanced Users**\
You can use this command to create and modify all variables, including global and button variables, object keys and array items. Lots of commands in SAMMI are redundant and rather targeted at users with no coding knowledge.\
Global variables: Use `global.` prefix, since they're all stored in an object called `global`.\
Button variables: Use `<buttonID>.` prefix, since they're all stored in an object named after the button ID.\
Array Values: Use `<myArray>[<index>]` to change a value inside an array.\
Object Keys: Use `<myObject>.<key>` to change a key inside an object.\
You can access nested objects and arrays by using dot notation, it works the same just like in JavaScript. Bracket notation does not work, you must use *Set/Get Object Variable* command for keys containing spaces or dashes.






