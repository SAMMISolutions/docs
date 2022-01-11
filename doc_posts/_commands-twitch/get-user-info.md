---
title: "Get User Info"
num: 6
---

Retrieves information about a Twitch user. Provide either their username or user ID (leave the other one empty).

{% include alert.html text="This command needs some time to execute, either delay your next commands by 1-2 seconds or use <a href='/commands/statements#waituntilvariableexists'>Wait Until Variable Exists</a> command." type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|User Name|String|Username to get the information for
|User ID|Number|User ID to get the information for
|Save Variable|String|Variable to save the whole object 
{:class='table table-primary'}

You can access the response object fields by using [Get Object Variable]({{ "commands/object#getobjectvariable" | relative_url }}) command. The object is the Save Variable and key is one of the response fields.


**Response fields:**

| Field | Type| Description| 
|-------|--------|--------
|broadcaster_type|	string|	User’s broadcaster type: "partner", "affiliate", or "".
|description|	string|	User’s channel description.
|display_name|	string|	User’s display name.
|id	|string|	User’s ID.
|login	|string|	User’s login name.
|offline_image_url|	string|	URL of the user’s offline image.
|profile_image_url|	string|	URL of the user’s profile image.
|type	|string|	User’s type: "staff", "admin", "global_mod", or "".
|view_count|	integer	|Total number of views of the user’s channel.
|email|	string|	User’s verified email address. Returned if the request includes the user:read:email scope.
|created_at|	string|	Date when the user was created.
{:class='table table-secondary w-auto table-hover' }











