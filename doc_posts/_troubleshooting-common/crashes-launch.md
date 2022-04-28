---
title: Crashes On Launch
num: 1
---

**Antivirus/Firewall**
Try allowing the app through your firewall/antivirus.

**Voicemeeter**
If you are running Voicemeeter, you need to launch it AFTER LioranBoard.\
Alternatively, the default output audio device needs to be set to the Voicemeeter virtual device.

**Faulty sound drivers**
You can try [reinstalling your sound drivers](https://support.microsoft.com/en-us/windows/fix-sound-problems-in-windows-10-73025246-b61c-40fb-671a-2535c7cd56c8).

**Incompatible versions between receiver and stream deck**
You have a newer version of the stream deck compared to the receiver. Close all connections to LB (OBS, Stream Deck) and restart LB, then update it to the latest version.\
If the crash persists, you can also save the 'json' folder in your LioranBoard 2 folder to a different location, then delete the folder. Restart (or download a new copy of LioranBoard), then update your receiver to the latest version. After doing so and verifying that it no longer crashes, copy the json back into your LioranBoard folder. 
