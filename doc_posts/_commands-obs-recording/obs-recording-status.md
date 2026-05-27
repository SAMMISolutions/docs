---
title: "Get Recording Status"
num: 10
version: 202640
redirect_from:
  - commands/423
---

Gets the current OBS recording status and saves it as an object.


| Box Name | Type | Description |
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to, if using multiple OBS connections.
|Save Variable As|String|Variable name to save the status object.
{:class='table table-primary'}

Use `Object Get Variable` to read individual fields from the returned object.

**Saved Payload:**

| Variable Name | Type | Description |
|-------|--------|--------
|outputActive|Boolean|Whether recording is currently active.
|outputPaused|Boolean|Whether recording is currently paused.
|outputTimecode|String|Current recording timecode (`HH:MM:SS.mmm`).
|outputDuration|Number|Duration of the current recording in milliseconds.
|outputBytes|Number|Total bytes written to the recording file so far.
{:class='table table-secondary w-auto table-hover text-break'}

**OBS WebSocket 5 Request:** `GetRecordStatus`

No request fields.

**Example SAMMI Response Object:**
```json
{
  "outputActive": true,
  "outputPaused": false,
  "outputTimecode": "00:05:30.000",
  "outputDuration": 330000,
  "outputBytes": 123456789
}
```
