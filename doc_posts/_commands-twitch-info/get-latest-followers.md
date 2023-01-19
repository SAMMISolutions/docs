---
title: "Get Latest Followers"
num: 
version: 202310
---

Gets a list of the 100 most recent users that have followed the specified broadcaster.

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
&nbsp;&nbsp;&nbsp;&nbsp;followed_at|String|The UTC date and time, in RFC3339 format, of when the user followed
total|Integer|The total number of users
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }