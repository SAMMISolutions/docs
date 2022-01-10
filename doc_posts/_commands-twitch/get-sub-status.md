---
title: "Get Subscription Status "
num: 10
---

Checks if a specific user is subscribed to your channel.\
Returns an empty object if the user is not subscribed.

| Box Name | Type | Description | 
|-------|--------|--------
|Login Name|String|Your Twitch channel login name (all lowercase characters)
|User ID|Number|User ID to check for active subscription
|Save Variable|String|Variable name to save the response
{:class='table table-primary'}

Response fields:

| Field | Type| Description| 
|-------|--------|--------
|broadcaster_id	|string|	User ID of the broadcaster.
|broadcaster_login|	string|	Login of the broadcaster.
|broadcaster_name|	string|	Display name of the broadcaster.
|is_gift	|boolean|	Indicates if the subscription is a gift.
|gifter_login	|string	|Login of the gifter (if is_gift is true).
|gifter_name|	string|	Display name of the gifter (if is_gift is true).
|tier	|string|	Subscription tier. 1000 is tier 1, 2000 is tier 2, and 3000 is tier 3.
{:class='table table-secondary w-auto table-hover' }











