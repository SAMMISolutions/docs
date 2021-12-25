---
layout: default
title: OBS Studio
menu: Integrations
num: 1
permalink: /integrations/obs
type: fullpage
---

LioranBoard communicates with OBS via OBS Websocket (OBSWS), which allows you to remotely control and listen to OBS Studio events. 

#### Install OBS Websocket
We recommend installing the latest 4.9.X version. Please note that the upcoming OBS Websocket 5.0 and above is not compatible with LioranBoard. 

<a href="https://obsproject.com/forum/resources/obs-websocket-remote-control-obs-studio-from-websockets.466/"><button type="button" class="btn btn-outline-secondary">Download OBS Websocket</button></a>

#### Connect LioranBoard to OBS Websocket
Once you have downloaded and installed OBS Websocket, you can proceed with connecting it to LioranBoard in a few easy steps. 

**1. In your OBS, click on Tools-Websocket Server Settings**\
(if you do not see the option, it means OBS Websocket is not properly installed)
- `Enable Websocket server` must be checked. Default port is 4444, which you should not need to change.
- Decide whether you want to `Enable authentication` (password protection) for OBSWS. This means anything connecting to your OBS will have to provide the password you enter below, including LioranBoard.\
    If you decide to use a password, note it down as we're going to need to also tell LioranBoard about it.
- All other options can be left at default (unchecked). 
  {% include image.html w="75" src="obsws-settings.png" alt="Example of OBSWS Settings in OBS Studio" %}
**2. Back in your LioranBoard Receiver, click on Options.**
- `OBSWebsocket Port` is the same port from step 1, which should be 4444 as default. You should not need to change it.
- `OBSwebsocket Password` - fill this out if you decided to use a password in step 1. Otherwise leave it blank. 
- `Auto connect to OBSws` - check this if you'd like LioranBoard to automatically connect to OBS as soon as you launch it.
- Hit Accept!

  {% include image.html w="75" src="obsws-settings-lb.png" alt="Example of OBSWS Settings in LioranBoard" %}
**3. Still in LioranBoard Receiver, click on Connect to OBS.**\
You should see the following yellow notification messages:
- *Connected to websocket*
- *Fetching OBS data, may take a few seconds.*
- *OBS Studio Version: X, OBS Websocket Version: X*
- *ALL OBS data have been fetched.*
  
  {% include image.html w="75" src="obsws-message.png" alt="OBSWS Connection Message in LB" %}
  If you happen to NOT receive all the messages, please refer to our Troubleshooting section.

#### Control OBS from LioranBoard
You can now remotely control your OBS Studio with [LioranBoard OBS commands]({{ "commands/obs-general" | relative_url }}).   


**1. Navigate to an existing deck or click on `Add a new deck` in your LioranBoard Receiver**\
**2. Right click on an empty grid and select `Create Blank Button`**\
**3. Click on the <i class="fas fa-plus-circle"></i> and add your OBS command(s)**
  - Example 1: Switch to previous scene
    {% include image.html w="75" src="obs-switch-scenes.png" alt="Switch to previous scene" %}
  - Example 2: Change text in your Text (GDI+) source in OBS
    {% include image.html w="75" src="obs-gdi-text.png" alt="Change text in your Text (GDI+) source" %}
  - Example 3: Change position of a source
    {% include image.html w="75" src="obs-source-position.png" alt="Change source position" %}

{% include alert.html text="You can combine your OBS commands with all other LioranBoard commands to create complex logic." type="info" %} 

**4. Click Done in your edit button screen and then Done again in your deck. This is an important step to save your button!**\
**5. Press the button in your LioranBoard StreamDeck while connected to OBS to execute the command(s).**
(*LioranBoard Stream Deck(PC) can be found in your lioranboard folder.*)
{% include video.html w="75" src="obs-control.mp4" alt="Controlling OBS remotely from LioranBoard" %}



#### Listen to OBS events in LioranBoard
You can trigger buttons in your LioranBoard by listening to events in your OBS Studio, such as switching to a new scene or enabling a studio mode.\
You can find a detailed guide to setting up your OBS triggers in our [Triggers-OBS]({{ "triggers/obs" | relative_url }}) section. 