---
layout: default
title: SAMMI Core
menu: Components
num: 1
type: fullpage
permalink: /core
---

SAMMI Core is the main component. You can change all the settings, add and modify your decks, program new buttons, add and edit triggers etc.
{% include alert.html text="SAMMI Core was previously known as the LioranBoard Receiver" type="primary" %} 

{% include image.html w="auto" src="SAMMI.png" alt="SAMMI Core" %}

{% include alert.html text="SAMMI Core is only an editor. Use SAMMI Deck to press your buttons." type="warning" %} 

### Deck Menu 
- Edit Deck - allows you to edit currently selected deck, same as double clicking on the deck
- Add New Deck - adds a new empty deck
- Delete Deck - delete the currently selected deck, cannot be undone
- Move Left/Right - repositions the deck
- Copy Deck - exports the entire deck to your clipboard in JSON format to share with others, can include all deck button images as well
- Paste Deck - imports the entire deck from your clipboard, must be in JSON format
- Duplicate Deck - creates a copy of the entire deck inside SAMMI

### SAMMI Deck 
{% include image.html w="75" src="deck_menu.png" alt="SAMMI Deck Icon" %}
- Open SAMMI Deck - Press to open your [SAMMI Deck]({{ "streamdeck" | relative_url }}), that allows you to press buttons in your decks.
- Get LAN IP (for other devices) - puts your Local Area Network IP address into your clipboard, for you to use the Deck on another device.
- Android Version - links to the [Google Play Store](https://play.google.com/store/apps/details?id=lioranboard.ca.lioranboard.streamdeck) to download the Android version of the Deck

### Bridge
{% include image.html w="auto" src="bridge.png" alt="Bridge settings" %}
- Select a Bridge - allows you to select your default Bridge file where all your extensions will be installed/uninstalled from
- Open in a browser - opens your default Bridge in a browser
- Reveal in File Explorer - opens your Bridge file's location in File Explorer
- Copy Full Path - places the file path to the Bridge in your clipboard
- Install an Extension - installs an extension from .lb2 file to your default Bridge file
- Uninstall an Extension - uninstalls a selected extension from your default Bridge file
- Install all Extensions from folder - installs all extensions in a selected folder to the Bridge at once
- Reinstall all Extensions - reinstalls all extensions in your default Bridge

### Backup
{% include image.html w="auto" src="backup.png" alt="Backup options" %}
- Save SAMMI Backup - saves a backup of stuffs
- Load SAMMI Backup - loads a previously created backup

### About
{% include image.html w="auto" src="about.png" alt="About" %}
Press to open the About page, with info about the developers, and Patreon supporters

### Connection Status Indicators

{% include image.html w="auto" src="status.png" alt="Connection Status Indicators" %}

- Main OBS - indicates whether SAMMI Core is connected to your main OBSWS 
- Twitch Pubsub - indicated whether SAMMI Core is connected to Twitch Pubsub for listening to events such as follows, subs, etc.
- Twitch Chat - indicates whether SAMMI Core is connected to Twitch Chat for listening to and sending new messages
- Bridge - indicates whether SAMMI Core is connected to Bridge, required for Twitch Alerts and some extensions

### Settings
Allows you to adjust UI settings and external connection settings.

{% include image.html w="50" src="settings.png" alt="Settings" %}

- Allow SAMMI Deck and Bridge - check this box to allow SAMMI Deck and Bridge to connect to SAMMI Core, fill out the optional password for any incoming connection (port not editable in non-Dev mode)
- Minimize to Tray - when checked, SAMMI Core will minimize to tray instead of closing when you press X 
- Auto restart SAMMI after crash - when checked, SAMMI will re-open itself after a crash
- Automatically check for updates - when checked, SAMMI will let you know if there are updates available when you open SAMMI, with the option to not remind you for a few days
- Automatically close variable wrapping - when checked, SAMMI will automatically write the "$/" when you type "/$" with nothing to the right of the cursor
- Enable enhanced protection mode - when checked, SAMMI will not be allowed to modify or delete files outside of the main SAMMI directory, nor any critical files inside the directory.
- FPS - SAMMI Core is technically a game and runs at specific FPS, which, for example, affects Motion Commands for OBS. Should be the same as your stream FPS. 
- Language dropdown - change the language of SAMMI
- Interface Size - change scaling if you're using a non standard resolution
- Reset SAMMI - clears all running buttons and variables and reloads all decks
- Check for Updates - checks for new updates, allows you to update SAMMI Core and view patch notes
- Cancel - closes the window without saving any changes
- Save - saves any changes

### OBS Connections
Allows you to set up your OBS connection. Multiple connections and multiple OBSWS protocols are supported. 

{% include image.html w="50" src="obs_settings.png" alt="OBS Connections" %}

Learn more about setting up an OBS connection in our [Integrations-OBS]({{ "integrations/obs" | relative_url }}) section.

### Twitch Connections
Allows you to connect SAMMI Core to your Twitch account (or multiple accounts) to listen for new events, send chat messages, and use other Twitch commands.
{% include image.html w="50" src="twitch_settings.png" alt="Twitch Connections" %}
Find out more about Twitch connection in our [Integrations-Twitch](integrations/twitch) section.

### YouTube Connection
Allows you to connect SAMMI Core to your YouTube account to listen for new events, send chat messages, and use other YouTube commands.
{% include image.html w="50" src="youtube_settings.png" alt="YouTube Connection" %}

### Variable Viewer
The variable viewer can be accessed from the Deck Editor, or the Commands Editor. You can also use the Ctrl+Tab key as a shortcut.

In this menu you can see all global variables (marked red) and all button IDs with persistent variables enabled. 
{% include image.html w="75" src="var_viewer.gif" alt="Variable window showing button ID variables" %}

If you click on the eye icon, you can see all current variables for the selected button ID.

The variable viewer can now be sorted alphabetically, or by type. 

Use search function to search for a specific button ID.

Learn more about variables in our [Commands-Variables](commands/variables#introduction) section.

### Active Buttons
All currently running buttons will be displayed in this window.\
You can choose to interrupt (clear) all, ongoing or queued buttons. 

{% include image.html w="75" src="active_buttons.gif" alt="Interrupting an active button" %}

### Deck

If you press `Add new Deck` button, a new empty deck will be added to SAMMI Core. Double click on the deck to open it.\
Every deck is active at all times (unless manually disabled) in SAMMI Core. It does not matter if your SAMMI Deck is currently connected to a different deck.\
You can check `Disable Deck` in your main menu to deactivate your deck and all its buttons.

{% include image.html w="50" src="deck.png" alt="Deck with a button" %}

{% include alert.html text="If you want to back up your decks or share them with others, you can press <b>Copy Deck</b> in your main menu, which will copy it to your clipboard, and paste it into a text file." type="info" %}     

Inside your deck you will see an empty canvas grid, where you can add and modify your buttons.
- Name - change the name of your deck
- Grid Snapping - if unchecked, you can freely resize and position your buttons not dependent on the grid
- X & Y - the size of your grid
- Adaptive Resizing - whether you want to also resize your buttons when you change the grid size
- Background Image - choose either a color or background image for your deck
- Undo & Redo - allows you to undo/redo any deck action

### Button
You can create a new button inside a deck by either right clicking on your empty canvas and selecting **Create Button** or by just simply double clicking on any empty space. You can move it around, resize it etc.

{% include video.html w="75" src="create-button.mp4" alt="Create a new button" %}

There are also several keyboard shortcuts you can use:

| Shortcut | Function |
| ----- | ----- |
| Ctrl+C | Copies a selected button.|
| Ctrl+V | Pastes a copied button in a selected empty slot.|
| Delete | Deletes a selected button.|
| Ctrl+Z | Undoes the last action.|
| Ctrl+Y<br/>Ctrl+Shift+Z | Redoes a previous undone action.|
| Ctrl+S | Saves the deck and closes the Deck view.|
{:class='table table-secondary w-auto table-responsive table-hover'}

{% include alert.html text="Use Export JSON (by right clicking on a button) and Import from JSON (by right clicking on your empty canvas) to easily share your buttons with others!" type="info" %}  

If you now right click on the created button, a new button menu appears: 
#### Edit Appearance
Edit your button text, color, image and border size.\
All button images will be automatically resized and copied to `SAMMI/image` folder.\
You can press SHIFT + double click on a button to edit settings.

{% include image.html w="50" src="appearance.png" alt="Button Appearance" %}

#### Edit Settings

You can press CTRL + double click on a button to edit settings.

<div>

<table class="table">

<tr style="border:none">

<td class="w-25" style="border:none" markdown="1">

{% include image.html w="auto" src="button_settings.png" alt="Button Settings" %} 

</td>

<td style="border:none" markdown="1">

- **Button ID** - your unique Button ID, used in various commands (such as Trigger button) and to store all your button variables. It's encouraged to give all your buttons unique IDs. 
- **Group ID** - you can group up your buttons by assigning them the same group ID. This will automatically create a queue for your buttons and prevent them from triggering at the same time.
- **Allow Queue** - if there is another trigger event while the button is still active (for example if you get two subscribers at the same time), it will place it in the queue and reactivate the button as soon as it's ready again. Does not apply if Button Overlap option is on.
- **Allow Button Overlap** - allow multiple instances of the same button to happen at the same time
- **Local Variable Persist**
   - checked - button variables will be accessible even after the button has finished. If Allow Button Overlap is enabled, all button executions will share the same variables.   
   - unchecked - button variables will be accessible only when the button is running and only inside their own button. Other buttons cannot access them even if the button is currently running. If Allow Button Overlap is enabled, unique variables will be created for each button execution and will never be shared.
- **Switch Deck** - whether you want the button to also switch your deck when activated
- **Press type** 
   - Normal Press - single button press
   - Drag Press - the button will trigger if dragged over. You can add either a single or multiple drag press (activates if it's dragged over again). Useful for creating your own volume buttons! 

</td>
</tr>  
</table>  

<div markdown="1">

#### Edit Triggers
Add various triggers to your button to get automatically executed when a specific event happens. For example, you can trigger your button every time you get a new follower or someone types `!hello` in your chat.  
You can press CTRL + double click on a button to add a trigger.

Learn more about specific triggers in our [**Triggers**]({{ "triggers/introduction" | relative_url }}) section.

#### Edit Commands
When you right click-Edit commands or double click on your button and press **+**, you can start adding commands to execute when the button is pressed.  

Button commands have their own specific rules that you need to follow, read read more about them in our [Commands-Introduction]({{ "commands/introduction" | relative_url }})  section. 
   
Once you're done with adding commands, you can now run the button directly from the commands window - no more having to save back to the main screen and testing via a chat command or pressing the button on the deck!
{% include alert.html text="Please be aware that any commands that involve wildcards or pulling info from the trigger may not work as intended if tested this way - for best results, test the same way you intend for it to be used." type="info" %} 

See the list of all available commands in the **Commands** section.  

#### Edit Release Commands
Program your button to perform specific actions when released. **The release action only happens if the button is pressed from your SAMMI Deck or hotkey**. You can add as many commands as you want.

#### Edit Init Variables
Initial variables the button will have when initiated. It prevents persistent buttons from crashing. Must be in [JSON format](https://www.w3schools.com/js/js_json_intro.asp).

#### Copy Button
Copy a button and insert it elsewhere in your decks. All buttons have unique IDs. A new copied button will have a different ID from the original one. Can also be done by selecting the button and pressing Ctrl+C, with Ctrl+V to paste it in a selected empty spot.

{% include video.html w="75" src="copy-button.mp4" alt="Copying and pasting a button" %}


#### Delete Button
Delete a whole button. Can also be done by selecting a button and pressing the Delete key.

#### Export JSON
Exports a button by copying its contents to your clipboard. 

{% include video.html w="75" src="export-json.mp4" alt="Exporting a button" %}

#### Group ID
Displays Group ID (if any exists), click on it to copy it to your clipboard

#### Button ID
Displays button ID, click on it to copy it to your clipboard

#### Import a button
You can import a button by right clicking anywhere on an empty space in your deck and selecting Import from JSON.

{% include video.html w="75" src="import-json.mp4" alt="Importing a button" %}

</div>
