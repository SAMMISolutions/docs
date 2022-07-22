---
title: "Trigger Extension Triggers"
num: 3
---

This is the same command Transmitter uses to send Extension triggers to SAMMI.\
Extremely useful as you can pass parameters from one button to another button (especially if it's an overlappable button with non persistent variables) and make it behave like a function in programming.

| Box Name | Type | Description |
|-------|--------|--------|
|Extension Trigger|String|The name of the extension trigger to send
|Trigger Data Object|Object|Same payload as sending data from the Transmitter. Populate the object with your desired parameters (simple values, arrays, other objects) you wish to be pulled in the receiving button.
{:class='table table-primary' }

{% include image.html w="75" src="trigger-ext-trigger.png" alt="Example of usage" %}














