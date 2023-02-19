---
title: "Get Chatters"
num: 2.2
version: 202310
redirect_from:
  - commands/270
---

Gets a list of users that are connected to the broadcaster's chat session.

{% include alert.html text="This command needs some time to execute, either delay your next commands by 1-2 seconds or use <a href='/docs/commands/wait#waituntilvariableexists'>Wait Until Variable Exists</a> command." type="warning" %}

| Box Name | Type | Description | 
|-------|--------|--------
Channel|String|Channel name to get chatters of
Save Variable As|String|Variable to save the result
{:class='table table-primary'}

| Variable Name | Type | Description |
|---------------|------|-------------|
total|number|The total number of users
data|Array|Array of objects representing each chatter
data[`0-?`]|Object|contains info for a chatter
data[`0-?`].user_id|String|The user's ID
data[`0-?`].user_login|String|The user's login name
data[`0-?`].user_name|String|The user's display name
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }
