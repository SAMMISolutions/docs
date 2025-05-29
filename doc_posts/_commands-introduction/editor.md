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

#### 1. Configuration

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

#### 2. Parameters

The next section of a command is it's parameters.

Parameters are what you fill as a user in order to tell a command what data it should process.\
On average, a command typically has two to three parameters to fill.\
Some parameters are optional, but isn't indicated in the app itself. Please make sure to check the command's documentation.\

Each parameter has a *label* giving context as to what filling the parameter does.\
Each parameter also has a *type*, which can be used in many different ways in commands. Please consult each individual command's documentation to get further context on what is expected from the user!

The most common types of parameters you see will involve <u>Text Boxes (White, Green, Blue, Red, Black)</u>, and <u>Expression Boxes (Yellow)</u>.

{% include alert.html text="Expression boxes have extremely different rules when filling them out compared to Text Boxes, and it is critical to be aware of them. You can learn more in <a href='#placeholder'>Parameter Boxes</a>" type="info" %}

Here is a full list of all available parameter types:

| Type ID | Title | Image | Description |
---|----|----|---
0 | Text Box (Resizable) | {% include image_table.html w="50" external="true" src="https://i.imgur.com/LjwqXsq.gif" alt="a gif file showing a user typing into a text box" %} | Resizable text box that allows for newline by clicking <kbd>Enter</kbd>
2 | Check Box | {% include image_table.html w="50" external="true" src="https://i.imgur.com/g0aNHOB.png" alt="a checked check box" %} | Checked is true, unchecked is false
4 | OBS Scenes Box |  | Text box, but has a drop down arrow that lets you easily pick an OBS scene from a searchable context menu
5 | OBS Sources Box |  | Text box, but has a drop down arrow that lets you easily pick an OBS source from a searchable context menu
6 | OBS Filters Box |  | Text box, but has a drop down arrow that lets you easily pick an OBS Filter from a searchable context menu
7 | Keyboard Key Box | {% include image_table.html w="50" external="true" src="https://i.imgur.com/H0CkqPi.gif" alt="a gif file showing a user typing into a text box" %} | Clicking pops up a context menu of all supported keys. Additionally, With this menu open, clicking a key on your keyboard will automatically fill the box with the pressed key.
8 | Compare Box | | Clicking pops up a searchable context menu of all supported compare types. Used commonly in conditional commands. To learn what each compare type does and how to use it, visit [Commands - Conditionals](#placeholder)
9 | Math Box | | Clicking pops up a searchable context menu of all supported math operators. Used commonly in variable manipulation commands. To learn what each operator does and how to use it, visit [Commands - Variables](#placeholder)
10 | Sound Path Box | | Text box, but additionally contains a folder button which lets you easily use a system dialog to pick a sound file. Only .ogg files are excepted.
11 | Slider |  | A slider that maps between a range of values.
14 | Text Box (White Box) | | A basic text box. very common in command usage, and the baseline for a lot of other parameter types. 
15 | Expression Box (Yellow Box) | | A special box that accepts an [Expression](#placeholder). Not to be confused with a text box.
17 | Color Picker | Clicking opens a color picker window with various color related options.
19 | Dropdown |  | Clicking pops up a searchable context menu of options defined by the command.
20 | Text Box (Dropdown) | |  Text box, but has a drop down arrow that opens a searchable context menu of options defined by the command.
22 | File Path Box | | Text box, but additionally contains a folder button which lets you easily use a system dialog to pick any file, or files specified only compatible with whatever command it's attatched to.
23 | Image Path Box | | Text box, but additionally contains a folder button which lets you easily use a system dialog to pick any supported image file.
24 | Text Box (Twitch Redeem Dropdown) | | Text box, but has a drop down arrow that opens a searchable context menu of all channel point redeems for the main connected twitch account. Upon selecting, the box visually will show the name, but focusing inside of it shows the reward id.
30 | Label | | Only label is present.
32 | OBS Pull Box | | Text box, but has a dropdown arrow to select any linked OBS connections for the command to accept. "Main" by default. 
33 | Select Deck Box | | Clicking pops up a searchable context menu of all decks loaded in SAMMI.
34 | Text Box (Password) | | Text box, except the string is displayed using asterisks (*) to visually hide sensitive data.
35 | Text Box (Twitch Account Dropdown) | | Text box, but has a drop down arrow that opens a searchable context menu of all linked Twitch accounts, used commonly in Twitch related commands. Depending on the command, leaving blank will default to the account listening to events.

#### 3. Configuration (Continued)

Delays are a method of delaying the execution of commands. You can learn more in the [Delays](#placeholder) section, however, **this is considered legacy and heavily recommended to not use. The alternative is to use the [Wait For Timeout](#placeholder) command.** 

The checkbox labelled **Off** allows you to disable the processing and execution of a command, great for:
- Fixing issues
- Test other functionality and temporarily disable existing logic
- Introduce reworked functionality but keep existing logic incase you need to roll back

If a command that encapsulates other commands is turned off, all commands inside will also be turned off.

## Options Header

Along the top of the commands editor is some extra options.

A **Check All** check box sits aligned with where the select checkbox is on commands. This lets you quickly select all commands inside the commands list to either move around, copy, or delete.

You can quickly edit the Button's [Label](#placeholder) and [ID](#placeholder) using the labelled input fields along the top.

You can undo, and redo actions made within your Commands List using the buttons provided at the top. Hotkeys currently are not supported at this time.

A "Open Documentation" button is at the top right, allowing you to quickly open it for future reference of topics. Convenient!

Another **Check All** check box sits aligned with where the **Off** checkbox is on commands. This lets you quickly turn off all commands inside the commands list.

## Options Footer

Along the bottom of the commands editor exists some more crucial functions in the form of buttons.

- **Delete Selected** allows you to delete any selected commands from the commands list. Will dynamically update a count in the text to indicate how many commands are selected.
- **Copy Selected** Same as Delete Selected, but for copying commands to memory. You can use any of the paste button icons in the commands list to paste at a desired position.
- **Open Variable Window** opens the [Variable Viewer](#placeholder) and will automatically navigate to this button's variables. <kbd>CTRL</kbd> + <kbd>Tab</kbd> does this aswell.

- **Save** Saves the deck, saving the button in the process. <kbd>CTRL</kbd> + <kbd>S</kbd> does this aswell.
- **Run** Saves the deck (including the button) then triggers the button. <kbd>CTRL</kbd> + <kbd>R</kbd> does this aswell.

{% include alert.html text="If your button relies on data provided from a trigger defined in the trigger menu, please note that testing the button this way will not include that information. Use the method directly and/or use <a href='#placeholder'>Test Triggers from SAMMI Bridge</a>" type="warning" %}

- **Ok** exits the commands editor without saving the deck or button, but will be saved whenever the deck is saved at a later time.
- **Cancel** exits the commands editor without saving the deck or button, and discards any changes that were made, reverting the button to what it was the last time it was saved. <kbd>Esc</kbd> does this aswell.