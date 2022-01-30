---
layout: default
title: "Set Local Variable"
num: 1
---

Creates a new local variable or modifies an existing one.\
Local variables are contained in the button that created them. They can be accessed from other buttons by using Set/Get Button Variable (as long as the button has persistent variables enabled).

{% include alert.html text="Variable names can contain numbers, letters and _, but cannot start with a number itself. " type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------
| Variable Name | String | Name of the variable. |
| Operation | Dropdown | Operator you wish to use on the value.|
| Value | Any {% include asterisk.html%} | Whatever you want to set the variable value to. Can contain complex math.
{:class='table table-primary'}

**Advanced Users**\
You can use this command to create and modify all variables, including global and button variables, object keys and array items. Lots of commands in LioranBoard are redundant and rather targeted at users with no coding knowledge.\
Global variables: Use `global.` prefix, since they're all stored in an object called `global`.\
Button variables: Use `buttonID.` prefix, since they're all stored in an object named after the button ID.\
Array Values: Use `myArray[index]` to change a value inside an array.\
Object Keys: Use `myObject.key` to change a key inside an object.\
You can access nested objects and arrays by using dot notation, it works the same just like in JavaScript. Bracket notation does not work, you must use *Set/Get Object Variable* command for keys containing spaces or dashes.






