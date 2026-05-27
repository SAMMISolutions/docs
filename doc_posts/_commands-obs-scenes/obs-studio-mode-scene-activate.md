---
title: "Activate Studio Mode Scene"
num: 11
redirect_from:
  - commands/421
---

Triggers the Studio Mode transition in OBS — moves the current Preview scene to the Program output.

{% include alert.html text="Only available for OBS Websocket 5" type="info" %}

| Box Name | Type | Description |
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to, if using multiple OBS connections.
{:class='table table-primary'}

Studio Mode must be enabled in OBS (`View → Studio Mode`). This is equivalent to pressing the **Transition** button in OBS Studio Mode — whatever scene is currently in the Preview will become the new Program output. The transition type and duration configured in OBS are used.

Use **Set Studio Mode Scene** first to control which scene gets transitioned, then call this command to execute the switch.

**OBS WebSocket 5 Request:** `TriggerStudioModeTransition`

No request fields — executes the transition immediately using the active OBS transition settings.
