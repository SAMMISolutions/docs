---
layout: default
title: Deck App
menu: Components
num: 4
type: fullpage
permalink: /deck-app
version: 202320
---

A Deck App is a type of application designed to interact with decks and buttons created in SAMMI Core. It's a great way to control SAMMI from a different device, such as a tablet or a phone. 

{% include image.html w="75" src="deckapp.png" alt="Spotify Deck in Deck Hopper" %}

### SAMMI Panel and SAMMI Deck
Due to unexpected events, the development of SAMMI Panel has stopped, and it's **no longer being updated or developed**.  

The existing version of SAMMI Panel is still accessible as a web browser application at [http://sammipanel.solutions](http://sammipanel.solutions), but its functionality and stability are not guaranteed.

SAMMI Deck is now outdated and incompatible with the latest SAMMI Core versions. 

### Deck Hopper
We highly recommend using [Deck Hopper](https://christinak.ca/deckhopper/), a solution officially endorsed by the SAMMI team. 

{% include alert.html text="Deck Hopper, created and maintained solely by Christina Kral, a SAMMI founder, is a personal project and not officially part of SAMMI Solutions." type="info" %} 

Deck Hopper is available for [Desktop](https://christinak.itch.io/deck-hopper) (Windows, macOS, Linux), [Android](https://play.google.com/store/apps/details?id=ca.christinak.DeckHopper) and [iOS](https://apps.apple.com/us/app/deck-hopper/id6746429701).

It comes with a [free trial](https://christinak.ca/deckhopper/download), and a [PRO version](https://christinak.ca/deckhopper/upgrade) that removes ads and includes all advanced features. (not applicable to the iOS version, which is Pro by default)

### Setup 

#### Deck Hopper
Deck Hopper setup file is included in all SAMMI 2024.1.0 or newer downloads by default.  

Go to SAMMI Core - Deck App and select **Open Deck Hopper**. If Deck Hopper isn't installed, you'll be prompted to install it. After installation, you can launch it from the same menu. 

Follow the setup instructions on the [Deck Hopper Setup Page](https://christinak.ca/deckhopper/setup#initialSetup) to connect it with your SAMMI Core. 

{% include image.html w="75" src="deckhopper.png" alt="Deck Hopper" %}

#### SAMMI Panel

{% include alert.html text="SAMMI Panel is no longer being updated or developed. Its functionality and stability are not guaranteed." type="warning" %}

Visit the SAMMI Panel website at [http://sammipanel.solutions](http://sammipanel.solutions). 

Upon first use, you'll see an agreement page. After agreeing to the SAMMI Panel EULA, the Panel will start. You'll then see the connection settings for the Panel. 

The default IP address for using the Panel on the same PC as SAMMI Core is `127.0.0.1` with the port `9470`.

For accessing SAMMI Panel from a different device, use the IP address of the PC running SAMMI Core. This can be found in SAMMI Core - Deck APP - Get LAN IP. Enter this IP address in the Panel's IP address field. 

{% include image.html w="75" src="panel2.png" alt="SAMMI Panel Connection Settings" %}

Choose a deck from the dropdown and click 'Connect'. Now, you can interact with it by pressing its buttons!

{% include alert.html text="To switch decks quickly in SAMMI Panel, press the Backspace key on your keyboard to load a different deck." type="info" %} 

### Other Alternatives

[Deck Mate Control](https://play.google.com/store/apps/details?id=com.flipstream.android.deckmatecontrol&pli=1), developed by SAMMI Community member Flipstream, is an Android-exclusive alternative to SAMMI Panel. 
