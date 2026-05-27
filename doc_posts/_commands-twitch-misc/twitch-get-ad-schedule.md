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

**Saved Payload:**

SAMMI saves the first ad schedule object returned by Twitch (`data[0]`).

| Variable Name | Type | Description |
|-------|--------|--------|
|next_ad_at|String|Time in Twitch format when the next scheduled ad starts.
|last_ad_at|String|Time in Twitch format when the previous ad started.
|duration|Number|Duration of the scheduled ad in seconds.
|preroll_free_time|Number|Remaining preroll-free time in seconds.
|snooze_count|Number|Number of available snoozes.
|snooze_refresh_at|String|Time in Twitch format when a snooze becomes available again.
{:class='table table-secondary w-auto table-hover text-break'}

{% include alert.html text="Requires the <code>channel:read:ads</code> Twitch scope." type="info" %}

**Twitch API Endpoint:** `GET /helix/channels/ads`

| Query Parameter | Type | Description |
|-------|--------|--------
| broadcaster_id | string | The ID of the broadcaster whose ad schedule to retrieve. |
{:class='table table-secondary w-auto table-hover text-break'}
