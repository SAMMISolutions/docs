---
title: String Replace
num: 4
---

Searches a string for a specified value and replaces it with another specified string.
**Only the first occurrence will be replaced.**


| Box Name | Type | Description | 
|-------|--------|--------|
|Variable|	String	|Variable name containing the original string.
|String	|String	|String to look into
| Replace this|	String|	The value to search for to be replaced
| With this | String | The value to replace the search value with. Can be empty to completely remove it.
{:class='table table-primary' }

| Value to search for | Value to replace it with| String| Result |
|-------|--------|--------|--------
|l|/|Hello|He//o
| |-|Hello World and Hello World|Hello-World and Hello World
|hello and hello and hello|goodbye|goodbye and hello and hello
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }








