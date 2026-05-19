---
title: "Get Emotes"
num: 5.2
version: 202310
redirect_from:
  - commands/281
---

Gets a list of the custom emotes for the specified channel.
For more information on what the response contains, check out the Response Body table in the [Twitch API Reference Guide for Get Channel Emotes](https://dev.twitch.tv/docs/api/reference/#get-channel-emotes)

{% include async.html %}

| Box Name | Type | Description | 
|-------|--------|--------
Channel|String|Channel name to get emotes of
Save Variable As|String|Variable to save the result
{:class='table table-primary'}

**Saved Payload:**

SAMMI saves the full response object returned by Twitch.

| Variable Name | Type | Description |
|-------|--------|--------|
data|Array|Array of custom emote objects returned by Twitch.
data[`0-?`].id|String|Emote ID.
data[`0-?`].name|String|Emote name.
data[`0-?`].images|Object|Image URLs for the emote.
data[`0-?`].tier|String|Subscription tier the emote belongs to, if applicable.
data[`0-?`].emote_type|String|Type of emote.
data[`0-?`].emote_set_id|String|ID of the emote set.
data[`0-?`].format|Array|Available image formats.
data[`0-?`].scale|Array|Available image scales.
data[`0-?`].theme_mode|Array|Available theme modes.
template|String|Template URL for emote images.
{:class='table table-secondary w-auto table-hover text-break'}
