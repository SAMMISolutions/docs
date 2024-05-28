---
title: Enabling API
num: 2
---

{% include alert.html text="API is only available in SAMMI 2022.5.0^" type="info" %} 

You can enable SAMMI's API by navigating to the Settings Menu in SAMMI Core and checking 'Open Local API Server'. This will open its server every time SAMMI runs and exposes it to local API calls and webhooks.\
Optionally you can choose a password which every call to the API will need to pass when communicating with SAMMI.

{% include image.html w="75" src="settings.png" alt="SAMMI API Settings" %}

The default port SAMMI API uses is `9450`. While we strongly encourage you to not change it, you can change it in the `SAMMI/settings.ini` file by setting the `api_server_port` value under `[Settings]` section to your own desired port. 

{% include alert.html text="SAMMI API only runs locally. Unless you expose your localhost, you cannot make calls to the API or post webhooks if a public address is required." type="warning" %} 
