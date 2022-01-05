---
title: "Array: Insert"
num: 1
---

Inserts an item into an array in a specific index (position), shifting other items to the right.\
You can insert a simple string or number, but also an object or another array.

{% include image.html w="75" src="array-insert.png" alt="Visual representation of inserting an item into an array" %}

The **position** you're insert the value to can be: 

- top - adds an item to the end of the array (same as `Array push` in Javascript)

{% include image.html w="50" src="push.png" alt="Add a value to the end of the stack" %}

- bottom - adds an item to the beginning of the array (same as `Array unshift` in Javascript)

{% include image.html w="50" src="unshift.png" alt="Add a value to the beginning of the stack" %}

- index of the position to insert the item to (similar to `Array splice()` in JavaScript)

{% include alert.html text="Any position index higher than the array size will be regarded as the top." type="info" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|Array |String	| Name of the array
|Position|index/top/bottom {% include asterisk.html%}|Position to add the value to. Can be **top** {% include popover.html content="beginning of the stack" %}, **bottom** {% include popover.html content="end of the stack" %} or **index** of the position. 
|Value {% include asterisk.html%}| Variable, real or string | Item you want to add to the array
{:class='table table-primary'}









