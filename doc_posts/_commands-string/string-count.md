---
title: String Count
num: 2.5
redirect_from:
  - commands/92
---

Returns the number of occurrences of a character/string within a string.

Parameters:

| Name | Type | Value Type | Description |
|-------|--------|--------|----------|
| Save Variable As | {% include cmd_param.html param="Text Box" %} | string | Name of the variable to save returned length number value. Can use an [Accessor Path](/commands/variables#accessors). |
| String (text) | {% include cmd_param.html param="Text Box (Resizable)" %} | string | String to search through.|
| Character/String To Count | {% include cmd_param.html param="Text Box (Resizable)" %} | string | Specify a single character or a string you want to count inside the given string.|
| Case Insensitive | {% include cmd_param.html param="Checkbox" %} | boolean | Checked: Ignores casing when using search string.<br>Unchecked: Search string is case sensitive. Example: `Hello` will not match `hello`|
{:class='table table-primary table-cmd-params'}

Example Outputs:

| Value to search for | String| Case Insensitive| Result| 
|-------|--------|--------|--------
|Ab|AbAbabAb|Unchecked|`3`
|Ab|AbAbabAb|Checked|`4`
|33 |333 and 33 and 33333|Unchecked|`7`
|black|Mr.Black has a black car and a black cat.|Unchecked|`2`
|black|Mr.Black has a black car and a black cat.|Checked|`3`
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }