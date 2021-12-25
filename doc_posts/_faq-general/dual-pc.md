---
title: Dual PC Setup
num: 2
---

LioranBoard can connect to your OBS from another PC, as long as they are both sharing the same network.\

**Streaming PC**
1. Run your OBS as normal.
2. Open your command line and type `ipconfig`. Note down your IPv4 address. It should start with `192.168`.

**Gaming PC**
1. Go to your LioranBoard/Receiver folder and open `connect.ini`. Under `[connection]` section, add a new entry: `websocket_ip="YOUR STREAMING PC IPv4"`.
2. Save the file, open Lioranboard and try connecting to the OBS websocket on your streaming PC.\
It should work as long as nothing (antivirus, firewall) is blocking connection to your streaming PC.  

   {% include image.html w="50" src="obs-another-pc.png" alt="Modified connect.ini" %}