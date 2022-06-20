---
title: HTTP Request
num: 9
---

This command lets you send a web request, i.e. call an API and receive its response.\
Extremely easy to use with *Variable Wait* commands.


| Box Name | Type | Description | 
|-------|--------|--------
|URL|String|The web request URL
|Method|String|Method to use, i.e. GET, POST, PUT, DELETE etc.
|Header object (optional)|Object |Name of the object containing any required headers. If needed, you can change the header's User-Agent.
|Body (optional)|Object|Name of the body object to send
|Result Save Variable|String|Variable name to save the result into
{:class='table table-primary'}

{% include example_public.html src="https://i.imgur.com/SfekTtI.png" size="100" title="Using HTTP Request to get dad jokes" pastebin="Sk1qXeV8" %}  







