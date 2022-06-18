---
title: "Random"
num: 2
---

Returns a variable with a random value (number) between minimum and maximum possible value.\
This is a basic command you can use for showing random images, playing random videos/sounds, picking a random viewer from chat etc.\
If you wish to have more power over randomizing values (like adding weights), it is best to use Arrays instead.

{% include alert.html text="Float is a number that has a decimal point." type="info" %}  

| Box Name | Type | Description | 
|-------|--------|--------
| Variable | String | Name of the variable to save the random value. |
| Minimum  | Number {% include asterisk.html%} | Minimum value possible.|
| Maximum | Number {% include asterisk.html%}| Maximum value possible.
|Allow Float| checkbox| checked = random value returned can never be the maximum or minimum value itself <br/> unchecked = random value returned can be anything including maximum and minimum possible value <br/> *Any float value in minimum or maximum value is omitted if Float is set to False.*|
{:class='table table-primary' }

{% include example_public.html src="https://i.imgur.com/lksgrO9.png" size="100" title="Change your OBS source to a random video" pastebin="YYWNYUEs" %}







