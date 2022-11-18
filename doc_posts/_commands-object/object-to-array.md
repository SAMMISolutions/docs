---
title: "Object to Array"
num: 9
---

Converts the keys or values of an object into an array.

{% include alert.html text="The values array will not work properly with object values." type="warning" %}

| Box Name | Type | Description |
|-------|--------|--------
|Conversion Type	| Dropdown | Convert keys or values into the array.
|Object Name	| String | Name of the object to extract the keys or values.
|Array Name	| String | Name of the array to save the keys or values.
{:class='table table-primary'}

| Conversion Type | Object | Result | 
|-------|--------|--------
|Keys| {"name":"SAMMI", "likes":20000} | ["likes","name"]
|Values| {"name":"SAMMI", "likes":20000} | [20000,"SAMMI"]
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }

{% include alert.html text="Objects are not ordered, the array elements will not always have the same order as the object keys." type="warning" %}
