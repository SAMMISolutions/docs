---
title: "Get User Color"
num: 5.3
version: 202310
---

Gets the colour of the specified user's name in chat rooms.

{% include alert.html text="This command needs some time to execute, either delay your next commands by 1-2 seconds or use <a href='/docs/commands/wait#waituntilvariableexists'>Wait Until Variable Exists</a> command." type="warning" %}

| Box Name | Type | Description | 
|-------|--------|--------
Login Name | Dropdown |The name of the channel to use for authentication in the API Header
Save Variable As|String|Variable to save the result
{:class='table table-primary'}

| Chat Message Example | Description |
|-------|--------|--------
color|string|Hex code for the colour of the specified user's name
user_id|String|The user's ID
user_login|String|The user's login name
user_name|String|The user's display name
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }