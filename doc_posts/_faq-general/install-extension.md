---
title: Extensions
num: 1.1
---

Extensions are meant to add new functionality to LioranBoard. They're made by the LioranBoard community.

{% include alert.html text="Some extensions live in your Transmitter. Your Transmitter must be running for them to work." type="warning" %} 

**We recommend installing only [officially released extensions]() that have been verified to be safe to use.**

#### Install an extension:

1. Download the .lb2 extension file
   - If you're downloading the extension from **Github**, please refer to the screenshot below.
   {% include image.html w="75" src="extension_github.png" alt="Correct way to download an extension file from Github" %}
{:start="2"}
2. (optional) If you want to select a different Transmitter than the one you're currently using, click on **Transmitter - Select a Transmitter** and select a new Transmitter file to install your extension to.
2. Click on **Transmitter - Install an Extension** in your LioranBoard
3. Select the .lb2 extension file you downloaded
4. If the extension requries Transmitter to be running, your Transmitter will automatically refresh and a new extension tab will be added. You should also see it added in at the bottom list of all the extensions.
6. Most extensions include a premade deck with buttons. If you do not see one, create a new button, press **+** - **Extension Commands** - **Your Transmitter** and select the extension name. If you do NOT see this menu, it means the extension either does not require Transmitter or you did not properly install it.

{% include alert.html text="Some extensions have built in requirements, such as placing them in the running a compatible version of LB/OBS or being connected to Transmitter. You must meet all the requirements to install the extension." type="info" %} 

#### Uninstall an extension (if extension requires Transmitter)
1. Click on **Transmitter - Uninstall an Extension** in LioranBoard.
2. You will see a dropdown menu of all extensions. Click on the extension you wish to uninstall and press Yes.
3. The extension is now completely removed from your Transmitter. 
4. You must delete your uninstalled extension's deck manually.

#### Protected Extensions
Extension developers can choose to protect their extension decks and their buttons. If the particular button is protected, you cannot copy the button, its commands or see what's inside nested commands (if they're closed). You may still add new commands, modify or delete them.

#### Create an extension
Lioranboard communicates with all its extensions via transmitter.html and its own websocket.\
Information about how to make your own extension can be found in `LioranBoard/extension/how to make extensions.txt` file.\
Knowledge of JavaScript programming and LioranBoard variable handling is a requirement to program extensions.  We encourage you to go over some existing extensions to understand the process.\
Once you have an extension working, you can submit it in *#development* channel in the official [LioranBoard Discord server](https://discord.gg/dXez8Zh). You will need one of the mods to approve it before it can be officially released. 
