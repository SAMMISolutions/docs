---
title: "Twitch: Get Custom Power-ups"
num: 6.1
version: 202640
redirect_from:
  - commands/355
---

Gets the custom Power-ups available for a Twitch channel and saves the full response object returned by Twitch.

If **Channel Name** is empty, SAMMI uses the default Twitch account. If Twitch is not connected, the channel cannot be resolved, or the request fails, the saved variable is set to `undefined`.

{% include async.html %}

| Box Name | Type | Description |
|-------|--------|--------
|Channel Name|Twitch Account|Twitch channel to fetch custom Power-ups from. Leave empty to use the default Twitch account.
|Save Variable As|String|Variable name to save the response object.
{:class='table table-primary'}

**Saved Payload:**

| Variable Name | Type | Description |
|---------------|------|-------------|
|data|Array|Array of custom Power-up objects returned by Twitch.
|data[`0-?`]|Object|A single custom Power-up object.
|pagination|Object|Pagination information returned by Twitch, if available.
{:class='table table-secondary w-auto table-hover text-break'}

Example:

| Channel Name | Save Variable As | Result |
|-------|--------|--------
|Main Twitch account|customPowerups|Saves the custom Power-ups response to `customPowerups`.
{:class='table table-secondary w-auto table-hover text-break'}

After running the command, you can use other object/array commands to inspect the returned data, such as reading the first Power-up name or ID from the saved result.

{% include alert.html text="Requires the <code>bits:read</code> and <code>user:read:email</code> Twitch scopes for the selected channel/account." type="info" %}
