---
title: Deck App Connection
num: 6
---

### Deck Hopper
Please see Troubleshooting section on [Deck Hopper's official website](https://christinak.ca/deckhopper/troubleshooting). 

### SAMMI Panel
If you click 'Connect' in your SAMMI Panel and nothing happens, this indicates that a successful connection to SAMMI Core has not been established. The following are potential reasons for the lack of connection and their respective solutions:

- **Outdated SAMMI Panel**\
Ensure that you are using the most recent version of SAMMI Panel.  

- **Incorrect IP/Port or Password**\
The IP address should always be set to `127.0.0.1` unless you are using SAMMI Panel on a different device from where SAMMI Core is running. In such cases, navigate to SAMMI > SAMMI Panel > Get LAN IP to copy your local IP address to your clipboard, and use this IP address instead. It will be in the format `192.168.X.X`.
Verify that the Port and Password entered in SAMMI Panel match the Port and Password in your SAMMI Settings. The default port is `9470`. 

- **Accessing SAMMI Panel (Web) over HTTPS**\
SAMMI Panel will not connect to SAMMI Core if you access `http://sammipanel.solutions/` over HTTPS and the IP address you are attempting to connect with is not `127.0.0.1` (e.g., if you are using SAMMI Panel on a different device over a local network).

- **Firewall Interference**\
Check that your firewall is not preventing SAMMI Panel from connecting.\
Consider [temporarily disabling your antivirus/firewall](https://support.microsoft.com/en-us/windows/turn-off-defender-antivirus-protection-in-windows-security-99e6004f-c54c-8509-773c-a4d776b77960) or [adding an exception](https://support.microsoft.com/en-us/windows/add-an-exclusion-to-windows-security-811816c0-4dfd-af4a-47e4-c301afe13b26) to allow SAMMI Panel through.

- **Antivirus or Security Software Interference**\
Some antivirus or security software may have additional features (beyond the firewall) that could block or interfere with the connection between SAMMI Panel and SAMMI Core. You may need to adjust the settings of their security software to allow the connection.

- **Non Local Network**\
Ensure that the device running SAMMI Core is on the same local network as the device running SAMMI Panel.\
If you are using a VPN, you may need to disable VPN settings.

- **Running Multiple Instances**\
Running multiple instances of SAMMI Core or SAMMI Panel on the same device or network could lead to conflicts and prevent a successful connection. Ensure that only one instance of each is running.

- **Port Conflicts**\
If the default port used by SAMMI (e.g., 9470) is already in use by another application, it could prevent SAMMI Panel from connecting to SAMMI Core. You may need to change the port number to an available port by opening `settings.ini` file located in SAMMI Folder and adding the following under [Settings] section: `panel_port = "XXXX"`
