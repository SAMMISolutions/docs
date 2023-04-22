---
layout: default
title: Patch Notes
permalink: /patch-notes
menu: About
num: 1
type: fullpage
---
#### SAMMI 2023.1.1

New Features:
- New Command: Source Toggle Visibility [Sebas]
- New Command: Filter Toggle Visibility [Sebas]
- New Command: Discord: Send Message [Chrizzz]
- New Command: File: Folder Exists [Chrizzz]
- 3 new global variables:
  - api_port (int) - (only when the API server is enabled) [Chrizzz]
  - api_pw_enabled - (bool) - (only when the API server is enabled) [Chrizzz]
  - main_directory_slash - (string) - (same as global.main_directory but with forward slashes) [Chrizzz]
- Updated Translation:
  - Italian [AlfaTelevision]

Improvements:
- Moved the Twitch commands above the YouTube commands in the command list / search [Chrizzz]
- Moved the Twitch: Send Chat Message command to the top of the Twitch commands [Chrizzz]
- SAMMI now checks for any empty Variable/Array/Object/Buffer name boxes in your commands and does not allow you to save the button if these values are mandatory [Christina]
- Stringify Object command now stringifies your whole button if you leave the Object Name box empty or set it to 'local' for the current button, or put in the button ID you want to stringify. This allows you to save all the button variables with a single command. [Christina]

