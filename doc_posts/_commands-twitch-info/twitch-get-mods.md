---
title: "Get Moderators"
num: 2
version: 202310
redirect_from:
  - commands/277
---

Gets a list of users that are moderators for the specified broadcaster.

{% include async.html %}

| Box Name | Type | Description | 
|-------|--------|--------
Channel|String|Channel name to get chatters of
Save Variable As|String|Variable to save the result
{:class='table table-primary'}

**Saved Payload:**

| Variable Name | Type | Description |
|---------------|------|-------------|
data|Array|Array of objects representing each moderator
data[`0-?`]|Object|contains info for a moderator
data[`0-?`].user_id|String|The user's ID
data[`0-?`].user_login|String|The user's login name
data[`0-?`].user_name|String|The user's display name
pagination|Object|Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through.
pagination.cursor|String|The cursor used to get the next page of results with Twitch API Call.
{:class='table table-secondary w-auto table-hover text-break'}
