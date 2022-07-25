---
layout: default
title: SAMMI Bridge
menu: Components
num: 2
type: fullpage
permalink: /bridge
---
SAMMI Bridge is the <code>bridge.html</code> file in your SAMMI/bridge folder. 
Bridge connects to your SAMMI to receive and send messages from extensions. It also allows you to listen to Twitch events, such as new subscribers, raids etc.

{% include alert.html text="Bridge must be running at all times for Twitch events and extensions to work." type="warning" %} 

{% include image.html w="75" src="bridge.png" alt="Bridge" %}

#### Latest Version
You can automatically update your Bridge to the latest version by going to **LioranBoard-Settings-Check for Updates** (or by right clicking on LioranBoard tray icon and selecting **Check for Updates**).\
In the Update menu, you can see whether you're on the latest Bridge version and update it if you wish. All your extensions will be automatically transferred over if you update your Bridge this way.  


If you want to get another clean copy of a Bridge (for example if you want to experiment with creating extensions), you can find the latest version at our [Github repository](https://github.com/SAMMISolutions/SAMMI-Bridge/releases).

#### How to run Bridge
- As a dock in OBS    
This is the simplest and most effective way. You can create a dock by clicking on View-Docks-Custom Browser Docks and fill in the path to the file. Click on apply and place the dock wherever it suits you in OBS. **You will need to keep the dock open at all times.**

   {% include image.html w="75" src="transmitter_dock.png" alt="Bridge Dock in OBS" %}
- As a browser source in OBS.    
This is highly discouraged as it is easy to lose track of it and accidentally get two Bridges running at the same time. 
- In your browser (such as Chrome) outside of OBS.
This might be needed for some extensions or debugging purposes. 

{% include alert.html text="You can have only one Bridge open at the same time. If you see an error 'Second Bridge tried to connect', locate the other Bridge and close it." type="danger" %} 

#### Connection Settings
**In your LioranBoard-Settings menu, check `Allow SAMMI Deck and Bridge` to allow Bridge to connect.**\
In your Bridge-status tab, you can modify your connection settings.\
Default IP address for Lioranboard is always `127.0.0.1` and port is always `9425`. Unless you changed port in your LioranBoard-settings, you can leave it at its default value.\
You must fill out the password if you decided to use one in LioranBoard-Settings menu.\
Note that you only need to do this once, as your Bridge will remember the previous settings and will attempt to auto connect next time.

{% include image.html w="75" src="transmitter-connection.png" alt="Bridge Connection Settings" %}

#### Connection Status
You can see whether you're connected to LioranBoard and Twitch Pubsub within your Bridge. Green text 'Connected' or a green dot means the connection is alive.

#### Tabs
Bridge has a few default tabs. A new tab is created every time you install a new extension. 

- **Status**
   - Bridge Connection - change connection settings to your LioranBoard
   - Appearance - disable or enable tab appearance
   - Message Logging - intended for debugging purposes. Logs all messages for LioranBoard and Twitch Pubsub. Will remember the state even after you close and reopen Bridge. Don't forget to turn it off once you're done debugging. 
- **Twitch Triggers** - test all your Twitch button triggers by pressing the test buttons. They simulate how Twitch sends all its events.