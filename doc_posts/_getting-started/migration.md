---
layout: default
title: Migrating from LB1
menu: Getting Started
num: 5
permalink: /getting-started/migrating
type: fullpage
---

Migrating all buttons and extensions from LioranBoard 1 to SAMMI must be done **manually**.  
SAMMI is too different from LioranBoard 1 (especially when it comes to how variables are handled) and therefore it's not possible to create a migration tool.  


SAMMI is created in Game Maker Studio 2 and offers both x64 and x86 version.  


You can run LioranBoard 1 and SAMMI **at the same time** without any issues.  


##### Variables
LioranBoard 1's variables are all global, which means every button can create and access any variable.  

In SAMMI we have something called **global variables** (these work the same as regular variables in LioranBoard 1), **button variables** and **local variables**. We can also set our buttons to be **persistent** vs. **non persistent**, which means all button variables will be automatically cleared once the button is over.  

LioranBoard 1 automatically converts all undefined variables to `0`. In SAMMI you must **check for undefined variables** (you can do it with an if statement by leaving the value to compare it to completely empty) to prevent crashes. You should also make the use of [Button Init Variables]({{ "/commands/variables#initvariables" | relative_url }}) for this reason.  

Variables can now be **white** (for text and /$variables$/, originally marked with * in LioranBoard 1) or **yellow** boxes (for numbers and direct variables).

You can read more about variables in our [Commands-Variables]({{ "/commands/variables#introduction" | relative_url }}) section. 

##### Stacks -> Arrays 
Stacks have been deprecated and replaced with arrays. The functionality is very similar, however the structure of an array is a little bit different from a stack.  
There is no `bottom` when pulling a value from an array anymore. Use either `top` (= last item in the array) or `0` (= first item in the array, which is the original `bottom` in a stack).   

If you have stringified stacks saved in ini files from LioranBoard 1, you can easily convert them to arrays by using this automated [Stack to Array tool]({{ "/commands/array#convertstackssavedininifilesfromlbtoarraysinlb" | relative_url }}).

##### Objects
SAMMI can newly create and manipulate [objects](https://www.w3schools.com/js/js_objects.asp).

##### CSV Files
SAMMI can manipulate CSV files. 

##### HTTP Request
[Get HTTP Request]({{ "/commands/misc#gethttprequest" | relative_url }}) command replaces Web Request extension. You can call an API and receive its response directly in SAMMI now.\
As an example, the whole Spotify extension is now fully contained in SAMMI and does not require Bridge to run anymore.

##### More Twitch control
New native [Twitch triggers]({{ "/triggers/twitch" | relative_url }}) for f**ollowers, polls, predictions and hype train**.  

Added tremendous amount of [Twitch commands]({{ "/commands/twitch" | relative_url }}), such as creating a clip, getting channel info, creating a poll/prediction etc.  

Added user friendly UI to **create and modify your Channel Points** directly from SAMMI-Twitch Connections menu.

##### Bridge
Bridge is mostly similar for users, however you **do not need to manually reinstall extensions** when you update your Bridge to a newer version. This is all automatically handled by SAMMI for you.   

If you're an extension developer, you will need to rewrite some of your code to work with SAMMI: 

- extension files now have .lb2 extension
- added `[extension_info]` section which must be included after `[extension_name]`  

  **new extension file structure:** 
```
[extension_name]
[extension_info]
[insert_external]
[insert_command]
[insert_hook]
[insert_script]
[insert_over]
```
- there are [new helper functions](https://github.com/SAMMISolutions/SAMMI-Bridge#sammi-bridge) in the Bridge for everything you want to send to SAMMI. 

- hooks still work the same, however now you can [listen to these events directly](https://github.com/SAMMISolutions/SAMMI-Bridge#listening-to-extension-data-received-from-sammi)

##### Extensions
As stated just above, LioranBoard 1 extensions do not work in SAMMI. Some will have to be updated and others are not needed anymore (like Get Profile Picture extension, as now you can get the pic with the [Get User Info Command]({{ "/commands/twitch#getuserinfo" | relative_url }})

##### Commands Changes
- added Release Commands - they will execute on button release (only from SAMMI Deck or Trigger Button command
- you can disable a command 
- [sounds]({{ "/commands/sounds" | relative_url }}) are now their own commands 
- Math: Change variable command was replaced with new [Set Variable]({{ "/commands/variables" | relative_url }}) commands
- added [Mouse and Keyboard]({{ "/commands/mouse-kb" | relative_url }}) commands
- added [Wait]({{ "/commands/wait#introduction" | relative_url }}) commands - your button can wait until a specific action occurs (such as when your variable changes) before proceeding with the rest of the commands
- added [Switch Statement]({{ "/commands/statements#switchstatement" | relative_url }}), which is similar to If statement, but works for multiple conditions without having to chain If statements
- added more [String]({{ "/commands/string" | relative_url }}) commands, such as Remove Section, String Hash etc.
- added [Button Get Own ID command]({{ "/commands/button#buttongetownid" | relative_url }})
- added more [Twitch commands]({{ "/commands/twitch" | relative_url }}): Create Clip, Get Channel Info, Get Stream Info, Create Marker, Create Poll, Create Prediction and more
- added [Trigger Extension Trigger]({{ "/commands/trigger#triggerextensiontriggers" | relative_url }}) command which is the same as triggering an extension from a Bridge. This way you can pass parameters from one button to another and make it behave similar to functions in programming
- [Send OBS Request]({{ "/commands/obs-general#sendobsrequest" | relative_url }}) command now retrieves the whole response object from OBSWS if Fetch Value is empty. Same applies for HTTP Request as well.
- [Comments]({{ "/commands/misc#comment" | relative_url }}) can now contain nested commands, super useful for organizing your commands
- Removed Statement: And and Or commands, you can now add them directly in the If Statement command by pressing the command's **+** button
- String: Get Trigger Type command is gone, you can get the trigger type from [Trigger Pull Data]({{ "/commands/trigger#triggerpulldata" | relative_url }}) command instead
- you can check for an undefined variable in an If statement by leaving the compare value empty
- you can clear all button variables by using [Delete Variable]({{ "/commands/variables#deletevariable" | relative_url }}) and putting your buttonID as the Variable.
- you can [prompt the user]({{ "/commands/wait#waitforuserchoice" | relative_url }}) for an input in a popup window. The result will be saved in a variable. Useful for making extensions. 
- still no variables in the delay fields, but you can now use [Wait for Timeout]({{ "/commands/wait#waitfortimeout" | relative_url }}) command to add variable delays between your commands

##### Other Changes
- SAMMI can automatically update Receiver, SAMMI Deck and Bridge for you when there's a new version available. Just click on Settings-Check for updates.
- added support for **multiple OBS connections** (you can select a specific OBS to use for your commands or triggers)
- you can minimize SAMMI to tray
- ability to scale the SAMMI's UI
- you can disable an entire deck
- your deck can have a background image
- buttons can be freely resized to any dimension and placed outside of the grid 
- added quick shortcuts for buttons:
    - double tap on a button to open the command window
    - Shift + double tap brings up Button Appearance menu
    - CTRL + double tap brings up Triggers menu
    - ALT + double tap brings up Button Settings menu
- as an extension maker, you can encrypt your deck and choose which buttons to lock (users will not be able to copy them or open closed command blocks, but they can still modify or delete them).


 







