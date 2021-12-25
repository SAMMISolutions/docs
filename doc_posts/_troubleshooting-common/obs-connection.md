---
title: OBS Connection
num: 0
---

You can try these steps to troubleshoot your OBS Websocket connection to LB:

- **Reinstall OBS websocket**\
Try completely reinstalling the plugin. Make sure you have the latest version.\
You can check whether your OBS websocket is correctly installed by going to OBS-Tools-Websockets Server Settings.
- **Run as administrator**\
Try running LioranBoard as administrator. Right click on LioranBoard Receiver and select `Run as administrator`.
- **Check your firewall and antivirus**\
Make sure your firewall is not blocking LB.\
You can try [temporarily disabling your antivirus/firewall](https://support.microsoft.com/en-us/windows/turn-off-defender-antivirus-protection-in-windows-security-99e6004f-c54c-8509-773c-a4d776b77960) or [adding an exception](https://support.microsoft.com/en-us/windows/add-an-exclusion-to-windows-security-811816c0-4dfd-af4a-47e4-c301afe13b26) to allow the app through.
- **Check OBS websocket password**\
Your passwords in OBS-Tools-Websockets Server Settings and LioranBoard Receiver-Options need to match. If you do not use a password, uncheck Enable authentication.\
  {% include image.html w="75" src="obsws-pw.png" alt="Matching passwords for OBSWS" %}
- **Change Ports**\
Change the port of OBS websocket (both in OBS and LioranBoard) to a new one, for example 4445.
- **Lower or increase timeout**\
Open `connect.ini` (either in LioranBoard Receiver or in APPDATA/local/lioranboard folder).\
Add `timeout="1000"` under `[connection]`. Try 100 and 5000.
- **Try Non Blocking Connection**\
In your Receiver, go to Options and check/uncheck non blocking connection.
- **Change IP connection**\
Normally you use 127.0.0.1 to connect to OBS, but you can try local IP as well.\
1. Run `whats my local ip.bat` located in LioranBoard folder. 
2. Note down your IPv4 address (it will start with `192.168`).
3. Open `connect.ini` file and add `websocket_ip="YOUR IVP4 ADDRESS"` under `[connection]`.
**Try connecting using other means**\
You can try a chrome extension [Simple Websocket Client](https://chrome.google.com/webstore/detail/simple-websocket-client/pfdhoblngboilpfeibdedpjgfnlcodoo) to check if you can make a connection in the first place.