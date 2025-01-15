---
title: "Array Random"
num: 5
redirect_from:
  - commands/101
---

Returns a random value inside an array.\
Very useful for displaying a random image or playing a random sound, to name some use cases.\
The randomization will happen with an equal chance for each value.

{% include alert.html text="Need to add weights? Create a second array with the same name +<code>_weight</code> added to its name and add values that will act as weights (chances to happen) to add to the randomization." type="info" %} 
{% include alert.html text="Array Random does not support retrieving objects/arrays as values. You can use the <code>Save Variable As (position)</code> box in conjunction with the <a href='/docs/commands/variables#getbuttonvariable'>Get Button Variable</a> command instead." type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|Array Name	|String	| Name of the stack
| Save Variable As | String | Variable name to save the random value into|
| Save Variable As (position) |	String (optional) |	You can enter a variable name here if you wish to get the index(position) of the random value in the array
{:class='table table-primary'}

{% include example_public.html src="/docs/assets/images/commands-array/arrRand_Ex.png" size="100" title="Getting random array value based on different chances" pastebin="nR5kphiF" %} 
{% include example_public.html src="https://imgur.com/a/pkOzHry.png" size="100" title="Getting random Object/Array value from an array." pastebin="gxB26pWd" %} 







