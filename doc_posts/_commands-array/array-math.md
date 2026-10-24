---
title: "Array Math"
num: 13.2
version: 202670
redirect_from:
  - commands/459
---

Calculates a single value out of all numbers in an array.

Text values are converted to numbers the same way **String to Number** does, so `"12"` counts as 12 and text without any leading digits counts as 0. Objects and arrays inside the array are skipped.

| Box Name | Type | Description | 
|-------|--------|--------
|Array Name	|String	| Name of the array to calculate with
|Operator | Dropdown | **Sum** = all values added up <br/> **Mean** = the average <br/> **Max** = the highest value <br/> **Min** = the lowest value
|Save Variable As | String | Variable name to save the result under
{:class='table table-primary'}

| Array | Operator | Result | 
|-------|--------|--------
|[1,2,3,4] | Sum | 10
|[1,2,3,4] | Mean | 2.5
|[1,2,3,4] | Max | 4
|[5,"12",3] | Sum | 20
{:class='table table-secondary w-auto table-hover' }
