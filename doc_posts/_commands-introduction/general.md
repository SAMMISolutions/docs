---
title: General
num: 0
---

{% include alert.html text='This section assumes you finished reading the <a href="decks-and-buttons/introduction">Decks and Buttons - Introduction</a>!' type="warning" %}

Commands are how you make *any* interactions within SAMMI Core. They are what make buttons do actions when they are triggered! Commands are placed inside buttons, and take the form of a block, which can be dragged, re-arranged, configured, and organized within your button by using the [Commands Editor](#commandseditor) (explained further ahead). Some commands are special and let you nest other command blocks inside them, some have special rules to follow, but the majority of the time, they run from <u>top to bottom</u> in the editor, one after the other. This is not the case when using *Delays* however, which is strongly discouraged, as it's considered legacy.