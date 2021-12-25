---
layout: default
title: Transmitter
menu: Components
num: 2
type: fullpage
permalink: /transmitter
---
Transmitter is the <code>tsl_transmitter.html</code> file in your lioranboard folder. 
Transmitter connects to your Receiver to receive and send messages. It also controls Twitch connection. 
{% include alert.html text="Transmitter must be running at all times for Twitch connection and extensions to work." type="warning" %} 

#### Latest Version
The latest Transmitter version can be found at our [Github repository](https://github.com/christinna9031/LioranBoard-Transmitter).     
Go to releases and download the latest version if you just need to replace your current Transmitter with a clean one.

#### How to run Transmitter
- As a dock in OBS    
This is the simplest and most effective way. You can create a dock by clicking on View-Docks-Custom Browser Docks and fill in the path to the file. Click on apply and place the dock wherever it suits you in OBS. **You will need to keep the dock open at all times.**
   {% include image.html w="75" src="transmitter_dock.png" alt="Transmitter Dock in OBS" %}
- As a browser source in OBS.    
This is highly discouraged as it is easy to lose track of it and accidentally get two Transmitters running at the same time. 
- In your browser (such as Chrome) outside of OBS.
This might be needed for some extensions or debugging purposes. 

{% include alert.html text="You can have only one Transmitter open at the same time. If you see an error 'Second Transmitter tried to connect', locate the other Transmitter and close it." type="danger" %} 

{% include image.html w="75" src="transmitter.png" alt="Transmitter" %}   

#### Connection Status
You can see whether you're connected to Receiver, Twitch Pubsub and Twitch Chat within your Transmitter. Green text 'Connected' or a green dot means the connection is alive.


#### Tabs
Transmitter has a few default tabs. A new tab is created every time you install a new extension. 

- Status - you can check whether you're on the latest versions for all dependencies and components 
- Appearance - remove or enable tab appearance
- Message Logging - intended for debugging purposes. Logs all messages for Receiver and Twitch connection. Will remember the state even after you close and reopen Transmitter. Don't forget to turn it off once you're done debugging. 
- Twitch Triggers - test all your Twitch button triggers by pressing the test buttons. They simulate how Twitch sends all its events. 

#### Preinstalled extensions

Please see our [FAQ section]({{ "faq/general#extensions" | relative_url }}) to understand how to install and use extensions. 

If you do not wish for the preinstalled extensions to be included, you can use the empty Transmitter file in <code>lioranboard/extensions</code> folder instead.

- Follower Alert - default Twitch connection does not include follower alerts.
- Change Twitch Status - changes your Twitch title
- Viewer Count - get the current amount of viewers
- Subscriber Count - get the current amount of subscribers
- Get Channel ID - retrieve channel ID by providing your Twitch channel name. Generally needed for a lot of extensions. 
- Bits Leaderboard - retrieve your bits leaderboard. 
- Get Profile Picture - get a profile picture of a user by providing their username. 
