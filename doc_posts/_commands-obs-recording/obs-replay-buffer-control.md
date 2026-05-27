---
title: "Control Replay Buffer"
num: 6
redirect_from:
  - commands/413
---

Controls the OBS Replay Buffer — Start, Stop, or Toggle it using the dropdown.

{% include alert.html text="Only available for OBS Websocket 5" type="info" %}

| Box Name | Type | Description |
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to, if using multiple OBS connections.
|Action|Dropdown|Whether to **Start**, **Stop**, or **Toggle** the Replay Buffer.
{:class='table table-primary'}

The Replay Buffer continuously records the last N seconds of your stream/output in memory. Use **Save Replay Buffer** to save the current buffer to a file, and **Get Last Replay Buffer** to retrieve the saved file path.

**The Replay Buffer must be enabled in OBS before using this command.** To enable it:

1. Open OBS and go to **Settings** (bottom right)
2. Select **Output** on the left
3. Set **Output Mode** to **Advanced** if not already selected
4. Open the **Replay Buffer** tab
5. Check **Enable Replay Buffer**
6. Set **Maximum Replay Time** (e.g. 30, 60, or 120 seconds)
7. Click **Apply** and **OK**

**OBS WebSocket 5 Request:** `StartReplayBuffer` / `StopReplayBuffer` / `ToggleReplayBuffer`

| Action | Request Sent |
|--------|--------
| Start  | `StartReplayBuffer` |
| Stop   | `StopReplayBuffer` |
| Toggle | `ToggleReplayBuffer` |
{:class='table table-secondary w-auto table-hover text-break'}

`ToggleReplayBuffer` returns an `outputActive` boolean indicating whether the buffer is now active.
