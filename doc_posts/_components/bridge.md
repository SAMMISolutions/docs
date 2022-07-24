---
layout: default
title: Bridge
menu: Components
num: 2
type: fullpage
permalink: /bridge
---
Transmitter is the <code>transmitter.html</code> file in your lioranboard/transmitter folder. 
Transmitter connects to your LioranBoard to receive and send messages from extensions. It also allows you to listen to Twitch events, such as new subscribers, raids etc.

{% include alert.html text="Transmitter must be running at all times for Twitch events and extensions to work." type="warning" %} 

{% include image.html w="75" src="transmitter.png" alt="Transmitter" %}

#### Latest Version
You can automatically update your Transmitter to the latest version by going to **LioranBoard-Settings-Check for Updates** (or by right clicking on LioranBoard tray icon and selecting **Check for Updates**).\
In the Update menu, you can see whether you're on the latest Transmitter version and update it if you wish. All your extensions will be automatically transferred over if you update your Transmitter this way.  


If you want to get another clean copy of a Transmitter (for example if you want to experiment with creating extensions), you can find the latest version at our [Github repository](https://github.com/LioranBoard/LioranBoard-2-Transmitter/releases).

#### How to run Transmitter
- As a dock in OBS    
This is the simplest and most effective way. You can create a dock by clicking on View-Docks-Custom Browser Docks and fill in the path to the file. Click on apply and place the dock wherever it suits you in OBS. **You will need to keep the dock open at all times.**

   {% include image.html w="75" src="transmitter_dock.png" alt="Transmitter Dock in OBS" %}
- As a browser source in OBS.    
This is highly discouraged as it is easy to lose track of it and accidentally get two Transmitters running at the same time. 
- In your browser (such as Chrome) outside of OBS.
This might be needed for some extensions or debugging purposes. 

{% include alert.html text="You can have only one Transmitter open at the same time. If you see an error 'Second Transmitter tried to connect', locate the other Transmitter and close it." type="danger" %} 

#### Connection Settings
**In your LioranBoard-Settings menu, check `Allow Stream Deck and Transmitter` to allow Transmitter to connect.**\
In your Transmitter-status tab, you can modify your connection settings.\
Default IP address for Lioranboard is always `127.0.0.1` and port is always `9425`. Unless you changed port in your LioranBoard-settings, you can leave it at its default value.\
You must fill out the password if you decided to use one in LioranBoard-Settings menu.\
Note that you only need to do this once, as your Transmitter will remember the previous settings and will attempt to auto connect next time.

{% include image.html w="75" src="transmitter-connection.png" alt="Transmitter Connection Settings" %}

#### Connection Status
You can see whether you're connected to LioranBoard and Twitch Pubsub within your Transmitter. Green text 'Connected' or a green dot means the connection is alive.

#### Tabs
Transmitter has a few default tabs. A new tab is created every time you install a new extension. 

- **Status**
   - Transmitter Connection - change connection settings to your LioranBoard
   - Appearance - disable or enable tab appearance
   - Message Logging - intended for debugging purposes. Logs all messages for LioranBoard and Twitch Pubsub. Will remember the state even after you close and reopen Transmitter. Don't forget to turn it off once you're done debugging. 
- **Twitch Triggers** - test all your Twitch button triggers by pressing the test buttons. They simulate how Twitch sends all its events.