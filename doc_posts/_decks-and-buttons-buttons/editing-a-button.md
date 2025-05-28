---
title: Editing a Button
num: 1
---

Right-clicking on a button while editing a Deck via the Deck Editor will open a context-menu giving you options related to that button. For the options that have further context, click on the menu option to jump to that portion. 

- **Edit Appearance** Customize the way your button looks! Check [Appearance Options](#appearance-options) for more details.
- **Edit Settings** Configure the way your button behaves! Check [Settings](#settings) for more details.
- **Edit Triggers** Configure the triggers attatched to a button, which determine different ways the button can be fired other than pressing it with a Deck App. Check the [Triggers Introduction](#placeholder) Section to learn about how they operate and how to navigate this window!
- **Edit Commands** Configure the commands inside your button, which are the instructions the button carries out when triggered. Check the [Commands Introduction](#placeholder) Section to learn about how they operate and how to navigate the commands editor! This menu also opens when <u>Double clicking the button</u>
- **Edit Release Commands** The same as Edit Commands, but for when a button is released.
- **Edit Default Variables** Configure default variables to be initialized for your button upon starting up SAMMI. Learn more in the [Variables - Default Variables](#placeholder) section.
- **Copy Button** Copies a button's contents, as well as it's transformations on a deck, to memory, so you can paste a duplicate in a blank space.
- **Delete Button** Deletes a button from the deck it resides in.
- **Export JSON** Exports a button's contents to your computer's clipboard as a JSON string, fit for sharing with others and importing.
- **Group ID: XXX** Clicking this copies the button's current Group ID to your computer's clipboard.
- **Button ID: XXX** Clicking this copies the button's current ID to your computer's clipboard.

### Appearance Options

Clicking on **Edit Appearance** from a button's context menu will open up a window dedicated to customizing the way your button looks in the Deck. Not only does this matter for organization, but doing so also directly impacts your use with a Deck App.

{% include image.html external="true" src="https://fakeimg.pl/600x400" alt="placeholder"%}

Upon opening, you will be greeted with color options on the left, label information in the center, and miscellanous details on the right.

For color, you have a color pallete you can click and drag through, as well as fine-tuning in the form of HSL, RGB, and Hex values. If you cannot decide, there is a random button aswell.

For the label, you are able to put any text you'd like on the button. You also have the ability to write text on multiple lines.

{% include alert.html text="The way your button will look depends on the way your button is sized on the Deck. Long text with little width will look very small, and vice versa. Make sure to frequently save and check how it looks!" type="warning" %}

For miscellaneous customization, you have the ability to pick an image to be plastered ontop of your button by clicking the folder icon, and choosing an image using the file explorer that pops up. You can remove an image from a button by clicking **Remove**.

{% include alert.html text=".gif files are supported! They will only appear animated while using a Deck App." type="info" %}

By default, the image will resize, as well as attempt to maintain it's aspect ratio, and overflow within the button to do so. This can cause the image to crop akwardly, so play around with changing the grid spacing of your Deck, or turn off Grid Snapping.

Checking the box **Stretch to Size** will stretch the image to fit within the bounds of the button on the Deck. This eliminates the cropping of the image, but in return, stretches it to resolve itself.

Checking **Transparent Button** will remove the background of the image, but maintain the border.

**Border Size** allows you to adjust the size of the border on the button, with the very left being no border, and very right being most border.

### Settings

Clicking on **Edit Settings** from a button's context menu will open a window showcasing all the different options you can configure to change the way your button behaves in different scenarios.

- **Button ID** allows you to change your [Button's ID](#placeholder)
- **Group ID** allows you to change your Button's [Group](#placeholder)
- **Allow Queue** switch toggles on or off [Queueing](#placeholder) for a button. Off by default
- **Allow Button Overlap** switch toggles on or off [Button Overlapping](#placeholder) for a button. Off by default
- **Local Variable Persist** switch toggles on or off [Persistent Variables](#placeholder) for a button. On by default
- **Press Type** A carousel of choices to set the button's [Press Type](#press-type)