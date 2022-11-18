---
title: "Repeat"
num: 5
---

Instantly repeats all the commands inside the block for a specified number of times.\
For example, this is useful for instantly retrieving multiple values from File: Load Value/String or from Array: Pull command.

You can use [Wait Commands]({{ "commands/wait" | relative_url }}) inside repeat.

{% include alert.html text="Don't use extremely large number of repeats, as SAMMI is single threaded and will not execute anything else while executing Repeat." type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------|
|Repeat Amount|	Int (number) {% include asterisk.html%}|	How many times you wish to repeat commands inside the block.
{:class='table table-primary' }










