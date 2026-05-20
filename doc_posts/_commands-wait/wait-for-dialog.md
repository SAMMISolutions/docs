---
title: "Wait for Dialog"
num: 14
version: 202610
redirect_from:
  - commands/354
---

Pauses a button execution and shows a dialog with custom options. Once the user selects one of the options, SAMMI saves the selected value and resumes the button execution.

{% include alert.html text="Be mindful using this command. If the popup stays on for a long time before the user dismisses it, they might get disconnected from any active websockets (such as Bridge, Twitch or OBS)." type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|Message|String|Popup message to show the user.
|Options|String|Options to show in the dialog. Put each option on a new line.
|Save Variable As|String|Variable name to save the selected option.
{:class='table table-primary'}

{% include image.html w="100" src="wait-for-dialog-command.png" alt="Wait for Dialog command setup" %}

{% include image.html w="75" src="wait-for-dialog-popup.png" alt="Wait for Dialog popup with selectable options" %}
