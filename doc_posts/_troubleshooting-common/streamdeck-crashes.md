---
title: SAMMI Deck
num: 0
---

If you press 'Connect' in your SAMMI Deck and nothing happens (you only see the progress icon), it means it hasn't established a successful connection to SAMMI Core.

- **Outdated SAMMI Deck**\
Make sure you're using the latest version of SAMMI Deck. 

- **Mismatched port/password settings**\
Make sure "Allow SAMMI Deck and Bridge" is checked in SAMMI > Settings, and confirm that the Port and Password entered there match the Port and Password in your SAMMI Deck connection settings. The default port is 9425.\
Please note that these settings are separate from those used by OBS WebSockets, and must use a different port number.

- **Blocked by firewall**\
Make sure your firewall is not blocking SAMMI.\
You can try [temporarily disabling your antivirus/firewall](https://support.microsoft.com/en-us/windows/turn-off-defender-antivirus-protection-in-windows-security-99e6004f-c54c-8509-773c-a4d776b77960) or [adding an exception](https://support.microsoft.com/en-us/windows/add-an-exclusion-to-windows-security-811816c0-4dfd-af4a-47e4-c301afe13b26) to allow the app through.

- **Wrong or corrupted deck files**\
Sometimes SAMMI Deck files can get corrupted and start crashing SAMMI Deck on launch. Deleting and downloading a new SAMMI Deck will not help, as its files are stored in your AppData folder. Instead,
1. Completely close your SAMMI Deck.
2. Navigate to `C:/user/%username/appdata/local/LioranBoard_Stream_Deck`
3. Delete everything in the folder. Don't worry, these contain only your deck metadata and your SAMMI Deck will automatically generate them again!
4. Relaunch your SAMMI Deck.
