---
title: "Re-enable"
num: 4
redirect_from:
  - commands/8
---

Commands inside the Re-enable block will be repeated for X number of times with X milliseconds of delay between each repeat.\
You can use Break command to break (stop) the loop if certain conditions are met.\
You can create some really cool effects with this command.

Delays that are entered into the `Delay` field for commands within a Re-enable block will only work on the first loop. Delays will not work on any subsequent loops.
  
| Box Name | Type | Description | 
|-------|--------|--------|
|Repeat Interval (ms)|	Int {% include asterisk.html%}|	Delay between each re-enable. If set to 0, it will repeat indefinitely.
|Amount|	Int {% include asterisk.html%}	|How many times you want to re-enable the commands. Set to -1 for unlimited amount.
{:class='table table-primary' }







