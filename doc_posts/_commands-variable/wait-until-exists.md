---
title: "Wait Until Variable Exists"
num: 9
---

Pauses all the button commands from executing until the specified variable exists.\
Similar to async/await in JavaScript. Very useful command to use together with *Http Request command*.

| Box Name | Type | Description | 
|-------|--------|--------|
| Variable | String | Variable name to wait for until it exists |
| Timeout| Number {% include asterisk.html%} | The maximum amount of time in milliseconds to wait before unpausing the commands even if the variable still doesn't exist |
{:class='table table-primary' }






