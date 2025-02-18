---
title: "Get Latest Followers"
num: 4
version: 202310
redirect_from:
  - commands/279
---

Gets a list of the 100 most recent users that have followed the specified broadcaster.

{% include async.html %}

| Box Name | Type | Description | 
|-------|--------|--------
Channel|String|Channel name to get chatters of
Save Variable As|String|Variable to save the result
{:class='table table-primary'}

**Response Data:**

| Variable Name | Type | Description |
|-------|--------|--------|
total|number|The total number of users
data|Object|Array of objects for each recent follower, with the most recent follower first
data[`0-?`]|Object|Object containing specific user's info
data[`0-?`].user_id|String|The user's ID
data[`0-?`].user_login|String|The user's login name
data[`0-?`].user_name|String|The user's display name
data[`0-?`].followed_at|String|The UTC date and time, in RFC3339 format, of when the user followed
{:class='table table-secondary table-hover data-toggle='table' text-break }