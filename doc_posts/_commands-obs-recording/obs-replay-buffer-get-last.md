---
title: "Get Last Replay Buffer"
num: 8
version: 202640
redirect_from:
  - commands/415
---

Gets the file path of the last saved Replay Buffer recording and saves it as a string variable.

{% include alert.html text="Only available for OBS Websocket 5" type="info" %}

| Box Name | Type | Description |
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to, if using multiple OBS connections.
|Save Variable As|String|Variable name to save the file path.
{:class='table table-primary'}

**The Replay Buffer must be enabled and have been saved at least once** in the current OBS session for this to return a path. To enable it:

1. Open OBS and go to **Settings** (bottom right)
2. Select **Output** on the left
3. Set **Output Mode** to **Advanced** if not already selected
4. Open the **Replay Buffer** tab
5. Check **Enable Replay Buffer**
6. Set **Maximum Replay Time** (e.g. 30, 60, or 120 seconds)
7. Click **Apply** and **OK**

Use this command after **Save Replay Buffer** to know the exact path where the clip was saved, e.g. to move, rename, or upload the file.

**Saved Value:**

| Value | Type | Description |
|-------|------|-------------|
|savedVariable|String|Full file path of the last saved Replay Buffer clip (e.g. `C:/Replays/Replay 2024-01-15 18-30-00.mkv`).|
|undefined|Undefined|Saved if OBS is not connected, ws5 is not in use, or no replay has been saved yet in the current session.|
{:class='table table-secondary w-auto table-hover text-break'}

**OBS WebSocket 5 Request:** `GetLastReplayBufferReplay`

No request fields.

| Response Field | Type | Description |
|-------|--------|--------
| savedReplayPath | String | Full local file path of the last saved replay. Saved directly to your variable. |
{:class='table table-secondary w-auto table-hover text-break'}

**Example SAMMI Response:**
```
C:/Users/streamer/Videos/Replays/Replay 2024-01-15 18-30-00.mkv
```
