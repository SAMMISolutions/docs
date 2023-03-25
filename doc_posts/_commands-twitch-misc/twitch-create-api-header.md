---
title: "Create API Header"
num: 
version: 202310
redirect_from:
  - commands/267
---

Creates a header object used for manual Twitch API Calls.
Can be used in conjunction with the [HTTP Request]({{ "commands/misc#httprequest" | relative_url }}) command.
{% include alert.html text="Be careful when pulling your OAuth token info. Make sure to delete the variable when you don't need it anymore. Do not accidentally expose it on your stream." type="danger" %} 

| Box Name | Type | Description | 
|-------|--------|--------
Login Name | Dropdown |The name of the channel to use for authentication in the API Header
Save Variable As|String|Variable to save the result
{:class='table table-primary'}

Returned object contains the following variables:

| Variable | Type | Contents |
|-------|--------|--------
Authorization|String|"Bearer (your OAuth token)"
client-id|String|SAMMI's unique identifier
Content-Type|String|"application/json"
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }
