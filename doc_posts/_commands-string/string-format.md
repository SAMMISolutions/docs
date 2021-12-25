---
title: "String: Format"
num: 9
---

Divides a string into multiple lines. The new line will be compensated with `\n`.\
Very useful command to use together with Math: Trigger Pull for Bits or Redeem points with a message. You can force the viewer's message to be split into multiple lines in your Text GDI+ source.


| Box Name | Type | Description | 
|-------|--------|--------|
|Variable|	String|	Variable name to save the formatted string
|String|	String	|String to format. Use /$variable$/ if your string is inside another variable.
|Max Width {% include asterisk.html%}|	String|	An arbitrary number. This is technically a pixel width, but you will have to test to see what you receive back.
|Max Word Length*|	String|	Amount of characters to allow before cutting the word in the middle.
{:class='table table-primary ' }

{% include media_modal.html img="string_format.png" w="100" btn="1" alt="Examples of formatted strings in OBS GDI+ Text Sources" %} 






