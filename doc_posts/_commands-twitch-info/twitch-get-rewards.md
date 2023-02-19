---
title: "Get Channel Point Rewards"
num: 5
version: 202310
redirect_from:
  - commands/280
---

Gets a list of the custom Channel Point Rewards for the specified channel. Will not return info on standard Rewards, like "Highlight This Message".
For more information on what the response contains, check out the Response Body table in the [Twitch API Reference Guide for Get Custom Reward](https://dev.twitch.tv/docs/api/reference/#get-custom-reward)

{% include alert.html text="This command needs some time to execute, either delay your next commands by 1-2 seconds or use <a href='/docs/commands/wait#waituntilvariableexists'>Wait Until Variable Exists</a> command." type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------
Channel|String|Channel name to get chatters of
Save Variable As|String|Variable to save the result
{:class='table table-primary'}

| Chat Message Example | Description |
|-------|--------|--------
data|Object array|Array of objects containing A LOT of info
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }