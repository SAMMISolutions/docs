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
|URL|String|The URL to make the API Call to
|Method|Dropdown|The Method used for the API Call
|Login Name | Dropdown |The name of the channel to use for authentication for the API Call
|Save Variable As (optional)|String|Variable to save the result
{:class='table table-primary'}

**Saved Payload:**

SAMMI saves the parsed JSON response returned by the Twitch API endpoint you call. The exact object depends on the URL and method.

| Value | Type | Description |
|-------|------|-------------|
|savedVariable|Object|Full JSON response object returned by Twitch for the requested endpoint.|
|undefined|Undefined|Saved if Twitch is not connected, the URL/method/account is invalid, Twitch returns an error, or the response cannot be parsed as JSON.|
{:class='table table-secondary w-auto table-hover text-break'}

**Twitch API:** This command can target any Twitch Helix API endpoint. Specify the full URL (e.g. `https://api.twitch.tv/helix/streams`) and the appropriate HTTP method. Authentication headers are added automatically using the selected login's OAuth token and SAMMI's client ID.

| Request Component | Type | Description |
|-------|--------|--------
| URL | string | Full Twitch Helix API URL including any query parameters (e.g. `https://api.twitch.tv/helix/streams?user_login=username`). |
| Method | string | HTTP method for the request: `GET`, `POST`, `PATCH`, `DELETE`, etc. |
| Authorization | string | Bearer token — added automatically from the selected login's OAuth token. |
| client-id | string | SAMMI's client ID — added automatically to the request header. |
{:class='table table-secondary w-auto table-hover text-break'}
