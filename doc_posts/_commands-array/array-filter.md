---
title: "Array Filter"
num: 12
---

Saves in an array all the number values (of the original array) matching the specified criteria.

| Box Name | Type | Description | 
|-------|--------|--------
New Array Name | String | Name of the array to save the matching values.
Array Name | String | Name of the array to filter.
Compare | Dropdown menu | Operator you wish to use to compare the array values with.
Variable/Number | {% include asterisk.html%} | Number to compare the array values with.
{:class='table table-primary'}

| Array | Compare Type | Number |  Returned Array | 
|-------|--------|--------|--------|
|[1,2,3,4,5,6,7]|>|5|[6,7]|
|[25,38,100,22,6]|<=|25|[25,22,6]|
|["text",1,2,3,"more text"]|>|2|[3]|
{:class='table table-secondary w-auto table-responsive table-hover' }