UI Changes:
- SAMMI can now remember its last window position and size between restarts. You can enable the beta feature in the Settings. (It does not remember which monitor you run SAMMI on as that's something Windows needs to do) [Christina (majority) + Silverlink]
- If you hover over a command name in a command box within the Edit Commands window, it will now show its full name. While hovering, you can also press F1 to automatically open documentation for the selected command. [Christina] 

Bug Fixes:
- Fixed a bug in Twitch: Modify Channel Information where using special characters like ? in the title would make the command fail [Chrizzz]
- The following commands no longer save their responses into an empty named variable if the optional Save Variable As box name is not filled out: Send OBS Request, Twitch: API Call, Create Clip, HTTP Request, HTTP Upload File. [Christina]
- OBSWS5 related bug fixes, such as when source filter is removed or source name is changed in OBS [Christina]
- Fixed a crash that would sometimes happen when pressing Check for Updates button [Christina]
- Fixed alert when a Twitch command failed [Sebas]
- Fixed broken alerts when a value was missing [Sebas]
- Fixed `s` token in Date/Time commands [Sebas]
- Fixed a bug that would corrupt deck files [Sebas]
- Fixed a memory leak that happened in some cases when using OBS Request command [Christina] 
- Fixed Twitch: API Call command not saving the response in the correct button in some cases [Christina] 
- Fixed Bridge not correctly mimicking Twitch payload when testing Twitch triggers. It now sends channel and from_channel_id as a string, name_color without #, user_id as a string and first_time as "1" or "0". [Christina]

Known Bugs:
Having special characters in SAMMI folder path (such as "ö") may cause some features not correctly working

#### SAMMI 2023.1.0

New Features:
- Added new Twitch API commands (some of them will need you to relink your Twitch Account), they will automatically use your default chat account if the channel box name is left empty:
	- Twitch: Add Moderator - Adds a new moderator to the channel [Chrizzz]
	- Twitch: Add VIP - Adds a new VIP to the channel [Chrizzz]
	- Twitch: Ban User - Bans a user from the channel [Chrizzz]
	- Twitch: Cancel Raid - Cancels the current raid [Chrizzz]
	- Twitch: Get Banned Users - Get a list of the last 100 banned users from a channel [Chrizzz]
	- Twitch: Get Channel Point Rewards - Get a list of the existing channel point rewards of a channel [Chrizzz]
	- Twitch: Get Chat Settings - Gets the current chat settings of a channel, for example Emote Mode, Subscriber Mode, Follower Mode, ... [Chrizzz]
	- Twitch: Get Emotes - Gets the custom emotes from a specific channel [Chrizzz]
	- Twitch: Get Latest Followers - Get a list of the last 100 followers from a channel [Chrizzz]
	- Twitch: Get Mods - Get a list of the mods for a channel [Chrizzz]
	- Twitch: Get User Color - Get the hexcolor code for a specific user color [Chrizzz]
	- Twitch: Get VIPs - Get a list of the VIPs of a channel [Chrizzz]
	- Twitch: Modify Channel Information - Updates the channel info for a channel, for example the stream title, tags, game, ... [Chrizzz]
	- Twitch: Remove Moderator - Removes a moderator from the channel [Chrizzz]
	- Twitch: Remove VIP - Removes a VIP from the channel [Chrizzz]
	- Twitch: Set Emote Mode - Enables the emote only mode for a channel [Chrizzz]
	- Twitch: Set Follower Mode - Enables the follower only mode for a channel [Chrizzz]
	- Twitch: Set Slow Mode - Enables the slow mode for a channel [Chrizzz]
	- Twitch: Set Subscriber Mode - Enables the subscriber only mode for a channel [Chrizzz]
	- Twitch: Set User Color - Changes the color of the user in chat [Chrizzz]
	- Twitch: Shoutout - Does a shoutout to a specific user, currently in beta on Twitch, so changes might be made in the future. Also works with /shoutout in the chat [Chrizzz]
	- Twitch: Start Raid - Starts a raid [Chrizzz]
	- Twitch: Timeout User - Timeouts a user for a specific time [Chrizzz]
	- Twitch: Unban User - Unbans / Untimeouts a user [Chrizzz]
- The following Twitch Chat slash commands are now automatically converted to use the new Twitch API commands instead [Christina]: 
	- /announce, /w, /timeout, /untimeout, /vip, /unvip, /ban, /unban, /mod, /unmod, /slow, /slowoff, /followers, /followersoff, /subscribers, /subscribersoff, /emoteonly, /emoteonlyoff, /raid, /unraid, /clear.
	- You don't have to change your existing Twitch Chat commands that use them inside SAMMI, as they will still work even after Twitch officially deprecates them. If you're using any other slash commands in your Twitch Chat commands NOT listed above, you need to migrate them to use the new Twitch API commands before February 18, 2023. 
- Added a new command Reinitialize Button Variables, which works the same as right clicking on the button - Edit Init Variables and pressing Reinitialize button. [Christina]

Improvements:
- Added 3 new Twitch scopes (Manage Raids, Manage Bans and Manage Shoutouts) [Chrizzz]
- Twitch: Send Chat Message will now automatically split messages that are longer than 500 characters into multiple messages (if possible it will split it on a space character after 480 characters) [Chrizzz]
- Modified the following commands:
	- Twitch: API Call - Now automatically uses the default chat account if the channel box is left empty [Chrizzz]
	- Twitch: Create API Header - Now automatically uses the default chat account if the channel box is left empty [Chrizzz] 
	- Twitch: Get Chatters - Now automatically uses the default chat account if the channel box is left empty and also works for non linked channels [Chrizzz] 
	- Twitch: Run Ad (Commercial) - Now automatically uses the default chat account if the channel box is left empty [Chrizzz]
	- Twitch: Set Shield mode - Now automatically uses the default chat account if the channel box is left empty [Chrizzz]
- Added automatic wrapping to Patch Notes Text [Christina]
- OBS Websocket 5 is now default connection in the OBS Connection dropdown menu [Christina]
- You will get an alert now when trying to execute a button from Edit Commands Window in a disabled deck [Christina] 
- You will get an alert now when trying to send a YouTube message that exceeds the maximum length of 200 characters [Christina] 
- Updated languages:
	- Dutch [Marble127]
	- German [Chrizzz]

UI Changes:
- Scope Window has now 3 columns instead of 2 [Chrizzz]

Removed Features:

Bug Fixes:
- Fixed a bug where the Twitch: Send Whisper command would not work correctly [Chrizzz]
- Fixed a bug where the File: Read command would stop reading a file after encountering an empty line [Chrizzz]
- Twitch Shoutout trigger now correctly pulls the user picture URL [Christina]
- Fixed button pasting off the grid [Christina]
- Fixed a crash when using CTRL+V to paste a button without clicking anywhere in the deck first [Christina]
- Fixed more OBS Websocket 5 related crashes and bugs, such as when a scene item is removed [Christina]
- Fixed a crash and possible button corruption that happened when Save/Run button was pressed while the mouse pointer was inside the command delay box [Christina]
- Fixed incorrect Twitch keyword in Date/Time commands [Sebas]
- Fixed a crash when you tried to copy a variable with null value from the variable viewer [Christina]


#### SAMMI 2022.5.4

New Features:
- Added new command: "Twitch: Run Ad (Commercial)" - lets you run an ad with a length of your choice, the response object provides info about the actual length and cooldown [Chrizzz]
- Added new command: "Twitch: Create API Header" - simple command to create a header for an Twitch API Call [Chrizzz]
- Added new command: "Twitch: Create API Call" - easy command that lets you create Twitch API calls even easier [Chrizzz]
- Added new command: "Twitch: Toogle Shieldmode" - easy command to enable / disable shield mode [Chrizzz]
- Reworked the command: "Twitch: Get Chatters" - Depracated the old command, the new command now uses the Twitch API and has a different output format (the old command will still work the same way if you have it in your decks) [Chrizzz]
- Changed the username / channelname box in all Twitch commands. You can now select your account names out of the accounts linked in SAMMI (manual inputs are still possible) [Chrizzz]
- Added custom Comment command colors, you can use a color picker now to select the Comment box color [Christina]
- Added new options to YouTube Get Live Stats command [Christina]
   - Brodcast ID = your current broadcast ID
   - Live Chat URL = your current live chat URL (so you can use it as OBS Browser Source)

Improvements:
- String: Trim default height has been adjusted. [Sebas]
- Reworked "Twitch: Send Announcement" command (now works with different announcement colors) [Chrizzz]
- Reworked "Twitch: Send Whisper" now uses the new promises in the source code [Chrizzz]
- Improved Updater to have fewer 'Hash provided for file X is wrong' errors when updating [Christina]
- Updated languages:
    - French [MisterK]
    - Spanish [Sebas]
- Updated English Template [Sebas]
- Added new scope for shieldmode [Chrizzz]

UI Changes:

Removed Features:

Bug Fixes:
- Fixed the message box warning if SAMMI is in a program files or system location [Chrizzz]
- Fixed more OBSws 5 related bugs [Christina]
- OBSWS 5 should now rarely crash your SAMMI anymore, instead you will get a yellow notification message 
  that there was an error and SAMMI will continue running [Christina]
    - This will automatically submit an error log to SAMMI developers, containing the error and the OBS packet that crashed SAMMI
    - If you wish to opt out from automatic error log submissions, you can do so in Settings 
- Fixed HTTP Upload command (developer mode only) no longer working in 2022.5.3 and crashing SAMMI [Christina]
- Fixed extension command colors alternating when using custom colors if two or more commands were placed right after each another [Christina]
- Fixed SAMMI sometimes not opening and just hanging in the system tray after updating [Christina]
- Fixed an occasional crash when editing properties of a source in OBS [Sebas]
- Fixed an occasional crash when changing the name of a source in OBS [Sebas]
- Fixed variable viewer copying Undefined instead of undefined to the clipboard [Sebas]
- Fixed Unix Timestamp returning randomly numbers with a decimal [Sebas]
- Fixed Date/Time changing 12hs to 00hs when using 0-23 or 0-24 hours [Sebas]
- Fixed Date/Time timestamps that were 1 day behind when used as outputFormat [Sebas]
- Fixed Date/Time Unix Timestamp returning UTC and Local in different commands (now it always returns UTC) [Sebas]
- Fixed Date/Time commands for DLS (aka Summer Time) [Sebas]
- Fixed wrong requestType on SetSceneItemIndex template [Sebas]

Known Bugs:

#### SAMMI 2022.5.3:

New Features:
- Added YouTube Ad Break command [Christina]
  - allows you to insert a cuepoint into a live broadcast which might trigger an ad break
- Added Username to Twitch Chat and Twitch Channel Points triggers [Christina]
  - You can now trigger a button only when a specified user sends a chat message or redeems a channel point reward
  - Leave blank or * to accept all users
  - Must be an exact match, but is case insensitive
  - Does not accept partial names with wildcards, such as w* for any names beginning with w
- New Language: Dutch [Marble127]

Improvements:
- Added more characters for the Nunito font to SAMMI, including Cyrillic. [Silverlink]
- Added Triggering Button ID to "Trigger Pull Data" when triggering a button from another button. [Silverlink]
- Added Extra information when linking twitch account depending on what button you have pressed. [Silverlink]
  - SAMMI will now save if you have pressed Streamer, Bot or Custom scopes button.
- Keyboard keys detection has been reworked so now it correctly assigns special symbols in Keyboard commands and Hoykey Trigger. If you previously used any special characters (comma, quotes, brackets, etc.) in one of the mentioned commands/trigger, they will have to be readded after updating. [Sebas]
  - Special symbols are not shown in the dropdown until they are used the first time, but they still work if you press the key in your keyboard.
  - These keys shouldn't be used if you plan to share your button, as they can change in a different keyboard.
 
UI Changes:
- Re-enabled Bot scopes buttons for when linking your twitch account(s)
  - For now they have the same scopes as streamer scopes (This will be changed in the future)

Removed Features:

Bug Fixes:
- Buffer: Hash SHA1 command now functions properly [Christina]
- Send OBS request now parses true/false correctly [Roadie]
- Improper usage of buffer commands no longer causes SAMMI to crash [Christina]
  - instead you will get a yellow alert (i.e. "Buffer does not exist", "Trying to read outside the buffer", etc.)

Known Bugs:
- DST (aka Summer Time) is not taken into account in Date/Time. A workaround is to substract 1 until it's fixed.


#### SAMMI 2022.5.2 

New Features:

Improvements:
- Added alerts in Object to INI command when it fails. [Sebas]
- The settings.ini file is now protected and can't be edited with commands to avoid malicious commands in shared buttons/decks. [Sebas]
- Improved how the erros are detected whenever your decks in SAMMI are loaded [Christina]
  - If SAMMI detects your deck file has been corrupted, it will now create a new 'decks_data_corrupted.json' file to prevent it
    from being overridden, and allows you to manually repair it or share it with our dev team, while continuing to work in SAMMI. 
 
UI Changes:

Removed Features:

Bug Fixes:
- Fixed a crash when using INI to Object in an empty INI file. [Sebas]
- Fixed a bug that won't delete keys and sections when using Object to INI. [Sebas]
- General WS5 stability [Roadie]
- Fixed the color for the "Save Variable As" box in the "CSV: Get Size Command" [Chrizzz]
- Fixed a bug where disabling Enhanced Protection Mode in Settings would not stick [Christina]
- Fixed a crash when selecting non existing image for deck background [Christina]
- Fixed a crash when a custom Bridge code supplies an incorrect extension type when communicating with SAMMI [Christina]
- Fixed a crash when a local API request tries to access a variable in a non existing object or array [Christina]

Known Bugs:
- DST (aka Summer Time) is not taken into account in Date/Time. A workaround is to substract 1 until it's fixed.
- Some Twitch commands are using Bot Scopes instead of Streamer Scopes, so we've disabled Bot Scopes temporarily.
  - Meanwhile, please revoke your Bot token and use Streamer Scopes for all accounts.


#### SAMMI 2022.5.1 

New Features:
- When creating an extension command from Bridge, extension boxes can now be also decks, passwords and other types. [Christina]
- Added the "sqrt" operation to commands like Set Local Variable to get the square root of a number [wolbee]

Improvements:
- When creating an extension command from Bridge, you can now choose whether you want it to send its data to Bridge (which is how it normally works) 
or send it as an extension trigger within SAMMI instead (without going through Bridge) when the user uses the Extension command.  [Christina]
  - Extremely helpful if you have one central button acting as a function and want to provide your users with a friendly interface to trigger it from within SAMMI.   
  - Works the same as Send Extension Triggers, except you can use custom boxes.
- When checking for updates, you will no longer get a yellow alert that your Bridge file doesn't match its cloud counterpart, 
as this is expected as soon as any extensions are installed. [Christina]
 
UI Changes:
- "Search" label is not shown anymore in Hotkey Trigger dropdown. [Sebas]
- Send OBS Request command now has a button to open the OBS websocket docs page [wolbee]
  - it works off the protocol for the OBS Connection specified in the command.
  - if the OBS Connection box contains a variable, it will default to ws5 docs.

Removed Features:
- Removed some more unnecessary alerts for regular non error disconnections for Bridge, SAMMI Deck etc. [Christina]
- Removed a check for email scope when a Twitch: Get User Info command is run. [Silverlink]

Bug Fixes:
- Fixed a crash when you pressed Add New Deck menu button [Christina]
- Fixed a crash that sometimes happened on save/run button [Christina]
- Fixed a crash that sometimes happened when saving a deck while the button was already running [Christina]
- Fixed a crash for File Read Line command when a variable was used inside the Line box [Christina]
- Fixed runtime errors. It will still crash, but will display a proper error message now [Christina]
- Fixed a bug where the wrong user ID was being pulled for Twitch Chat message if the message was a reply to another message [Christina]
- Fixed a bug when Pubsub would not connect at all for any other accounts if the first account in the Twitch Connections list was listening to 0 topics [Christina]
- Fixed a bug where some Twitch commands crashed when used with an account linked as a bot or without the required scopes [Christina]
- Fixed a crash that happens when the parent object/array is deleted while using a wait until variable exists/is command [Christina]
- Improved internal WS5 stability [Roadie]
- Fixed a bug that sometimes would incorrectly assign timezones in Date/Time commands and make some commands to crash [Sebas]
- Fixed a visual bug that will shown incorrect hotkeys in Hotkey Triggers [Sebas]
- Fixed a bug where using sin/cos/tan/log10 on an array would overwrite the array [wolbee]

Known Bugs:
- DST (aka Summer Time) is not taken into account in Date/Time. A workaround is to substract 1 until we fix it.
- Some Twitch commands are using Bot Scopes instead of Streamer Scopes, so we've disabled Bot Scopes temporarily.
  - Meanwhile, please revoke your Bot token and use Streamer Scopes for all accounts.



#### SAMMI 2022.5.0

New Features:
- Command: Deck: Change Status - allows you to enable, disable or toggle a deck status [Christina]
- Command: Deck: Get Status - allows you to get the current status of a deck (enabled/disabled) [Christina]
- Command: Twitch: Delete Chat Message - allows you to delete a chat messages by its ID (retrieved from Trigger Pull Data command) [Christina]
- Command: Twitch: Edit All Rewards - allows you to enable/disable or pause/unpause all channel point rewards at once [Christina]
- Command: HTTP Upload File (developer only due to its complexity) - allows you to upload a file to any server that requries formData object in the body (for example Imgur) [Christina]
- Command: Twitch: Send Whisper - Allows to send a whisper over the Twitch API [Chrizzz]
- Command: TXT: Append Text - Append text to a simple TXT file [Chrizzz]
- Command: File: Read Line - Reads a specific line from a file of your choices [Chrizzz]
- Command: File: Random Line - Reads a random line from a file of your choices (can also save the line number) [Chrizzz]
- Command: File: Read all - Reads all lines from a file of your choices (can be saved either as array or string) [Chrizzz]
- Command: OBS Event Pull - Similiar to Trigger Pull but for WS5 Events [Chrizzz]
- Command: Array: Get Value - Same as Array: Pull but without removing the item [Chrizzz]
- Command: Get Chatters - Returns an object with your chatters username split in categories (viewer, mod, vip, etc) [Sebas]
- Command: String Trim - Deletes spaces at the start and end of a string and extra characters [Sebas]
- Added global variables: SAMMI Core version, SAMMI Bridge Version, SAMMI Deck Version, Array with OBS connection names [Chrizzz]
- Added Options for Trigger Pull: Extension Triggers (Trigger Name, Trigger Type) [Chrizzz]
- Added Shortcuts in the Button Menu: CTRL + S => Save Button, CTRL + R => Run Button, CTRL + N / CTRL + Enter => Add a new Line at the bottom
- Added Twitch Moderation Trigger: Low Trust User (part of moderation topics) - triggers for any new messages from low trust users, useful for immediately banning them [Christina]
- Added Twitch Trigger: Delete Chat Message - trigger for any delete chat message actions [Christina]
- Added Twitch Trigger: Shoutout (you must listen to the new topic in your Twitch Connections tab) - triggers for new Twitch /shoutout [username] chat command [Christina]
- Bridge: Ping Bridge - you can now send a ping to your Bridge from SAMMI, it will respond with the current browser it's running in and you will see a popup in your Bridge as well (only works with the newest Bridge) [Christina]
- New Language: Italian [Bucefalo]
- New local API and webhooks are available in SAMMI (major rework of the early access webhook feature) [Christina]
  - you can now communicate with SAMMI via HTTP requests and command line using CURL 
  - to enable the API server, select open API server in SAMMI Settings and optionally set a password
  - includes /api endpoint for GET and POST requests (similar to Bridge ones), /webhook endpoint for sending webhook triggers to SAMMI
  - added new Webhook button trigger
  - please consult the API Reference on SAMMI Website

Improvements:
- Lots of internal source code improvements for better readability, efficiency and hopefully less bugs [Dev team]
- If downloading new languages fails, you are now prompted to open a direct download link instead and manually replace them [Christina]
- You can now pull message ID for Twitch Chat messages (required for deleting them) [Christina]
- Twitch Reward commands now display Reward Names when saved instead of their IDs (they still only accept IDs, this does not change) [Christina]
- Completely reworked how enabling/disabling decks works, it should be faster, more reliable and less bug-prone now [Christina]
- Check if SAMMI is located in a program files locations and output a warning [Chrizzz]
- Changed Command Names (INI: ..., CSV: ..., TXT: ..., File: ..., Buffer: ...) also renamed CSV: Delete to CSV: Unload [Chrizzz]
- Reworked the file path for 22 file commands (now works with both, the relative path and the full path, also adds the file type automatically) [Chrizzz]
- Added "all" as default option to "Delete Variable" (deletes all local variables in the button) and "Trigger Pull" (Grabs all infos and saves them into an object), this was also possible by leaving the box empty but only a few people used it [Chrizzz]
- Send OBS Requests now has a dropdown with templates for all OBSws5 requests [Sebas, with special thanks to Landie]
- Updated translations [Sebas and translators]
- Added Crash Datetime to the crashes [Sebas]
- Reworked the search function [Chrizzz]:
  - Now works with substrings => "INI" Number would find "INI: Save Number" and "INI: Load Number")
  - LEFT / ESC => Previous Layer
  - RIGHT / TAB / ENTER => Next Layer or if the search was used, it takes the command at pos 0 and uses it
  - UP / DOWN to scroll up & down 
- Reworked INI: Save / Load Text and INI: INI to Object / Object to work with the same replacements [Chrizzz]
- Added Copy ID to Deck menu when you right click (useful for extension makers using the new Deck commands)
- Changed how users get their Twitch Auth Tokens. We now have 2 default flavors called Streamer and Bot. Streamer has almost all scopes that are available except the scopes we don't deem necessary like Stream Key. We don't need that! Bot just has the minimum requirements to listen to certain events and do moderator related stuff. There is also advanced scopes available in dev mode and that the classic scope selector but we don't advice users to use it. [Silverlink]
- Faces are now randomized in the about screen [Silverlink]
- Bridge and extensions [Christina]: 
  - Added [extension_version] you can use in your .sef files. In the near future, Bridge will contain an automatic Version Checker for all installed extensions, so we recommend adding this section to all your extensions now (this will not break installing the extensions in any old SAMMI versions).
  - Added OBSWS5 library to Bridge, you can now use `OBSWebSocket` variable to connect to OBSWS 4 or `OBSWebSocket5` variable to connect to OBSWS 5, both are supported 
  - Added 2 new functions to control deck enable/disable status: getDeckStatus(deckID) and changeDeckStatus(deckID, status = 0, 1, or 2 for toggle)
 
UI Changes:
- Reworked OBS Connections, Twitch Connections, YouTube Connection and Settings tab [Silverlink]

Removed Features:
- Unnecessary Connection alerts for OBS, Twitch, Bridge (there will be only error alerts now) [Christina]
- Deprecated Command: OBS Custom Packet - please do not use this command anymore as it will not properly function [Christina]

Bug Fixes:
- Fixed a bug where a second SAMMI would not automatically reconnect to Bridge/SAMMI Deck if you closed the first SAMMI currently connected to it without completely restarting the second SAMMI first [Christina]
- Fixed a memory leak when saving/running buttons [Christina]
- Fixed a bug where you could not select the last row in a new deck [Christina]
- Fixed a bug where SAMMI would not connect to Twitch when linking an account for the first time [Christina]
- Fixed a bug where SAMMI would not request channel points automatically when linking an affiliate account for the first time [Christina]
- Fixed SAMMI spamming Bridge with lots of unnecessary packets in some cases [Christina]
- Fixed a bug where SAMMI ignored the 'sammi_version' key when installing an extension and would not check for minimum version [Christina]
- Fixed Check Settings button (in Source/Filter change settings command) only showing the first 4 values [Christina]
- Fixed OBS Request command not correctly working with batches for OBSWS 5 [Christina]
- Fixed Channel Point Names not immediately refreshing inside commands after editing them inside SAMMI [Christina]
- Fixed a crash when trying to send an empty alert to SAMMI via Bridge [Christina]
- Fixed a crash when Bridge requests a variable in an undefined object [Christina]
- Fixed an occasional crash that happened on OBS connection [Christina]
- Fixed a crash that sometimes happened when OBS Source or Filter State changed [Christina]
- Fixed a Pubsub crash on anonymous resub gift events [Christina]
- Fixed a Pubsub crash on poll events as Twitch sometimes sends incorrect payload for poll choices [Christina]
- Fixed button crashes when some boxes were not filled out in OBS Motion commands. They now default to 0 instead. [Christina]
- Fixed a crash that would happen when minimizing and maximing SAMMI in quick succession [Christina]
- Fixed a crash when trying to reinstall a non-existing extension [Christina]
- Fixed a crash when trying to load non-supported button image [Christina]
- Fixed a bug when Modify Flag would not be cleared if the button was modified, deleted and recreated [Christina]
- Fixed a bug where some error alert messages coming from OBS were displaying weird characters [Christina]
- Fixed a crash when selecting an empty or non existing file for Bridge [Christina]
- Fixed OBSws5_request Change crop, change position and change scale no longer need all sections to be filled in. [Roadie]
- Add source: Will assume current scene if "scene" is left blank [Roadie]
- Fixed OBSws5_events memory leak [Roadie]
- Fixed an ocasional crash when adding new obs connections [Sebas]
- Fixed a crash when using Check Settings with a variable in the OBS box [Sebas]
- Fixed a crash when the Twitch Channel ID is empty [Sebas]
- Fixed a bug with the hour 12 AM in the Date/Time commands [Sebas]
- Fixed some commands that weren't able to save data inside an Array [Sebas]
- Fully refactored ws5_events to assist with bug fixing. [Roadie]
- Removed the creation of a file with new translations that would reduce fps [Sebas]
- Fixed a crash when using ALT+TAB while moving a deck [Chrizzz]
- Twitch Connections window now doesnt stick to your mouse pointer if you click no to the confirm close window [Roadie]

