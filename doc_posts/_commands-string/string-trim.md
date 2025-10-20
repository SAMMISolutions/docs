---
title: "String Trim"
num: 3.6
version: 202250
redirect_from:
  - commands/253
---

Trims blank spaces or specific characters/strings from provided string.  

{% include alert.html text='Trimming a backwards slash <code>\</code> must be escaped by another slash: <code>\\</code>' type="warning" %} 

Parameters:

| Name | Type | Value Type | Description |
|-------|--------|--------|----------|
| Save Variable As | {% include cmd_param.html param="Text Box" %} | string | Name of the variable to save the trimmed string. Can use an [Accessor Path](/commands/variables#accessors). |
| String (text) | {% include cmd_param.html param="Text Box (Resizable)" %} | string | String to be trimmed. |
| Strings to Delete | {% include cmd_param.html param="Text Box" %} | string | If left blank, will delete all spaces before and after the string.<br>Entering a value will delete all instances of provided value.<br>If multiple values are to be deleted, (such as `@, #` or `!` ), use the \| delimiter.|
{:class='table table-primary table-cmd-params'}

Example Outputs:

| Original string |String to delete|Result| 
|-------|--------|--------|
|!shoutout @Sebas| !\|@ | shoutout Sebas|
|!shoutout @Sebas| !\|@seb | shoutout @Sebas|
|!shoutout @Sebas| !\|@Seb | shoutout as
|!shoutout \Sebas| !\|\\\ | shoutout Sebas
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }