---
title: "Get Banned Users"
num: 2.3
version: 202310
redirect_from:
  - commands/276
---

Gets a list of all users that are banned/timed out in the specified channel.

{% include async.html %}

| Box Name | Type | Description | 
|-------|--------|--------
|Channel|String|Channel name to get banned users of
|Save Variable As|String|Variable to save the result
{:class=’table table-primary’}

**Saved Payload:**

| Variable Name | Type | Description |
|---------------|------|-------------|
|data|Array|Array of objects representing each banned/timed out user
|data[`0-?`]|Object|contains info for a banned/timed out user
|data[`0-?`].user_id|String|The user’s ID
|data[`0-?`].user_login|String|The user’s login name
|data[`0-?`].user_name|String|The user’s display name
|data[`0-?`].expires_at|String|The UTC date and time, in RFC3339 format, of when the timeout expires. Will be an empty string if the user is banned.
|data[`0-?`].created_at|String|Date and time the ban/timeout happened
|data[`0-?`].reason|String|The specified reason. Will be blank if no reason given.
|data[`0-?`].moderator_id|String|The ID of the moderator who banned/timed out the user
|data[`0-?`].moderator_login|String|The moderator’s login name
|data[`0-?`].moderator_name|String|The moderator’s display name
|pagination|Object|Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through.
|pagination.cursor|String|The cursor used to get the next page of results. Use the cursor to set the request’s after query parameter using Twitch API Call. 
{:class=’table table-secondary w-auto table-hover text-break’}

**Twitch API Endpoint:** `GET /helix/moderation/banned`

**Example SAMMI Response Object:**
```json
{
  "data": [
    {
      "user_id": "88888888",
      "user_login": "rulebreaker",
      "user_name": "RuleBreaker",
      "expires_at": "",
      "created_at": "2024-01-10T15:00:00Z",
      "reason": "Repeated violations",
      "moderator_id": "33333333",
      "moderator_login": "trustedmod",
      "moderator_name": "TrustedMod"
    },
    {
      "user_id": "99999999",
      "user_login": "timeoutuser",
      "user_name": "TimeoutUser",
      "expires_at": "2024-01-15T22:00:00Z",
      "created_at": "2024-01-15T21:00:00Z",
      "reason": "Spam",
      "moderator_id": "33333333",
      "moderator_login": "trustedmod",
      "moderator_name": "TrustedMod"
    }
  ],
  "pagination": {
    "cursor": "eyJiIjpudWxsLCJhIjp7Ik9mZnNldCI6MTAwfX0"
  }
}
```
