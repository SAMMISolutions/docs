---
title: "Array Find Value"
num: 4
---

Finds the first instance of a given value inside the array and returns its index(position) in the array.\
Returns -1 if value was not found.

{% include alert.html text="The value you're trying to find needs to be an exact match (case sensitive) to the array value." type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|Array Name	|String	| Name of the array to search for the value
|Save Array Position As| String| Name of the variable to save the index(position) of the found value|
|Find value | {% include asterisk.html%} | The value to find in the array
{:class='table table-primary'}

| Find value | array | Result | 
|-------|--------|--------
| "blue" | ["yellow","red","blue","orange","blue"] | 2
|"blue" | ["yellow","red","blue cat","orange"] | -1 (not found)
| "blue" | ["yellow","Blue","blue cat","blue"] | 3
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }








