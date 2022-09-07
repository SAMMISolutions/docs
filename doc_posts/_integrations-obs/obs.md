---
layout: default
title: OBS Studio
menu: Integrations
num: 1
permalink: /integrations/obs
type: fullpage
---

SAMMI communicates with OBS via OBS Websocket (OBSWS), which allows you to remotely control and listen to OBS Studio events. 

#### Install OBS Websocket

SAMMI is now compatible with OBS websocket 5.0. As this version is still very new, please note that some of your extensions might not work with it until they have been updated. 

OBS Studio 28 comes bundled with OBS Websocket 5.0. There is no need to download a separate plugin for it. 

To ensure the 4.x version protocol is still supported, you can download the 4.9.1-compat plugin for OBS Studio 28 available at the link below.

<a href="https://github.com/obsproject/obs-websocket/releases/tag/4.9.1-compat"><button type="button" class="btn btn-outline-secondary">Download OBS Websocket 4.9.1 for OBS 28</button></a>

<a href="https://github.com/obsproject/obs-websocket/blob/4.x-compat/docs/generated/protocol.md#events"><button type="button" class="btn btn-outline-secondary">OBS Websocket 4.9.1 Protocol</button></a>

<a href="https://github.com/obsproject/obs-websocket/blob/master/docs/generated/protocol.md"><button type="button" class="btn btn-outline-secondary">OBS Websocket 5.0 Protocol</button></a>

<hr>

#### Connect SAMMI to OBS Websocket
Once you have downloaded and installed OBS Websocket, you can proceed with connecting it to SAMMI in a few easy steps.  

In your SAMMI click on **OBS Connections** at the bottom menu:
- `Name`: Name of your OBS. The first OBS will always be Main and cannot be changed. 
- `Protocol`: Choose the protocol your OBS Websocket is using. 
- `IP`: IP Address of the OBS Websocket. Unless you're connecting to an OBS on another computer, it will be always `127.0.0.1`.
- `Port`: Port of the OBS Websocket. Must match the port in your OBS-Tools-Websocket Server Settings.
- `Password`: Password to authorize with OBS Websocket. Leave empty, unless you checked Enable Authorization in OBS-Tools-Websocket Server Settings. In that case the passwords must match. 
- `Auto Connect`: Whether you want SAMMI to automatically connect to OBS Websocket on launch
- `Non-Blocking`: Leave unchecked unless you have difficulties connecting to OBS Websocket. 
- `Fetch OBS Data`: Whether you want to fetch OBS Data (such as current scenes and their items) from this particular OBS Websocket connection.

  {% include image.html w="75" src="obs-settings.png" alt="OBSWS settings in SAMMI and OBS must match" type="image" %}

Once you press **connect**, you should see a yellow notification message `OBS [Main Connected]` and the status indicator for `Main OBS` in the left bottom corner should change from red to green. 

  {% include image.html w="75" src="obs-connected.png" alt="OBS is connected" %}

<hr>

#### Connect SAMMI to multiple OBS Websockets
You can connect SAMMI to multiple OBS Websockets, just add another connection in your OBS Connections settings.\
You will need to manually select your OBS Name for all your OBS commands (if not using Main OBS connection), so SAMMI knows which OBS to send them to. OBS Name accepts variables as inserts as well.

{% include image.html w="75" src="obs-manual-select.png" alt="Manually select OBS name for OBS commands" %}

<hr>

#### Control OBS from SAMMI
You can remotely control your OBS Studio with [SAMMI OBS commands]({{ "commands/obs-general" | relative_url }}).   


**1. Navigate to an existing deck or click on `Add a new deck` in your SAMMI**\
**2. Right click on an empty grid and select `Create Button`**\
**3. Click on the <i class="fas fa-plus-circle"></i> and add your OBS command(s)**
  - Example 1: Switch to previous scene
    {% include image.html w="75" src="obs-switch-scenes.png" alt="Switch to previous scene" %}
  - Example 2: Change text in your Text (GDI+) source in OBS
    {% include image.html w="75" src="obs-gdi-text.png" alt="Change text in your Text (GDI+) source" %}
  - Example 3: Change position of a source
    {% include image.html w="75" src="obs-source-position.png" alt="Change source position" %}

{% include alert.html text="You can combine your OBS commands with all other SAMMI commands to create complex logic." type="info" %} 

**4. Click Save in your edit button screen and then Save again in your deck. This is an important step to save your button!**\
**5. Press the button in your SAMMI Deck while connected to OBS to execute the command(s).**

  {% include video.html w="75" src="obs-control.mp4" alt="Controlling OBS remotely from SAMMI" %}

**Permanent Variables**\
Once you're connected to OBS Websocket, SAMMI provides you with some useful permanent variables that you can use in your commands.\
All OBS variables are saved in `global.[obsName]` object.\
**If you're using only one single OBS connection**, your variables will be always saved in `global.Main`, for example `global.Main.connected`.

| Variable | Explanation| 
|-------|--------|--------
{% include selectAll.html text="<code>global.[obsName].connected</code>" %} | Whether you're connected to your selected OBS Name, 1 = connected, 0 = not connected
{% include selectAll.html text="<code>global.[obsName].current_scene</code>" %} | Your selected OBS current scene
{% include selectAll.html text="<code>global.[obsName].previous_scene</code>" %} | Your selected OBS previous scene
{:class='table table-secondary w-auto table-hover text-break' }

<hr>


#### Listen to OBS events in SAMMI
You can trigger buttons in your SAMMI by listening to events in your OBS Studio, such as switching to a new scene or enabling a studio mode.\
You can find a detailed guide to setting up your OBS triggers in our [Triggers-OBS]({{ "triggers/obs" | relative_url }}) section. 
