---
title: OBS Connection
num: 0
---

To connect to and control OBS, SAMMI uses a free plugin for OBS called OBS WebSockets.\
You can find a link to the latest compatible version of WebSockets in the [Step-by-step Tutorial](https://sammi.solutions/docs/getting-started/step-by-step).\
Try these steps to troubleshoot the connection between SAMMI and OBS WebSockets:

- **Reinstall OBS WebSockets**\
Try completely reinstalling the plugin. Make sure you have the latest version.\
You can check whether WebSockets is currently installed by going to OBS > Tools > WebSockets Server Settings.\
If your OBS's Tools menu does not have WebSockets Server Settings, then WebSockets is not properly installed.
- **Run as administrator**\
Try running SAMMI as an administrator. Right click on the SAMMI launch file and select `Run as administrator`.
- **Check your firewall and antivirus**\
Make sure your firewall is not blocking SAMMI.\
You can try [temporarily disabling your antivirus/firewall](https://support.microsoft.com/en-us/windows/turn-off-defender-antivirus-protection-in-windows-security-99e6004f-c54c-8509-773c-a4d776b77960) or [adding an exception](https://support.microsoft.com/en-us/windows/add-an-exclusion-to-windows-security-811816c0-4dfd-af4a-47e4-c301afe13b26) to allow the app through.
- **Verify password settings**\
The password you enter in OBS > Tools > WebSockets Server Settings must match the password you enter in SAMMI > OBS Connections. If you do not use a password, uncheck Enable authentication.
- **Verify ports settings**\
The port entered in OBS > Tools > WebSockets Server Settings must match the port in SAMMI > OBS Connections.\
The default port for WebSockets 4.x.x is 4444. The default for WebSockets 5.x.x is 4455.\
Note that this port MUST be different from the port number used in your Transmitter settings.
- **Try Non-Blocking Connection**\
In SAMMI, go to OBS Connections and check/uncheck "Non-Blocking".
- **Change IP connection**\
Normally you will use 127.0.0.1 to connect to OBS, but you can try local IP as well:
1. Launch command line (cmd.exe) and run `ipconfig` command.
2. Note down your IPv4 address (it will start with `192.168`).
3. Go to SAMMI > OBS Connections and change the IP address.
- **Try connecting using other means**\
You can try a chrome extension [Simple Websocket Client](https://chrome.google.com/webstore/detail/simple-websocket-client/pfdhoblngboilpfeibdedpjgfnlcodoo) to check if you can make a connection in the first place.
