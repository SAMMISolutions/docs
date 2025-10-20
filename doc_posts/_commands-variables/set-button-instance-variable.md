---
layout: default
title: "Set Button Instance Variable"
num: 3.1
redirect_from:
  - commands/300
---

{% include alert.html text="Available in Developer Mode." type="info" %}

Functions similarly to the "Set Button Variable" command, but with the added capability of setting a variable within a non-persistent button.

To use this command, you must provide the instance ID, which is automatically included in an Extension Command as part of the payload (`Data.instanceId`).\
Button instances are ephemeral and are destroyed once the button's execution is complete. To successfully set a variable within a non-persistent button, the button must still be active at the time the command is executed. If the button has already completed its execution, the instance will be destroyed, and setting the variable will no longer be possible.

Parameters:

| Name | Type | Value Type | Description |
|-------|--------|--------|----------|
| Button ID | {% include cmd_param.html param="Text Box" %} | string | The ID of the button you want to set the variable for. |
| Button Instance ID | {% include cmd_param.html param="Text Box" %} | string | The Instance ID of the button you want to set the variable for. |
| Variable Name | {% include cmd_param.html param="Text Box" %} | string | Name of the variable. Can use an [Accessor Path](/commands/variables#accessors), but cannot access other scopes. |
| Operator | {% include cmd_param.html param="Operator Box" %} | string | Operator you wish to use on the value.|
| Variable/Number/String | {% include cmd_param.html param="Expression Box" %} | {% include asterisk.html%} | Whatever you want to set the variable value to, including arrays and objects (2023.2.2 and up).|
{:class='table table-primary table-cmd-params'}