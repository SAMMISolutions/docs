---
title: String Position
num: 1
---

Returns the position of the **first** occurrence of a specified value in a string.\
Returns 0 if it doesn't find any match.


| Box Name | Type | Description | 
|-------|--------|--------|
|Save Variable As|	String|	Variable name to save the position
| String (text) |	String|	String to search inside of
|String To Search For|	String|	Value to search for
|Search From Position|Number|What position in the string to start the search at, default is 0
|Case Insensitive | Checkbox | If this is checked, it will return the first matching value, regardless of case.
{:class='table table-primary' }

| Value to search for | String| From Location| Case Insensitive| Position returned| 
|-------|--------|--------|--------|--------
|hello | hello and hello world |0|Unchecked| 1
|hello | Hello and hello world |0|Unchecked| 11
|hello | Hello and hello world |0|Checked| 1
|hello | Hello and Hello world |0|Unchecked| 0
|hello | Hello and Hello world |0|Checked| 1
|hello | hello and hello world |5|Unchecked| 11 (finds the second `hello` since we're searching from the 5th letter in the string)
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }









