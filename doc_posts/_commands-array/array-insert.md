---
title: "Array Insert"
num: 1
---

Inserts a value into an array in a specific index (position), shifting other values to the right.



**The position you can insert the value to can be:**

- top - adds a value to the end of the array (same as `Array push` in Javascript)

  {% include image.html w="50" src="push.png" alt="Add a value to the end of the stack" %}

- 0 - adds a value to the beginning of the array (same as `Array unshift` in Javascript)

  {% include image.html w="50" src="unshift.png" alt="Add a value to the beginning of the stack" %}

- index (position) to insert the value to (similar to `Array splice` in JavaScript)

  {% include image.html w="75" src="array-insert.png" alt="Visual representation of inserting a value into an array by index" %}

{% include alert.html text="You can insert other strings and numbers into an array, but not another array or object, unless it is stringified." type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|Array |String	| Name of the array
|Position|{% include asterisk.html%}|Position to add the value to. Can be **top** {% include popover.html content="last element of the array" %}, 0 {% include popover.html content="first element of the array" %} or **index** (position) of the value.  
|Value | {% include asterisk.html%} | Value you want to add to the array
{:class='table table-primary'}









