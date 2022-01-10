---
title: String Position
num: 1
---

Returns the position of the **first** occurrence of a specified value in a string. Case sensitive.\
Returns 0 if it doesn't find any match.


| Box Name | Type | Description | 
|-------|--------|--------|
|Variable|	String|	Variable name to save the position
|String|	String|	String to search inside of
|Position of|	String|	Value to search for
|From Location|Number|What position in the string to start the search at, default is 0
{:class='table table-primary' }

| Value to search for | String| From Location| Position returned| 
|-------|--------|--------
|hello | hello and hello world | 0| 1
|hello | Hello and hello world |0| 11
|hello | Hello and Hello world |0| 0
|hello | hello and hello world | 5| 11 (finds the second hello since we're searching from the 5th letter in the string)

{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }









