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
3. Choose the **Update Type**. This is important depending on which OBS websocket version you are using.
4. Choose which OBS the trigger applies to (only if using multiple OBS)
5. Optionally you can right click on a button - **Edit Settings** and check  `Add to Request Queue`, which acts as a button queue. If there is another trigger event while the button is still active, it will place is in the queue and reactivate the button as soon as it's ready again.
<br>

#### Retrieve OBS trigger event values
1. In your button commands, use [OBS Event Pull]({{ "commands/obs-general#eventpull" | relative_url }}) command and select what you wish to retrieve from the Pull Value dropdown menu, depending on what trigger you attached. 
2. Optionally, you can leave the Pull Value field empty or `all` and retrieve the whole response object. Find the specified event in the appropriate OBS Websocket Documenation: 
    - [Version 4.9.1](https://github.com/obsproject/obs-websocket/blob/4.x-compat/docs/generated/protocol.md#events)
    - [Version 5.0](https://github.com/obsproject/obs-websocket/blob/master/docs/generated/protocol.md)\
   and check its response items.

