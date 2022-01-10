---
title: "Math: Variable Transition"
num: 7
---

Transitions a variable (number) from a starting value to a final value over a given duration.\
This command can act as a timer to trigger other commands or buttons.\
For example, if you set the start value to 10, final value to 0 and duration to 10000ms (=10 seconds), it will decrease the value by 1 every second and reach 0 after exactly 10 seconds.

{% include alert.html text="Variable will stop transitioning if the button it was triggered with is cleared." type="warning" %}  

| Box Name | Type | Description | 
|-------|--------|--------
| Variable Name | String | Name of the variable. |
|Start Value |	Number {% include asterisk.html%}|	Starting point (where the counting starts from)|
|End Value |	Number {% include asterisk.html%}|	Finishing point (where the counting stops at)|
|Allow Decimal|	Checkbox|	Whether you want to allow values with decimal points|
|Duration(ms)|	Int|	Duration of the transition|
|Smooth|Dropdown|None = Normal, Out = Starts out fast and ends slow, In = Starts out slow and ends fast, In/Out= Starts out slow, gets faster and then slows down at the end again.
{:class='table table-primary' }

{% include media_modal.html img="countdown.png" w="100" btn="1" alt="Simple countdown for GDI+ Text Source in OBS" pastebin="RkjiUFWH" %} 