Known Bugs:
- In certain countries in DST (aka Summer Time), Date/Time commands can add your current timezone to your current time. A workaround is to substract your timezone until we fix it.

#### SAMMI 2022.4.4

New Features:
- Added JSON checker for when Send OBS Request Command is executed. [Christina]
  - If the JSON is not formatted correctly, you now get an alert, and the request is not sent.
- Added more variables to OBS global variables.
  - port and type [Christina]
  - ip [Chrizzz]
- Added client_language as a global variable [Chrizzz]

Improvements:
- Added 2 new Twitch Scopes (No commands yet, but can be done via HTTP Requests) [Silverlink]
  - Charity Scope
  - Goals Scope
- Optimized Bridge to send default parameters to SAMMI when executing SAMMI methods with empty parameters to prevent SAMMI crashing [Christina]
- When exporting or importing a deck, the lb_version key is now replaced with sammi_version key [Christina]
- SAMMI now automatically fetches data for all OBS connections. [Christinna]
  - the Fetch OBS Data checkbox has been removed from OBS Connections, which should fix several OBS-related crashes.

Removed Features:
- Removed 2 Twitch Scopes [Silverlink]
  - Twitch Stream Key (SAMMI does not need the Twitch Stream Key to operate so we removed this)
  - Edit Follows (This is deprecated by Twitch and does nothing anymore)

UI Changes:

Bug Fixes:
- AM and PM now work correctly in Date/Time commands [Sebas]
- MMM and MMMM tokens now work again [Sebas]
- Daylight Savings Time is now correctly calculated in Date/Time commands [Sebas]
- Fixed "Divide by Zero" crash when minimizing SAMMI window in some cases [Silverlink]
- Fixed "Can't create a surface with either a width or height with a value less than or equal to zero" error [Silverlink]
- Fixed Twitch connection not getting properly removed when token is alread expired [Christina]
- Fixed crashes when users try to access non existing structure in OBS Request response or save the response into non existing objects/arrays. [Christina]
  - It will now show yellow alert messages instead.
- Fixed OBS Set Scene Transition Settings command crash [Christina]
- Fixed several OBSws5 related bugs, including: [Roadie]
  - Source Delte crashes
  - Source Filter removed crashes
  - New scenes and sources not being added to Pull Source Value list, and crashing if the list was open when the scene was made
  - Opening the source dropdown menu after creating/moving sources
- Fixed a crash when Undo was used in some cases in OBS [Christina]
- Fixed a crash when user tried to insert or delete a value in global array from Bridge [Christina]
- Fixed duplicate messages for OBS Connected/Disconnected alerts [Christina]
- Fixed a crash where SAMMI would try to auto-connect to OBS when there were no OBS connections [Sebas]
- Fixed Send OBS Request command having the default wrong JSON payload in some cases [Christina]
- Fixed Send OBS Request command crash when OBS returns no data in its response due to incorrect user input [Christina]
- Fixed a crash when decks are being dragged around while alt tabbing at the same time [Christina]
- Fixed a crash when user attempts to open About Page without being connected to internet [Christina]
- Fixed a crash when trying to uninstall an extension without a bridge connected [Sebas]
- Fixed crashes when Twitch, OBS and YouTube json settings files are either empty or corrupted. [Christina]
  - It now creates default settings and properly alerts the user instead.
- Fixed a bug where, after deleting an OBS connection, the global variable would not be deleted [Christina]
- Fixed SAMMI displaying moderator as 'Unknown' in some Pubsub moderation alerts [Christina]
- Fixed an ocassional crash when saving a deck [Sebas]
- Fixed a crash when an extension sends incorrect data to trigger [Sebas]
- Fixed a crash when a button was incorrectly saved in previous version [Sebas]
- Fixed an About Window Tags bug [Silverlink]

#### SAMMI 2022.4.3

New Features:
- Added Reload Bridge button to the Bridge menu [Christina]
- Added a super secret early-access feature - our Patrons can request access [Christina]
- New Language: French [MisterK]

Improvements:
- Significantly improved how error logs are sent to us and processed - please fill out the comment describing what you were doing when SAMMI crashed as it really helps us narrow it down [Christina]
- Bridge Verify button label in the Update Window changed to Reinstall if Bridge versions match, since in this case it just downloads a clean version of Bridge and reinstalls all extensions [Christina]
- New translations added [Sebas + translators]

Removed Features:
- Twitch Connected/Disconnected Triggers [Christina]

UI Changes:
- Fixed YouTube Connections layout [Sebas]
- Remade many buttons and text layout to allow French translation [Sebas]

Bug Fixes:
- lots of ws5-related bugs have been fixed in this update [various]
  - SceneItemRemoved crash
  - SceneItemCreated crash
  - "obsws5_event line 71"
  - "obsws5_event line 355"
  - OBS Pull Source Value now works again for ws5 users
- Fixed SAMMI Core crashing when it's resized sometimes [Christina]
- Fixed a bug where the most recent Patch Notes wouldn't show [Christina]
- Fixed Twitch token revoke crash [Christina]
- Fixed Pubsub connection issues - it no longer freezes for users with higher ping and the connection is made asynchronously now instead [Christina]
  - pubsub_timeout in settings.ini can be deleted if you previously set it up
- Fixed YouTube Test Triggers for Chat in Bridge having is_member and is_verified pull values swapped [Christina]
- Fixed encrypted decks not saving enabled/disabled state [Christina]
  - if you're toggling this on an encrypted deck, it might slighly lag as it needs to decrypt and encrypt it again
- Fixed crash that sometimes occured on Edit Channel Points command (untested) [Christina]
- Fixed a crash after an OBS Connection was renamed and not found in some cases (untested) [Christina]
- Fixed a crash when version window was closed while an update was downloading [Christina]
- Fixed an occasional crash when SAMMI fails to connect to OBS [Christina]
- Fixed a bug where Source Toggle Mute would cause ws5 connection to drop [wolbee]
- Fixed an occasional crash when opening a menu [Sebas]
- Fixed an occasional crash when opening a dropdown [Sebas]
- Fixed a crash when updating from LB2CE to SAMMI [Sebas]
- Fixed a crash when opening the About window and the language package was not updated [Sebas]
- Fixed incorrect value when using X token as an input format in Date/Time Math [Sebas]
- You can now submit your extensions at sammi.solutions/extensions again [Christina]
- Fixed OBSWS connection freeze [Christina]
- Fixed a high ping crash for Pubsub [Christina] 

