---
title: Managing Decks
type: fullpage
num: 0
---

You can manage your deck's order, and whether it's enabled or not from what is known as the...

### Deck Menu

{% include image.html src="deck_menu.png" alt="A screencap of the SAMMI Core Dashboard, with the Deck Menu section highlighted showing various populated decks"%}

You can access the Deck Menu from SAMMI Core's Dashboard. 

Clicking on the big plus icon will open a context menu related to creating new Decks.

- **Add New Deck** - Adds a new empty Deck. You can also use <kbd>CTRL</kbd> + <kbd>N</kbd> from the Dashboard.
- **Paste Deck** - Imports an entire Deck from your clipboard. Must be in JSON format.

Once you have at least one Deck made, you can do the following:

- Clicking on a Deck will select it.
- Clicking and *holding* on a Deck will allow you to drag it freely. If other Decks are present in your Deck Menu, you may rearrange the order by dragging it inbetween other Decks, then letting go.
- Double-clicking on a Deck will open it in your Deck Editor.
- Right-clicking on a Deck will open a context menu for extra options for that Deck.
  - **Edit Deck** - Same as double-clicking. Will open Deck in your Deck Editor
  - **Delete Deck** - Deletes the Deck, Cannot be undone.
  - **Copy Deck** - Exports the entire deck to your clipboard in JSON format to store, or share with other users. Will prompt if you want to include images with it aswell.
  - **Duplicate** - Makes a clone of the Deck, and appends it to the end of the Deck Menu. Assigns a new ID upon duplication.
  - **Copy ID** - Copies the ID of a Deck to your clipboard. Useful for Deck related command usage.
- Clicking on the **Disable** checkbox will allow you to disable that Deck, and all buttons within that Deck, when attempted to be ran, will cease to do so. Buttons already running, as well as queued buttons, will run.

### Deck Management Menu (Legacy)

{% include image.html src="deck_management_menu.png" alt="A screencap of the SAMMI Core Dashboard, with the Legacy Deck Management Menu section highlighted"%}

Allows you to manage your Decks located in your Deck Menu.

{% include alert.html text="This menu is considered legacy, as you can do all of these actions in the Deck Menu itself, including some that aren't present here." type="warning" %}     

- **Edit Deck** - Allows you to edit currently selected deck, same as double clicking on the deck
- **Add New Deck** - Adds a new empty Deck.
- **Delete Deck** - Delete the currently selected deck, cannot be undone.
- **Move Left/Right** - Repositions the deck left or right.
- **Copy Deck** - Exports the entire deck to your clipboard in JSON format to store, or share with other users. Will prompt if you want to include images with it aswell.
- **Paste Deck** - Imports an entire Deck from your clipboard. Must be in JSON format.
- **Duplicate Deck** - Makes a clone of the Deck, and appends it to the end of the Deck Menu. Assigns a new ID upon duplication.