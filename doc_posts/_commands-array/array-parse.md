---
title: "Parse Array/Object"
num: 10
redirect_from:
  - commands/168
---

Turns a JSON string into an array/object. Must be properly formatted (SAMMI will give you a warning if it finds any formatting errors).\
This way you can easily create a prepopulated object/array, as it supports nesting.\
Read more about JSON syntax at [w3schools.com](https://www.w3schools.com/js/js_json_syntax.asp).

{% include alert.html text="Parsing an array that's directly within another array is not supported." type="warning" %}

| Box Name | Type | Description |
|-------|--------|--------
|Array/Object Name	| String | Name of the variable to save the parsed array/object into
|String Array/JSON	| JSON String | JSON string to parse
{:class='table table-primary'}

| JSON string before conversion|  Result saved in the variable|
|-------|--------|
| {% include selectAll.html text='<code>["Lioran", "Melonax", "Cyanidesugar"]</code>' %}   | {% include image_table.html w="50" src="arrInsert.png" alt="Parsed JSON string" %} |
| {% include selectAll.html text='<code>["Hello", "Hi", {"MyObject": [1, 2, 3]}]</code>' %}   | {% include video_span.html w="50" src="arrInsert1.mp4" alt="Parsed JSON string" %} |
| {% include selectAll.html text='<code>["Lioran", "Melonax", ["cat", "rabbit", "dog"]]</code>' %}   | The inner array does NOT get parsed. {% include image_table.html w="50" src="arrInsert2.png" alt="Parsed JSON string" %} |
{:class='table table-secondary w-auto table-hover align-middle' }




