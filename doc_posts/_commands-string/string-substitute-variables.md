---
title: String Substitute Variables
num: 10.1
version: 202322
redirect_from:
  - commands/318
---

Parses a provided string with the same logic as a {% include cmd_param.html param="Text Box" %}.

This means you can provide [Expressions](#placeholder) by wrapping them inbetween `/$$/`

Can optionally provide an object to set an alternate local scope of variables to read other than the variables from the current button.

Parameters:

| Name | Type | Value Type | Description |
|-------|--------|--------|----------|
| Template String Variable | {% include cmd_param.html param="Expression Box" %} | string | string to parse with additional expression support. Recommended to be set inside a variable. |
| Replacement Object Name | {% include cmd_param.html param="Text Box" %} | string | Name of the variable containing an object that replaces the current local scope of variables. Can use an [Accessor Path](/commands/variables#accessors). |
| Save Variable As | {% include cmd_param.html param="Text Box" %} | string | Name of the variable to save the processed string at. Can use an [Accessor Path](/commands/variables#accessors). |
{:class='table table-primary table-cmd-params'}

Example Outputs:

|Variables in button| Template String | Returned String | 
|-----------|-------|--------|
|`username` = `"chrizzz"`<br>`months` = `12`|Thanks /$username$/ for the /$months$/ months!|Thanks chrizzz for the 12 months!|
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }

{% include media_modal.html img="string_sub_vars2.png" w="100" btn="1" alt="Parsing a template string grabbed from template.txt file" %} 

{% include media_modal.html img="string_sub_vars.png" w="100" btn="1" alt="Parsing a template string grabbed from template.txt file 2" %} 





