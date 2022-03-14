---
title: "Wait Until Variable Exists"
num: 8
---

Pauses all the button commands from executing until the specified variable exists.\
Similar to async/await in JavaScript. Very useful command to use together with *Http Request command*.

{% include alert.html text="If the button is going to be triggered more than once, it needs to have Local Variable Persist off or you have to manually delete the variable. If not, the variable will already exist the second time, making the wait useless." type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------|
| Variable | String | Variable name to wait for until it exists |
| Timeout| Number {% include asterisk.html%} | The maximum amount of time in milliseconds to wait before unpausing the commands even if the variable still doesn't exist (0 will wait forever) |
{:class='table table-primary' }






