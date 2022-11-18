---
title: HTTP Request
num: 9
---

This command lets you send a web request, i.e. call an API and receive its response.\
Use it together with [Wait For/Until]({{ "commands/wait" | relative_url }}) commands, as you can pause button execution until you get a response back.


| Box Name | Type | Description | 
|-------|--------|--------
|URL|String|The web request URL
|Method|Dropdown|Method to use. Select from dropdown menu or manually input
|Header Object Name (optional)|Object |Name of the object containing any required headers
|Body Object JSON (optional)|JSON|Body JSON string to send
|Save Variable As|String|Variable name to save the result into
{:class='table table-primary'}

{% include example_public.html src="https://i.imgur.com/SfekTtI.png" size="100" title="Using HTTP Request to get dad jokes" pastebin="Sk1qXeV8" %}  







