---
title: "Get Variable Type"
num: 6
redirect_from:
  - commands/81
---

Returns a string indicating the type of the variable given: 
- `"number"` for numbers
- `"string"` for strings 
- `"object"` for objects
- `"array"` for arrays
- `"boolean"` for boolean values
- `"undefined"` for variables that aren't defined (do not exist)
- `"null"` for null variables (sometimes retrieved from HTTP requests, cannot be manually created)

Parameters:

| Name | Type | Value Type | Description |
|-------|--------|--------|----------|
| Save Variable As | {% include cmd_param.html param="Text Box" %} | string | Variable to save the result in. Can use an [Accessor Path](/commands/variables#accessors). |
| Variable to Check | {% include cmd_param.html param="Text Box" %} | string | The variable to get the type of. Can use an [Accessor Path](/commands/variables#accessors). |
{:class='table table-primary table-cmd-params'}