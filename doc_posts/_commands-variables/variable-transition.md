---
title: "Variable Transition"
num: 7
redirect_from:
  - commands/19
---

Transitions a variable (numbers only) from a starting value to a final value over a given duration.\
This command can help animate values.\
For example, if you set the start value to 10, final value to 0 and duration to 10000ms (=10 seconds), it will decrease the value by 1 every second and reach 0 after exactly 10 seconds.

{% include alert.html text="Variable will stop transitioning if the button it was triggered with is stopped." type="warning" %}  

Parameters:

| Name | Type | Value Type | Description |
|-------|--------|--------|----------|
| Variable Name | {% include cmd_param.html param="Text Box" %} | string | Name of the variable to transition. Can use an [Accessor Path](/commands/variables#accessors). |
| Start Value | {% include cmd_param.html param="Expression Box" %} | number | Starting point (where the counting starts from). |
| End Value | {% include cmd_param.html param="Expression Box" %} | number | Finishing point (where the counting stops at). |
| Duration(ms) | {% include cmd_param.html param="Expression Box" %} | number | Duration of the transitionn in milliseconds. |
| Allow Decimal | {% include cmd_param.html param="Checkbox" %} | boolean | Whether you want to allow values with decimal points |
| Smooth | {% include cmd_param.html param="Dropdown" %} | string | None: Normal<br>Out: Starts out fast and ends slow<br>In: Starts out slow and ends fast<br>In/Out: Starts out slow, gets faster and then slows down at the end again. |
{:class='table table-primary table-cmd-params'}

{% include example_public.html src="varTrans_Ex.png" size="100" title="Simple countdown for GDI+ Text Source in OBS" pastebin="Msgnudug" %}  