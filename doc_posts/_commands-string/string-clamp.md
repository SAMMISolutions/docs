---
title: "String: Clamp"
num: 3
---

Extracts a part of a string and returns the extracted part.\
You need to specify the index of the first character and the amount of characters to extract.

{% include alert.html text='Do not use String:Clamp on real values and Math:Clamp on strings, as this will result in an error and LB crashing.' type="warning" %} 


| Box Name | Type | Description | 
|-------|--------|--------|
|Variable|	String|	Variable name containing the string to clamp
|Start|	Real|	Where to start the clamp
|Count|	Real|	Amount of characters to include in the clamp
{:class='table table-primary ' }

| Original string | Start| Count| Result| 
|-------|--------|--------|--------
|"Hello World!"|0|5|"Hello"
|"This is cool!"|9|4|"cool"
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }

{% include media_modal.html img="split_string.png" w="100" btn="1" alt="Split a string containing multiple usernames into separate variables" pastebin="XmPprLKU" %} 

{% include example_public.html src="https://i.imgur.com/hsvUZl0.jpeg" title="Date in YYMMDD format" pastebin="V5pAsu0L" desc=description %} 






