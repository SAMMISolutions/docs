---
title: "Delete EventSub Subscription"
num: 22
version: 202520
redirect_from:
  - commands/347
---

Deletes a custom Twitch EventSub subscription.
This lets you unsubscribe from any Twitch EventSub event.

{% include alert.html text="You will need to use <a href='/docs/commands/twitch-misc#getactiveeventsubsubscriptions'>Get Active EventSub Subscriptions</a> in order to get the internal reference ID for the subscription." type="warning" %}

| Box Name | Type | Description | 
|-------|--------|--------
|EventSub Subscription Id|String|The internal Id referencing this subscription.|
{:class='table table-primary'}

**Twitch API Endpoint:** `DELETE /helix/eventsub/subscriptions`

| Request Field | Type | Description |
|-------|--------|--------
| id | string | The ID of the EventSub subscription to delete. Retrieve this using the [Get Active EventSub Subscriptions]({{ '/docs/commands/twitch-misc#getactiveeventsubsubscriptions' | relative_url }}) command. |
{:class='table table-secondary w-auto table-hover text-break'}
