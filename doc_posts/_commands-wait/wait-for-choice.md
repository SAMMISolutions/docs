---
title: Wait For User Choice
num: 12
---

Pauses a button execution and a pop up message appears for the user letting them select 'Yes' or 'No'. Once the user selects one of the options, it resumes the button execution and continues with the rest of the commands.

{% include alert.html text="Be mindful using this command. If the popup stays on for a long time before the user dismisses it, they might get disconnected from any active websockets (such as Bridge, Twitch or OBS)." type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|Message| String | Popup message to show the user
|Save Variable As | String | Variable name to save the result
{:class='table table-primary'}







