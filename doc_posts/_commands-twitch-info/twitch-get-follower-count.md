---
title: "Get Follower Count"
num: 4.1
redirect_from:
  - commands/178
---

Returns the amount of followers your channel currently has.

{% include async.html %}

| Box Name | Type | Description | 
|-------|--------|--------
|Login Name | Dropdown |Your Twitch login name (all lowercase characters)
|Save Variable As|String|Variable name to save the follower count
{:class='table table-primary'}

{% include alert.html text="Requires the <code>moderator:read:followers</code> and <code>user:read:email</code> Twitch scopes." type="info" %}

**Saved Value:**

| Value | Type | Description |
|-------|------|-------------|
|savedVariable|Number|Total follower count returned by Twitch (`total`).|
|undefined|Undefined|Saved if Twitch is not connected, the channel cannot be resolved, required scopes are missing, Twitch returns an empty response, or the request fails.|
{:class='table table-secondary w-auto table-hover text-break'}

**Twitch API Endpoint:** `GET /helix/channels/followers`

**Example SAMMI Response:**
```
42371
```
SAMMI saves only the `total` field from the API response as a plain number.








