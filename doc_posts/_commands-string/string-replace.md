---
title: "String: Replace"
num: 4
---

Searches a string for a specified value and returns a new string where all the occurrences of the specified value are replaced. Case sensitive.


| Box Name | Type | Description | 
|-------|--------|--------|
|Variable|	String	|Variable name containing the original string.
|Replace	|String	|Value that will be replaced by the new value.
| New String|	String|	The value to replace the search value with. Can be empty to completely remove it.
{:class='table table-primary' }

| Value to search for | Value to replace it with| String| Result |
|-------|--------|--------|--------
|"l"|"/"|"Hello"|"He//o"
|" "|"-"|"Hello World"|"Hello-World"
|"black"|"white"|"Mr.Black has a black car and a black cat."|"Mr.Black has a white car and a white cat."
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }








