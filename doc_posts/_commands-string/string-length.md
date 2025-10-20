---
title: "String Get Length"
num: 2
redirect_from:
  - commands/83
---

Returns the length (the amount of characters) of a string as a number.

Parameters:

| Name | Type | Value Type | Description |
|-------|--------|--------|----------|
| Save Variable As | {% include cmd_param.html param="Text Box" %} | string | Name of the variable to save returned length number value. Can use an [Accessor Path](/commands/variables#accessors). |
| String (text) | {% include cmd_param.html param="Text Box (Resizable)" %} | string | String to get the length of. |
{:class='table table-primary table-cmd-params'}

Example Outputs:

| String | Length returned| 
|-------|--------
|Hello| 5
|"" | 0
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }