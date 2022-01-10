---
title: "Twitch: Get User Info"
num: 6
---

Retrieves information about a Twitch user. Provide either their username or user ID (leave the other one empty).

| Box Name | Type | Description | 
|-------|--------|--------
|User Name|String|Username to get the information for
|User ID|Number|User ID to get the information for
|Save Variable|String|Variable to save the whole object 
{:class='table table-primary'}

Response fields: 

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











