---
title: String Position
num: 1
redirect_from:
  - commands/91
---

Returns the position of the **first** occurrence of a specified value in a string.\
Returns `0` if it doesn't find any match.

Parameters:

| Name | Type | Value Type | Description |
|-------|--------|--------|----------|
| Save Variable As | {% include cmd_param.html param="Text Box" %} | string | Name of the variable to save the position. Can use an [Accessor Path](/commands/variables#accessors). |
| String (text) | {% include cmd_param.html param="Text Box (Resizable)" %} | string | String to search inside of |
| String To Search For | {% include cmd_param.html param="Text Box (Resizable)" %} | string | String value to search for in given string |
| Search From Position | {% include cmd_param.html param="Expression Box" %} | number | Position in the given string to start the search at.<br>default is `0` |
| Case Insensitive | {% include cmd_param.html param="Checkbox" %} | boolean | Checked: Ignores casing when using search string.<br>Unchecked: Search string is case sensitive. Example: `Hello` will not match `hello`|
{:class='table table-primary table-cmd-params'}

Example Outputs:

| Value to search for | String| From Location| Case Insensitive| Position returned| 
|-------|--------|--------|--------|--------
|hello | hello and hello world |0|Unchecked| 1
|hello | Hello and hello world |0|Unchecked| 11
|hello | Hello and hello world |0|Checked| 1
|hello | Hello and Hello world |0|Unchecked| 0
|hello | Hello and Hello world |0|Checked| 1
|hello | hello and hello world |5|Unchecked| 11 (finds the second `hello` since we're searching from the 5th letter in the string)
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }