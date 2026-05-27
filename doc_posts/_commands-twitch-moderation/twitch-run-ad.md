---
title: "Run Ad (Commercial)"
num: 7
version: 202310
redirect_from:
  - commands/266
---

Starts a commercial on the specified channel.
{% include alert.html text="Only partners and affiliates may run commercials, and they must be live at the time.<br />
Can only be started by the broadcaster's account (will fail if sent as another account)" type="warning" %}

| Box Name | Type | Description | 
|-------|--------|--------
|Channel Name|String|Channel to play the ad on. Leave blank to use default account
|Duration|Number|Requested length of commercial, in seconds. May result in a different duration to request. Should not be more than 180 seconds.
|Save Variable As|String|Variable to save the result
{:class='table table-primary'}

**Saved Payload:**

| Variable name | Type | Description |
|-------|--------|--------
|length|Number|Duration of the commercial, in seconds
|message|String|A message that indicates whether Twitch was able to serve an ad
|retry_after|Number|The number of seconds you must wait before running another ad.
{:class='table table-secondary w-auto table-hover text-break'}

{% include alert.html text="If <strong>Channel Name</strong> is empty, SAMMI uses the default Twitch account. The saved result is set to <code>undefined</code> if Twitch rejects the ad request." type="info" %}

**Twitch API Endpoint:** `POST /helix/channels/commercial`

| Request Field | Type | Description |
|-------|--------|--------
| broadcaster_id | String | The ID of the partner or affiliate broadcaster that wants to run a commercial |
| length | Integer | Desired duration of the commercial in seconds. Valid values: 30, 60, 90, 120, 150, 180 |
{:class='table table-secondary w-auto table-hover text-break'}
