---
title: "Get Replay Buffer Status"
num: 9
version: 202640
redirect_from:
  - commands/416
---

Gets the current active state of the OBS Replay Buffer and saves it as a boolean.

{% include alert.html text="Only available for OBS Websocket 5" type="info" %}

| Box Name | Type | Description |
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to, if using multiple OBS connections.
|Save Variable As|String|Variable name to save the status.
{:class='table table-primary'}

Useful for conditional logic — e.g. only trigger a save if the buffer is actually running.

**The Replay Buffer must be enabled in OBS** for it to ever report `true`. To enable it:

1. Open OBS and go to **Settings** (bottom right)
2. Select **Output** on the left
3. Set **Output Mode** to **Advanced** if not already selected
4. Open the **Replay Buffer** tab
5. Check **Enable Replay Buffer**
6. Set **Maximum Replay Time** (e.g. 30, 60, or 120 seconds)
7. Click **Apply** and **OK**

**Saved Value:**

| Value | Type | Description |
|-------|------|-------------|
|true|Boolean|Replay Buffer is currently active and recording.|
|false|Boolean|Replay Buffer is stopped.|
|undefined|Undefined|Saved if OBS is not connected or ws5 is not in use.|
{:class='table table-secondary w-auto table-hover text-break'}

**OBS WebSocket 5 Request:** `GetReplayBufferStatus`

No request fields.

| Response Field | Type | Description |
|-------|--------|--------
| outputActive | Boolean | Whether the Replay Buffer is currently active. Saved directly to your variable. |
{:class='table table-secondary w-auto table-hover text-break'}

**Example SAMMI Response:**
```
true
```
