---
title: "String Trim"
num: 3.6
version: 202250
redirect_from:
  - commands/253
---

Trims blank spaces or specific characters from your string.  

{% include alert.html text='Trimming a backwards slash <code>\</code> must be escaped by another slash: <code>\\</code>' type="warning" %} 


| Box Name | Type | Description | 
|-------|--------|--------|
|Save Variable As|String|Variable name to save the trimmed string.|
|String (text)|String|String to be trimmed. This is case sensitive|
|Strings to Delete|String|If left blank, will delete all spaces before and after the string. If specific characters like `@, #` or `!` are to be trimmed, use the \| delimiter. 
{:class='table table-primary ' }

| Original string |String to delete|Result| 
|-------|--------|--------|
|!shoutout @Sebas| !\|@ | shoutout Sebas|
|!shoutout @Sebas| !\|@seb | shoutout @Sebas|
|!shoutout @Sebas| !\|@Seb | shoutout as
|!shoutout \Sebas| !\|\\\ | shoutout Sebas
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }
