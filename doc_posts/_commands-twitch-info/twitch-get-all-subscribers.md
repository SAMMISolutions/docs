---
title: "Get All Subscribers Info"
num: 3.2
version: 202610
redirect_from:
  - commands/310
---

Gets information about all subscribers for the specified channel.
For more information on what the response contains, check out the Response Body table in the [Twitch API Reference Guide for Get Broadcaster Subscriptions](https://dev.twitch.tv/docs/api/reference/#get-broadcaster-subscriptions).

{% include async.html %}

| Box Name | Type | Description | 
|-------|--------|--------
|Channel|Dropdown|Twitch channel to get subscribers from. This can be left empty to use the default account.
|Save Variable As|String|Variable name to save the response as.
{:class='table table-primary'}

{% include alert.html text="Requires the <code>channel:read:subscriptions</code> Twitch scope." type="info" %}

