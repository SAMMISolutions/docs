---
layout: default
title: Installation & Setup
menu: Getting Started
num: 3
permalink: /getting-started/installation-and-setup
type: fullpage
---

This page will walk you through step by step on how to both install, set up SAMMI, and connect it to OBS and your Twitch account to start.

{% include alert.html text="This assumes you've already gone through the <a href='/download'>Download</a> section and installed all prerequisites, have a .zip package of SAMMI, and have a Twitch account. If you haven't, now is the time to do so!" type="warning" %}

<!-- {% include alert.html text="You will see a lot of concepts that you might not understand. " type="info" %}  -->

<!-- #### 1. Install all dependencies
- Download and install **[OBS Studio](https://obsproject.com/)**. As of now, SAMMI does not support other streaming software.
- As of OBS Studio v28, there is no need to download a separate OBS Websocket plugin as it already has OBS Websocket 5.0 built into it. This is how SAMMI communicates with OBS Studio. If you are running OBS Studio version 27, you will need to download and install **[OBS Websocket 4.9.1](https://obsproject.com/forum/resources/obs-websocket-remote-control-obs-studio-from-websockets.466/)**
- If you are on OBS v28, and you want to use extensions and plugins that are NOT compatible with OBS Websocket 5.0, then you can download the **[OBS Websocket 4.9-compat](https://github.com/obsproject/obs-websocket/releases/tag/4.9.1-compat)** for backwards compatibility. However, this means you will need to set up two instances of OBS in SAMMI, one using 5.0 and one using the 4.9-compat version. 

#### 2. Download SAMMI

We recommend selecting **64bits release**. SAMMI 2022.5.0 is the final release that has 32-bit (x86) support.

<a href="https://sammisolutions.itch.io/sammi"><button type="button" class="btn btn-primary mt-1">Download SAMMI</button></a> -->

### 1. Unpack SAMMI zip

Unpack the zip file to a folder on your PC.

{% include alert.html text="Do not place SAMMI folder in your Program Files or any network drives (Google Drive, OneDrive, Dropbox), as it sometimes can cause issues. Do not put SAMMI in your OBS folder, or your obs-plugins folder. If you must use a network drive, choose a syncing solution instead." type="danger" %}

{% include image.html w="100" external="true" src="https://i.imgur.com/feNdMRV.gif" alt="Extracting SAMMI to a folder via WinRAR" type="image" %}


### 2. Launch SAMMI Core

Navigate to the unpacked folder and launch `SAMMI Core.exe`. Allow the app through the firewall if there's a prompt to do so. You'll also be greeted with an analytics notice, which can be opted out in the SAMMI settings. Learn more [here!](/privacy-policy)

Once you get past those prompts, you'll be greeted with the Dashboard.

### 3. Connect SAMMI Core to your OBS

{% include alert.html text="This setup assumes you are using OBS versions 28 or above." type="info" %}

1. In OBS, along the top options bar, go to Tools > Websocket Server Settings. Make sure `Enable Websockets Server` is checked.\
We recommend __unchecking__ `Enable Authentication` for easy setup. You only need to worry about setting a password if others in (or have access to) your home network intend on interrupting your setup.\
If you wish to use a password for your OBS connection, is is strongly recommended you let OBS randomly create a password for you via hitting the `Generate Password` button, then copying the password from clicking the `Show Connect Info` button below and hitting `Copy` next to password. you must also configure it in SAMMI under OBS Connections settings mentioned in the next step.

{% include alert.html text="Make sure you hit the Apply button to ensure changes go through!" type="warning" %}
	  
{% include image.html w="100" external="true" src="https://i.imgur.com/QMGorB7.png" alt="OBS Websocket Settings" type="image" %}

{:start="2"}
1. Now, in SAMMI Core, click on **OBS Connections** at the bottom menu banner to open a window. You should see a default "Main" connection with some preconfigured settings.
If you used a password for OBS in the step above, make sure the passwords match. 
1. Click `Connect` on the left. You should see the status indicator for `Main OBS` in the bottom left corner change from red to green. 
2. Enable `Auto-Connect` by checking the checkbox on the left to true so you don't have to come to this menu everytime to connect.
3. Hit `Save and Close`. 
  {% include image.html w="75" external="true" src="https://i.imgur.com/FhKVx8T.png" alt="Verifying connection to OBS" %}

### 4. Add and connect the Bridge to OBS

The bridge is essential for important features of SAMMI, including but not limited to extension usage.

We are going to be creating a new OBS Custom Browser Dock to load our Bridge.

In OBS, along the top options bar, go to to Docks > Custom Browser Docks...

Your new Dock Name can be whatever you'd like (We recommend "Bridge"!) and the URL will be the path to the `bridge.html` file located in your `SAMMI/bridge` folder. You can retrieve that path easily by going to your SAMMI Core's Dashboard, clicking `SAMMI Bridge` on the left menu, and clicking `Copy Full Path` to then paste into the URL field of the Custom Browser Docks window in OBS.

Press `Apply` and you should see your new dock pop up. If it does not pop up for some reason, you can always go to your top options bar and click View > Docks > (Your Bridge Dock Name Here) to enable it.

Fit your new dock somewhere in your OBS screen that makes sense for your workflow! It is recommended to drag the window over another OBS dock until the dock glows, and drop, merging two docks together, allowing you to toggle between viewing the two with some newly created tabs. Even while the bridge is not visible in tab form, it is still active, so you don't have to stare at the bridge all the time!

Now with our newly docked bridge, we can connect our bridge to SAMMI Core.\
The bridge should have already connected to SAMMI Core on it's own, which can be indicated by the green light in the bridge itself on the top, or, in SAMMI Core, you should see the status indicator for `Bridge` in the bottom left corner change from red to green.\
If not, Navigate to the "Settings" tab of the bridge if not already visible. Here, you can view your connection settings and click connect.

If you wish to learn anything else about the bridge, such as setting a password, features, and more, please refer to [this page!](/docs/bridge)

<!-- {% include alert.html text="Bridge Port and Password must match what's in the Settings window, not the OBS Connections window." type="danger" %}  -->

{% include video.html w="75" src="connect_and_dock_bridge.mp4" alt="Docking a Bridge in OBS" %}



### 5. Link your Twitch account

Linking your Twitch account to SAMMI is a necessary step if you want to be able to listen to events and control your channel via SAMMI.

{% include alert.html text="You can link multiple Twitch accounts, however, in this tutorial we will focus on connecting just your main account." type="info" %}

1. In SAMMI Core, navigate to your dashboard and click `Twitch Connections` located along the bottom banner menu.
2. Left-click on the huge plus sign to open a web page for Twitch connection authentication. If your web browser does not open, *right-click instead* which will copy the url to your clipboard to paste into a browser of your choosing.
3. Scroll down and press `Authorize` and wait to be redirected again to see a __"Twitch token successfully saved, you can return to SAMMI Core now."__ message in your browser.
4. Close the tab.
5. Back in the Twitch Connections window, you should now see your Twitch account in the list!
6. Click "Done" when finished. You should see the status indicator for `Twitch Eventsub` and `Twitch Chat` in the bottom left corner change from red to green to verify a successful connection.

{% include video.html w="75" src="link-twitch.mp4" alt="Linking a Twitch account" %}

If you wish to learn anything else about our Twitch integration such as adding extra bots, managing rewards in-app, and more, please refer to [this page!](/integrations/twitch)
  
<!-- #### 8. Create your first button

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

{% include alert.html text="Didn't work as expected? Cannot connect to OBS, Bridge or Twitch chat? Please refer to our <a href='/troubleshooting/common'>Troubleshooting</a> section!" type="info" %} -->
