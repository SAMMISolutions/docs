---
title: "Array Unique"
num: 7.2
redirect_from:
  - commands/457
---

Removes duplicate values from an array, keeping the first occurrence of each one. The array itself is changed, nothing is copied.

{% include alert.html text="Objects and arrays stored inside the array are always left alone, only plain values can be removed as duplicates." type="info" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|Array Name	|String	| Name of the array you want to remove duplicates from
|Case Insensitive | Checkbox | **Checked** = `Blue` and `blue` count as the same value <br/> **Unchecked** = only exact matches are removed
{:class='table table-primary'}

| Array | Case Insensitive | Result | 
|-------|--------|--------
|["red","blue","red"] | unchecked | ["red","blue"]
|["red","Red","blue"] | unchecked | ["red","Red","blue"]
|["red","Red","blue"] | checked | ["red","blue"]
{:class='table table-secondary w-auto table-hover' }
