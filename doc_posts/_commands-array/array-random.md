---
title: "Array Random"
num: 5
redirect_from:
  - commands/101
---

Returns a random value inside an array.\
Very useful for displaying a random image or playing a random sound.\
The randomization will happen with an equal chance for each value.

{% include alert.html text="Need to add weights? Create a second array with the same name +<code>_weight</code> added to its name and add values that will act as weights (chances to happen) to add to the randomization." type="info" %} 


| Box Name | Type | Description | 
|-------|--------|--------
|Array Name	|String	| Name of the stack
| Save Variable As | String | Variable name to save the random value into|
| Save Variable As (position) |	String (optional) |	You can enter another variable name if you wish to get the index(position) of the random value in the array
{:class='table table-primary'}

{% include example_public.html src="/docs/assets/images/commands-array/arrRand_Ex.png" size="100" title="Getting random array value based on different chances" pastebin="nR5kphiF" %} 







