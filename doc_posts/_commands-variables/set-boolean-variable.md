---
layout: default
title: Set Boolean
num: 3.5
redirect_from:
  - commands/82
---

Allows you to set a boolean variable.\
In SAMMI, boolean is a number that is either 0 (false) or 1 (true).

{% include alert.html text="In some languages comparing 2 or non empty string returns true, however in SAMMI it will always return false. The only value that returns true is 1." type="warning" %}

| Box Name | Type | Description |
|-------|--------|--------
| Save Variable As | String | Name of the variable to save the boolean value. |
|Boolean Value|Boolean {% include asterisk.html%}|Boolean value you want to set the variable to. Will be converted to `true` or `false`.
{:class='table table-primary'}






