---
layout: default
title: Migrating from LB2
menu: Getting Started
num: 6
permalink: /getting-started/migrating-lb2
type: fullpage
---

{% include alert.html text="Always back up your files and folders before running updates!" type="warning" %} 

#### Updating from Lioranboard 2 versions 2.08.6 and below
1. Download and unpack the entire SAMMI package from our [itch.io page](https://sammisolutions.itch.io/sammi). Copy the following files:
- SAMMI core.exe
- SAMMI.dll
- settings.ini
- data.win

2. Paste them into your existing Lioranboard folder. When it asks you to overwrite the files, click Yes. 

3. Run `SAMMI Core.exe` and you should see your existing decks and buttons from LioranBoard 2. Go to the settings page and click 'Check for Updates'. SAMMI Core should have been updated to the current version of SAMMI. SAMMI versions are identified by versions 2022.4.0 and above.

4. Once you have successfully updated the LioranBoard 2 Receiver to SAMMI Core, you can proceed to updating the Transmitter (now called Bridge) and the Stream Deck (now called SAMMI Panel). Continue reading below for some important steps you need to take after updating to SAMMI.

#### Updating from Lioranboard 2 CE
You can use the automatic built-in updater within SAMMI Core to update all components of SAMMI. You do not need to update your Bridge files if the button says 'Redownload'. Re-donwloading the Bridge files will download a fresh copy of your `bridge.html` file and reinstall all extensions. 

Alternatively, you can also follow the instructions in the 'Updating to SAMMI from Lioranboard 2' section to update your files manually.

Always make sure you are on the latest version of SAMMI to ensure you do not encounter any critical bugs! 
 
##### SAMMI Bridge
The LioranBoard Transmitter is now called the SAMMI Bridge. When you update to SAMMI, a folder called `bridge` would have been created in your main folder. Your installed extensions should have automatically been re-installed onto the `bridge.html` file found in that folder. 

The Bridge will need to be open either in an OBS dock or your browser for some extensions to work. 

If you use an OBS dock for your Transmitter, you will have to replace that Transmitter with the URL for the `bridge.html` file instead. If this step is not done, you will get 'Transmiter is not supported' errors.  

{% include alert.html text="It is important to note that the LioranBoard Transmitter will not work with SAMMI and the SAMMI Bridge will not work with LioranBoard 2." type="warning" %} 

##### SAMMI Panel
Functionality of the SAMMI Panel remains exactly the same as the Stream Deck. The update for the Panel will update your taskbar icon. 

##### New Twitch Token
When updating to SAMMI, the program uses a new Twitch Token to handle all Twitch integrations. This means that once you update to SAMMI you will need to revoke your existing Twitch credentials and relink them to Twitch. 

To do this, follow the instructions [here](https://sammi.solutions/docs/integrations/twitch).

##### New Channel Point Reward IDs
Updating to SAMMI and the new Twitch Token means that SAMMI no longer 'owns' the channel point rewards that were previously created by LioranBoard. This means that your buttons that edit or modify channel point rewards will no longer work. In order for SAMMI to regain ownership of these rewards and for your buttons to work again, follow these instructions: 
1. Navigate to the Twitch Connections section of SAMMI and select 'Edit' next to Channel Points.
2. At the bottom of Channel Points list, make sure you tick 'Change Reward ID in commands'. 
3. You will notice that your Channel Points are no longer owned by SAMMI. Click 'Dupe' next to the individual Channel Point Rewards to create a duplicate of your rewards that are owned by SAMMI. The new rewards will be named 'channelpointnameCOPY' and will now be owned by SAMMI. 
4. You can dupe as many rewards as you want at the same time, provided you are under the 50 rewards limit imposed by Twitch.
5. Once you have duped all the rewards you want, hit 'Done', and 'Done' again in the next screen. A pop-up will appear to remind you about changing the reward IDs in your commands. Select 'Yes'. 
6. SAMMI will now have changed all your old reward IDs to new reward IDs automatically. Your buttons will work again, but in order to make sure your triggers remain working, **remember to rename your 'channelpointnameCOPY' to 'channelpointname' as the triggers only work if the reward names are exactly the same.**

##### YouTube Integration
Due to YouTube only allowing one app to be connected via one credential, the rebranding from LioranBoard 2 CE to SAMMI means that only SAMMI will be able to be integrated with YouTube. 

There will no longer be any YouTube integration to any other app (LioranBoard 2 or LioranBoard 2 CE). **If you want to continue to stream on YouTube you will have to update to SAMMI.** 

##### Deleting LioranBoard Files and Folders
{% include alert.html text="You should only proceed with file deletion once you are sure everything in SAMMI is working!" type="warning" %}

Ensure all your SAMMI components (Core, Bridge and Panel) are updated to the latest versions and are functioning properly before deleting any old LioranBoard 2 files. Make sure all your extensions that were installed in your transmitter.html have been successfully transferred to the bridge.html and are working as expected. 

Once you have made sure they are all in working order, you can delete the following files and folders:
- Stream Deck folder
- transmitter folder
- Lioranboard 2.0.exe
- DLLExtension.dll

