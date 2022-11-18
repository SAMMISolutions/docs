---
title: "Array Remove"
num: 3.2
---

Removes a value from an array from a specified index (position), shifting other values to the right.\
This is similar to `Array splice()` method in JavaScript.

{% include image.html w="75" src="array-remove.png" alt="Visual representation of removing a value from an array" %}

{% include alert.html text="You can also use Variable Delete command and populate it with <code>yourArrayName[valueIndex]</code> to remove a value, both commands will achieve the same." type="info" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|Array Name	|String	| Name of the array
|Delete Position|{% include asterisk.html%}|Position to delete the value at. Can be **top** {% include popover.html content="last element of the array" %}, **0** {% include popover.html content="first element of the array" %} or **index** (position) of the value.  
{:class='table table-primary'}









