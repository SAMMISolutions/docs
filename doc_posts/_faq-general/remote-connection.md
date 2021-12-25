---
title: Remote Connection
num: 3
---

It's possible to remotely connect and control your LioranBoard via Stream Deck from anywhere in the world.\
There are multiple ways to accomplish this. This documentation covers the easiest and most accessible one.

1. Download Ngrok and sign up for an account.
2. Log in to your account and retrieve your authtoken.
3. Go to the downloaded file, unzip it and run ngrok.exe. You should see a command line open.
4. Type `ngrok authtoken YOURAUTHTOKEN` and press enter. You should see a message `Authtoken saved to configuration file: C:\Users\...`. This step is necessary to prevent your session from timing out.
5. To start the tunnel, type `ngrok tcp 9423` and hit enter. <br/> The default region is US. You can change it by adding `-region=REGION` flag. Available regions: us, eu, ap, au, sa, jp, in. Example: `ngrok tcp -region=eu 9423`.
6. You should see your session started. Go to your Stream Deck and paste the new IP and port from the Forwarding line (make sure to omit the `tcp://` part). As long as your tunnel is active, you can connect to your Receiver from anywhere in the world now! :)  
   {% include image.html w="50" src="ngrok.png" alt="Creating a new tunnel via ngrok" %}

All currently active tunnels can be seen on your dashboard.\
If you wish to close the tunnel, you can press CTRL+C or type `taskkill /f /im ngrok.exe` in the command line and press enter.

{% include alert.html text="Do not share your tunnel IP and port with anyone else. If you accidentally leak it, you should terminate the service and relaunch it, as anyone who knows the address could potentially connect and press buttons in your Stream Deck." type="warning" %} 

