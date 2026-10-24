---
title: "INI: Save Boolean"
num: 2.1
version: 202670
redirect_from:
  - commands/454
---

Saves a boolean to .ini file.

The value is written as a number, so `false` becomes `0.000000` and `true` becomes `1.000000`. That keeps the key readable by **INI: Load Number** as well.

| Box Name | Type | Description | 
|-------|--------|--------
|File Name|	String	|Name of the file. Will create one if it does not exist. Accepts both relative and absolute path.
|Section|	String|	The section to save the key under.
|Key	|String	|Name of the value to be saved.
|Boolean Value|	{% include asterisk.html%}|	Value to be saved. Accepts `true`/`false`, `1`/`0` or a variable holding either.
{:class='table table-primary'}
