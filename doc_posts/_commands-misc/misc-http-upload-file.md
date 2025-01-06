---
title: HTTP Upload File
num: 9.1
redirect_from:
  - commands/901
  - commands/309
---

Allows you to transfer a file to a server by utilizing FormData.

{% include async.html %}

{% include alert.html text="Requires additional knowledge on data formatting and is only visible in Developer Mode." type="info" %} 


| Box Name | Type | Description | 
|-------|--------|--------
|URL|String|The web request URL, must start with `http` or `https`
|Name|String|Name of the form field containing the file
|Form Fields Object (optional)|Object |Name of the object containing any additional form fields in a `key:value` format.
|Header Object Name (optional)|Object |Name of the object containing any required headers
|File Path|String|Path to the file to upload
|Save Variable As (optional)|String|Variable name to save the result into
{:class='table table-primary'}  







