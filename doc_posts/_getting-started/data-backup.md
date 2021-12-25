---
layout: default
title: Update and Backup
menu: Getting Started
num: 4
permalink: /getting-started/data-backup
type: fullpage
---

#### Auto Update LioranBoard
There is a simple [Auto Updater for LioranBoard](https://github.com/christinna9031/LioranBoard-Auto-Updater/releases) you can download and use every time you need to update your LioranBoard. 

#### Manually Update LioranBoard
**[Download](https://obsproject.com/forum/resources/lioranboard-stream-deck-animator.862/) and unpack Lioranboard zip file.**
- Update LioranBoard Receiver - replace `LioranBoard Receiver.exe` and `data.win` in LioranBoard Receiver folder with the new files.
- Update LioranBoard Stream Deck (PC or Android)  - simply replace the folders in lioranboard folder
- Update Transmitter - replace `tsl_transmitter.html` file in lioranbord folder. You will need to reinstall all your extensions. 

#### Back up your data
LioranBoard is a self contained app in lioranboard folder, you do not go through the process of installing it like with other apps.\
This means you can freely copy the whole lioranboard folder to another computer and it will work just the same!


You still need to **back up additional** data if your LioranBoard uses AppData folder to save your files.
Look at the bottom of your LioranBoard Receiver. It will say say either **local** or **appdata**.
{% include image.html w="75" src="local_text.png" alt="Determining folder where config files are saved" %}
- **Local** - you can just copy the whole lioranboard folder and you're done! Or, if you want to back up your decks only, select and copy all the `configs.ini` files.
- **Appdata** - go to `C:/user/%username/appdata/local/lioranboard` and copy all the files. Back it up together with the lioranboard folder. <br> *If you do not see appdata`folder, you must enable [Viewing hidden files and folders in Windows](https://support.microsoft.com/en-us/windows/view-hidden-files-and-folders-in-windows-97fbc472-c603-9d90-91d0-1166d1d9f4b5)*

