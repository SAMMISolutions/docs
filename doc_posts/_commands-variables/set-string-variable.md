---
layout: default
title: "Set String Variable"
num: 1
redirect_from:
  - commands/20
---

Creates a new, or modifies an existing local variable with a string.

Parameters:

| Name | Type | Value Type | Description |
|-------|--------|--------|----------|
| Variable Name | {% include cmd_param.html param="Text Box" %} | string | Name of the variable. Can use an [Accessor Path](/commands/variables#accessors). |
| Relative | {% include cmd_param.html param="Checkbox" %} | boolean | When checked, enables string concatination, which adds the string specified in the "Text" parameter to an existing specified variable. Example: if a variable `myVariable` already exists and contains `Hello` and you enter `World` in the Text field, `myVariable` will be now `HelloWorld`.<br><br>When unchecked, replaces whatever is currently in the original variable if already populated.|
| Text | {% include cmd_param.html param="Text Box (Resizable)" %} | string | Whatever string you want to set the variable to. You can press <kbd>Enter</kbd> to insert a new line! |
{:class='table table-primary table-cmd-params'}