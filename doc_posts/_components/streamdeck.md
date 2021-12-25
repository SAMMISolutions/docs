---
layout: default
title: Stream Deck
menu: Components
num: 3
type: fullpage
permalink: /streamdeck
---
Stream Deck 
Stream Deck is where you press all the buttons you previously created in the Receiver.   

### PC Version
Desktop version of Stream Deck can be found at `lioranboard/LioranBoard Stream deck(PC)` folder.\
Once launched, you will see settings for IP and Port which should be left at default.\
Selected deck is the deck number you want to connect to. 

{% include image.html w="50" src="streamdeckvsreceiver.png" alt="Receiver vs Streamdeck"
type="image" %}


### Android Version
Android version of Stream Deck can be found at `lioranboard/LioranBoard Stream deck(Android)` folder.\    
Stream Deck is not available in the Play Store. You need to manually transfer the .apk file to your Android device and install it. You may need to change permissions to install external files.  

{% include alert.html text="Some devices, such as Windows tablets, require double taps on the buttons." type="warning" %} 

**Connecting to Stream Deck from your Android device**     
Unlike in Desktop version, you will need to change the settings in order to connect to the Receiver. 
1. Launch `whats my local ip.bat` in `lioranboard` folder or type `ipconfig` in command your line.
2. Copy your IPv4 Address. It will start with 192.168.
3. Paste your IPv4 address into the IP field in your Stream Deck. You should not need to change port.
4. Connect as you normally would.

{% include image.html w="50" src="streamdeckAndroid.png" alt="Android Stream Deck"
type="image" %}



