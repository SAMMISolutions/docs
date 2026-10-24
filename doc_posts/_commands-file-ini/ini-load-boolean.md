---
title: "INI: Load Boolean"
num: 4.5
redirect_from:
  - commands/455
---

Loads a boolean from .ini file. Will return `false` if the key does not exist.

`0.000000` becomes `false` and `1.000000` becomes `true`, so a key written by **INI: Save Number** can be read as a boolean too. Keys written by hand as `true` or `false` are understood as well.

| Box Name | Type | Description | 
|-------|--------|--------
|File Name|	String	|Name of the file to load. Accepts both relative and absolute path.
|Section|	String|	The section to load the key from
|Key	|String	|Name of the key to be loaded
|Save Variable As|	String|	Variable name you want to save the loaded boolean under
{:class='table table-primary'}
