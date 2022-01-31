---
title: "String Clamp"
num: 3
---

Extracts a part of a string and returns the extracted part.\
You need to specify the index of the first character and the amount of characters to extract.

{% include alert.html text='Do not use String Clamp on real values (numbers) and Clamp on strings, as this will result in an error and LB crashing.' type="warning" %} 


| Box Name | Type | Description | 
|-------|--------|--------|
|Variable|	String|	Variable name to save the clamped string.
|String| String| String to clamp
|Start Position|	Int {% include asterisk.html%}|	Where to start the clamp
|Amount|	Int {% include asterisk.html%}|	Amount of characters to include in the clamp
{:class='table table-primary ' }

| Original string | Start| Amount| Result| 
|-------|--------|--------|--------
|Hello World!|0|5|Hello
|This is cool!|9|4|cool
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }





