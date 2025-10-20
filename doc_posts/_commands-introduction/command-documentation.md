---
title: Command Documentation
num: 4
---

When reading the documentation for a command, it may look daunting at first. You'll get a hang of it once you understand the structure! So let's break it down into three sections; Description, Parameters, and Examples.

{% include image.html external="true" src="https://i.imgur.com/sJ1omJ3.png" alt="" %}

<u>**Description**</u>

Describes what the command does. Sometimes commands go very in detail about how it operates, or is very plainly stated.

There may be some additional concerns, or generally helpful info attatched at the end, so don't skim over those!

<u>**Parameters**</u>

Every command documented will come with a table of all of the parameters that it contains.

Each of these parameters map one to one with how they are displayed in SAMMI, the table being top to bottom, and the command in SAMMI reading left to right.

Parameters in the table state their **Name**, **Type**, **Value Type**, and **Description**.

The Name is the label you see above the parameter from within SAMMI.

The Type is the type of parameter you are working with.\
This is crucial, because each type may not work as you expect it to. For easy access, you can click on the type and be taken directly to the documentation on said parameter type so you know how to work with it. A big example of this is text boxes vs. expression boxes, as the way you type in them are vastly different.\
Even if you know how a parameter type works, the command might add some additional functionality unique to itself that isn't exhibited in other commands, which is clarified in the description of the parameter in this table.

The Value Type is the expected value type to be passed to the parameter.\
Some parameter types, like Text boxes, will only ever accept strings, because the parameter itself takes the input and converts it to be a string.\
Other parameter types, like expression boxes, can evaluate to any value type you want.\
This exists to inform you for cases like expression boxes, where you can put in various different value types, but the command expects a specific type of value. If the wrong value type gets passed, the command is likely to become unstable, and crash the program.

The Description simply explains what the parameter is, and any unique behavior with it.

<u>**Examples**</u>

Some command documentation will come with an examples section. Some examples are simple, like showing a table of inputted values, and their outputs, while some examples are fully featured, with a button you click that pops up a modal with a screenshot from SAMMI, and a Button JSON string that can be copied to your clipboard, and imported directly into a SAMMI for your own tinkering.