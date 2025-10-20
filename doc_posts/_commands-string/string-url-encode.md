---
title: "URL Encode String"
num: 11
redirect_from:
  - commands/237
---

Encodes a string by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character.\
Useful for using HTTP Request command as browsers do this part automatically for you. 

Parameters:

| Name | Type | Value Type | Description |
|-------|--------|--------|----------|
| Save Variable As | {% include cmd_param.html param="Text Box" %} | string | Name of the variable to save the encoded string. Can use an [Accessor Path](/commands/variables#accessors). |
| String (text) | {% include cmd_param.html param="Text Box (Resizable)" %} | string | String to encode. |
{:class='table table-primary table-cmd-params'}