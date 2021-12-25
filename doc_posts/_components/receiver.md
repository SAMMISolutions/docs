---
layout: default
title: Receiver
menu: Components
num: 1
type: fullpage
permalink: /receiver
---
Receiver is the main LioranBoard component. You can change all the settings, add and modify your decks, program new buttons, add and edit triggers etc. 

{% include image.html w="50" src="receiver.png" alt="LioranBoard Receiver Main Menu" %}

{% include alert.html text="Receiver is only an editor. Use Stream Deck to press your buttons." type="warning" %} 

### Main Menu
- **Deck Commands**
   - Add New Deck - adds a new deck to your deck collection 
   - Edit Deck - opens a deck and shows all its buttons
   - Move Deck Up/Down - rearranges a deck position
   - Remove Deck - permanently removes a selected deck 
- **Connection Commands**
   - Connect to OBS - connects to your OBS websocket. OBS must be running. You can configure the port and password in the Options menu.
   - Link your Twitch - links your Twitch account to listen to events and control your stream. You can add multiple Twitch accounts. See our 
    [Step by Step tutorial](step-by-step.html) showing how to link your Twitch account. 
   - Connect to Twitch - connects to Twitch. Your Twitch account must be linked and your Transmitter must be running. 
- **Trigger Shortcut** - trigger your buttons by pressing a key on your keyboard or gamepad. 
- **Install Extension** - installs an extension. Must supply the extension .lbe file and select Transmitter to install the extension into. 
- **Uninstall Extensions** - uninstalls an extension. Must select Transmitter to uninstall the extension from. 
- **Active buttons** - shows any buttons that are currently running. 
- **Options** 
    - Listen Port - port to listen for Transmitter connection. Leave at default. 
    - OBSWebsocket Port - port to listen to OBS websocket. Default port is 4444. If you changed your OBSWS port in your OBS, you must change it in your Receiver as well. 
    - OBSwebsocket Password - password to connect to OBS websocket. Leave empty if you do not use a password (default option). If you changed your OBSWS password in your OBS, you must change in your Receiver as well. 
    - Auto connect to OBSws - check if you want Receiver to automatically connect to OBS
    - Auto connect to Twitch - check if you want Receiver to automatically connect to Twitch 
    - Non blocking Connection - leave unchecked unless you're having difficulties with connecting to OBS 
    - Frame per second - affects how fast your buttons are executed and allows for smoother animations if you use LB to animate your OBS sources. Maximum FPS is 60. 
    - Reset Values and Running Buttons - clears all variables, stacks and buffers and ends all currently running buttons 
        - Right click 10 times to enable developer mode 

{% include alert.html text="Press Tab while in the main menu screen to see all the current variables and stacks." type="info" %}   

### Deck

If you press `Add new Deck` button, it will create an empty canvas grid, where you can add and modify your buttons.\    
You can freely rename your deck, change its background (sorry, no transparency options!) and resize it to accommodate as many buttons as you want.

Each deck you create is saved as an individual configs.ini file in one of these two locations, depending on your Windows settings: 
- <code>lioranboard/LioranBoard Receiver</code> folder
- <code>C:/user/%username/appdata/local/lioranboard</code> folder

For example, if you have 3 decks, you should have 3 configs.ini files in the folder - <code>configs.ini</code>, <code>configs1.ini</code> and <code>configs2.ini</code>.

Every deck is active at all times in your Receiver. It does not matter how you organize your buttons, they will all trigger even if your Stream Deck is currently connected to a different deck!

{% include alert.html text="If you want to back up your decks or share them with others, you can simply send them the corresponding configs.ini file. " type="info" %}      

### Button 
Once you create a new deck, you can simply right click on an empty space anywhere within the deck and press `Create Blank Button`. If you now right click on the created button, a new button menu appears: 
- **Change color** - Change the color of your button (sorry, no transparency options!) and also copy it to other buttons. 
- **Change text** - Change the text inside your button. Use <code>#</code> to add a new line.
- **Add Image** - Add image to your button. Png format only. LioranBoard will automatically resize and copy the newly added image to Receiver/images folder. 
- **Add Stop all sounds** - If you add it to a button, it will stop all sounds currently coming from your Receiver when pressed. 
- **Add keyboard macro** - Adds a keyboard macro to your button that will be executed when the button is pressed. Only keyboard keys are supported, including F13 to F24 keys.   
Button commands and delays do not affect keyboard macros in any way.
{% include alert.html text="You can trigger actions in other programs by adding a keyboard macro to a button. Receiver and your other program should be both running as administrator. " type="info" %}    
- **Add sound effects** - Adds a sound to your button which will be played when triggered. Ogg format only. 

{% include alert.html text="Receiver uses your default sound device to play any sounds you add to your buttons. This cannot be changed from within the app." type="warning" %}    
- **Add sound mods** - Adjusts the volume and speed at which the sound you added to the button will be played. 
- **Add/Edit Commands** - Program your button to perform specific actions when pressed. You can add as many commands as you want. 
- **Add Switch Deck** - Easily switch between decks in your Stream Deck. 
- **Add Twich Triggers** - Add Twitch or extension triggers to your button to get automatically executed when a specific event happens. For example, you can trigger your button every time you get a new follower or someone types !hello in your chat. 
- **Add Drag press** - The button will trigger if dragged over. You can add either a single or multiple drag press (activates if it's dragged over again). Useful for creating your own volume buttons! 
- **Copy Button** - Copy a button and insert it elsewhere in your deck. All buttons have unique IDs. A new copied button will have a different ID from the original one.
- **Delete Button** - Deletes a button. This change will not take an effect until you press Done in your deck. 
- **Export JSON** - Exports a button by copying its contents to your clipboard. 
{% include alert.html text="Use Export and Import JSON to easily share your buttons with others!" type="info" %}  
- **Groupd ID** - You can group up your buttons by assigning them the same group ID. This will automatically create a queue for your buttons and prevent them from triggering at the same time. 
- **Button ID** - Change your button ID. 10 character limit. Two buttons cannot have the same ID. 

### Button Commands
When you right click on your button and press Add/Edit commands, you can start adding commands to execute when the button is pressed.     
- Once a button is triggered, all commands are executed
- Command delays are absolute and not related to each other. You can think of them as a timeline, they do not affect each other in any way. 
- Button commands and delays do not affect sounds or keyboard macros you added to the button.
- All variables are global and every command in button in every deck can access them.  

See the list of all available commands in our [Commands]({{ "commands/variables" | relative_url }}) section. 

### Button Triggers
You can assign a trigger to your button to get automatically executed. 
See the [Triggers]({{ "triggers/twitch" | relative_url }}) section for more information. 
