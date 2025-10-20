---
title: String Replace
num: 4
redirect_from:
  - commands/87
---

Searches a string for a given string and replaces it with another given string.\
**Only the first occurrence will be replaced.**

Parameters:

| Name | Type | Value Type | Description |
|-------|--------|--------|----------|
| Save Variable As | {% include cmd_param.html param="Text Box" %} | string | Name of the variable to save the transformed string. Can use an [Accessor Path](/commands/variables#accessors). |
| String (text) | {% include cmd_param.html param="Text Box (Resizable)" %} | string | String to be transformed. |
| Replace This | {% include cmd_param.html param="Text Box (Resizable)" %} | string | The string value to search for to be replaced |
| With This | {% include cmd_param.html param="Text Box (Resizable)" %} | string | The string value replace the search value with. Can be empty to completely remove it. |
| Case Insensitive | {% include cmd_param.html param="Checkbox" %} | boolean | Checked: Ignores casing when using search string.<br>Unchecked: Search string is case sensitive. Example: `Hello` will not match `hello`|
{:class='table table-primary table-cmd-params'}

Example Outputs:

| Value to search for | Value to replace it with| String| Case Insensitive| Result |
|-------|--------|--------|--------|--------
|l|/|Hello|Unchecked|He/lo
| |-|Hello World and Hello World|Unchecked|Hello-World and Hello World
|hello|goodbye|Hello and hello and hello|Unchecked|Hello and goodbye and hello
|hello|goodbye|Hello and hello and hello|Checked|goodbye and hello and hello
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }