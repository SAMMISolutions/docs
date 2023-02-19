---
title: "INI: Load Number"
num: 3
redirect_from:
  - commands/125
---

Loads a number (real value) from .ini file. Will return 0 if it doesn't exist.

{% include alert.html text="You cannot use File: Load Number on text (string)." type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|File Name|	String	|Name of the file to load. Accepts both relative and absolute path.
|Section|	String|	The section to load the key
|Key	|String	|Name of the key to be loaded
|Save Variable As|	String|	Variable name you want to save the loaded string under
{:class='table table-primary'}









