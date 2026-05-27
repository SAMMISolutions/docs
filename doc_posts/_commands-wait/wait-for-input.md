---
title: Wait For User Input
num: 13
redirect_from:
  - commands/214
---

Pauses a button execution and a pop up message appears for the user asking for their input. Once the user presses OK, it resumes the button execution and continues with the rest of the commands.

By default, only the current button is paused while the dialog is open — all other buttons continue running normally in the background. If you want all buttons to freeze until the dialog is closed (legacy behavior), enable **Wait For User Input: Block All Buttons** in SAMMI Settings.

{% include alert.html text="Be mindful using this command. If the popup stays on for a long time before the user dismisses it, they might get disconnected from any active websockets (such as Bridge, Twitch or OBS)." type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|Message| String | Popup message to show the user
|Default Value | String | Default value prefilled in the input field 
|Save Variable As | String | Variable name to save the result
{:class='table table-primary'}









