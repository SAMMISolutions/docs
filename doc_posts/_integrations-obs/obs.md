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

1. In your OBS go to Tools-Websocket Server Settings. Uncheck 'Enable authorization' (for easy setup, you can change it later) and press OK. 
	  
	{% include image.html w="100" src="obsws_settings.png" alt="OBS Websocket Settings" type="image" %}

{:start="2"}
2. In your LioranBoard click on **OBS Connections** at the bottom menu. Unless you changed your port in OBS-Tools-Websocket Server Settings or set up a password, you can leave everything at default and press Connect.\
You should see a yellow notification message `OBS [Main Connected]` and the status indicator for `Main OBS` in the left bottom corner should change from red to green. 

  {% include image.html w="75" src="obs-connected.png" alt="OBS is connected" %}

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