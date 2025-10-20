---
layout: default
title: "Get Global Variable"
num: 5
redirect_from:
  - commands/163
---

Gets a global variable. 

{% include alert.html text="See a list of all premade <a href='/commands/variables#global'>Global Variables</a>" type="info" %}

Parameters:

| Name | Type | Value Type | Description |
|-------|--------|--------|----------|
| Get Variable | {% include cmd_param.html param="Text Box" %} | string | Name of the global variable to get. Can use an [Accessor Path](/commands/variables#accessors), but cannot access other scopes. |
| Save Variable As | {% include cmd_param.html param="Text Box" %} | string | New, or existing variable name to save the global variable. Can use an [Accessor Path](/commands/variables#accessors).|
{:class='table table-primary table-cmd-params'}