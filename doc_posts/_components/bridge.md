---
layout: default
title: SAMMI Bridge
menu: Components
num: 2
type: fullpage
permalink: /bridge
---
SAMMI Bridge is the <code>bridge.html</code> file in your SAMMI/bridge folder. 
Bridge connects to your SAMMI to receive and send messages from extensions. You can also test your Twitch and YouTube triggers from Bridge.

{% include alert.html text="Transmitter no longer works with SAMMI. Please update to the Bridge file." type="warning" %} 

{% include image.html w="75" src="bridge.png" alt="Bridge with Twitch Test Triggers" %}

#### How to update Bridge
You can update your Bridge to the latest version by going to **SAMMI Core-Settings-Check for Updates** (or by right clicking on SAMMI tray icon and selecting **Check for Updates**).\
In the Update menu, you can see whether you're on the latest Bridge version and update it if you wish. All your extensions will be automatically transferred over if you update your Bridge this way.

{% include image.html w="75" src="updater.png" alt="Updater showing Bridge" %}

If you want to get another clean copy of a Bridge (for example if you want to experiment with creating extensions), you can find the latest version at our [itch.io page](https://sammisolutions.itch.io/sammi) or [SAMMI Brige Github repository](https://github.com/SAMMISolutions/SAMMI-Bridge/releases). 

#### How to run Bridge
- As a dock in OBS, this is the simplest and most effective way. 
   1. Create a dock in your OBS by clicking on Docks-Custom Browser Docks
   2. Name the dock, for example `Bridge` 
   3. The Bridge path can be retrieved by going to your SAMMI-Bridge-Copy Full Path. 
   4. Click on apply and place your Bridge whever it suits your needs. 
  
  **You will need to keep the Bridge dock open at all times.**   

  {% include image.html w="75" src="bridge-dock.png" alt="Bridge Dock in OBS" %}
- As a browser source in OBS.    
This is highly discouraged as it is easy to lose track of it and accidentally get two Bridges running at the same time. 
- In your browser (such as Chrome) outside of OBS.
This might be needed for some extensions or debugging purposes. 

{% include alert.html text="You can have only one Bridge open at the same time. If you see an error 'Second Bridge tried to connect', locate the other Bridge and close it." type="danger" %} 

#### Connection Settings
In your Bridge-status tab, you can modify your connection settings.\
Default IP address for SAMMI is `127.0.0.1` and default port is `9425`. Make sure this matches what's in SAMMI Core-Settings.\
You must fill out the password if you decided to use one in SAMMI Core-Settings menu.\
You only need to set this up once, as your Bridge will remember the previous settings and will attempt to auto connect next time.

{% include image.html w="75" src="bridge-settings.png" alt="Bridge Connection Settings" %}

#### Connection Status
You can see whether you're connected to SAMMI within your Bridge. Green text 'Connected' or a green dot means the connection is live. 

{% include image.html w="75" src="bridge-connected.png" alt="Bridge Connected" %}

#### Bridge Tabs
Bridge has a few default tabs. A new tab is created every time you install a new extension. 

- **Status**
   - Bridge Connection - change connection settings to your SAMMI
   - Appearance - disable or enable tab appearance
   - Message Logging - intended for debugging purposes. Logs all received and sent messages to SAMMI. Will remember the state even after you close and reopen Bridge. Don't forget to turn it off once you're done debugging. 
- **Twitch Triggers** - test all your Twitch button triggers by pressing the test buttons. They simulate how Twitch sends all its events.
- **YouTube Triggers** - test all your YouTube button triggers by pressing the test buttons. They simulate how YouTube sends all its events.

#### How to select Bridge for extensions
Go to your SAMMI-Bridge-Select a Bridge if you wish to use a different Bridge file to install your extensions in. Otherwise SAMMI automatically installs them in your currently selected bridge. 

{% include image.html w="75" src="bridge menu.png" alt="Bridge Menu" %}

#### Extensions
Extensions live in your Bridge. Learn more about them in our Extensions section.

