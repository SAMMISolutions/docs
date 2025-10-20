---
title: "String Split to Array"
num: 12
redirect_from:
  - commands/217
---

Splits a string value into an array. If an array does not already exist, a new array will be created.

Parameters:

| Name | Type | Value Type | Description |
|-------|--------|--------|----------|
| String (text) | {% include cmd_param.html param="Text Box (Resizable)" %} | string | String to split into an array. |
| Separator | {% include cmd_param.html param="Text Box (Resizable)" %} | string | Symbol that determines when to split the string into a new element in Array. Defaults to `,`|
| Array Name | {% include cmd_param.html param="Text Box" %} | string | Name of the variable to save the resulting array to. Can use an [Accessor Path](/commands/variables#accessors). |
{:class='table table-primary table-cmd-params'}