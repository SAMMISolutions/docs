---
title: "Hex String to Number"
num: 3
redirect_from:
  - commands/80
---

Converts a hexadecimal string into a (decimal) number. 

Parameters:

| Name | Type | Value Type | Description |
|-------|--------|--------|----------|
| Save Variable As | {% include cmd_param.html param="Text Box" %} | string | Variable name to save the converted variable. Can use an [Accessor Path](/commands/variables#accessors).|
| Hex String Variable | {% include cmd_param.html param="Expression Box" %} | string | Hex string to convert |
{:class='table table-primary table-cmd-params'}

| Hex string value | Returned number | 
|-------|--------|
|`"A"`|`10`|
|`"1d"`|`29`|
|`"1F4"`|`500`|
{:class='table table-secondary w-auto table-responsive table-hover' }











