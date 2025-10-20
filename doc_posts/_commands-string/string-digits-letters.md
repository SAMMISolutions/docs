---
title: "String Letters & Digits Only"
num: 8
redirect_from:
  - commands/86
---

Removes all symbols from a string (including spaces), leaving only letters and digits.

Parameters:

| Name | Type | Value Type | Description |
|-------|--------|--------|----------|
| Save Variable As | {% include cmd_param.html param="Text Box" %} | string | Name of the variable to save the transformed string. Can use an [Accessor Path](/commands/variables#accessors). |
| String (text) | {% include cmd_param.html param="Text Box (Resizable)" %} | string | String to remove special symbols from. |
{:class='table table-primary table-cmd-params'}

Example Outputs:

| Original String | Processed String| 
|-------|--------
|!Hello123@|Hello123|
|$12.50 | 12.50
|Hi! How are you? | HiHowareyou
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }