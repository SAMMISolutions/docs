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
|Login Name | Dropdown |The name of the channel to use for authentication in the API Header
|Save Variable As|String|Variable to save the result
{:class='table table-primary'}

**Saved Payload:**

| Variable | Type | Contents |
|-------|--------|--------
|Authorization|String|"Bearer (your OAuth token)"
|client-id|String|SAMMI's unique identifier
|Content-Type|String|"application/json"
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }

**Twitch API:** The header object produced by this command is compatible with any Twitch Helix API endpoint. Pass it as the `Header` parameter in the [HTTP Request]({{ "commands/misc#httprequest" | relative_url }}) command.

| Header Field | Type | Description |
|-------|--------|--------
| Authorization | string | `Bearer <token>` — the OAuth token for the selected login, used to authenticate all Twitch API requests. |
| client-id | string | SAMMI's registered Twitch application client ID, required by all Twitch API requests. |
| Content-Type | string | `application/json` — tells the Twitch API to expect a JSON body on POST/PATCH requests. |
{:class='table table-secondary w-auto table-hover text-break'}
