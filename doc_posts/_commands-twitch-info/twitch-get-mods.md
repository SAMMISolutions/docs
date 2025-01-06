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

| Variable Name | Type | Description |
|---------------|------|-------------|
total|number|The total number of moderators
data|Array|Array of objects representing each moderator
data[`0-?`]|Object|contains info for a moderator
data[`0-?`].user_id|String|The user's ID
data[`0-?`].user_login|String|The user's login name
data[`0-?`].user_name|String|The user's display name
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }