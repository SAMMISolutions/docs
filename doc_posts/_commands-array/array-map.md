---
title: "Array Map"
num: 13
redirect_from:
  - commands/242
---

Saves in an array the result of doing math with every value of the original array.

| Box Name | Type | Description | 
|-------|--------|--------
New Array Name | String | Name of the array to save the returned array.
Array Name | String | Name of the array to do math.
Operator | Dropdown menu | Operator you wish to use on the array values.
Value | {% include asterisk.html%} | Value to do Math.
{:class='table table-primary'}

{% include alert.html text="Value box can only contain a string if you are using the concat operator. All the other operators need numbers (the command will skip any string in the array)." type="warning" %}

| Array | Operator | Value |  Returned Array | 
|-------|--------|--------|--------|
|[1,2,3,4,5,6,7]|+=|5|[6,7,8,9,10,11,12]|
|[1,2,3,4]|concat|" player"|[1 player,2 player,3 player,4 player]|
{:class='table table-secondary w-auto table-responsive table-hover' }
