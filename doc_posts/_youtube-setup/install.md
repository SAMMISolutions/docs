---
title: "Install"
num: 1
---

Once you have downloaded the zip file, extract it. You will see the following files: 
- `tsl_youtube.html` - this is your new Transmitter to use with YouTube Live.\
  Read [How to Run Transmitter]({{ "/transmitter#howtoruntransmitter" | relative_url }}) if this is your first time using LioranBoard
  - You can also download the newest version of clean Transmitter for YouTube from [Github](https://github.com/christinna9031/LioranBoard-Transmitter-YouTube/releases)
  - if you wish to use YouTube Live with your original Transmitter (i.e. you stream both on Twitch and YouTube), you can simply install the integration without replacing the Transmitter at all
- `youtube_live.lbe` - this is your YouTube Live extension file. Please follow our guide on [How to install an extension](https://lioranboard.ca/extensions/install). Make sure you select `tsl_youtube.html` (or your original Transmitter file) to install it in.  
**Don't forget to completely restart (close and reopen) LioranBoard** as the integration sets up some OBS triggers that only update after you relaunch LioranBoard.   

{% include alert.html text="<code>tsl_youtube.html</code> does not contain any Twitch related integrations. If you wish to regularly switch between streaming on YouTube Live and Twitch, feel free to use the original Transmitter that comes with LioranBoard." type="info" %} 

Did you receive this popup warning: ***You have set up an OBS Trigger for Stream Started event, however you changed the original trigger name*** ? \
If you get this warning after installing the extension, follow these steps:
1. In your Receiver go to OBS Trigger menu
2. Find `StreamStarted` Listen Event and click on it 
3. Look at the Trigger. If it's not `StreamStarted` (same as the Event), you need to edit your LIVE INIT button in the YouTube Live premade deck: 
    1. Right click on the button-Edit Twitch Triggers.
    2. The third trigger in the list `StreamStarted` needs to be renamed to whatever Trigger you use from step 3. 
    3. Click Done and Done again. 






