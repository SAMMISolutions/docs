---
title: "String to Number"
num: 5
redirect_from:
  - commands/79
---

Turns a string value into a number.
- returns `0` if the string does not start with a number or `.` 
- stops the conversion if it encounters any non number in the string and returns the current converted value 
- converting a value that's already a number returns the same value
- removes any leading zeroes and rounds the number to 2 decimal points
- string X beginning with a `.` will be converted to `0.X`
- accepts strings with scientific notation

Parameters:

| Name | Type | Value Type | Description |
|-------|--------|--------|----------|
| Save Variable As | {% include cmd_param.html param="Text Box" %} | string | Name of the variable to save the number value. Can use an [Accessor Path](/commands/variables#accessors).|
| String Variable | {% include cmd_param.html param="Expression Box" %} | string | String to convert. |
{:class='table table-primary table-cmd-params'}

| String value | Returned number value | 
|-------|--------|--------|
|`"Hello World"`|`0`|
|`"Hello World 123"`|`0`|
|`"123 Hello World"`|`123`|
|`"123 Hello World 456"`|`123`|
|`".99"`|`0.99`|
|`"1.239999"`|`1.24`|
|`"000010"`|`10`|
|`"10e-2"`|`0,10`|
|`"10e+2"`|`1000`|
|`10`|`10`|
{:class='table table-secondary w-auto table-responsive table-hover' }









