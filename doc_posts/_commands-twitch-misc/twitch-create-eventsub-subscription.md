---
title: "Create EventSub Subscription"
num: 
version: 202520
redirect_from:
  - commands/345
---

Create custom Twitch EventSub subscriptions.
This lets you subscribe to any Twitch EventSub event, that way you don't have to wait for a new SAMMI update to get access to new EventSub events.

{% include alert.html text="You can find a list of all the EventSub Subscriptions <a href='https://dev.twitch.tv/docs/eventsub/eventsub-subscription-types/'>here</a>." type="info" %}

{% include alert.html text="You need to use the <a href='/docs/triggers/twitch#twitchcustomeventsubsubscription'>Custom EventSub Subscription</a> trigger in order to listen to these triggers." type="warning" %}

{% include alert.html text="SAMMI does NOT save custom subscriptions, you will need to make a button to automatically subscribe to custom events on startup." type="warning" %}

| Box Name | Type | Description | 
|-------|--------|--------
|Subscription Type|String|The Event to subscribe to. Must be dot notation, for example `automod.message.hold`|
|Version|Number|The version of the Event you wish to Subscribe, this is found next to the event name in the Twitch Documentation|
{:class='table table-primary'}
