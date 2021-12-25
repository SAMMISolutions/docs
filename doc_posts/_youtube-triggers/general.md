---
title: "General"
num: 1
---

Once your status changes to `Listening`, LioranBoard will automatically start listening to all the following events. (No events are delivered if the stream is offline and status is `Ready`.)\
The events are polled every X seconds. The frequency depends on how many current viewers your stream has. 10 seconds for less than 3 viewers, 5 seconds for less than 10 viewers and 2 seconds (or whatever YouTube API dictates) for 10+ viewers.

**Sending test events**
You can test all available events via Transmitter in your YouTube Live tab. The test buttons will mimic real events that YouTube API sends. There are some options you can fill out as well. 

**Replaying events**
You can enable Event Replays via Transmitter in your YouTube Live tab. All new recent events (max 15) will be logged and available from the dropdown menu to either replay them or view the raw payload YouTube sends.

| Event Name | Description| Extension Trigger |
|-------|--------|--------|
| New Subscriber | Triggers for all new subscribers (same as followers on Twitch) to your channel. | `YT Live Subscriber`|
| New Member | Triggers whenever you get a [new member](https://support.google.com/youtube/answer/7636690?hl=en) (same as subscribers on Twitch). |`YT Live Member`|
| New Milestone|Triggers whenever your member reaches a new milestone.| `YT Live Member Milestone`|
|New Super Chat|Triggers for all new [super chat](https://support.google.com/youtube/answer/9277801?hl=en) events.| `YT Live Super Chat` |
|New Super Sticker|Triggers for all new [super sticker ](https://support.google.com/youtube/answer/9277801?hl=en) events.|`YT Live Super Sticker`|
|New Chat Message |Triggers for all chat messages. You can also use [wild cards](faq/receiver#wildcards) to filter messages. | `Regular Twitch Chat Message trigger`|
|Live Chat Ended |Triggers a few minutes after your broadcast goes offline. | `YT Live Chat Ended`|
{:class='table table-primary w-auto table-hover data-toggle='table' text-break' }






