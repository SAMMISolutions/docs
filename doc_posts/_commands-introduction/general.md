---
title: General
num: 0
---

{% include alert.html text='This section assumes you finished reading the <a href="decks-and-buttons/introduction">Decks and Buttons - Introduction</a>!' type="warning" %}

{% include image.html w="100" src="commands.png" alt="Four commands stacked ontop of each other in the commands editor, showing their order of exection and description of what the commands are doing, on the left" %}

Commands are how you make *any* interactions within SAMMI Core. They are what make buttons do actions when they are triggered!

Commands are placed inside buttons, and take the form of a block, which can be dragged, re-arranged, configured, and organized within your button by using the [Commands Editor](#commands-editor) (explained further ahead). Some commands are special and let you nest other command blocks inside them, some have special rules to follow, but the majority of the time, they run from <u>top to bottom</u> in the editor, one after the other. This is not the case when using *Delays* however, which is strongly discouraged, as it's considered legacy.

To read this "commands" category, each section introduces a concept, then has all available commands related to said concept. It's recommended to familiarize yourself with those concepts before checking out the commands. You do not need to memorize all commands and how they work before moving on, the docs are here to help you learn and remind yourself of commands as you need it, not to master.