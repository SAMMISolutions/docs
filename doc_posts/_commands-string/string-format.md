---
title: "String Format"
num: 9
redirect_from:
  - commands/215
---

Divides a string into multiple lines.\
Very useful command to split into multiple lines in your OBS Text GDI+ source.

Parameters:

| Name | Type | Value Type | Description |
|-------|--------|--------|----------|
| Save Variable As | {% include cmd_param.html param="Text Box" %} | string | Name of the variable to save the formatted string. Can use an [Accessor Path](/commands/variables#accessors). |
| String (text) | {% include cmd_param.html param="Text Box (Resizable)" %} | string | String to format. |
| Characters Per Line | {% include cmd_param.html param="Expression Box" %} | number | The maximum amount of characters per line. |
| Min. Cutoff Length | {% include cmd_param.html param="Expression Box" %} | number | The minimum amount of letters a word should be before allowing it to be cut it in the middle. |
{:class='table table-primary table-cmd-params'}