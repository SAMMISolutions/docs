---
title: "Wait Until Variable Exists"
num: 8
redirect_from:
  - commands/153
---

Pauses all the button commands from executing until the specified variable exists.\
Similar to async/await in JavaScript. Very useful command to use together with [HTTP Request]({{ "commands/misc#httprequest" | relative_url }}) command.

{% include alert.html text="If the button is going to be triggered more than once, it needs to have Local Variable Persist off or you have to manually delete the variable. If not, the variable will already exist the second time, making the wait useless." type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------|
| Variable | String | Variable name to wait for until it exists |
|Timeout After (ms)|Number {% include asterisk.html%}|How long to wait in milliseconds until resuming normal command flow (`0` will wait indefinitely)
{:class='table table-primary' }