Known Bugs:
- For Date/Time commands, using the X token for the input format doesn't take into account Daylight Savings Time

#### SAMMI 2022.4.2

Improvements:
- Made it so that Patrons are only loaded once at the start of SAMMI instead each time you opened the about page [Silverlink]
- Made the requests section of HTTP Request have a dropdown for the most common types of request [wolbee]
  - Other request types can be manually written in, if needed, and all previous commands should still work without any changes needed.
- Change default timeout to 1000 in wait commands [Sebas]

UI Changes:
- Fixed the weird background on the copy / delete buttons in the variable viewer [Silverlink]
- Changed SAMMI Core font in about page to Nunito [Silverlink]
- Gave some buttons some more room for text [Sebas]
- Added translations to the about window [Sebas + translators]

Bug Fixes:
- Fixed Right-Click -> Delete button not working [Sebas]
- Rewrote obsws5_event to address a multitude of crashes [Roadie]
- Fixed visibility toggle crash on data_behavior [Roadie]
- Fixed crash with missing requestId on ws5 [Roadie]
- Fixed the whole "patch notes not deleting, verify update loop" thing [Roadie]
- Fixed a few instances of "missing text" [Sebas + translators]
- Fixed a few commands sharing an error message [Sebas]
- Stopped you being able to name a button Global [wolbee]
- Fixed a crash on start when SAMMI is scaled [Sebas]
- Fixed a bug with menus [Sebas]
- Fixed a crash when command is incorrectly saved [Sebas]
- Fixed a crash on start when SAMMI was already running [Sebas]
- Fixed a visual bug that didn't update copy and delete button when running a button from edit button window [Sebas]

#### SAMMI 2022.4.1

Important note for users who had Pubsub connection issues:
- This update includes a temporary workaround until a "more elegant solution" can be found. If you had Pubsub connection issues, please make yourself known in the Discord, and one of the dev team will instruct you on how to fix it.

New Features
- About page, featuring information on the developers, Patrons, and more. [Dev team]

Improvements:
- Error logs now contain an identifier to help distinguish between repeated reports from the same person or from different people. [Christinna]
  - No personally identifiable information is sent in the report, so reports cannot be linked back to a specific user.
- Shortened the version matching alert. [Sebas]
- Updates to language files. [Translators]

UI Changes:
- Changed SAMMI Background color to #122c52 matching the rest. [Silverlink]
- Changed Bridge Icon. [Christinna]
- The copy buttons in the Variable Viewer now share a background. [wolbee]

Bug Fixes:
- Fixed a double pop-up when updating languages for SAMMI Core. [Christinna]
- Fixed a bug that reloaded decks from within the edit button screen. [Christinna]
- Array Filter and CSV Math should no longer crash when used with strings. [Sebas]
- Revoking your Twitch token should no longer crash. [Roadie]
- Fixed a crash when creating a reward after duping another with Reward ID swap enabled. [Sebas]
- Checking the version should no longer freeze clicking. [Christinna]
- Fixed the Verify update loop. [Christinna]
- Fixed a bug when trying to install an extension when no files are found. [Christinna]
- Fixed a bug when trying to load a backup if no file was selected. [Christinna]
- Fixed a Pubsub crash on moderator action trigger. [Christinna]
- Fixed a crash on InputVolumeChange OBS trigger. [Roadie]
- Fixed a bug when saving decks. [Christinna]
- Fixed a crash on Source Filter name changes. [Roadie]
- Fixed a bug where the SourceID Menu wasn't working as intended. [Roadie and Sebas]
- Fixed a crash on Source Scale change. [Roadie]
- Fixed an bug when copying variables returned undefined. [Christinna]
- Fixed Ctrl + Z and Ctrl + Shift + Z not always working in deck view. [Christinna]
- Fixed Pubsub connection issue (see note at top). [Christinna]
- Fixed a crash when deck size was left blank. [Christinna]

Known Bugs: 
- Button menu option to 'Delete Button' doesn't work currently. Use the keyboard 'Delete' key instead.
- Extension commands for filter boxes do not correctly show source filters.



#### SAMMI 2022.4.0

###### New Features
- Added automatic update checker (you can disable it in the Settings menu), will remind you again in 2 days 
  if there's a new version and you clicked no the last time [Christina]
- Added case-insensitive checkbox in string commands: Replace, Replace All, Position and Count [Sebas]
- Added command to send Twitch Announcements (only default announcements for now, colours coming soon) [Silverlink]
- Added the following shortcuts to the Main Window: [Christina]
  - CTRL+N to create a new deck
  - CTRL+TAB to open/close variable window
- Added the following shortcuts to the Deck Editor Window: [Christina]
  - Double tap on an empty area to create a new button (triple tap to create a new button and enter the edit command screen immediately)
  - CTRL+TAB to open/close variable window
  - CTRL+C to copy a button
  - CTRL+V to paste a button
  - DELETE to delete a button
  - SHIFT+CTRL+Z or CTRL+Y to redo an action
  - CTRL+S to save and exit deck
- Added the following shortcuts to the Command Editor Window: [Christina]
  - CTRL+TAB to open/close variable window to the variables of the button that's currently being edited
