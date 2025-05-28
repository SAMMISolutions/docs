---
title: Commands Editor
num: 1
---

This window can be broken up into three segments. We'll focus on the big section in the middle of the screen to begin.

## Commands List

This is where all commands are placed within your button! It will probably look blank to you if you've opened a fresh button. It allows you to re-arrange, configure, and organize your commands.

There is a gray bar with a bunch of buttons. This is known as the **Quickbar**.

### Quickbar

The Quickbar is your entry point to adding commands, as well as pasting commands from memory, and using quick access buttons to paste commonly used commands. This bar is context sensitive, meaning, depending on the command above it, different options become available. Let's focus on the default options first.

| Button Icon | Description |
|-------------|-------------|
|{% include image_table.html w="50" src="qb_plus.png" alt="Quickbar button with a plus sign" %}| Add a command from a searchable context menu full of [all available commands](#placeholder). |
|{% include image_table.html w="50" src="qb_paste.png" alt="Quickbar button with a clipboard symbol" %}| Paste a command previously copied. |
|{% include image_table.html w="50" src="qb_comment.png" alt="Quickbar button with a comment symbol, reminiscent of javascript's multiline comments" %}| Quickly inserts the [Comment](#placeholder) command. |
|{% include image_table.html w="50" src="qb_123.png" alt="Quickbar button with the numbers '123' as it's icon" %}| Quickly inserts the [Set Local Variable](#placeholder) command. |
|{% include image_table.html w="50" src="qb_abc.png" alt="Quickbar button with the letters 'ABC' as it's icon" %}| Quickly inserts the [Set String Variable](#placeholder) command. |
|{% include image_table.html w="50" src="qb_hourglass.png" alt="Quickbar button with an hourglass as it's icon" %}| Quickly inserts the [Wait For Timeout](#placeholder) command. |
|{% include image_table.html w="50" src="qb_case.png" alt="Quickbar button with a plus sign, surrounded with curly braces as it's icon." %}| Quickly inserts the [Case statement](#placeholder) command. Only visible when quickbar is inside the [Switch Statement](#placeholder) command.|
|{% include image_table.html w="50" src="qb_mailbox.png" alt="Quickbar button with a mailbox as it's icon." %}| Quickly inserts the [Wait Until Variable Exists](#placeholder) command. Only visible when quickbar is directly below a asynchronous command.|
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }

### Command Blocks

Now, lets look at interacting with commands when placed inside the editor.

{% include image.html w="100" external="true" src="https://i.imgur.com/CTQGpbU.png" alt="Command with parts sectioned off" %}

#### Configuration

| Button Icon | Description |
|-------------|-------------|
|{% include image_table.html w="50" src="cm_move.png" alt="Command button with a perpendicular arrow design" %}| Clicking and holding this button allows you to drag a command to a different position in the command list. If the target command holds other commands inside of it, it will move all those commands together. Selecting multiple commands will also move them altogether. |
|{% include image_table.html w="50" src="cm_copy.png" alt="Command button with a copy sign" %}| Copies command into memory, ready to be pasted. |
|{% include image_table.html w="50" src="cm_paste.png" alt="Command button with a clipboard symbol" %}| Paste a command previously copied. |
|{% include image_table.html w="50" src="cm_delete.png" alt="Command button with a trashbin symbol" %}| Deletes the command. |
|{% include image_table.html w="50" src="cm_move_up.png" alt="Command button with arrow pointing up" %}| Pushes command upwards in the list. |
|{% include image_table.html w="50" src="cm_move_down.png" alt="Command button with arrow pointing down" %}| Pushes command downwards in the list. |
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }

The checkbox slightly under the move button lets you **select** commands. When a command or batch of commands are selected, you can:

- Move them all together via using the move button
- Delete them all, by clicking **Delete Selected** at the bottom left
- Copy them all, by clicking **Copy Selected** at the bottom left

The black box contains the command's name. Hovering over it expands the box to show the full command name if it exceeds the length of the box.\
Clicking this box allows you to change the type of command it represents.\
Pressing <kbd>F1</kbd> while hovering over this box navigates to the documentation for the command using your default web browser. Extremely handy to quickly reference how a command works, or practical use cases!

#### Parameters

The next section of a command is it's parameters.

Parameters are what you fill as a user in order to tell a command what data it should process.\
On average, a command typically has two to three parameters to fill.\
Some parameters are optional, but isn't indicated in the app itself. Please make sure to check the command's documentation.\

Each parameter has a *label* giving context as to what filling the parameter does.\
Each parameter also has a *type* it can be. Here is a full list explaining them all:

| Type ID | Title | Image | Description |
---|----|----|---
0 | Text Box (Resizable) | {% include image_table.html w="50" external="true" src="https://i.imgur.com/LjwqXsq.gif" alt="a gif file showing a user typing into a text box" %} | Resizable text box that allows for newline by clicking <kbd>Enter</kbd>
2 | Check Box | {% include image_table.html w="50" external="true" src="https://i.imgur.com/g0aNHOB.png" alt="a checked check box" %} | Checked is true, unchecked is false
4 | OBS Scenes Box |  | Text box, but has a drop down arrow that lets you easily pick an OBS scene from a searchable context menu
5 | OBS Sources Box |  | Text box, but has a drop down arrow that lets you easily pick an OBS source from a searchable context menu
6 | OBS Filters Box |  | Text box, but has a drop down arrow that lets you easily pick an OBS Filter from a searchable context menu
7 | Keyboard Key Box | Clicking pops up a context menu of all supported keys. Additionally, With this menu open, clicking a key on your keyboard will automatically fill the box with the pressed key.
8 | Compare Box | | Clicking pops up a searchable context menu of all supported compare types. Used commonly in conditional commands. To learn what each compare type does and how to use it, visit [Commands - Conditionals](#placeholder)
9 | Math Box | | Clicking pops up a searchable context menu of all supported math operators. Used commonly in variable manipulation commands. To learn what each operator does and how to use it, visit [Commands - Variables](#placeholder)
10 | Sound path box, defaultValue should be `""`, returns its path
11 | Slider 0 to 100%, defaultValue should be 0-1, returns a float 0 to 1
14 | Normal white box, defaultValue can be anything
15 | Variable box (yellow box), defaultValue should be a string, returns whatever variable is in the yellow box
17 | Color box, defaultValue should be a number, returns the selected color
18 | Select box value, defaultValue should be `0`, shows a list of all the options you provided when clicked and returns a numeric value of the selected option
19 | Select box string, defaultValue should be a string, returns a string the user selected
20 | Select box string typeable, defaultValue should be a string, returns a string the user selected or typed in the box
22 | File path, defaultValue should be a string, returns the selected file path
23 | Image path, defaultValue should be a string, returns the selected image path
24 | Twitch reward redeem ID, defaultValue should be a number, returns the selected reward ID
30 | No box at all, only label is present
32 | OBS Pull Box 
33 | Select Deck Box, defaultValue should be a number
34 | Password Box, same as 14, except the string is displayed as *****
35 | Twitch Account Box, select box with all linked Twitch accounts, returns the selected option