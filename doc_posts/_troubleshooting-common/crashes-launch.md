---
title: Crashes On Launch
num: 1
---

**Antivirus/Firewall**\
Try allowing the app through your firewall/antivirus.

**Corrupted Deck Files**\
If the `decks_data.json` file in the 'json' folder within your default LioranBoard folder is 0kb in size, this means your deck has somehow been corrupted. Check and make sure that `decks_data_old.json` and `decks_data_very_old.json` are NOT 0kb in size.\
Make a backup of your `decks_data.json` file, then rename `decks_data_old.json` to `decks_data.json`. Restart LioranBoard 2. 

**Faulty sound drivers**\
You can try [reinstalling your sound drivers](https://support.microsoft.com/en-us/windows/fix-sound-problems-in-windows-10-73025246-b61c-40fb-671a-2535c7cd56c8).

**Incompatible versions between receiver and stream deck**\
You have a newer version of the stream deck compared to the receiver. Close all connections to LB (OBS, Stream Deck) and restart LB, then update it to the latest version.\
If the crash persists, you can also save the 'json' folder in your LioranBoard 2 folder to a different location, then delete the folder. Restart (or download a new copy of LioranBoard), then update your receiver to the latest version. After doing so and verifying that it no longer crashes, copy the json back into your LioranBoard folder. 
