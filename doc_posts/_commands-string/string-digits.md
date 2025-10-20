---
title: String Digits Only
num: 8
redirect_from:
  - commands/84
---

Removes all letters and special symbols from a string (including spaces), leaving only digits.

Parameters:

| Name | Type | Value Type | Description |
|-------|--------|--------|----------|
| Save Variable As | {% include cmd_param.html param="Text Box" %} | string | Name of the variable to save the transformed string. Can use an [Accessor Path](/commands/variables#accessors). |
| String (text) | {% include cmd_param.html param="Text Box (Resizable)" %} | string | String to remove the letters and special symbols from. |
| Save as Number | {% include cmd_param.html param="Checkbox" %} | boolean | Checked: Saves result as the number value type. Useful if intending on doing math operations with converted result.<br>Unchecked: Saves result as the original value type: string.|
{:class='table table-primary table-cmd-params'}

Example Outputs:

| Original String | Processed String| 
|-------|--------
|Hello||
|1a2b3c |123
|$12.50 | 12.50
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }








