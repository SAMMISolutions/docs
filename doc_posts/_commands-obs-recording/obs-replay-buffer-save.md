---
title: "Save Replay Buffer"
num: 7
redirect_from:
  - commands/414
---

Saves the current contents of the OBS Replay Buffer to a file.

{% include alert.html text="Only available for OBS Websocket 5" type="info" %}

| Box Name | Type | Description |
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to, if using multiple OBS connections.
{:class='table table-primary'}

The Replay Buffer must be running when this command is executed, otherwise OBS will ignore it. The file is saved to the path and format configured in OBS under `Settings → Output → Replay Buffer`.

**The Replay Buffer must be enabled in OBS before using this command.** To enable it:

1. Open OBS and go to **Settings** (bottom right)
2. Select **Output** on the left
3. Set **Output Mode** to **Advanced** if not already selected
4. Open the **Replay Buffer** tab
5. Check **Enable Replay Buffer**
6. Set **Maximum Replay Time** (e.g. 30, 60, or 120 seconds)
7. Click **Apply** and **OK**

Use **Control Replay Buffer** to start the buffer, and **Get Last Replay Buffer** to retrieve the saved file path after saving.

**OBS WebSocket 5 Request:** `SaveReplayBuffer`

No request fields — saves the buffer immediately using OBS's configured output path and format.
