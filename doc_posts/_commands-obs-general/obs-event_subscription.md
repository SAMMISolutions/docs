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

**OBS WebSocket 5:** Event Subscriptions (sent during `Identify` handshake, op code 1)

When SAMMI connects to OBS, it sends an `Identify` message with an `eventSubscriptions` bitmask. This command lets you enable additional high-volume subscriptions at runtime using a `Reidentify` request (op code 3).

| Subscription | Bitmask Value | Description |
|-------|--------|--------
| InputVolumeMeters | `65536` | Volume levels of all active inputs, emitted every ~50ms. |
| InputActiveStateChanged | `131072` | Fires when an input becomes active (visible in the program output). |
| InputShowStateChanged | `262144` | Fires when an input becomes visible in preview or a dialog. |
| SceneItemTransformChanged | `524288` | Fires when a source's transform or crop changes. |
{:class='table table-secondary w-auto table-hover text-break'}

Use `OBS Event Pull` command in an OBS Trigger button to receive data from these events.









