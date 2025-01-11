---
title: "Array Weights"
---
Allows you to weight the chances of the Array Random command.\
Useful for making certain array positions more or less common when returning a random value.

To add weights to an array you must create a second array with the same name +<code>_weight</code> added to its name.

Array positions in the weight array must match the original array to assign the correct weight to those positions.

Setting the weight value to the same number for multiple positions will give those positions an equal chance to be picked <code>value%</code> of the time.\
Setting the weight to 0 will make the chance 0 and it will not be picked in the Array Random command.\
Numbers above 100 are possible but they will heavily weight the randomization towards that value.\
Negative numbers are not possible but decimal numbers are.

{% include example_public.html src="/docs/assets/images/commands-array/arrRand_Ex.png" size="100" title="Getting random array value based on different chances" pastebin="nR5kphiF" %} 
