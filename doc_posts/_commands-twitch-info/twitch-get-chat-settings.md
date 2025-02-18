---
title: "Get Chat Settings"
num: 5.1
version: 202310
redirect_from:
  - commands/286
---

Gets the chat settings for the specified channel.
For more information on what the response contains, check out the Response Body table in the [Twitch API Reference Guide for Get Chat Settings](https://dev.twitch.tv/docs/api/reference/#get-chat-settings)

{% include async.html %}

| Box Name | Type | Description | 
|-------|--------|--------
Channel|String|Channel name to get the chat settings for
Save Variable As|String|Variable to save the result
{:class='table table-primary'}

| Chat Message Example | Description |
|-------|--------|--------
data|Object array|Array of objects containing A LOT of info
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }