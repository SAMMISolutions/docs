---
title: "INI: Load Text"
num: 4
redirect_from:
  - commands/127
---

Loads text (string) from .ini file. Will return 0 if it doesn't exist.

{% include alert.html text="You cannot use File: Load Text on number (real value)." type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|File Name|	String	|Name of the file to load. Accepts both relative and absolute path.
|Section|	String|	The section to load the key
|Key	|String	|Name of the key to be loaded
|Save Variable As|	String|	Variable name you want to save the loaded string under
{:class='table table-primary'}









