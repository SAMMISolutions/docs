---
title: "String Clamp"
num: 3
redirect_from:
  - commands/93
---

Targets a part of a string and returns the extracted part.\
You need to specify the starting position and the amount of characters to extract.

{% include alert.html text='Do not use String Clamp on numbers, as this will result in an error and SAMMI crashing.' type="danger" %} 

Parameters:

| Name | Type | Value Type | Description |
|-------|--------|--------|----------|
| Save Variable As | {% include cmd_param.html param="Text Box" %} | string | Name of the variable to save the extracted string. Can use an [Accessor Path](/commands/variables#accessors). |
| String (text) | {% include cmd_param.html param="Text Box (Resizable)" %} | string | String to clamp. |
| Start Position | {% include cmd_param.html param="Expression Box" %} | number | Where to start the clamp (first character = 1 or 0)|
| Amount of Characters | {% include cmd_param.html param="Expression Box" %} | number | Amount of characters to extract starting from the start position. |
{:class='table table-primary table-cmd-params'}

Example Outputs:

| Original string | Start| Amount| Result| 
|-------|--------|--------|--------
|Hello World!|`1`|`5`|Hello
|This is cool!|`9`|`4`|cool
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }