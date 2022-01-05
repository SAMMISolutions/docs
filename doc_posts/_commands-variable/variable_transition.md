---
title: "Math: Variable Transition"
num: 2
---

Transitions a variable (number) from a starting value to a final value over a given duration.\
This command can act as a timer to trigger other commands or buttons.\
For example, if you set the start value to 10, final value to 0 and duration to 10000ms (=10 seconds), it will decrease the value by 1 every second and reach 0 after exactly 10 seconds.

{% include alert.html text="Variable will stop transitioning if the button it was triggered with is cleared." type="warning" %}  

| Box Name | Type | Description | 
|-------|--------|--------
| Variable | String | Name of the variable. |
|Start Value {% include asterisk.html%}|	Real (number)|	Starting point (where the counting starts from)|
|Final Value {% include asterisk.html%}|	Real (number)|	Finishing point (where the counting stops at)|
|Allow Float|	boolean|	Float=values with decimal points, int=values without decimal points (rounded down)|
|Dur.(MS)|	Int|	Duration of the transition|
{:class='table table-primary' }

{% include media_modal.html img="countdown.png" w="100" btn="1" alt="Simple countdown for GDI+ Text Source in OBS" pastebin="RkjiUFWH" %} 










