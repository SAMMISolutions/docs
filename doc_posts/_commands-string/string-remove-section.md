---
title: String Remove Section
num: 3.5
---

Removes a part of a string and returns the remaining string. This is the opposite of String Clamp.\
You need to specify the starting position and amount of characters to remove.

| Box Name | Type | Description | 
|-------|--------|--------|
|Variable|	String|	Variable name to save the clamped string.
|String| String| String to clamp
|Start Position|	Int {% include asterisk.html%}|	Where to start the clamp
|Amount|	Int {% include asterisk.html%}|	Amount of characters to remove
{:class='table table-primary ' }

| Original string | Start| Amount| Result| 
|-------|--------|--------|--------
|Hello World!| 6 | 10 | Hello
|Hello World! This is a nice day.| 6 |6 | Hello! This is a nice day.
|Lioran and Melonax is cool! | 1 | 11 | Melonax is cool!
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }





