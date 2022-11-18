---
title: String Remove Section
num: 3.5
---

Removes a part of a string and returns the remaining string. This is the opposite of String Clamp.\
You need to specify the starting position and amount of characters to remove.

| Box Name | Type | Description | 
|-------|--------|--------|
|Save Variable As|	String|	Variable name to save the clamped string.
| String (text) | String| String to remove it from
|Start Position|	Int {% include asterisk.html%}|	Where to start the removal
|Amount of Characters|	Int {% include asterisk.html%}|	Amount of characters to remove
{:class='table table-primary ' }

| Original string | Start| Amount| Result| 
|-------|--------|--------|--------
|Hello World!| 6 | 10 | Hello
|Hello World! This is a nice day.| 6 |6 | Hello! This is a nice day.
|Lioran and Sebas is cool! | 1 | 11 | Sebas is cool!
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }





