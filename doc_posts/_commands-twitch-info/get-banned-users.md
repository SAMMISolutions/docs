---
title: "Get Banned Users"
num: 
version: 202310
---

Gets a list of all users that are banned/timed out in the specified channel.

| Box Name | Type | Description | 
|-------|--------|--------
Channel|String|Channel name to get chatters of
Save Variable As|String|Variable to save the result
{:class='table table-primary'}

| Chat Message Example | Description |
|-------|--------|--------
data|Object array|Array of objects containing the following info
&nbsp;&nbsp;&nbsp;&nbsp;user_id|String|The user's ID
&nbsp;&nbsp;&nbsp;&nbsp;user_login|String|The user's login name
&nbsp;&nbsp;&nbsp;&nbsp;user_name|String|The user's display name
&nbsp;&nbsp;&nbsp;&nbsp;expires_at|String|The UTC date and time, in RFC3339 format, of when the timeout expires. Will be an empty string if the user is banned.
&nbsp;&nbsp;&nbsp;&nbsp;created_at|String|Date and time the ban/timeout happened
&nbsp;&nbsp;&nbsp;&nbsp;reason|String|The specified reason. Will be blank if no reason given.
&nbsp;&nbsp;&nbsp;&nbsp;moderator_id|String|The ID of the moderator who banned/timed out the user
&nbsp;&nbsp;&nbsp;&nbsp;moderator_login|String|The moderator's login name
&nbsp;&nbsp;&nbsp;&nbsp;moderator_name|String|The moderator's display name
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }