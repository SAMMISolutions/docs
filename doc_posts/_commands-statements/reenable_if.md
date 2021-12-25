---
title: "Statement: Re-enable if "
num: 4
---

Commands inside the statement will be repeated for x number of times with x milliseconds of delay between each repeat IF the condition is true. Else they will be executed only once.\
Statement: Re-enable if can contain AND and Or statements as well.\
You can create some really cool effects with this command.
  
| Box Name | Type | Description | 
|-------|--------|--------|
| Var./real/"string" {% include asterisk.html%}| Variable, real or string	 | Left side of the comparison you want to evaluate. |
|Compare Type |	Dropdown menu |	Operator you wish to use to compare left and right side.
|Var./real/"string" {% include asterisk.html%} |	Variable, real or string|	Whatever you want to compare the left side with.
|Reactivate (ms)|	Int|	Delay between each re-enable. If set to 0, it will repeat indefinitely.
|Amount|	Int	|How many times you want to re-enable the commands. Set to -1 for unlimited amount.
{:class='table table-primary' }

{% include media_modal.html img="animated_button.png" width="50" vid="animated_button.mp4" w="100" btn="1" alt="Animated button" pastebin="ru02396L"  %} 







