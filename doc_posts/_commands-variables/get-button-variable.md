---
layout: default
title: "Get Button Variable"
num: 4
redirect_from:
  - commands/162
---

Gets another button's variable. Said button must have persistent variables enabled, else no other button can access them even if the button is running.

Parameters:

| Name | Type | Value Type | Description |
|-------|--------|--------|----------|
| Button ID | {% include cmd_param.html param="Text Box" %} | string | The ID of the button you want to get the variable from. |
| Get Variable | {% include cmd_param.html param="Text Box" %} | string | Name of the variable to get. Can use an [Accessor Path](/commands/variables#accessors), but cannot access other scopes. |
| Save Variable As | {% include cmd_param.html param="Text Box" %} | string | New, or existing variable name to save the button variable. Can use an [Accessor Path](/commands/variables#accessors).|
{:class='table table-primary table-cmd-params'}