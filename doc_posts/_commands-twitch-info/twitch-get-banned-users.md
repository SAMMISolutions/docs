---
title: "Get Banned Users"
num: 2.3
version: 202310
redirect_from:
  - commands/276
---

Gets a list of all users that are banned/timed out in the specified channel.

{% include alert.html text="This command needs some time to execute, either delay your next commands by 1-2 seconds or use <a href='/docs/commands/wait#waituntilvariableexists'>Wait Until Variable Exists</a> command." type="warning" %}

| Box Name | Type | Description | 
|-------|--------|--------
Channel|String|Channel name to get chatters of
Save Variable As|String|Variable to save the result
{:class='table table-primary'}


| Variable Name | Type | Description |
|---------------|------|-------------|
data|Array|Array of objects representing each banned/timed out user
data[`0-?`]|Object|contains info for a banned/timed out user
data[`0-?`].user_id|String|The user's ID
data[`0-?`].user_login|String|The user's login name
data[`0-?`].user_name|String|The user's display name
data[`0-?`].expires_at|String|The UTC date and time, in RFC3339 format, of when the timeout expires. Will be an empty string if the user is banned.
data[`0-?`].created_at|String|Date and time the ban/timeout happened
data[`0-?`].reason|String|The specified reason. Will be blank if no reason given.
data[`0-?`].moderator_id|String|The ID of the moderator who banned/timed out the user
data[`0-?`].moderator_login|String|The moderator's login name
data[`0-?`].moderator_name|String|The moderator's display name
pagination|Object|Contains the information used to page through the list of results. The object is empty if there are no more pages left to page through.
pagination.cursor|String|The cursor used to get the next page of results. Use the cursor to set the request’s after query parameter using Twitch API Call. 
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }