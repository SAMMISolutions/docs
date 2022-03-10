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

This seems quite inefficient if you happen to have a lot of names to store. The answer is to store them all in an array, which can hold many values under a single name: `names = ["Lioran", "Neverwho", "Daryl"]`.

{% include image.html w="75" src="array.png" alt="Representation of an array" %}

#### Array manipulation
If you want to retrieve a specific value(element) from an array, you can use the following formatting:\
`arrayName[position]`\
If we have an array `names = ["Lioran", "Neverwho", "Daryl"]`, typing `names[1]` would retrieve `'Neverwho'` (the first value of an array has position of 0).\
Array position (also called index) can contain other variables or complex math, too.   

Some command boxes allow you to use not only position, but also **top** for retrieving and manipulating values in an array. Selecting **top** will target a value at the END of an array (last index). **0** will target a value at the BEGINNING of an array (index of 0).  


Array is cleared every time you close or reset Receiver. If you wish to save it, you can use [Array Stringify]({{ "commands/array#arraystringify" | relative_url }}) and [File: Save String]({{ "commands/file-ini#filesavetext" | relative_url }}) commands.

#### Convert stacks saved in .ini files from LB1 to arrays in LB2
If you're using the same .ini files from LioranBoard 1, you will notice that your stringified stacks don't get properly parsed when loaded back into LioranBoard 2 (they end up being objects instead of arrays).  

**Use this Stack to Array converter button:**
{% include pastebin.html pastebin="f5qNy63G" %}













