---
title: "Get Hype Train Status"
num: 1.33
version: 202610
redirect_from:
  - commands/349
---

Gets the active Hype Train status for the specified Twitch channel and saves the active Hype Train object.
For more information on what the response contains, check out the Response Body table in the [Twitch API Reference Guide for Get Hype Train Status](https://dev.twitch.tv/docs/api/reference/#get-hype-train-status).

{% include async.html %}
{% include alert.html text="This command returns <strong>nothing</strong> if there isn't an active Hype Train, leaving your variable with the result of <code>undefined</code>." type="info" %}

| Box Name | Type | Description | 
|-------|--------|--------
|Channel|Dropdown|Twitch channel to get the Hype Train status from. This can be left empty to use the default account.
|Save Variable As|String|Variable name to save the response as.
{:class='table table-primary'}

**Saved Payload:**

| Variable Name | Type | Description |
|---------------|------|-------------|
id|String|Hype Train event ID.
event_type|String|Type of Hype Train event.
event_timestamp|String|Time in Twitch format when the event happened.
version|String|Hype Train event version.
total|Number|Current total progress.
progress|Number|Current progress toward the next level.
goal|Number|Progress required for the next level.
level|Number|Current Hype Train level.
top_contributions|Array|Top contribution objects returned by Twitch.
last_contribution|Object|Most recent contribution object returned by Twitch.
expires_at|String|Time in Twitch format when the current Hype Train expires.
started_at|String|Time in Twitch format when the current Hype Train started.
cooldown_ends_at|String|Time in Twitch format when the cooldown ends.
{:class='table table-secondary w-auto table-hover text-break'}

{% include alert.html text="Requires the <code>channel:read:hype_train</code> Twitch scope." type="info" %}
