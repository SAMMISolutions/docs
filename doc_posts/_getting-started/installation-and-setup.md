---
layout: default
title: Installation & Setup
menu: Getting Started
num: 3
permalink: /getting-started/installation-and-setup
type: fullpage
---

This page will walk you through step by step on how to both install, set up SAMMI, and connect it to OBS and your Twitch and/or YouTube account to start.

{% include alert.html text="This assumes you've already gone through the <a href='/download'>Download</a> section and installed all prerequisites, have a .zip package of SAMMI, and have a Twitch or YouTube account. If you haven't, now is the time to do so!" type="warning" %}

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

1. In OBS, along the top options bar, go to Tools > Websocket Server Settings. Make sure **Enable Websockets Server** is checked.\
We recommend __unchecking__ **Enable Authentication** for easy setup. You only need to worry about setting a password if others in (or have access to) your home network intend on interrupting your setup.\
If you wish to use a password for your OBS connection, is is strongly recommended you let OBS randomly create a password for you via hitting the **Generate Password** button, then copying the password from clicking the **Show Connect Info** button below and hitting **Copy** next to password. you must also configure it in SAMMI under OBS Connections settings mentioned in the next step.

{% include alert.html text="Make sure you hit the Apply button to ensure changes go through!" type="warning" %}
	  
{% include image.html w="75" external="true" src="https://i.imgur.com/QMGorB7.png" alt="OBS Websocket Settings" type="image" %}

{:start="2"}
2. Now, in SAMMI Core, click on **OBS Connections** at the bottom menu banner to open a window. You should see a default "Main" connection with some preconfigured settings.
If you used a password for OBS in the step above, make sure the passwords match. 
3. Click **Connect** on the left. You should see the status indicator for **Main OBS** in the bottom left corner change from red to green. 
4. Enable **Auto-Connect** by checking the checkbox on the left to true so you don't have to come to this menu everytime to connect.
5. Hit **Save and Close**.
  {% include image.html w="75" external="true" src="https://i.imgur.com/FhKVx8T.png" alt="Verifying connection to OBS" %}

### 4. Add and connect the Bridge to OBS

The bridge is essential for important features of SAMMI, including but not limited to extension usage.

We are going to be creating a new OBS Custom Browser Dock to load our Bridge, but first we are going to need the filepath for it.

1. In SAMMI Core, from the dashboard, click **SAMMI Bridge** on the sidebar and click **Copy Full Path**.
2. In OBS, along the top options bar, go to to **Docks** > **Custom Browser Docks...**
3. Fill the Dock Name with whatever you'd like (We recommend "Bridge"!)
4. Paste your bridge path copied from earlier, into the URL field of the Custom Browser Docks window in OBS.
5. Press **Apply** and you should see your new dock pop up.
   
{% include alert.html text="If it does not pop up for some reason, you can always go to your top options bar and click View > Docks > (Your Bridge Dock Name Here) to enable it." type="info" %}

{:start="6"}
6. Fit your new dock somewhere in your OBS screen that makes sense for your workflow! The bridge should have already connected to SAMMI Core on it's own, which can be indicated by the green light in the bridge itself on the top, or, in SAMMI Core, you should see the status indicator for `Bridge` in the bottom left corner change from red to green. If not, Navigate to the "Settings" tab of the bridge if not already visible. Here, you can view your connection settings and click connect.

{% include alert.html text="It is recommended to drag the window over another OBS dock until the dock glows, and drop, merging two docks together, allowing you to toggle between viewing the two with some newly created tabs. Even while the bridge is not visible in tab form, it is still active, so you don't have to stare at the bridge all the time!" type="info" %}

If you wish to learn anything else about the bridge, such as setting a password, features, and more, please refer to [this page!](/docs/bridge)

<!-- {% include alert.html text="Bridge Port and Password must match what's in the Settings window, not the OBS Connections window." type="danger" %}  -->

{% include video.html w="75" src="connect_and_dock_bridge.mp4" alt="Docking a Bridge in OBS" %}

### 5a. Link your Twitch account

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

### 5b. Link your YouTube account

Linking your YouTube account to SAMMI is a necessary step if you want to be able to listen to events and control your channel via SAMMI.

{% include alert.html text="You can link multiple YouTube accounts, however, in this tutorial we will focus on connecting just your main account." type="info" %}

1. In SAMMI Core, navigate to your dashboard and click **YouTube Connections** located along the bottom banner menu.
2. Click on the **Obtain a Token** button to open a web page for YouTube connection authentication.
3. Click the **Sign in with Google** button.
4. Choose the Google account containing the YouTube channel you wish to link.

{% include alert.html text="The application in the authentication screen will say Lioranboard. This can be safely disregarded, we are in the process of getting a name change for it and is entirely safe!" type="warning" %}

{:start="5"}
5. Click **Continue** on the trust screen.
6. Click **Copy to Clipboard** to copy the refresh token to your clipboard.
7. Back in SAMMI Core in the YouTube Connections window, paste the refresh token in the **Refresh Token** text field and click **Link**
8. If everything worked out, you should see your account pop up in the list displayed at the top of the window with your profile picture. You can click **Done**.

{% include video.html w="75" src="link-youtube.mp4" alt="Linking a YouTube account" %}

### 6. Done! Get to building!

This concludes the installation and basic setup to get started using SAMMI with some services!

{% include alert.html text="Didn't work as expected? Cannot connect to OBS, Bridge, Twitch, or YouTube? Please refer to our <a href='/troubleshooting/common'>Troubleshooting</a> section!" type="info" %}