- Added new features to the Command Editor Window: [Christina]
  - Save Button - quickly save a button (and the whole deck you're currently editing) without having to exit the command screen window
  - Run Button - quickly save and run a button without having to exit the command screen window
  - Save and Close - save and close a button you're currently editing
  - Cancel - cancel any changes made before pressing Save or Run Button and close a button
- Added CTRL+Left and CTRL+Right to move one word left or right in text boxes [Roadie]
- Added From Channel ID trigger pull value to Trigger Pull command for all Twitch Pubsub and Twitch Chat triggers. 
  This allows you to see which Twitch channel the trigger came from. [Christina]
- Added native Pubsub connection, Transmitter is not required anymore for Twitch connection [Christina]
- Added options to download extensions from 3 external sites (Official Repo, Christinna's Repo and StreamUP.tips) [Silverlink]
- Added the ability for SAMMI to reopen automatically after a crash [wolbee]
- Added the option to save the result of a String Digits Only command as a number instead of a string [wolbee]
- Added "Array Filter" Command - Lets you filter values in an array that fulfil some condition [Sebas]
- Added "Array Map" Command - Lets you make math with every value in the array [Sebas]
- Added "Concat Operator" - Lets you concatenate two values (strings or numbers) [Sebas]
- Added "CSV Column Exists" Command - Checks if a column exists. Returns -1 if it doesn't exist or the column number. [Sebas]
- Added "CSV Math" Command - Lets you find the sum, mean, max and min of a column or row. [Sebas]
- Added "Dev Mode Only" Commands - Set Global Variable, Custom Packet [Christina]
- Added "Object to Array" Command - Lets you convert an object into an array in two different ways: keys or values. [Sebas]
- Added "Date/Time Math" Command - Lets you add or subtract seconds/minutes/hours/days/months/years to a date/time in many different formats. [Sebas]
- Added "Date/Time Diff" Command - Lets you calculate the difference in seconds/minutes/hours/days/months/years between two dates/times in many different formats. [Sebas]
- Added "File: INI to Object" Command - Lets you save all the content of an INI file into an object of objects (each section is an object). [Sebas]
- Added "File: Object to INI" Command - Lets you save all the content of a properly formatted object into an INI file. [Sebas]
- Double clicking on an empty area in a deck will create a new button, triple clicking will create a new button and enter the edit command window [Christina]
- Added localization system to allow SAMMI Core translations [Sebas]
 - Fixed typos in English language [Cyanidesugar]
 - Spanish Translation [Sebas]
 - German Translation [Chrizzz]
- If SAMMI crashes, you can now automatically submit your error log to our developers and leave a comment as well (only available for non button errors) [Christina]
- Added ability for SAMMI to automatically close variable wrapping ("$/") when you open it (by typing "/$") [wolbee]
  - will only work if there is nothing to the right of the cursor, or if the next character is a space
- Can now copy the variable value in Variable Window [Christina]
- Added specific buttons for copying the Variable Value or Variable Path [Silverlink]
- Added a global premade variable deck_connected to check whether SAMMI Deck is connected [Christina]
- Added the following triggers: [Christina]
  - SAMMI Deck Connected - Triggers anytime SAMMI Deck connects 
  - SAMMI Deck Disconnected - Triggers anytime SAMMI Deck disconnects
  - Third Party Connected - Triggers anytime a third party app (i.e. not the official SAMMI Bridge or Deck) connects
  - Third Party Disconnected - Triggers anytime a third party app (i.e. not the official SAMMI Bridge or Deck) disconnects
- Added a check to reduce number of crashes due to email scope missing when doing a Twitch: Get User Info command [wolbee]
- Added Install all Extensions from folder option to Bridge menu - after selecting any file in the selected directory, 
  it will install all the files in the directory. You can decide whether you want to force install them all 
  (will replace the Brigde code + your deck if they're already installed, and ignore any requirements not met, such as minimum SAMMI version
  or Transmitter being connected) or whether you want to decide for each file [Christina]
- Added a super secret shadows setting - put shadows="0.000000" into your settings file to remove shadows in SAMMI [wolbee]
- Added new SAMMI Core icon [Silverlink]
- Added Swap Rewards ID checkbox in the Channel Points Window to swap the ids in all the commands if you dupe a reward [Sebas]

###### Improvements
- Optimized how SAMMI detects double clicking in the first place [Christina]
- Button Settings will no longer allow Queue and Overlap to be checked together. Functionally they conflict with each other [Roadie]
- Create Reward for Twitch now has an option to have the reward enabled or disabled upon creation [Roadie]
- Dropdown list icons to a right arrow, to indicate the open to the right [wolbee]
- Dropdown menu buttons icons to a down arrow, to make them more obvious [wolbee]
- Image paths textboxes to only show the image name. No more confusion when sharing decks with images [Silverlink]
- Left clicking on an empty area in a deck does not show a menu anymore, only when right clicked [Christina]
- Renamed Fetch OBS Data command to Send OBS Request command (serves both for fetching OBS data and sending custom packets to OBS) [Christina]
- Removed Set Global Variable and Custom Packet commands (Previously made buttons with these commands will still work) [Christina]
- "Get Date/Time" Command now lets you get the date/time in a lot of new formats (old commands will still work) [Sebas]
- Increased maximum character limit for extension trigger message text box to 500 characters [Christina]
- Button IDs inside Variable Window are now sorted alphabetically, Variable names can be sorted either by type or alphabetically [Christina]
- Premade variable transmitter_connected has been replaced by bridge_connected. 
  transmitter_connected still exists as a premade variable to maintain backwards compatibility, however it will not be displayed in the variable window anymore. 
  Going forward, we recommend using bridge_connected variable instead. [Christina]
- Modified some trigger names (backwards compatibility maintained, no need to change anything in your buttons) [Sebas + Christina]
  lioranboard Shutdown -> SAMMI Shutdown
  lioranboard Deck Reload -> SAMMI Deck Reload
  lioranboard Reset -> SAMMI Reset
  lioranboard Crash -> SAMMI Crash
  Transmitter/Streamdeck Connected -> SAMMI Bridge Connected
  Transmitter/Streamdeck Disconnected -> SAMMI Bridge Disconnected
  - Note: Streamdeck triggers never worked to begin with, they're separate triggers now in SAMMI
- You will receive a yellow notification message in SAMMI Core if any app (Bridge, Deck, Third Party) tried to connect to SAMMI but could not authenticate [Christina]
- Windows inside SAMMI (like Settings and Button Appearance) can now be moved by dragging anywhere on the top bar, not just the tab [wolbee]
- Transmitter has been revamped and changed to Bridge [Christina]
  - the old Transmitter will NOT work with SAMMI anymore, you must update to Bridge
  - the folder name has also changed from Transmitter to Bridge
  - For extension devs: 
    - old extensions are still fully backwards compatible with SAMMI
    - use .sef instead of .lb2 extension for any new SAMMI extensions
    - Twitch user data is no longer stored in LBVars global variable anymore, you must use SAMMI.getTwitchList() to retrieve information such as Twitch user token 
    - old functions LB.X() still work, however using SAMMI.X() instead is preferred now
    - for further info see https://github.com/SAMMISolutions/SAMMI-Bridge 
- Extension file extension .lb2 has been replaced with .sef (SAMMI Extension File), however SAMMI still accepts both .lb2 and .sef files when installing an extension [Christina]
- Shadows are now more consistent across the program [wolbee]
- Improved command alerts (yellow error messages) to show button id, command name and command position. [Sebas]
- Allow Stream Deck option was completely removed from Settings and is enabled by default now [Christina]
- Made by default that all scopes are selected when authorizing your Twitch account [Silverlink]
  - New Open Twitch Beta scopes are also added but are deselected by default, they may not function or not do anything yet. [Silverlink]

###### UI Changes

- Added a white selected area when clicked on a grid with no buttons in it [Christina]
- Lots of UI improvements for consistency and to allow translations [Sebas]

###### Bug Fixes
- Fixed a bug where single tapping on a button/deck, moving the mouse and single tapping again on another button/deck would open the button/deck 
  if done in quick succession. Now it only opens it if double clicked on the same button/deck. [Christina]
- Fixed a bug where pressing Run while leaving a Delay field empty caused a crash [wolbee]
- Fixed a bug where creating a new source caused an OBSws error alert [wolbee (with help from TheBurge, devin, and Roadie]
- Extension commands for scene and source boxes are now saving their values from the dropdown menu [Christina]
- CSV Set/Get Box commands now escape stringfied objects/arrays [Sebas]
- Extension files can now be both LF and CRLF [Christina]
- Adding required_extension key in your extension file with a stringified array correctly checks for installed extensions now [Christina]
- Fixed YouTube Subscriber event triggering multiple times in a row [Christina]
- Fixed YouTube showing -1 viewers when live in YouTube settings menu [Christina]
- Fixed Bridge generating broken tabs if Extension names have certain invalid characters in them

Known Bugs: 
- Extension commands for filter boxes do not correctly show source filters

#### LioranBoard 2 2022.3.2 CE

###### New Features
- Added the option to disable Enhanced Protection Mode, allowing LioranBoard to modify/delete any file. [Christina]

###### Improvements
- Removed the ability to see your Stream Deck password as plaintext if you disabled the Stream Deck. [Christina]

###### UI Changes
- Updates to the Update Viewer Window [wolbee]
  - Download button now shows if a component is missing
  - Buttons now show "Revert", and Column header shows "Previous", if Latest Version is not ticked
  - Changed status icons
	- green means version numbers match (may still need to Verify though)
	- yellow means update/revert available
	- red means missing

###### Bug Fixes:
- Fixed a bug where the Release Commands warning was cowering behind the Open Docs button. [wolbee]
- Fixed a bug where Revoke Token needed to be clicked twice in order to work. [Christina]

#### LioranBoard 2 2022.3.1 CE

###### Important Security Patch
- Disabled file saving/modification/deletion from folders outside of your main LB directory.
	- The LB Dev team discovered that previous versions of LioranBoard 2 allowed any files on your computer
	to be modified, even if they were outside of the main LB directory. This meant that previously, anyone
	could delete/modify your decks, or any important files on your PC, with a single command.

###### New Features
- Added new Trigger Pull Data value outcome_amount for predictions (returns the amount of outcomes) [Christina]
- Added two new Twitch Moderation Triggers: deny unban request, approve unban request [Christina]

###### Improvements
- Ctrl + Left/Right navigate properly in text boxes [Roadie]
- Updated the alert system to allow for multi-line alerts, including from the Alert Message command [wolbee]
- Delete Key now works when held [Roadie]
- Spelling fixes [Roadie, wolbee & cyanidesugar]
- New Transmitter V6.1 is available [Christina]:
	- Fixed non-existent usernames when testing Twitch triggers
	- If you input custom username in Twitch Chat Message test trigger, it will automatically retrieve user ID to match it
	- Added Twitch Poll, Prediction and Hype Train test triggers (thanks goes to Chrizzz for providing me with example Hype Train payloads)
	- Added YouTube test triggers
	- Changed favicon to our new CE butterfly [wolbee]
	- Note: Twitch test triggers will ONLY work if you're using this new Transmitter with LB version 2022.3.1 or higher
- Changed how YouTube retrieves access tokens, and patched a potential security issue to prevent any other programs from accessing it and potentially depleting the project quota [Christina]

###### UI Changes
- none

###### Bug Fixes
- Fixed high CPU usage bug [Roadie]
- Fixed new extension install bug when using Transmitter V6.X [Christina]
- Get Variable Type now returns "button" if given a button ID instead of a variable [Christina]
- Using Ctrl-Z in a delay box no longer crashes the Receiver [Roadie]
- Updater fixed to check latest and previous forks for most current and second most current release [Roadie]
- Fixed the size of the Wait Until Variable Is command [wolbee]
- Fixed Trigger Pull Data for polls incorrectly returning poll name for poll_id pull value instead of poll ID [Christina]
- Fixed LioranBoard crashing after receiving Twitch deny/approve unban request trigger [Christina]
- Fixed misbehaving text in the Init Variables window when Persistent Variables are off [wolbee]
- Fixed a bug where a button wouldn't get pasted if it went off the grid - you will now be prompted
whether you want LB to resize it and paste it anyway [Christina]

<hr>

#### LioranBoard 2 2022.3.0 CE

###### New Features
- Delete key works in text boxes [Roadie]
- Added option to select a secondary Twitch Client ID [Silverlink] - this is an optional setting for now, but will be required in the future, which will require you to relink Twitch accounts and re-duplicate channel points made with LioranBoard
- Transmitter updated to V6. You can keep using V5 if you do not use the new secondary Twitch Client ID [Christina]
- Added the option to reveal Transmitter in File Explorer [Christina]

###### Improvements
- Automatic Updating works again and is safe to use (only for version 2022.3.0 and up). Huge thanks goes to [Roadie]
- Changed Get HTTP Request to HTTP Request, since it supports other methods too [Christina]
- Changed version formatting to 2022.X.X [LB2 dev team]
- Twitch Scam Train renamed to Twitch Hype Train [Christina]
- Get Twitch Connection command now accepts empty box for Account login name, which will default to the main Twitch account if left empty [Christina]
- Confirmation message for copying multiple commands [wolbee]
- Cleaner Trigger Pull Data dropdown [Sebas]
- Cleaner and additional OBS Triggers [Sebas]
- Due to Twitch Prediction outcomes changing from 2 to 10, the following has changed [Christina]:
	The old Twitch: Create Prediction command was renamed to Twitch: Create Prediction 2 Outcomes (all your previously made commands will still work)
	Added new Twitch: Create Prediction command that accepts an array of outcomes (max 10)
	Get Latest Poll/Prediction command can now retrieve Prediction Outcome 1-10 ID
	Trigger Pull Data command can now retrieve Outcome 1-10 Info
- Made commands that have default JSON code in text boxes taller so the code can be seen [wolbee]

###### UI Changes
- Changed the LB2 icon [LB2 dev team]
- Added default channel to the Channel label in the Twitch Chat Message command, to show which channel the message will be sent to if the channel name is left empty [Christina]
- Text/Label modifications, including clearer descriptions, spelling checks etc. [Christina]
- Changed input box names to better reflect what should be put into them: [Christinna]
	Save Variable As => save the result into a new or existing variable
	Added ms, s, db etc. to relevant boxes 
- Added donation, Discord and documentation buttons [Christina & wolbee]
- Changed copy command icon to the regular copy icon (originally scissors) [Silverlink]
- Changed move command icon to something more recognisable [wolbee]

###### Bug Fixes
- Fixed a bug that stopped you from resizing the text box and changing extension box color when sending extension commands from Transmitter [Christina]
- Fixed a bug with overlappable, non-persistent, non-queuable buttons not working if triggered with the Trigger Button command. [Christina] 
- Fixed a bug where the Command Line command would not show under Windows commands [Christina]
- Fixed a bug that defaulted Fetch OBS Data and Custom Packet to OBSws5 syntax [wolbee]
- Fixed YouTube crash for Member renewal events [Christina]
- Fixed clipboard clearing on LioranBoard start up (only works for text, images still get cleared) [Christina]
- Fixed Get Variable Type command returning undefined for any button variables (which are all objects) [Christina]
- Fixed ini files not properly getting .ini appended when the file name is 3 letters long [Christina]
