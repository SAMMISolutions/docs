---
title: String Replace
num: 4
---

Searches a string for a specified value and replaces it with another specified string.
**Only the first occurrence will be replaced.**


| Box Name | Type | Description | 
|-------|--------|--------|
|Variable|	String	|Variable name to save the string.
|String	|String	|String to look into
| Replace this|	String|	The value to search for to be replaced
| With this | String | The value to replace the search value with. Can be empty to completely remove it.
| Case Insensitive | Checkbox | If this is checked, it will replace the first matching value, regardless of case.
{:class='table table-primary' }

| Value to search for | Value to replace it with| String| Case Insensitive| Result |
|-------|--------|--------|--------|--------
|l|/|Hello|Unchecked|He/lo
| |-|Hello World and Hello World|Unchecked|Hello-World and Hello World
|hello|goodbye|Hello and hello and hello|Unchecked|Hello and goodbye and hello
|hello|goodbye|Hello and hello and hello|Checked|goodbye and hello and hello
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }








