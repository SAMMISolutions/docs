---
title: "Math: Clamp"
num: 3
---

Clamps a variable between two values. Intended to use on real values (numbers) only.

1. If value of the variable < minimum allowed value, returns minimum allowed value.
2. If value of the variable > maximum allowed value, returns maximum allowed value.
3. If value of the variable is within the allowed range, returns the original value.
<br/><br/>
{% include alert.html text="Do not use Math: Clamp on strings, as this will result in a syntax error and LB crashing." type="danger" %}  

| Box Name | Type | Description | 
|-------|--------|--------
| Variable | String | Name of the variable to clamp. |
| Min {% include asterisk.html%} | Real (number) | Minimum value allowed.|
| Max {% include asterisk.html%}| Real (number) | Maximum value allowed.
{:class='table table-primary' }

| Value | Clamp Min| Clamp Max| Result |
|-------|--------|--------|--------
|20|50|120|50
|75|50|120|75
|980|50|120|120
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }

{% include example_public.html src="https://i.imgur.com/2WaxEEy.jpeg" title="Add 5% volume to a source" pastebin="VQQ32eaE" %} 









