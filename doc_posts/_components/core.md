---
layout: default
title: SAMMI Core
menu: Components
num: 1
type: fullpage
permalink: /core
---

SAMMI Core is the main SAMMI component. Open it by going to where your SAMMI installation is located, and open `SAMMI Core.exe`.

You can change all the settings, manage connections, manage your Decks, program new Buttons, and much more.

*This is where you will spend 90% of your time while using SAMMI.*

Each part of the SAMMI Core will be introduced from most relevant, to least relevant, to help guide where you should be searching if you are starting out SAMMI for the first time.

When you first open the program, you will be greeted with the...

### Dashboard

{% include image.html w="75" src="core_dashboard.png" alt="A screenshot of SAMMI Core's Dashboard (Also known as Home), which is the first screen you see upon opening the application from SAMMI Core.exe" %}

Also known as Home, the SAMMI Core "Dashboard" contains many menus that lead to various segments of this primary component.

### Deck Menu

{% include image.html w="75" src="core_deck_menu.png" alt="A screenshot of SAMMI Core's Deck Menu. There are decks present within the menu, as well as a big plus button at the end of it." %}

Allows you to manage your Decks. Visit the [Decks and Buttons](/decks-and-buttons/introduction) section to learn more.

{% include alert.html text="It is vital that you are familiar with Decks and Buttons, as they are crucial concepts to creating anything in the program." type="warning" %}

### Deck Management Menu

Allows you to manage your Decks located in your Deck Menu.

{% include alert.html text="This menu is considered legacy, as you can do all of these actions in the Deck Menu itself, including some that aren't present here." type="warning" %}     

- **Edit Deck** - Allows you to edit currently selected deck, same as double clicking on the deck
- **Add New Deck** - Adds a new empty Deck. You can also use <kbd>CTRL</kbd> + <kbd>N</kbd> from the Dashboard.
- **Delete Deck** - Delete the currently selected deck, cannot be undone
- **Move Left/Right** - Repositions the deck
- **Copy Deck** - Exports the entire deck to your clipboard in JSON format to store, or share with other users. Will prompt if you want to include images with it aswell.
- **Paste Deck** - Imports an entire Deck from your clipboard. Must be in JSON format.
- **Duplicate Deck** - Makes a clone of the Deck, and appends it to the end of the Deck Menu. Assigns a new ID upon duplication.

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
