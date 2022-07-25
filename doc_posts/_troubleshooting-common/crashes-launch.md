---
title: Crashes On Launch
num: 1
---

**Antivirus/Firewall**\
You can try [temporarily disabling your antivirus/firewall](https://support.microsoft.com/en-us/windows/turn-off-defender-antivirus-protection-in-windows-security-99e6004f-c54c-8509-773c-a4d776b77960) or [adding an exception](https://support.microsoft.com/en-us/windows/add-an-exclusion-to-windows-security-811816c0-4dfd-af4a-47e4-c301afe13b26) to allow the app through.

**Corrupted Deck Files**\
If the `decks_data.json` file in the 'json' folder within your default SAMMI folder is 0kb in size, this means your deck has somehow been corrupted. Check and make sure that `decks_data_old.json` and `decks_data_very_old.json` are NOT 0kb in size.\
Make a backup of your `decks_data.json` file, then rename `decks_data_old.json` to `decks_data.json`. Restart SAMMI. 

**Faulty sound drivers**\
You can try [reinstalling your sound drivers](https://support.microsoft.com/en-us/windows/fix-sound-problems-in-windows-10-73025246-b61c-40fb-671a-2535c7cd56c8).

**Incompatible versions between SAMMI Core and SAMMI Deck**\
You may have a newer version of the SAMMI Deck compared to the receiver. Close all connections to SAMMI (OBS, SAMMI Deck) and restart SAMMI, then update it to the latest version.\
If the crash persists, you can also save the 'json' folder in your SAMMI folder to a different location, then delete the folder. Restart (or download a new copy of) SAMMI, then update your receiver to the latest version. After doing so and verifying that it no longer crashes, copy the json back into your SAMMI folder. 
