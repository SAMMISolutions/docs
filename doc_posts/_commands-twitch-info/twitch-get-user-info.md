---
title: "Get User Info"
num: 1.1
redirect_from:
  - commands/171
---

Retrieves information about a Twitch user. Provide either their username or user ID (leave the other one empty).

If your SAMMI crashes with an error log relating to this command, make sure you have enabled the `View email address` scope in your Twitch connection settings. The command will not work without this scope enabled.

{% include alert.html text="This command needs some time to execute, either delay your next commands by 1-2 seconds or use <a href='/docs/commands/wait#waituntilvariableexists'>Wait Until Variable Exists</a> command." type="warning" %}

| Box Name | Type | Description |
|-------|--------|--------
|User Name|String|Username to get the information for
|User ID|number|User ID to get the information for
|Save Variable|String|Variable to save the whole object
{:class='table table-primary'}

You can access the response object's data by using [Get Object Variable]({{ "commands/object#getobjectvariable" | relative_url }}) command. 


**Response Data:**

| Variable Name | Type | Description |
|-------|--------|--------
|broadcaster_type|	string|	User’s broadcaster type: "partner", "affiliate", or "".
|description|	string|	User’s channel description.
|display_name|	string|	User’s display name.
|id	|string|	User’s ID.
|login	|string|	User’s login name.
|offline_image_url|	string|	URL of the user’s offline image.
|profile_image_url|	string|	URL of the user’s profile image.
|type	|string|	User’s type: "staff", "admin", "global_mod", or "".
|view_count|	number	|Total number of views of the user’s channel.
|email|	string|	User’s verified email address. Returned if the request includes the user:read:email scope.
|created_at|	string|	Date when the user was created.
{:class='table table-secondary w-auto table-hover' }

{% include example_public.html src="https://i.imgur.com/1wykfcB.png" size="100" title="Get a follower's profile picture" pastebin="FcaArEdc" %}









