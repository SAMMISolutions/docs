---
title: String Remove Section
num: 3.5
redirect_from:
  - commands/94
---

Removes a part of a string and returns the remaining string. This is the opposite of String Clamp.\
You need to specify the starting position and the amount of characters to remove.

Parameters:

| Name | Type | Value Type | Description |
|-------|--------|--------|----------|
| Save Variable As | {% include cmd_param.html param="Text Box" %} | string | Name of the variable to save the remaining string. Can use an [Accessor Path](/commands/variables#accessors). |
| String (text) | {% include cmd_param.html param="Text Box (Resizable)" %} | string | String to perform removal on. |
| Start Position | {% include cmd_param.html param="Expression Box" %} | number | Where to start the removal (first character = 1)|
| Amount of Characters | {% include cmd_param.html param="Expression Box" %} | number | Amount of characters to remove |
{:class='table table-primary table-cmd-params'}

Example Outputs:

| Original string | Start| Amount| Result| 
|-------|--------|--------|--------
|Hello World!| `6` | `10` | Hello
|Hello World! This is a nice day.| `6` | `6` | Hello! This is a nice day.
|Chips and Salsa! | `1` | `10` | Salsa!
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }





