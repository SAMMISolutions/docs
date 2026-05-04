---
title: "Get Ad Schedule"
num: 23
version: 202610
redirect_from:
  - commands/329
---

Gets ad schedule information for the specified Twitch channel.
For more information on what the response contains, check out the Response Body table in the [Twitch API Reference Guide for Get Ad Schedule](https://dev.twitch.tv/docs/api/reference/#get-ad-schedule).

{% include async.html %}

| Box Name | Type | Description | 
|-------|--------|--------
|Channel|Dropdown|Twitch channel to get the ad schedule from. This can be left empty to use the default account.
|Save Variable As|String|Variable name to save the response as.
{:class='table table-primary'}

{% include alert.html text="Requires the <code>channel:read:ads</code> Twitch scope." type="info" %}

