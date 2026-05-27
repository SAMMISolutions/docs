---
title: "Get Latest Followers"
num: 4
version: 202310
redirect_from:
  - commands/279
---

Gets a list of the 100 most recent users that have followed the specified broadcaster.

{% include async.html %}
{% include alert.html text="Requires the <code>moderator:read:followers</code> and <code>user:read:email</code> Twitch scopes." type="info" %}

| Box Name | Type | Description | 
|-------|--------|--------
|Channel|String|Channel name to get latest followers of
|Save Variable As|String|Variable to save the result
{:class='table table-primary'}

**Saved Payload:**

| Variable Name | Type | Description |
|-------|--------|--------|
|total|Number|The total number of followers
|data|Array|Array of objects for each recent follower, with the most recent follower first
|data[`0-?`]|Object|Object containing specific user's info
|data[`0-?`].user_id|String|The user's ID
|data[`0-?`].user_login|String|The user's login name
|data[`0-?`].user_name|String|The user's display name
|data[`0-?`].followed_at|String|The UTC date and time, in RFC3339 format, of when the user followed
{:class='table table-secondary table-hover text-break'}

**Twitch API Endpoint:** `GET /helix/channels/followers`

**Example SAMMI Response Object:**
```json
{
  "total": 42371,
  "data": [
    {
      "user_id": "11111111",
      "user_login": "recentfollower",
      "user_name": "RecentFollower",
      "followed_at": "2024-01-15T20:45:00Z"
    },
    {
      "user_id": "22222222",
      "user_login": "anotherfan",
      "user_name": "AnotherFan",
      "followed_at": "2024-01-15T19:30:00Z"
    }
  ]
}
```
