---
layout: default
title: OBS
menu: Triggers
num: 4
type: fullpage
permalink: /triggers/obs
---
SAMMI can listen to all OBS events provided by OBS Websocket.

#### Add a new OBS trigger
1. Right click on a button in SAMMI - **Edit Triggers** (or CTRL + double click).
2. Click on the **+** button and select **OBS Trigger**.
3. Choose the **Update Type**.
4. Choose which OBS the trigger applies to (only if using multiple OBS)
5. Optionally you can right click on a button - **Edit Settings** and check  `Add to Request Queue`, which acts as a button queue. If there is another trigger event while the button is still active, it will place is in the queue and reactivate the button as soon as it's ready again.
<br>

#### Retrieve OBS trigger event values
1. In your button commands, use [Trigger Pull Data]({{ "commands/trigger#triggerpulldata" | relative_url }}) command with an **empty pull value** to retrieve the whole object with all the provided data from OBS Websocket.
2. Find the specified event in the [OBS Websocket documentation](https://github.com/obsproject/obs-websocket/blob/4.x-current/docs/generated/protocol.md#events) and check its response items.
3. Use **[Get Object Variable]({{ "commands/object#setobjectvariable" | relative_url }})** command to retrieve the specific response item provided by OBS Websocket.

