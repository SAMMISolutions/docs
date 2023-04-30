---
layout: default
title: OBS Studio
menu: Integrations
num: 1
permalink: /integrations/obs
type: fullpage
---

SAMMI interacts with OBS Studio through OBS Websocket (OBSWS), enabling remote control and event monitoring in OBS Studio. 

#### Install OBS Websocket

SAMMI is compatible with OBS Websocket versions 5.0 and 4.9. However, we highly recommend using OBS Websocket 5.0 with OBS Studio versions 28 and 29, as it is the latest version.   

OBS Studio 28 and higher come with OBS Websocket 5.0 pre-installed, so there is no need to install it separately.  

While OBS Websocket 5.0 is preferred, there may be specific cases where OBS Websocket 4.9 is still needed, such as when using certain outdated plugins that have not yet been updated for compatibility with OBS Websocket 5.0. For users who need to maintain compatibility with OBS Websocket 4.9, OBS Studio 28 supports the installation of the OBS Websocket 4.9.1-compat plugin, which can be downloaded from the link below.

<a href="https://github.com/obsproject/obs-websocket/releases/tag/4.9.1-compat"><button type="button" class="btn btn-outline-secondary">Download OBS Websocket 4.9.1 for OBS 28</button></a>

<a href="https://github.com/obsproject/obs-websocket/blob/4.x-compat/docs/generated/protocol.md#events"><button type="button" class="btn btn-outline-secondary">OBS Websocket 4.9.1 Protocol</button></a>

<a href="https://github.com/obsproject/obs-websocket/blob/master/docs/generated/protocol.md"><button type="button" class="btn btn-outline-secondary">OBS Websocket 5.0 Protocol</button></a>

<hr>

#### Connect SAMMI to OBS Websocket
If you are using OBS Studio version 28 or higher, you do not need to install OBS Websocket 5.0 separately, as it is included with OBS. However, you may need to install the OBS Websocket 4.9.1-compat plugin if you want to use OBS Websocket 4.9, which may be required by some extensions.

To connect SAMMI to OBS Websocket, follow these steps in SAMMI:

1. Click on **OBS Connections** in the bottom menu.
    {% include image.html w="75" src="obs_connection.png" alt="OBSWS settings in SAMMI and OBS must match" type="image" %}
    
{:start="2"}
2. Enter the following information:
   - `Name`: The name of your OBS instance. The first OBS instance will always be named "Main" and cannot be changed.
   - `Protocol`: Select the protocol used by your OBS Websocket (OBSws4 or OBSws5).
   - `IP`: The IP address of the OBS Websocket. Use `127.0.0.1` unless connecting to OBS on a different computer.
   - `Port`: The port used by the OBS Websocket. It must match the port in OBS > Tools > Websocket Server Settings. Default ports are `4455` for OBSws5 and `4444` for OBSws4. We recommend keeping the default port.
   - `Password`: The password for OBS Websocket authorization. Leave empty unless "Enable Authorization" is checked in OBS > Tools > OBS Websocket Settings. Passwords must match.
   - `Auto Connect`: Check this option if you want SAMMI to automatically connect to OBS Websocket on launch.
   - `Non-Blocking`: Keep this option checked unless you have trouble connecting to OBS Websocket.
3. Click **Connect**. The `OBS Main` indicator should turn from red to green in SAMMI.

<hr>

#### Connect SAMMI to Multiple OBS Websockets

SAMMI can connect to multiple OBS Websockets. To add another connection, go to OBS Connections settings and add a new entry.  

For OBS commands, you must manually select the OBS Name (unless using the "Main" OBS connection) to specify which OBS instance to send commands to. OBS Name also accepts variable inserts.

{% include image.html w="75" src="obs-manual-select.png" alt="Manually select OBS name for OBS commands" %}

#### Control OBS from SAMMI

You can remotely control OBS Studio using [SAMMI OBS commands]({{ "commands/obs-general" | relative_url }}). To do so:

1. Go to an existing deck in SAMMI or click on `Add a new deck`.
2. Right-click on an empty grid and select `Create Button`.
3. Click on the <i class="fas fa-plus-circle"></i> icon and add your desired OBS command(s). Examples include:  

  - Switch to previous scene
      {% include image.html w="75" src="obs-switch-scenes.png" alt="Switch to previous scene" %}  
  - Change text in your Text (GDI+) source in OBS
      {% include image.html w="75" src="obs-gdi-text.png" alt="Change text in your Text (GDI+) source" %}  
  - Change position of a source
      {% include image.html w="75" src="obs-source-position.png" alt="Change source position" %}

{:start="4"}
4. Click "Save" in the edit button screen and then click "Save" again in your deck. This step is crucial to save your button.
5. Press the button in your SAMMI Deck while connected to OBS to execute the command(s).

{% include video.html w="75" src="obs-control.mp4" alt="Controlling OBS remotely from SAMMI" %}

#### Permanent Variables

Once connected to OBS Websocket, SAMMI provides useful permanent variables that you can use in your commands. All OBS variables are stored in the `global.[obsName]` object. If you're using only one OBS connection, your variables will always be stored in `global.Main`, for example `global.Main.connected`.

{% include image.html w="75" src="obs_variables.png" alt="Variable window showing permanent OBS variables" %}

| Variable | Explanation| 
|-------|--------|--------
{% include selectAll.html text="<code>global.[obsName].connected</code>" %} | Whether you're connected to your selected OBS Name, 1 = connected, 0 = not connected
{% include selectAll.html text="<code>global.[obsName].current_scene</code>" %} | Your selected OBS current scene
{% include selectAll.html text="<code>global.[obsName].previous_scene</code>" %} | Your selected OBS previous scene
{% include selectAll.html text="<code>global.[obsName].type</code>" %} | OBSws selected type in OBS Connections, either `OBSws4`, `OBSws5` or `Auto`
{% include selectAll.html text="<code>global.[obsName].ip</code>" %} | The IP address of the OBS connection
{% include selectAll.html text="<code>global.[obsName].port</code>" %} | The port of the OBS connection
{% include selectAll.html text="<code>global.[obsName].obs_studio_version</code>" %} | Current OBS studio version the OBSws is connected to
{% include selectAll.html text="<code>global.[obsName].obs_websocket_version</code>" %} |  Current OBS Websocket version the OBSws is connected to
{:class='table table-secondary w-auto table-hover text-break' }

#### Listen to OBS Events in SAMMI

You can trigger buttons in SAMMI by listening to events in OBS Studio, such as switching to a new scene or enabling studio mode. A detailed guide for setting up OBS triggers can be found in the [Triggers-OBS]({{ "triggers/obs" | relative_url }}) section. 
<hr>