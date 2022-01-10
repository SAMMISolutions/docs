---
title: "Wait Until Variable Is"
num: 10
---

Pauses all the button commands from executing until the variable contains a specific value.\
Similar to async/await in JavaScript. Very useful command to use together with *Http Request command*.

{% include alert.html text="You cannot use this command for non existing variables as it will crash LioranBoard. You can use button Init Variables to ensure the variable always exists." type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------|
| Variable | String | Variable name to wait for |
| Compare | Dropdown | Compare operator you wish to compare the variable to the value.|
| Value | Any {% include asterisk.html%} | Whatever value you want to compare the variable to
| Timeout| Number {% include asterisk.html%} | The maximum amount of time in milliseconds to wait before unpausing the commands even if the variable doesn't equal the specified value |
{:class='table table-primary' }






