---
title: "Get Subscription Status"
num: 3
redirect_from:
  - commands/176
---

{% include alert.html text="Are you looking to <strong>only</strong> get if a user is subscribed or not? [Get User Status]({{ "commands/twitch-misc#getuserstatus" | relative_url }}) is what you are looking for, not this!" type="warning" %}

Returns an object containing context behind a specified user's subscription.\
Returns an empty object if the user is not subscribed.

{% include async.html %}

| Box Name | Type | Description | 
|-------|--------|--------
|Login Name | Dropdown |Your Twitch channel login name (all lowercase characters)
|User ID|number|User ID to check for active subscription
|Save Variable As|String|Variable name to save the response
{:class='table table-primary'}

You can access the response object's data by using [Get Object Variable]({{ "commands/object#getobjectvariable" | relative_url }}) command. 

**Response Data:**

| Variable Name | Type | Description | 
|-------|--------|--------
|broadcaster_id	|string|	User ID of the broadcaster.
|broadcaster_login|	string|	Login of the broadcaster.
|broadcaster_name|	string|	Display name of the broadcaster.
|is_gift	|boolean|	Indicates if the subscription is a gift.
|gifter_login	|string	|Login of the gifter (if is_gift is true).
|gifter_name|	string|	Display name of the gifter (if is_gift is true).
|tier	|string|	Subscription tier. 1000 is tier 1, 2000 is tier 2, and 3000 is tier 3.
{:class='table table-secondary w-auto table-hover' }











