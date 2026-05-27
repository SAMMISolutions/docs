---
title: "Get Stats"
num: 7
version: 202640
redirect_from:
  - commands/424
---

Gets OBS performance statistics (CPU, memory, FPS, disk space, etc.) and saves them as an object.


| Box Name | Type | Description |
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to, if using multiple OBS connections.
|Save Variable As|String|Variable name to save the stats object.
{:class='table table-primary'}

Use `Object Get Variable` to read individual fields from the returned object.

**Saved Payload:**

| Variable Name | Type | Description |
|-------|--------|--------
|cpuUsage|Number|Current OBS CPU usage as a percentage (e.g. `2.5` = 2.5%).
|memoryUsage|Number|Current OBS RAM usage in megabytes.
|availableDiskSpace|Number|Available disk space on the recording drive in megabytes.
|activeFps|Number|Current output framerate (e.g. `60.0`).
|averageFrameRenderTime|Number|Average time in milliseconds to render one frame.
|renderSkippedFrames|Number|Number of frames skipped/lagged by the renderer.
|renderTotalFrames|Number|Total frames rendered since OBS started.
|outputSkippedFrames|Number|Number of frames skipped in the output (stream/recording).
|outputTotalFrames|Number|Total frames sent to the output since OBS started.
|webSocketSessionIncomingMessages|Number|Number of WebSocket messages received.
|webSocketSessionOutgoingMessages|Number|Number of WebSocket messages sent.
{:class='table table-secondary w-auto table-hover text-break'}

**OBS WebSocket 5 Request:** `GetStats`

No request fields.

**Example SAMMI Response Object:**
```json
{
  "cpuUsage": 2.5,
  "memoryUsage": 1024.5,
  "availableDiskSpace": 102400.0,
  "activeFps": 60.0,
  "averageFrameRenderTime": 5.2,
  "renderSkippedFrames": 0,
  "renderTotalFrames": 36000,
  "outputSkippedFrames": 0,
  "outputTotalFrames": 36000,
  "webSocketSessionIncomingMessages": 5,
  "webSocketSessionOutgoingMessages": 5
}
```
