---
title: "Clamp"
num: 1
redirect_from:
  - commands/76
---

Clamps a variable between two values. Intended to use on numbers only. It works as follows:

1. If value of the variable is less than the minimum allowed value, returns minimum allowed value.
2. If value of the variable is more than the maximum allowed value, returns maximum allowed value.
3. If value of the variable is within the allowed range, returns the original value.
<br/><br/>
{% include alert.html text="Do not use Clamp on strings, as this will result in a syntax error and SAMMI crashing." type="danger" %}  

Parameters:

| Name | Type | Value Type | Description |
|-------|--------|--------|----------|
| Variable Name | {% include cmd_param.html param="Text Box" %} | string | Name of the variable to clamp. Can use an [Accessor Path](/commands/variables#accessors).|
| Minimum Value Allowed | {% include cmd_param.html param="Expression Box" %} | number | Minimum value allowed. |
| Maximum Value Allowed | {% include cmd_param.html param="Expression Box" %} | number | Maximum value allowed. |
{:class='table table-primary table-cmd-params'}

| Value | Clamp Min| Clamp Max| Result |
|-------|--------|--------|--------
|`20`|`50`|`120`|`50`
|`75`|`50`|`120`|`75`
|`980`|`50`|`120`|`120`
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }