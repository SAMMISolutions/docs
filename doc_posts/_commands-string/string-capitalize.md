---
title: String Capitalize
num: 7
version: 202322
redirect_from:
  - commands/311
---

Converts the first character in a string to uppercase.

Parameters:

| Name | Type | Value Type | Description |
|-------|--------|--------|----------|
| Save Variable As | {% include cmd_param.html param="Text Box" %} | string | Name of the variable to save the transformed string. Can use an [Accessor Path](/commands/variables#accessors). |
| String (text) | {% include cmd_param.html param="Text Box (Resizable)" %} | string | String to convert it's first character to uppercase. |
{:class='table table-primary table-cmd-params'}

Example Outputs:

| Original String | Returned String| 
|-------|--------
|hello world|Hello world|
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }