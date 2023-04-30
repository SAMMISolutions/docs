---
title: OBS Connection
num: 3
---

To connect and control OBS, SAMMI uses the OBS WebSocket add-on. If you encounter issues connecting SAMMI to OBS Websockets, try the following troubleshooting steps:

- **OBS Studio 28 (and up) and OBS Websockets**: We highly recommend using OBS Studio 28 or 29 with OBS Websocket 5.0, as this is the latest and preferred version. OBS Studio 28 and higher include OBS Websocket 5.0 by default, so no separate installation is needed.  
However, there may be specific cases where OBS Websocket 4.9 is still required, such as when using certain outdated plugins that have not been updated for compatibility with OBS Websocket 5.0. In such cases, you can install the [OBS Websocket 4.9.1-compat plugin](https://github.com/obsproject/obs-websocket/releases) and create a new OBS instance in SAMMI to use OBS Websocket 4.9.1. Specify the OBS Websocket protocol for each command.

- **Run as Administrator**: Try launching SAMMI as an administrator by right-clicking the SAMMI Core.exe launch file and selecting `Run as administrator`.

- **Check Firewall and Antivirus**: Ensure your firewall and antivirus software are not blocking SAMMI. Consider [temporarily disabling your antivirus/firewall](https://support.microsoft.com/en-us/windows/turn-off-defender-antivirus-protection-in-windows-security-99e6004f-c54c-8509-773c-a4d776b77960) or [adding an exception](https://support.microsoft.com/en-us/windows/add-an-exclusion-to-windows-security-811816c0-4dfd-af4a-47e4-c301afe13b26) for SAMMI.

- **Verify Password Settings**: Ensure the password in OBS > Tools > OBS Websocket Settings matches the password in SAMMI > OBS Connections. Leave the password field empty if "Enable Authentication" is unchecked.

- **Verify Port Settings**: Ensure the port in OBS > Tools > OBS Websocket Settings matches the port in SAMMI > OBS Connections. Default ports are `4444` for WebSockets 4.x.x and `4455` for WebSockets 5.x.x. Use a different port from the one used in Bridge settings.

- **Try Non-Blocking Connection**: In SAMMI, go to OBS Connections and check or uncheck "Non-Blocking."

- **Change IP Connection**: Try using your local IP address instead of `127.0.0.1`. Find your IPv4 address using the `ipconfig` command and enter it in SAMMI > OBS Connections.

- **Test Connection with Other Tools**: Use tools like the [Simple Websocket Client](https://chrome.google.com/webstore/detail/simple-websocket-client/pfdhoblngboilpfeibdedpjgfnlcodoo) Chrome extension to test if you can establish a connection to OBS Websocket.

Remember to check the OBS Websocket server settings in OBS Studio (Tools > Websocket Server Settings) to ensure that the server is enabled and running with the correct ports.

If you continue to experience issues connecting SAMMI to OBS Websocket, please reach out to us via the official [SAMMI Discord server](https://discord.gg/dXez8Zh).