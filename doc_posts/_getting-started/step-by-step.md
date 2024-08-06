---
layout: default
title: Step by step tutorial
menu: Getting Started
num: 3
permalink: /getting-started/step-by-step
type: fullpage
---

Welcome to SAMMI and the world of endless possibilities!

On this page, we will walk you through a step by step tutorial on how to set up SAMMI, and connect it to OBS and your Twitch account. You will also learn how to create your first button, add a command and trigger it via Twitch chat.

You can watch our full setup video walkthrough or follow the written guide below.

{% include alert.html text="SAMMI is a closed source application currently supported only on Windows." type="warning" %} 

#### Watch Full Setup Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/_l3otboV_c8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

#### 1. Install all dependencies
- Download and install **[OBS Studio](https://obsproject.com/)**. As of now, SAMMI does not support other streaming software.
- As of OBS Studio v28, there is no need to download a separate OBS Websocket plugin as it already has OBS Websocket 5.0 built into it. This is how SAMMI communicates with OBS Studio. If you are running OBS Studio version 27, you will need to download and install **[OBS Websocket 4.9.1](https://obsproject.com/forum/resources/obs-websocket-remote-control-obs-studio-from-websockets.466/)**
- If you are on OBS v28, and you want to use extensions and plugins that are NOT compatible with OBS Websocket 5.0, then you can download the **[OBS Websocket 4.9-compat](https://github.com/obsproject/obs-websocket/releases/tag/4.9.1-compat)** for backwards compatibility. However, this means you will need to set up two instances of OBS in SAMMI, one using 5.0 and one using the 4.9-compat version. 

#### 2. Download SAMMI

We recommend selecting **64bits release**. SAMMI 2022.5.0 is the final release that has 32-bit (x86) support.

<a href="https://sammisolutions.itch.io/sammi"><button type="button" class="btn btn-primary mt-1">Download SAMMI</button></a>

Unpack the zip file and unpack it to a folder on your PC.

{% include alert.html text="Do not place SAMMI folder in your Program Files or any network drives (Google Drive, OneDrive, Dropbox), as it sometimes can cause issues. Do not put SAMMI in your OBS folder, or your obs-plugins folder." type="danger" %} 

#### 3. Launch SAMMI

Navigate to the unpacked folder and launch SAMMI Core.exe. Allow the app through the firewall if there's a prompt and press yes if you get an alert your decks are empty (this is fine since it's your first time launching SAMMI).

#### 4. Connect SAMMI to your OBS

1. In your OBS go to Tools-Websocket Server Settings. Make sure `Enable Websockets Server` is checked.\
We recommend unchecking `Enable Authentication` for easy setup.\
If you wish to use a password for your OBS connection, you must also configure it in your SAMMI - OBS Connections settings. 
	  
	{% include image.html w="100" src="obsws_settings.png" alt="OBS Websocket Settings" type="image" %}

{:start="2"}
2. In your SAMMI, click on **OBS Connections** at the bottom menu. Protocol should be set to `OBSws5` unless you're configuring another OBS connection to use `OBSws4` as well.\
If you used a password for OBS in the step above, make sure the passwords match. 
3. Click Connect. You should see the status indicator for `Main OBS` in the left bottom corner change from red to green. 

  {% include image.html w="75" src="obs-connected.png" alt="OBS is connected" %}

#### 5. Add Bridge to your OBS Dock

In your OBS menu navigate to **Docks - Custom Browser Docks...**.
Your new Dock Name can be `Bridge` and the URL will be the path to the `bridge.html` file located in your `SAMMI/bridge` folder. You can retrieve it by clicking on `Bridge - Copy Full Path` in your SAMMI. 

Press **apply** and you should see your new dock. If it does not pop up for some reason, you can always go to View - Docks - Bridge.   
Fit your new dock somewhere in your OBS screen as you see fit. 

{% include video.html w="75" src="dock_bridge.mp4" alt="Docking a Bridge in OBS" %}


#### 6. Connect Bridge to SAMMI
In your **Bridge-status** tab (in our OBS dock), you can now modify your connection settings.\
Default IP address for SAMMI is always `127.0.0.1` and port is always `9425`. Leave all values as the default values.\
You must fill out the password if you decided to use one in SAMMI-Settings menu.\
Note that you only need to do this once, as your Bridge will remember the previous settings and will attempt to auto connect next time.

{% include alert.html text="Bridge Port and Password must match what's in the Settings window, not the OBS Connections window." type="danger" %} 


#### 7. Link your Twitch account

Linking your Twitch account to SAMMI is a necessary step if you want to be able to listen to alerts and control your Twitch via SAMMI.\
*You can link multiple Twitch accounts, however in this tutorial we will focus on connecting your main account.*

{% include video.html w="75" src="link-twitch.mp4" alt="Linking a Twitch account" %}

1. In your SAMMI click on either **Link Streamer Account** (if linking an account you use to stream with) or **Link Bot Account** (if linking an account you use as your bot, for example for posting chat messages). 
2. Press **Authorize** and wait to be redirected again to see `All good, you can go back to SAMMI now` message in your browser.
3. Back in SAMMI you should now see your Twitch account in the list! 
4. You can now optionally check which events to listen for and whether you want to Join Chat Channel for this particular Twitch channel.
5. You want to also check `Auto connect to Twitch`, else you will need to always press the **Connect Chat** button every time you open SAMMI to be able to receive and send chat messages from SAMMI.
6. Press **Connect Twitch** to connect to Twitch. 

  {% include image.html w="100" src="link-twitch.png" alt="Active Twitch Connection" %}
  
#### 8. Create your first button

In this part of the tutorial we will learn how to create a button with a simple command and add a Twitch chat trigger to it.
You can follow the text instructions or watch a short video for each step. 

{% include alert.html text="Pressing Save <b>twice</b> (once in your edit button screen and once in your edit deck screen) is essential to permanently saving any changes you make to a button." type="warning" %}

1. In your SAMMI, click on **Add New Deck** button. You should see a newly created blank deck named Deck 1. Double click on it.  

   {% include video.html w="75" src="create_deck.mp4" alt="Create a new deck" %}
2. This empty grid is your deck where you can create new buttons. Right click anywhere in the empty area and select **Create Button** or simply double click (video example shows both options, you can delete the extra button). A new empty button will be created.  

   {% include video.html w="75" src="create_button.mp4" alt="Create a new button" %}
3. Right click on the empty button you just created - **Add Commands** or double click on it.  

   {% include video.html w="75" src="add_command.mp4" alt="Add Commands" %}
4. Click on the **+** symbol. A dropdown menu will appear. Click on Twitch Commands and select **Twitch: Send Chat Message** (you can also just start typing message in the search box).  

   {% include video.html w="75" src="create_command.mp4" alt="Create a new command" %}
5. Populate the command's fields. 
   - Message - Put a random text in there. For example `Hello World!`.
   - Channel Name - Leave empty (will use your default Twitch channel)  

   Press **Save and Close** once finished.  

   {% include video.html w="75" src="populate_command.mp4" alt="Populate a command" %}
6. Back in our deck, right click on the new button - **Edit Triggers**. This is where you can attach any event to trigger your button. 
  - Click on the **+** sign and select Twitch Chat from the dropdown menu. 
  - Remove the `*` in the Message field and populate it with `!test` instead.
  
   Press **Save**   

   {% include video.html w="75" src="add_trigger.mp4" alt="Add a new trigger" %}
7. Optionally change button's text or appearance by right clicking on the button and selecting **Edit Appearance**.  

   {% include video.html w="75" src="edit_appearance.mp4" alt="Edit appearance" %}
8. Back in your deck, press **Save**  

   {% include video.html w="75" src="save_deck.mp4" alt="Save the deck" %}


We have now created a button that will send a chat message `Hello World` anytime it's pressed. We have also created a Twitch chat trigger which will execute the button automatically any time someone types `!test` in your Twitch chat.

##### Trigger the new button manually from SAMMI Deck
There are several ways how you can trigger a button. One of them is triggering it from your **SAMMI Deck**. 

1. Open **SAMMI Deck** by navigating to SAMMI - SAMMI Deck - Open SAMMI Deck.
2. Once it launches, you will see connection settings. As we are just keeping everything at default in this tutorial, you can simply press **Connect**. Selected deck should be `Deck 1`. Press Load Deck and you should see your newly created button.  

   {% include video.html w="75" src="open-streamdeck.mp4" alt="Open SAMMI Deck" %}
3. While looking at your Twitch chat of the Twitch account you just linked in SAMMI in the previous steps, click on the button in your **SAMMI Deck**. It should send a `Hello World!` message to your chat!  

   {% include video.html w="75" src="trigger_button.mp4" alt="Trigger Button from SAMMI Deck" %}

{% include alert.html text="Your SAMMI must be connected to Twitch Chat to be able to send chat messages." type="warning" %} 

##### Trigger the new button manually from Edit Command Window
If you're just putting together a new button, it's often easier to trigger it directly from your SAMMI, as this allows you to keep modifying the button commands without all the extra steps of saving the button and then pressing it in your SAMMI Deck. 

1. Navigate to your button's commands inside SAMMI. 
2. Press **Run Button**. You should see the same `Hello World` message in your Twitch Chat. 

   {% include video.html w="75" src="trigger_button2.mp4" alt="Trigger button from Edit Command screen" %}

##### Trigger the new button automatically via your Twitch Chat
Do you still remember the Twitch chat trigger you configured for your button? If you followed the tutorial, it should be `!test`. This means that everytime anyone types `!test` in your Twitch Chat, the button should get automatically triggered. 

1. Type `!test` in your Twitch Chat while looking both at your chat and SAMMI Deck. Two things should then happen: 
   - You will see the button in your SAMMI Deck blink, just like when you manually pressed it with your mouse earlier. 
   - SAMMI will respond back with `Hello World` message in your Twitch Chat.   


{% include video.html w="75" src="trigger_button_chat.mp4" alt="Trigger button via chat" %}

Now you have learned how to create a button, add a command and trigger it via Twitch chat! You can find more information about the individual components, commands and triggers in the next sections of the documentation. 

{% include alert.html text="Didn't work as expected? Cannot connect to OBS, Bridge or Twitch chat? Please refer to our <a href="https://sammi.solutions/docs/troubleshooting/common">Troubleshooting</a> section!" type="info" %}
