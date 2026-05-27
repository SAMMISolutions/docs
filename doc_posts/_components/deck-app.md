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

{% include alert.html text="SAMMI Panel development has been resumed. It is not a priority, and Deck Hopper and DeckMate Control remain the recommended alternatives — but the project is being actively improved again." type="info" %}

SAMMI Panel is a free, open-source web-based Deck App. Development was previously paused but has resumed. It is not prioritized over other efforts, so updates may be infrequent.

The latest version of SAMMI Panel can be accessed at [http://sammipanel.solutions](http://sammipanel.solutions) and supports the full SAMMI Deck App protocol including:
- Triggering and releasing buttons
- Real-time button modifications and ongoing-button tracking
- Deck switching (specific deck, next, previous)
- Enabling and disabling decks (`ChangeDeckStatus`)
- Stopping buttons (`StopButton`)
- Reinitialising button variables (`ReinitButtonVars`)
- Sending custom messages to SAMMI triggers (`CustomMessage`)
- Responding to `Deck App: Wait for Input`, `Wait for Choice`, and `Wait for Multi Choice` commands
- Receiving custom JSON payloads via `Deck App: Send JSON` (dispatched as a `SAMMISendJSON` DOM event for developers building on top of the panel)

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

{% include alert.html text="SAMMI Panel development has resumed but is not prioritized. Deck Hopper and DeckMate Control are the recommended alternatives." type="info" %}

Visit the SAMMI Panel website at [http://sammipanel.solutions](http://sammipanel.solutions).

Upon first use, you'll see an agreement page. After agreeing to the SAMMI Panel EULA, the Panel will start. You'll then see the connection settings for the Panel.

The default IP address for using the Panel on the same PC as SAMMI Core is `127.0.0.1` with the port `9470`.

For accessing SAMMI Panel from a different device, use the IP address of the PC running SAMMI Core. This can be found in SAMMI Core → Deck App → Get LAN IP. Enter this IP address in the Panel's IP address field.

{% include image.html w="75" src="panel2.png" alt="SAMMI Panel Connection Settings" %}

Choose a deck from the dropdown and click **Select Deck**. You can now interact with it by pressing its buttons.

{% include alert.html text="Press Backspace to return to the deck selection screen at any time." type="info" %}

**What's supported in SAMMI Panel:**
- Full button control (trigger, release, stop, block/unblock)
- Real-time button modifications and state sync
- Deck switching (specific, next, previous) via `Deck App: Switch Deck`
- Enable/disable decks programmatically
- `Deck App: Wait for Input`, `Wait for Choice`, and `Wait for Multi Choice` — shows a pop-up inside the panel
- `Deck App: Send JSON` — dispatched as a `SAMMISendJSON` DOM event (useful for developers building on top of SAMMI Panel)

### Other Alternatives

[Deck Mate Control](https://play.google.com/store/apps/details?id=com.flipstream.android.deckmatecontrol&pli=1), developed by SAMMI Community member Flipstream, is an Android-exclusive alternative to SAMMI Panel. 
