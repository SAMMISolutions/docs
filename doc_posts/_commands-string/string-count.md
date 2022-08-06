---
title: String Count
num: 2.5
---

Returns the number of occurrences of a character/string within a string. Case sensitive.


| Box Name | Type | Description | 
|-------|--------|--------|
| Variable | String | Variable name to save result. |
| String | String | String to look at |
|Count|String or Number|Specify a character or a string you want to count inside the specified string
| Case Insensitive | Checkbox | If this is checked, it will replace the first matching value, regardless of case.
{:class='table table-primary ' }

| Value to search for | String| Case Insensitive| Result| 
|-------|--------|--------|--------
|Ab|AbAbabAb|Unchecked|3
|Ab|AbAbabAb|Checked|4
|33 |333 and 33 and 33333|Unchecked|7
|black|Mr.Black has a black car and a black cat.|Unchecked|2
|black|Mr.Black has a black car and a black cat.|Checked|3
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }







