---
title: Editing a Deck
num: 1
---

To edit a Deck's contents such as appearance, button layout, and more, Double Click on a Deck from the Deck Menu, or, Right click a Deck from the same menu and click **Edit Deck**.

You will be greeted with the...

### Deck Editor

{% include image.html external="true" src="https://fakeimg.pl/600x400" alt="placeholder"%}

This is where you manage how Buttons are laid out across your Deck, Button details such as their commands, appearance, settings... as well as some extra details about your Deck!

Starting with the big blank area!

#### Button Grid

{% include image.html external="true" src="https://fakeimg.pl/600x400" alt="placeholder"%}

Each blank grid space represents where a Button may be created.

You may create a Button by double-clicking a blank space.
Right-clicking on a blank space will open a context menu with extra features.

- **Create Button** Creates a new button, no different from double clicking.
- **Paste Button** Pastes a copied button
- **Import from JSON** Allows you to import a button from a string of text from your clipboard. Must be in JSON format! Learn more about [Sharing Buttons](#placeholder)

After you create a button, you can transform it's position and change it's dimensions!

- Click and drag to move the button to other spaces
- Click and drag any side or corner to stretch it out in that direction

Right-clicking on a button will open a context menu with all options related to that button such as appearance, settings, inner commands, and more, which can be explored in the [Buttons](#placeholder) section.

#### Deck and Grid Options

Along the top of the Deck Editor is a options banner full of Deck, as well as Editor related options.

- **Name** - The name of your Deck.
- **Grid Snapping** - Whether you want your Deck to have a grid that Buttons snap and adhere to when dragged.
- **X** - How many columns of grid spaces you want available in your Deck. Max 50.
- **Y** - How many rows of grid spaces you want available in your Deck. Max 50.
- **Adaptive Resizing** - Whether you want Buttons to resize alongside changing grid size.
- **Undo & Redo** - Allows you to Undo/Redo any Deck action like button transformations, Deck options changed, etc.
- **Lock** - Allows you to encrypt a Deck with a password.
  - Only available in [Developer Mode](#placeholder).
- **Hide Button Icons** - Hides any [Button Icons](#placeholder) visible on your Buttons.

#### Saving your Deck

The top right of the Deck Editor has a **Cancel**, and **Save** button.

It is important to save your deck whenever you make any changes, otherwise nothing will be saved. Conversely, if you make a mistake, you can either undo, or to be safe, cancel all the operations altogether.

It is also important that you save your deck whenever you edit any button's triggers, as those triggers might not apply until the deck itself is saved.