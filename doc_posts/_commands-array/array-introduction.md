---
title: "Introduction"
num: 0
---

#### What's an array?
Array is a special variable which can hold more than one value at a time.\
If you have a list of items (for example viewer names), storing them in single variables would look like this:
- var name1 = "wolbee"
- var name2 = "Silverlink"
- var name3 = "Sebas"

This seems quite inefficient if you happen to have a lot of names to store. The answer is to store them all in an array, which can hold many values under a single name: `names = ["wolbee", "Silverlink", "Sebas"]`.

{% include image.html w="75" src="array.png" alt="Representation of an array" %}

#### Array manipulation
If you want to retrieve a specific value (element) from an array, you can use the following formatting:\
`arrayName[position]`\
If we have an array `names = ["wolbee", "Silverlink", "Sebas"]`, typing `names[1]` would retrieve `'Silverlink'` (the first value of an array has position of 0).\
Array position (also called index) can contain other variables or complex math, too.   

Some command boxes allow you to use not only position, but also **top** for retrieving and manipulating values in an array. Selecting **top** will target a value at the END of an array (last index). **0** will target a value at the BEGINNING of an array (index of 0).  


Array is cleared every time you close or reset SAMMI. If you wish to save it in a file, you can use [Stringify Array]({{ "commands/array#stringifyarray" | relative_url }}) and [INI: Save Text]({{ "commands/file-ini#inisavetext" | relative_url }}) commands.

#### Array Weights
Allows you to weight the chances of the [Array Random]({{ "commands/array#arrayrandom" | relative_url }}) command

Useful for making certain array positions more or less common when returning a random value.

To add weights to an array you must create a second array with the same name +<code>_weight</code> added to its name.

Array positions in the weight array must match the original array to assign the correct weight to those positions.

Setting the weight value to the same number for multiple positions will give those positions an equal chance to be picked <code>value%</code> of the time divided by how many you set to the same value. E.g. Two positions set to 30 will give each a roughly 15% chance.

Setting the weight to 0 will make the chance 0 and it will not be picked in the Array Random command.

Numbers above 100 are possible but they will heavily weight the randomization towards that value.

Negative numbers are not possible but decimal numbers are.

Ideally the values you set add up to 100, 1 or the number of items in the array to get the most accurate weighting.

#### Convert stacks saved in .ini files from LB1 to arrays in SAMMI
If you're using the same .ini files from LioranBoard 1, you will notice that your stringified stacks don't get properly parsed when loaded back into SAMMI (they end up being objects instead of arrays).  

**Use this Stack to Array converter button:**
{% include pastebin.html pastebin="f5qNy63G" %}













