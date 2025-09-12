---
title: "Delete EventSub Subscription"
num: 
version: 202520
redirect_from:
  - commands/347
---

Deletes a custom Twitch EventSub subscription.
This lets you unsubscribe from any Twitch EventSub event.

{% include alert.html text="You will need to use <a href='/docs/commands/twitch-misc#getactiveeventsubsubscriptions'>Get Active Event Sub Subscriptions</a> in order to get the internal reference Id for the subscription." type="warning" %}

| Box Name | Type | Description | 
|-------|--------|--------
|EventSub Subscription Id|String|The internal Id referencing this subscription.|
{:class='table table-primary'}
