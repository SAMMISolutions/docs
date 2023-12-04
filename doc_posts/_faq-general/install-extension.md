---
title: Extensions
num: 1.1
---

Extensions are meant to add new functionality to SAMMI. They're made by the SAMMI community.

{% include alert.html text="Some extensions live in your Bridge. Your Bridge must be running for them to work." type="warning" %} 

**We recommend installing only [officially released extensions](/extensions) that have been verified to be safe to use.**

#### Install an extension:

1. Download the .sef extension file
   - If you're downloading the extension from **Github**, please refer to the screenshot below.
   {% include image.html w="75" src="extension_github.png" alt="Correct way to download an extension file from Github" %}
{:start="2"}
2. (optional) If you want to select a different Bridge than the one you're currently using, click on **Bridge - Select a Bridge** and select a new Bridge file to install your extension to.
2. Click on **Bridge - Install an Extension** in your SAMMI
3. Select the `.sef` or `.lb2` extension file you downloaded
4. If the extension requries Bridge to be running, your Bridge will automatically refresh and a new extension tab will be added. You should also see it added in at the bottom list of all the extensions.
6. Most extensions include a premade deck with buttons. If you do not see one, create a new button, press **+** - **Extension Commands** - **Your Bridge** and select the extension name. If you do NOT see this menu, it means the extension either does not require Bridge or you did not properly install it.

{% include alert.html text="Some extensions have built in requirements, such as placing them in the running a compatible version of SAMMI/OBS or being connected to Bridge. You must meet all the requirements to install the extension." type="info" %} 

#### Uninstall an extension (if extension requires Bridge)
1. Click on **Bridge - Uninstall an Extension** in SAMMI.
2. You will see a dropdown menu of all extensions. Click on the extension you wish to uninstall and press Yes.
3. The extension is now completely removed from your Bridge. 
4. You must delete your uninstalled extension's deck manually.

#### Protected Extensions
Extension developers can choose to protect their extension decks and their buttons. If the particular button is protected, you cannot copy the button, its commands or see what's inside nested commands (if they're closed). You may still add new commands, modify or delete them.

#### Create an extension
All information about how to build your own extension can be found in the [Extension Guide](https://sammi.solutions/extensions/build). You can also reference [Bridge documentation](https://github.com/SAMMISolutions/SAMMI-Bridge#extension-command) and download an [Extension Example File](https://sammi.solutions/extensions/extension_example.sef).