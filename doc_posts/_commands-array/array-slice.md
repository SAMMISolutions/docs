---
title: "Array Slice"
num: 8.6
version: 202670
redirect_from:
  - commands/458
---

Copies a range of values out of an array into another array. The source array is left untouched.

Positions start at 0. Negative positions count from the end, so `-1` is the last value, `-2` the second to last. Leaving End Position at `-1` therefore copies everything up to the end of the array.

{% include alert.html text="Whatever the target array held before is replaced. Objects and arrays inside the copied range are duplicated, so changing them later does not affect the source array." type="info" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|Array Name	|String	| Name of the array to copy from
|Start Position | {% include asterisk.html%} | First position to copy. 0 = first value
|End Position (-1 for the end) | {% include asterisk.html%} | Last position to copy, included in the result
|New Array Name | String | Name of the array to save the copied values in. Will be created if it does not exist
{:class='table table-primary'}

| Array | Start | End | Result | 
|-------|--------|--------|--------
|["a","b","c","d","e"] | 1 | 3 | ["b","c","d"]
|["a","b","c","d","e"] | 0 | -1 | ["a","b","c","d","e"]
|["a","b","c","d","e"] | 2 | -1 | ["c","d","e"]
|["a","b","c","d","e"] | -2 | -1 | ["d","e"]
{:class='table table-secondary w-auto table-hover' }
