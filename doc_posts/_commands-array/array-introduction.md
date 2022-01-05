---
title: "Introduction"
num: 0
---

#### What's an array?
Array is a special variable which can hold more than one value at a time.\
If you have a list of items (for example viewer names), storing them in single variables would look like this:
- var name1 = "Lioran"
- var name2 = "Neverwho"
- var name3 = "Daryl"

This seems quite inefficient if you happen to have a lot of names to store. The answer is to store them all in an array, which can hold many values under a single name and you can access them by referring to an index number: array `names = ["Lioran", "Neverwho", "Daryl"]`.\

{% include image.html w="75" src="array.png" alt="Representation of an array" %}

#### Array manipulation
If you want to retrieve a specific value from a stack, you can use the following formatting: `arrayName[position]`. Going by the example above, `names[2]` would retrieve `'Neverwho'`. [position] can also contain other variables or complex math.\
In the variable window you will see at the top of your screen the position 0, and at the bottom the last position. However, the TOP position of the stack is still the last one, and the BOTTOM position is 0. Be careful as this can be confusing at first.
{% include image.html w="75" src="https://i.imgur.com/qBeMTGK.jpg" alt="Top and bottom of a stack shows different in screen" external=true %}

One thing to note is that an array is cleared every time you close or reset Receiver. If you wish to save it, you can use [Array: Stringify]({{ "commands/array#arraystringify" | relative_url }}) and [File: Save String]({{ "commands/file#filesavestring" | relative_url }}) commands.











