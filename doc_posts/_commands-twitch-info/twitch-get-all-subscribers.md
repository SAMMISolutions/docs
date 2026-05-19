---
title: "Get All Subscribers Info"
num: 3.2
version: 202610
redirect_from:
  - commands/310
---

Gets subscriber information for the specified channel and saves the response object returned by Twitch.
For more information on what the response contains, check out the Response Body table in the [Twitch API Reference Guide for Get Broadcaster Subscriptions](https://dev.twitch.tv/docs/api/reference/#get-broadcaster-subscriptions).

If **Channel** is empty, SAMMI uses the default Twitch account. The command requests up to 100 subscriptions from Twitch and saves the returned `data`, `pagination`, `total`, and `points` fields where available.

{% include async.html %}

| Box Name | Type | Description | 
|-------|--------|--------
|Channel|Dropdown|Twitch channel to get subscribers from. This can be left empty to use the default account.
|Save Variable As|String|Variable name to save the response as.
{:class='table table-primary'}

**Saved Payload:**

| Variable Name | Type | Description |
|---------------|------|-------------|
data|Array|Array of subscriber objects returned by Twitch.
data[`0-?`].broadcaster_id|String|User ID of the broadcaster.
data[`0-?`].broadcaster_login|String|Login name of the broadcaster.
data[`0-?`].broadcaster_name|String|Display name of the broadcaster.
data[`0-?`].gifter_id|String|User ID of the gifter, if the subscription was gifted.
data[`0-?`].gifter_login|String|Login name of the gifter, if available.
data[`0-?`].gifter_name|String|Display name of the gifter, if available.
data[`0-?`].is_gift|Boolean|Whether the subscription was gifted.
data[`0-?`].tier|String|Subscription tier.
data[`0-?`].plan_name|String|Subscription plan name.
data[`0-?`].user_id|String|Subscriber User ID.
data[`0-?`].user_name|String|Subscriber display name.
data[`0-?`].user_login|String|Subscriber login name.
pagination|Object|Pagination information returned by Twitch, if available.
total|Number|Total subscriber count returned by Twitch.
points|Number|Subscriber points returned by Twitch.
{:class='table table-secondary w-auto table-hover text-break'}

{% include alert.html text="Requires the <code>channel:read:subscriptions</code> Twitch scope." type="info" %}
