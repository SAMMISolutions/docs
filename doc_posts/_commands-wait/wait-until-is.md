---
title: "Wait Until Variable Is"
num: 9
redirect_from:
  - commands/156
---

Pauses all the button commands from executing until the variable contains a specific value.\
Similar to async/await in JavaScript. Very useful command to use together with [HTTP Request]({{ "commands/misc#httprequest" | relative_url }}) command.

| Box Name | Type | Description |
|-------|--------|--------|
| Variable | String | Variable name to wait for |
| Compare | Dropdown | Compare operator you wish to compare the variable to the value.|
| Value | Any {% include asterisk.html%} | Whatever value you want to compare the variable to
|Timeout After (ms)|Number {% include asterisk.html%}|How long to wait in milliseconds until resuming normal command flow (`0` will wait indefinitely)
{:class='table table-primary' }

{% include example_public.html src="https://i.imgur.com/pS8Ahwf.gif" size="100" title="Modify button when a variable is 0" pastebin="M9xtJJha" %}




