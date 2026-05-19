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

**Saved Payload:**

SAMMI saves the parsed JSON response returned by the Twitch API endpoint you call. The exact object depends on the URL and method.

| Value | Type | Description |
|-------|------|-------------|
|savedVariable|Object|Full JSON response object returned by Twitch for the requested endpoint.|
|undefined|Undefined|Saved if Twitch is not connected, the URL/method/account is invalid, Twitch returns an error, or the response cannot be parsed as JSON.|
{:class='table table-secondary w-auto table-hover text-break'}
