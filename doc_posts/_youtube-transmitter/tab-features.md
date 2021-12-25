---
title: Features
num: 2
---

The YouTube Live tab in your Transmitter has a bunch of useful features.

#### View channel info
This will show information about your channel stats. Refreshes once per Transmitter reload.
{% include image.html w="75" src="yt-tsl-channelinfo.png" %}

#### View broadcast info
This will show information about your current broadcast stats. Refreshes once per minute.
{% include image.html w="75" src="yt-tsl-broadcastinfo.png" %}

#### View available categories
Shows all available broadcast categories.
{% include image.html w="75" src="yt-tsl-categories.png"  %}

#### Test events
You can use the test buttons to send fake events to LioranBoard. They will mimic the real events YouTube sends. Some buttons have options you can fill out as well.

#### Event replays
If you enable event replays, all recent (max 15) events will show up in the dropdown menu. You can then either replay the event or display the event's raw payload from YouTube.\
Transmitter will remember the state between reloads.

#### Error logging
If you get any errors, they will be all saved in a log and available to download as json file.\
*This feature now only works if Transmitter is running outside of OBS in your browser.*
{% include image.html w="75" src="yt-tsl-errors.png" %}