---
title: "Math: Random"
num: 4
---

Returns a variable with a random value (number) between minimum and maximum possible value.\
This is a basic command you can use for showing random images, playing random videos/sounds, picking a random viewer from chat etc.\
If you wish to have more power over randomizing values (like adding weights), it is best to use Stacks instead.     
 

{% include alert.html text="Float is a number that has a decimal point." type="info" %}  

| Box Name | Type | Description | 
|-------|--------|--------
| Variable | String | Name of the variable to save the random value. |
| Min {% include asterisk.html%} | Real (number) | Minimum value possible.|
| Max {% include asterisk.html%}| Real (number) | Maximum value possible.
|Float| boolean| True = random value returned can never be the maximum or minimum value itself <br/> False = random value returned can be anything including maximum and minimum possible value <br/> *Any float value in minimum or maximum value is omitted if Float is set to False.*|
{:class='table table-primary' }

{% include media_modal.html img="random.png" w="100" btn="1" alt="Change your OBS source to a random image" %} 










