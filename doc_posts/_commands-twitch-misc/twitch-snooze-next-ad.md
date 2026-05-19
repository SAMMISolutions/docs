---
title: "Snooze Next Ad"
num: 24
version: 202610
redirect_from:
  - commands/330
---

Snoozes the next automatic mid-roll ad for the specified Twitch channel.
For more information on what the response contains, check out the Response Body table in the [Twitch API Reference Guide for Snooze Next Ad](https://dev.twitch.tv/docs/api/reference/#snooze-next-ad).

{% include async.html %}

| Box Name | Type | Description | 
|-------|--------|--------
|Channel|Dropdown|Twitch channel to snooze the next ad for. This can be left empty to use the default account.
|Save Variable As|String|Variable name to save the response as.
{:class='table table-primary'}

**Saved Payload:**

SAMMI saves the first snooze result object returned by Twitch (`data[0]`).

| Variable Name | Type | Description |
|-------|--------|--------|
snooze_count|Number|Number of available snoozes after this command.
snooze_refresh_at|String|Time in Twitch format when a snooze becomes available again.
next_ad_at|String|Time in Twitch format when the next scheduled ad starts after the snooze.
{:class='table table-secondary w-auto table-hover text-break'}

{% include alert.html text="Requires the <code>channel:read:ads</code> Twitch scope." type="info" %}
