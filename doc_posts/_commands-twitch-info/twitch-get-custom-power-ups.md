---
title: "Twitch: Get Custom Power-ups"
num: 6.1
version: 202640
redirect_from:
  - commands/355
---

Gets the custom Power-ups available for a Twitch channel and saves the result returned by Twitch.

| Box Name | Type | Description |
|-------|--------|--------
|Channel Name|Twitch Account|Twitch channel to fetch custom Power-ups from.
|Save Variable As|String|Variable name to save the result.
{:class='table table-primary'}

Example:

| Channel Name | Save Variable As | Result |
|-------|--------|--------
|Main Twitch account|customPowerups|Saves the custom Power-ups response to `customPowerups`.
{:class='table table-secondary w-auto table-hover text-break'}

After running the command, you can use other object/array commands to inspect the returned data, such as reading the first Power-up name or ID from the saved result.

{% include alert.html text="This command requires a Twitch account with the required permissions connected to SAMMI." type="info" %}
