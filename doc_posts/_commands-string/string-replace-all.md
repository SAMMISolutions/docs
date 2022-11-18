---
title: String Replace All
num: 4
---

Searches a string for a specified value and replaces it with another specified string.\
**All occurrences will be replaced.**


| Box Name | Type | Description | 
|-------|--------|--------|
|Save Variable As|	String	|Variable name to save the string.
| String (text) 	|String	|String to look into
| Replace This|	String|	The value to search for to be replaced
| With This | String | The value to replace the search value with. Can be empty to completely remove it.
| Case Insensitive | Checkbox | If this is checked, it will replace all the matching values, regardless of case
{:class='table table-primary' }

| Value to search for | Value to replace it with| String| Case Insensitive| Result |
|-------|--------|--------|--------|--------
|l|/|Hello|Unchecked|He//o
| |-|Hello World and Hello World|Unchecked|Hello-World-and-Hello-World
|hello|goodbye|Hello and hello and hello|Unchecked|Hello and goodbye and goodbye
|hello|goodbye|Hello and hello and hello|Checked|goodbye and goodbye and goodbye
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }








