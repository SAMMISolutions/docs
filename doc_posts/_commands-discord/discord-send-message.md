---
title: "Send Message"
num: 0
redirect_from:
  - commands/298
---

Sends a new message to a Discord channel.

{% include alert.html text="To create a Webhook URL, go to ```Server Settings (or Channel Settings) > Integrations > Webhooks```" type="warning" %}

{% include alert.html text="Sends a plain text message only. If you want embeds or other complex formatting you need to use the [Discord Controls extension](https://sammi.solutions/extensions/social/discord-controls)." type="info" %} 

| Box Name | Type | Description | 
|-------|--------|--------|
|Chat Message|String|The message to be sent to the Discord channel.
|Websocket URL|String|The webhook URL of the channel you want to post the message in.
{:class='table table-primary ' }












