---
title: Extensions
num: 1.1
---

Extensions are meant to add new functionality to LioranBoard. They're made by the LioranBoard community.

{% include alert.html text="Extensions live in your Transmitter. If you update your Transmitter, you must reinstall all the extensions." type="warning" %} 

**We recommend installing only [officially released extensions]() that have been verified to be safe to use.**

#### Install an extension:

1. Download the .lbe extension file
   - If you're downloading the extension from **Github**, please refer to the screenshot below.
   {% include image.html w="75" src="extension_github.png" alt="Correct way to download an extension file from Github" %}
{:start="2"}
2. Click on **Install Extension** in your LioranBoard Receiver
3. Select the .lbe extension file you downloaded
4. Select your default Transmitter you are using. That's the `tsl_transmitter.html` file residing in your lioranboard folder. Make 100% sure it is the correct file.
5. Your Transmitter will automatically refresh, adding a new tab for the extension you just installed. You should also see it added in at the bottom list of all the extensions.
6. Most extensions include a premade deck with buttons. If you do not see one, create a new button, add (Send to Extension)[]  command and select the extension you just installed.

{% include alert.html text="Some extensions have built in requirements, such as placing them in the Receiver/Ext folder or running a compatible version of LB/OBS. You must meet all the requirements to install the extension." type="info" %} 


**Extension is installed properly if:**

- You can see all its fields in your [Send to extension]({{ "commands/misc#sendtoextension" | relative_url }}) command. If you can only see the extension name, the extension was not installed properly or your Transmitter is not running. The amount of input fields depends on the extension, but it should in most cases contain at least one.
  {% include image.html w="75" src="extension_installed.png" alt="Correctly vs. incorrectly installed extension" %}
- Your Transmitter displays that it's correctly installed. You should see a new tab and a checkbox at the bottom with the extension name added.

#### Uninstall an extension
1. Click on the **Uninstall Extens.** button in your LioranBoard Receiver.
2. Select the correct Transmitter where your extension is installed and press Yes when prompted whether you want to replace it.
3. You will get a dropdown menu in your Receiver. Click on the extension you wish to uninstall and press Yes.
4. The extension is now completely removed from your Transmitter. 

#### Create an extension
Lioranboard communicates with all its extensions via transmitter.html and its own websocket.\
Information about how to make your own extension can be found in `LioranBoard/extension/how to make extensions.txt` file.\
We encourage you to go over a few premade extensions to understand the process.\
Once you have an extension working, you can submit it in *#development* channel in the official [LioranBoard Discord server](https://discord.gg/dXez8Zh). You will need one of the mods to approve it before it can be officially released. 
