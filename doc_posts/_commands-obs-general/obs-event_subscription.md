---
title: "Event Subscription"
num: 10
redirect_from:
  - commands/239
---

By default, all OBS events marked as 'high volume' are disabled. High volume events must be explicitly subscribed to. This command must be used each time you connect to OBS. 

{% include alert.html text="Only available for OBS Websocket 5" type="info" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|Base Events| Int | Default base events to listen to using a bitmask. Best to not modify.
| Volume Meters | Checkbox | A high-volume event providing volume levels of all active inputs every 50 milliseconds.
| Active State | Checkbox | An input's active state has changed. When an input is active, it means it's being shown by the program feed.
| State Changed | Checkbox | An input's show state has changed. When an input is showing, it means it's being shown by the preview or a dialog.
| Transform Changed | Checkbox | The transform/crop of a scene item has changed. Enabled in SAMMI by default.
{:class='table table-primary'}









