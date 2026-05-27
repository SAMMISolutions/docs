---
title: "Set Shield Mode"
num: 6.4
version: 202310
redirect_from:
  - commands/269
---

Toggles Shield Mode on/off for the specified channel.
Click [here](https://safety.twitch.tv/s/article/Protect-your-channel-with-Shield-Mode) for more information on Shield Mode. 

If **Channel** is empty, SAMMI uses the default Twitch account.

| Box Name | Type | Description | 
|-------|--------|--------
|Channel|String|Channel to toggle Shield Mode for
|Enabled|Dropdown|Enable/Disable
{:class='table table-primary'}

{% include alert.html text="Requires the <code>moderator:manage:shield_mode</code> Twitch scope." type="info" %}
