---
title: "Get Stream Status"
num: 4
version: 202640
redirect_from:
  - commands/422
---

Gets the current OBS stream status and saves it as an object.


| Box Name | Type | Description |
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to, if using multiple OBS connections.
|Save Variable As|String|Variable name to save the status object.
{:class='table table-primary'}

Use `Object Get Variable` to read individual fields from the returned object.

**Saved Payload:**

| Variable Name | Type | Description |
|-------|--------|--------
|outputActive|Boolean|Whether the stream is currently live.
|outputReconnecting|Boolean|Whether OBS is currently reconnecting to the stream server.
|outputTimecode|String|Current stream uptime timecode (`HH:MM:SS.mmm`).
|outputDuration|Number|Stream duration in milliseconds.
|outputCongestion|Number|Congestion level of the stream (0.0–1.0). Higher = more dropped frames.
|outputBytes|Number|Total bytes sent to the stream server.
|outputSkippedFrames|Number|Number of skipped frames since streaming started.
|outputTotalFrames|Number|Total frames rendered since streaming started.
{:class='table table-secondary w-auto table-hover text-break'}

**OBS WebSocket 5 Request:** `GetStreamStatus`

No request fields.

**Example SAMMI Response Object:**
```json
{
  "outputActive": true,
  "outputReconnecting": false,
  "outputTimecode": "00:01:23.456",
  "outputDuration": 83456,
  "outputCongestion": 0.0,
  "outputBytes": 15234567,
  "outputSkippedFrames": 0,
  "outputTotalFrames": 2490
}
```
