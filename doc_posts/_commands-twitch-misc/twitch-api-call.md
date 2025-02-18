---
title: "API Call"
num: 
version: 202310
redirect_from:
  - commands/268
---

Makes a Twitch API Call to the specified Twitch API URL.\
Works like the HTTP Request command, but automatically creates a header for Twitch API Calls. Convenient! 

{% include async.html %}

{% include alert.html text="For making non-Twitch API Calls, use the <a href='/docs/commands/misc#httprequest'>HTTP Request</a> command instead!" type="info" %}

| Box Name | Type | Description | 
|-------|--------|--------
URL|String|The URL to make the API Call to
Method|Dropdown|The Method used for the API Call
Login Name | Dropdown |The name of the channel to use for authentication for the API Call
Save Variable As (optional)|String|Variable to save the result
{:class='table table-primary'}
