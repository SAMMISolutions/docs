---
title: "Wait for Dialog"
num: 14
version: 202610
redirect_from:
  - commands/354
---

Pauses a button execution and shows a dialog with custom options. Once the user selects one of the options, SAMMI saves the selected value and resumes the button execution.

By default, only the current button is paused while the dialog is open — all other buttons continue running normally in the background. If you want all buttons to freeze until the dialog is closed (legacy behavior), enable **Wait For Dialog: Block All Buttons** in SAMMI Settings.

{% include alert.html text="Be mindful using this command. If the popup stays on for a long time before the user dismisses it, they might get disconnected from any active websockets (such as Bridge, Twitch or OBS)." type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|Message|String|Popup message to show the user.
|Options|String|Options to show in the dialog. Put each option on a new line.
|Save Variable As|String|Variable name to save the selected option.
{:class='table table-primary'}

{% include image.html w="100" src="wait-for-dialog-command.png" alt="Wait for Dialog command setup" %}

{% include image.html w="75" src="wait-for-dialog-popup.png" alt="Wait for Dialog popup with selectable options" %}
