---
title: Command Line
num: 5
redirect_from:
  - commands/135
  - commands/306
---

Allows you to execute a single line of command, similar to how you would in a Command Prompt. The command will run with the same level of permissions as SAMMI, which means if SAMMI has administrative privileges, so will your command. 

If you need to execute more than one line of command or if your command does not execute properly, it is recommended to convert it into a batch file and use the [Execute program](#executeprogram) command instead. If you wish to run multiple commands within a single line, you can do so by using the '&&' symbol between each command.

The command also provides an option to capture the output of the executed command. To do this, specify a variable name in the 'Save Variable As' field.

{% include alert.html text="This command may take some time to execute. To ensure that the variable is populated before executing the next command, it's advised to use the <a href='/docs/commands/wait#waituntilvariableexists'>Wait Until Variable Exists</a> command." type="warning" %}

| Box Name | Type | Description |
|-------|--------|--------
|Command|	String	|The command you wish to execute. Multiple commands can be executed in one line by using '&&' between each command.
|Save Variable As|String|Enter a variable name to save the output of the executed command.
{:class='table table-primary'}








