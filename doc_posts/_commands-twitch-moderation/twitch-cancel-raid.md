---
title: "Cancel Raid"
num: 3.1
version: 202310
redirect_from:
  - commands/272
---

Cancels an ongoing raid, as long as the countdown timer has not expired and the broadcaster has not clicked the Raid Now button.

If **Channel** is empty, SAMMI uses the default Twitch account.

| Box Name | Type | Description | 
|-------|--------|--------
Channel|String|The channel to cancel the ongoing raid in
{:class='table table-primary'}

{% include alert.html text="Requires the <code>channel:manage:raids</code> Twitch scope." type="info" %}
