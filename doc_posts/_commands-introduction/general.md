---
title: General
num: 0
---

{% include alert.html text='This section assumes you finished reading the <a href="decks-and-buttons/introduction">Decks and Buttons - Introduction</a>!' type="warning" %}

Commands are how you make *any* interactions within SAMMI Core. They are what make buttons do actions when they are triggered! Commands are placed inside buttons, and take the form of a block, which can be dragged, re-arranged, configured, and organized within your button by using the [Commands Editor](#commandseditor) (explained further ahead). Some commands are special and let you nest other command blocks inside them, some have special rules to follow, but the majority of the time, they run from <u>top to bottom</u> in the editor, one after the other. This is not the case when using *Delays* however, which is strongly discouraged, as it's considered legacy.

Double clicking a button or clicking **Edit Commands** from a button's context menu will bring you to the commands editor.

When you right click-Edit commands or double click on your button in your deck, you can press **+** or use `CTRL+N` keyboard shortcut to start adding commands to execute when the button is pressed.  

{% include video.html w="75" src="new-command.mp4" alt="Adding a command to a button" %}

- Once a button is triggered, all enabled commands are executed

- You can hover over a command name and press F1 on your keyboard to open Documentation in your default browser for the given command

  {% include video.html w="75" src="f1-commands.mp4" alt="Opening documentation by pressing F1" %}

- You can **disable a command** (and prevent it from executing) by checking **Off** on the very right side of the command. Disabled commands have a red color.  

  {% include image.html w="auto" src="disable-command.png" alt="Disabled command" %}

- You can copy a command (or multiple commands) by pressing the scissors icon and pasting it anywhere else (even in another button in another deck)  

  {% include video.html w="75" src="copy-commands.mp4" alt="Copying and pasting a button" %}

- You can freely rearrange your commands by pressing the ball icon (very left side) and dragging them to a different position. Select multiple commands to drag all of them at the same time. You can also use up and down arrows for the same effect.  

  {% include video.html w="75" src="move-commands.mp4" alt="Rearranging commands inside a button" %}

- If you accidentally delete or rearrange a command, you can press **Undo** to revert the action and **Redo** to redo the action.
- When typing in an input box, you can press **CTRL+Z** to undo what you typed last
- You can temporarily [block a button](button#blockbuttongroup) from executing 
- You can use comments to organize your buttons. Simply create a new [Comment](misc#comment) command, give it some relevant description and place all relevant commands inside of it! 

   {% include video.html w="75" src="comment-organize.mp4" alt="Organizing commands inside comments" %}





