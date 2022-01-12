---
title: Input Boxes
num: 2
---

When you start using commands in LioranBoard, you will notice that some parameter boxes have yellow color and some have white color.
{% include image.html w="100" src="variable_box.png" alt="Different parameter box colors" %}

It's extremely important to know the difference as you need to **format your input according to the color of the box**.

| Operation | White Box| Yellow Box| 
|-------|--------|--------
|Inserting another variable | You must wrap other variables in */$$/*. <br/> `/$myVariable$/` | You can directly type another variable.<br/> `myVariable`
|Inserting array value | You must wrap them in */$$/*. <br/> `/$myArray[0]$/` | You can directly insert them. <br/> `myArray[0]`
|Inserting real values (numbers) | You can directly insert them.<br/> `26` | You can directly insert them. <br/> `26`
|Inserting string values (text) | You can directly insert them, such as `Hello World` and even use new lines by pressing ENTER | You have to wrap any string in double/single quotes. <br/> `"Hello World"` or `'Hello World'`
|Using a combination of strings and variables | You can insert a variable into text by wrapping it in */$$/*. <br/> `Hello world, this is my /$myVariable$/, isn't it cool?` | You must wrap any string in double/single quotes and use `+` to combine them with other variables. The whole value must be enclosed in parentheses. <br/> `( "Hello World, this is my " + myVariable + ", isn't this cool?" )`
|Math Operations| All math operations must be enclosed in */$$/* and parentheses.<br/> `Hello world, do you know what's 3+7? It's /$(3+7)$/!` | All math operations must be enclosed in parentheses.<br/> `( "Hello world, do you know what's 2+7? It's " + (2 + 7) + "!" )`
{:class='table table-secondary w-auto table-hover text-break' }


