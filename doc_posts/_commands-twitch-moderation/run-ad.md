---
title: "Run Ad (Commercial)"
num: 7
version: 202310
---

Starts a commercial on the specified channel.
{% include alert.html text="Only partners and affiliates may run commercials, and they must be live at the time.<br />
Can only be started by the broadcaster's account (will fail if sent as another account)" type="warning" %}

| Box Name | Type | Description | 
|-------|--------|--------
Channel Name|String|Channel to play the ad on. Leave blank to use default account
Duration|number|Requested length of commercial, in seconds. May result in a different duration to request. Should not be more than 180 seconds.
Save Variable As|String|Variable to save the result
{:class='table table-primary'}

Returns an object with the following variables:
| Variable name | Type | Description
|-------|--------|--------
length|number|Duration of the commercial, in seconds
message|string|A message that indicates whether Twitch was able to serve an ad
retry_after|number|The number of seconds you must wait before running another ad.
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }