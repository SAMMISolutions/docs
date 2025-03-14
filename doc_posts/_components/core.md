---
layout: default
title: SAMMI Core
menu: Components
num: 1
type: fullpage
permalink: /core
---

SAMMI Core is the main SAMMI component. You can change all the settings, add and modify your decks, program new buttons, add and edit triggers and much more.

When you first open the program, you will be greeted with the **Dashboard**.

**Click on the image below and hover over an area of interest:** 
{% include image.html w="auto" src="core.png" alt="SAMMI Core" map="core-map" %}
 
<map name="core-map">
    <area target="_blank" alt="A single enabled deck" title="A single enabled deck" href="#deck" coords="378,17,180,223" shape="rect">
    <area target="_blank" alt="A single disabled deck" title="A single disabled deck" href="#disableadeck" coords="576,16,382,223,574,224,574,18,576,16" shape="rect">
    <area target="_blank" alt="Enters Edit Deck screen." title="Enters Edit Deck screen." href="#deck" coords="2,48,161,19" shape="rect">
    <area target="_blank" alt="Adds or deletes the selected deck" title="Adds or deletes the selected deck" href="#deck" coords="163,53,1,112" shape="rect">
    <area target="_blank" alt="Changes the deck order" title="Changes the deck order" href="#deck" coords="162,117,0,169" shape="rect">
    <area target="_blank" alt="Copies a deck to your clipboard, can be shared with others." title="Copies a deck to your clipboard, can be shared with others." href="#deck" coords="161,173,-1,201" shape="rect">
    <area target="_blank" alt="Pastes deck data from your clipboard as a new deck." title="Pastes deck data from your clipboard as a new deck." href="#deck" coords="163,202,-1,232" shape="rect">
    <area target="_blank" alt="Duplicates an existing deck, creating a unique copy." title="Duplicates an existing deck, creating a unique copy." href="#deck" coords="164,260,0,233" shape="rect">
    <area target="_blank" alt="Opens SAMMI Panel dropdown which acts as your virtual Stream Deck." title="Opens SAMMI Panel dropdown which acts as your virtual Stream Deck." href="https://sammi.solutions/docs/panel" coords="165,283,0,314" shape="rect">
    <area target="_blank" alt="Opens SAMMI Voice, which allows you to control SAMMI with voice commands." title="Opens SAMMI Voice, which allows you to control SAMMI with voice commands." href="https://sammi.solutions/docs/voice" coords="163,337,5,312" shape="rect">
    <area target="_blank" alt="Opens SAMMI Bridge menu, to open Bridge or install/uninstall an extension." title="Opens SAMMI Bridge menu, to open Bridge or install/uninstall an extension." href="https://sammi.solutions/docs/core#bridgemenu" coords="164,365,5,337" shape="rect">
    <area target="_blank" alt="Opens menu with all official SAMMI integrations." title="Opens menu with all official SAMMI integrations." href="" coords="161,388,2,368" shape="rect">
    <area target="_blank" alt="Opens About page with information about developers and license." title="Opens About page with information about developers and license." href="https://sammi.solutions/docs/about" coords="161,416,0,390" shape="rect">
    <area target="_blank" alt="Connection indicators for all major SAMMI components." title="Connection indicators for all major SAMMI components." href="https://sammi.solutions/docs/core#connectionstatusindicators" coords="160,810,5,725" shape="rect">
    <area target="_blank" alt="Opens official SAMMI Discord invite link." title="Opens official SAMMI Discord invite link." href="https://discord.gg/dXez8Zh" coords="161,865,-1,811,-1,819" shape="rect">
    <area target="_blank" alt="Opens official SAMMI Patreon. " title="Opens official SAMMI Patreon. " href="https://www.patreon.com/sammidevs" coords="162,870,0,917" shape="rect">
    <area target="_blank" alt="Adds a new deck. " title="Adds a new deck. " href="#deck" coords="598,192,766,57" shape="rect">
    <area target="_blank" alt="Current FPS indicator. FPS plays a role in executing some SAMMI commands." title="Current FPS indicator. FPS plays a role in executing some SAMMI commands." href="#uisettings" coords="1225,0,1279,28" shape="rect">
    <area target="_blank" alt="Opens SAMMI Settings menu.  " title="Opens SAMMI Settings menu.  " href="#settings" coords="115,958,-1,924" shape="rect">
    <area target="_blank" alt="Set up OBS connections to SAMMI here. " title="Set up OBS connections to SAMMI here. " href="#obsconnections" coords="300,958,117,924" shape="rect">
    <area target="_blank" alt="Setup and link your Twitch accounts here. " title="Setup and link your Twitch accounts here. " href="#twitchconnections" coords="517,923,303,955" shape="rect">
    <area target="_blank" alt="Setup and link your YouTube account here. " title="Setup and link your YouTube account here. " href="#youtubeconnection" coords="733,957,519,925" shape="rect">
    <area target="_blank" alt="See all button and global variable here." title="See all button and global variable here." href="#variableviewer" coords="924,956,736,923" shape="rect">
    <area target="_blank" alt="See and clear all currently running buttons here. " title="See and clear all currently running buttons here. " href="#activebuttons" coords="1101,959,925,923" shape="rect">
    <area target="_blank" alt="Current SAMMI version. " title="Current SAMMI version. " href="" coords="1278,893,1137,926" shape="rect">
</map>

### Deck Menu 
- **Edit Deck** - allows you to edit currently selected deck, same as double clicking on the deck
- **Add New Deck** - adds a new empty deck, you can also use `CTRL+N` keyboard shortcut
- **Delete Deck** - delete the currently selected deck, cannot be undone
- **Move Left/Right** - repositions the deck
- **Copy Deck** - exports the entire deck to your clipboard in JSON format to share with other users, you can include all deck button images as well
- **Paste Deck** - imports the entire deck from your clipboard, must be in JSON format
- **Duplicate Deck** - creates a copy of the entire deck inside SAMMI

### Deck App Menu
{% include image.html w="75" src="deck_app_menu.png" alt="Deck App Menu listing all options available" %}
- **Open SAMMI Panel (Web)** - Opens your browser to access our official deck app, SAMMI Panel.
- **Open Deck Hopper (Recommended!)** - Opens Deck Hopper, a third party deck application we recommend for users.
- **Get Deck Hopper for Android** - Links to the download of Deck Hopper for android devices.
- **Get DeckMate Control for Android** - Links to the download of DeckMate Control for android, an alternative third party deck app.
- **Get LAN IP (for other devices)** - saves your Local Area Network IP to your clipboard, ready for you to paste into a text editor to retrieve your IP address for use within deck apps loaded on devices other than your local computer.

### SAMMI Voice
Opens the SAMMI Voice component.

### SAMMI Bridge Menu
{% include image.html w="auto" src="bridge_menu.png" alt="SAMMI Bridge Menu listing all options available" %}
- **Select a Bridge** - allows you to select your default `bridge.html` file where all your extensions will be installed/uninstalled from. *You shouldn't have to do this unless you're a power user.*
- **Reload a Bridge** - refreshes your Bridge, same as you going into your Bridge file and pressing reload manually
- **Send ping to a Bridge** - sends a ping to a bridge, prompting it to respond back with a pong to ensure connectivity.
- **Open in a browser** - opens your default Bridge in a browser
- **Reveal in File Explorer** - opens your Bridge file's location in File Explorer
- **Copy Full Path** - places the file path to the Bridge in your clipboard
- **Install an Extension** - installs an extension from `.sef` or `.lb2` file to your default Bridge file
- **Uninstall an Extension** - opens a menu listing all installed extensions in your default bridge file. selecting one uninstalls that extension from your default Bridge file
- **Install all Extensions from folder** - installs all extensions in a selected folder to the Bridge at once, simply select the first file in the folder
- **Reinstall all Extensions** - reinstalls all currently installed extensions in your default Bridge
- **Official Extension Site** - opens your browser to our official [extensions site](https://sammi.solutions/extensions), home of official, and primarily community made extensions!
- **Christina's Extensions** - opens your browser to former team member and founder Christina's personal extensions page.
- **Chrizzz's Extensions** - opens your browser to team member Chrizzz's personal extensions page.
- **Landie's Extensions** - opens your browser to team member Landie's personal extensions page.
- **wolbee's Extensions** - opens your browser to former team member and founder wolbee's personal extensions page.

### Integrations Menu
{% include image.html w="auto" src="integrations.png" alt="Integrations Menu" %}
All official SAMMI extensions and integrations. Click on one to download and [install it](https://sammi.solutions/extensions/install)!

### About
{% include image.html w="auto" src="about.png" alt="About button" %}
Press to open the About page, with info about the developers, past developers, founders, and Patreon supporters.

### Connection Status Indicators

{% include image.html w="auto" src="status.png" alt="Connection Status Indicators" %}

- **Main OBS** - indicates whether SAMMI Core is connected to your main OBS via the websocket. 
- **Twitch Eventsub** - indicated whether SAMMI Core is connected to Twitch Eventsub for listening to events such as new followers, subscribers, channel point redeems etc.
- **Twitch Chat** - indicates whether SAMMI Core is connected to Twitch Chat for listening to and sending new Twitch Chat messages
- **Bridge** - indicates whether SAMMI Core is connected to the Bridge, required for some extensions and for testing Twitch/YouTube triggers

### Settings
Allows you to adjust various SAMMI settings. 

#### General

{% include image.html w="50" src="settings_general.png" alt="General settings tab" %}

- **Minimize to Tray**: When enabled, SAMMI Core will be minimized to the system tray rather than closing when the "X" button is clicked.
- **Remember window size and position**: When enabled, SAMMI will remember its window size and position between sessions (note that SAMMI cannot control monitor selection and will always open on the default monitor).
- **Auto restart SAMMI after crash**: When enabled, SAMMI will automatically relaunch itself in the event of a crash.
- **Automatically check for new updates**: When enabled, SAMMI will notify you of available updates upon launch, with an option to postpone reminders for a few days.
- **Opt out of Analytics and Data Collection**: Disables analytics and data collection. Find out more about what that entails in our [Privacy Policy](/privacy-policy)
<!-- - **Automatically send non-crash error logs**: When enabled, SAMMI will automatically report errors that would typically cause a crash. Instead, you will receive a yellow alert and can continue using SAMMI normally. This experimental feature is currently used in some SAMMI scripts. -->
- **Automatically close variable wrapping**: When enabled, SAMMI will automatically insert `$/` when you type `/$` with no text to the right of the cursor.
- **Enable enhanced protection mode**: When enabled, SAMMI will be restricted from modifying or deleting files outside the main SAMMI directory and critical files within its own directory.
- **Enable alert logging**: When enabled, creates a log file containing all yellow alerts displayed. **Please make sure to not leave this on, as it has performance implications**.
- **Prevent full crash (BETA)**: When enabled, in case of a button crash, SAMMI will not close completely but stay open instead so you can debug what went wrong. Please only use this for debugging. This does not account for internal crashes.
- **Timeout Default**: The default milliseconds in any "Timeout After" fields applied on newly created commands. Default is 3000.
- **Disable Gamepads**: When enabled, disables background gamepad processing, which can help performance related issues in niche circumstances.

#### Connections

{% include image.html w="50" src="settings_connections.png" alt="Connections settings tab" %}

- SAMMI Bridge Connection settings
  - **Port** (read-only): The current port used by SAMMI to connect to the Bridge. Modifying port numbers is strongly discouraged, but it can be done by editing the `bridge_port` key in the `(SAMMI Directory)\settings.ini` file.
  - **Password**: The current password for connections from Bridge. If you change the password here, update it in Bridge as well.

- Deck App Connection Settings
  - **Port** (read-only): The current port used by SAMMI to connect any Deck Apps. Modifying port numbers is strongly discouraged, but it can be done by editing the `panel_port` key in the `(SAMMI Directory)\settings.ini` file.
  - **Password**: The current password for connections from any Deck Apps. If you change the password here, update it in your Deck App as well.

- SAMMI Local API Settings
  - **Open Local API Server**: Choose whether to open SAMMI's [Local API server]({{ "api/overview" | relative_url }}).
  - **Port** (read-only): The current port used by SAMMI for Local API, Webhooks, and SAMMI Voice. Modifying port numbers is strongly discouraged, but it can be done by editing the `api_server_port` key in the `(SAMMI Directory)\settings.ini` file.
  - **Password**: The current password for API calls, Webhooks, or SAMMI Voice connections to SAMMI. If you change the password here, update it in any custom creations using the Local API and SAMMI Voice as well.

#### Interface

{% include image.html w="50" src="settings_interface.png" alt="Interface settings tab" %}

- **FPS**: SAMMI Core functions like a game and runs at a specific FPS, affecting features like OBS Motion Commands. Set this to match your stream FPS.
- **Interface Size**: Adjust the scaling for non-standard resolutions.
- **Hide Help Boxes**: Hides explaination boxes and (?) indicator in various parts of SAMMI.

#### Language

{% include image.html w="50" src="settings_language.png" alt="Language settings tab" %}

- **Language**: Dropdown menu to select SAMMI's language.
- **Download Languages**: Download updated language files (automatically runs when updating SAMMI).

#### Updates

{% include image.html w="50" src="settings_updates.png" alt="Updates settings tab" %}

- **Check for Updates**: Checks for updates, allows you to update SAMMI, and view patch notes.
- **Open Updater**: Opens the SAMMI Updater component, allowing you to manage updates and downgrades for various other SAMMI components on your own terms.
- **View Patch Notes**: Allows you to view the patch notes for the latest version.

#### Other Settings

{% include image.html w="50" src="settings_other.png" alt="Other settings along bottom of window" %}

- **Reset SAMMI**: Clears all active buttons and variables and reloads all decks.
  - Clicking on this button 10 times will enable developer mode within SAMMI.
- **Hotkeys**: Shows all hotkeys and shortcuts present within SAMMI Core.

### OBS Connections
Allows you to set up and manage OBS Connections to SAMMI Core.
Learn more about setting up an OBS connection in our [Integrations-OBS]({{ "integrations/obs" | relative_url }}) section.

{% include image.html w="50" src="obs_connections.png" alt="OBS Connections" %}

### Twitch Connections
Allows you to connect SAMMI Core to your Twitch account(s) to listen for new events, send chat messages, and use other Twitch commands.\
Find out more about connecting Twitch in our [Integrations-Twitch]({{ "integrations/twitch" | relative_url }}) section.

{% include image.html w="75" src="twitch_connections.png" alt="Twitch Connections" %}

### YouTube Connection
Allows you to connect SAMMI Core to your YouTube account(s) to listen for new events, send chat messages, and use other YouTube commands.\
Find out more about YouTube connection in our [Integrations-Youtube]({{ "integrations/youtube" | relative_url }}) section.

{% include image.html w="50" src="youtube_connection.png" alt="YouTube Connection" %}

### Variable Viewer
In this menu, you can view all variables present within SAMMI.

The Variable Viewer can be accessed from the Dashboard's bottom banner menu, Deck Editor, or any button's Commands Editor. You can also press `Ctrl+Tab` key as a shortcut.

<!-- - Use search function to search for a specific button ID or variable
- Click on the arrow icon next to the button ID to view all current variables for the selected button ID
- Click on 'Sort by Type/Aphabetically' to sort the variable list
- Click on dollar sign icon to copy the variable value
- Click on path icon to copy the variable path
- Click on the trash bin icon to delete the variable
- Click on the home button to return to the main variable screen -->

Learn more about variables and the variable viewer in our [Commands-Variables](commands/variables#introduction) section.

### Active Buttons
All currently running buttons will be displayed in this window.\
You can choose to interrupt (clear) all, ongoing or queued buttons. 

{% include video.html w="75" src="ongoing-buttons.mp4" alt="Interrupting an active button" %}

### Deck

Decks are like customizable folders for your buttons, which you place freely around inside.

If you press **Add new Deck** button, a new empty deck will be added to SAMMI Core. Double click on any deck to open the `Deck Editor`.\
Every deck is active at all times (unless disabled) in SAMMI Core.

{% include alert.html text="It does not matter if a Deck App is currently connected to a different deck." type="info" %}

{% include image.html w="50" src="deck.png" alt="Deck with a button" %}

{% include alert.html text="If you want to back up your decks or share them with others; from the dashboard, you can right click a deck in the deck menu then click 'Copy Deck', which will copy it to your clipboard to be pasted in a message to a friend, or saved in a text file." type="info" %}     

In the deck editor you will see an empty canvas grid, where you can add and modify your buttons.
- Name - change the name of your deck
- Grid Snapping - if unchecked, you can freely resize and position your buttons not dependent on the grid
- X & Y - the size of your grid
- Adaptive Resizing - whether you want to also resize your buttons when you change the grid size
- Background Image - choose either a color or background image for your deck
- Undo & Redo - allows you to undo/redo any deck action

#### Disable a deck
You can disable a deck by either checking the `Disable` checkbox in SAMMI or by using [Deck: Change Status]({{ "commands/misc#deckchangestatus" | relative_url }}) command. This allows you to have only specific decks active during your stream.  
Buttons in disabled decks do not trigger and their variables are not accsesible.

{% include video.html w="75" src="disable_decks.mp4" alt="Disabling and enabling decks" %}


### Button
You can create a new button inside a deck by either right clicking on your empty canvas and selecting **Create Button** or by just simply double clicking on any empty space. You can change its appearance, move it around, resize it etc. 

{% include video.html w="75" src="create-button.mp4" alt="Create a new button" %}

There are several keyboard shortcuts you can use:

| Shortcut | Function |
| ----- | ----- |
| Ctrl+C | Copies a selected button.|
| Ctrl+V | Pastes a copied button in the selected empty slot.|
| Delete | Deletes a selected button.|
| Ctrl+Z | Undoes the last action.|
| Ctrl+Y<br/>Ctrl+Shift+Z | Redoes a previous undone action.|
| Ctrl+S | Saves the deck and closes the Deck view.|
{:class='table table-secondary w-auto table-responsive table-hover'}

{% include alert.html text="Use Export JSON (by right clicking on a button) and Import from JSON (by right clicking on your empty canvas) to easily share your buttons with others!" type="info" %}  

#### Edit Appearance
You can right click on a button or press `SHIFT + double click` to edit its appearance.
Edit your button text, color, image, transparency and border size.\
All button images will be automatically resized and copied to `SAMMI/image` folder.\

{% include image.html w="50" src="appearance.png" alt="Button Appearance" %}

#### Edit Settings
You can right on a button or press `CTRL + double click` to edit settings.

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
- **Press type** 
   - Normal Press - single button press
   - Drag Press - the button will trigger if dragged over. You can add either a single or multiple drag press (activates if it's dragged over again). Useful for creating your own volume buttons! 

</td>
</tr>  
</table>  

<div markdown="1">

#### Edit Triggers
You can right click on a button or press `CTRL + double click` to add a trigger.
Add various triggers to your button to get automatically executed when a specific event happens. For example, you can trigger your button every time you get a new follower or someone types `!hello` in your chat.  

Learn more about specific triggers in our [**Triggers**]({{ "triggers/introduction" | relative_url }}) section.

#### Edit Commands
When you right click-Edit commands or double click on your button and press **+**, you can start adding commands to execute when the button is pressed.  

Button commands have their own specific rules that you need to follow, read more about them in our [Commands-Introduction]({{ "commands/introduction" | relative_url }})  section. 
   
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

#### Export Button JSON
Exports a button by copying its contents to your clipboard. 

{% include video.html w="75" src="export-json.mp4" alt="Exporting a button" %}

#### Group ID
Displays Group ID (if any exists), click on it to copy it to your clipboard

#### Button ID
Displays button ID, click on it to copy it to your clipboard

#### Import Button JSON
You can import a button by right clicking anywhere on an empty space in your deck and selecting Import from JSON.

{% include video.html w="75" src="import-json.mp4" alt="Importing a button" %}

</div>
