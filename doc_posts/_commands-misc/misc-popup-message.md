---
title: Popup Message
num: 8
redirect_from:
  - commands/141
---

Shows a window popup message.\
Useful for extension creators to be able to easily notify the user of important events.\

{% include alert.html text="Be mindful checking the 'Pause Button Execution' box. If the popup stays on for a long time before the user dismisses it, they might get disconnected from any active websockets (such as Bridge, Twitch or OBS)." type="warning" %} 

| Box Name | Type | Description |
|-------|--------|--------
|Message|	String|	The message you want to display. Can be multiline.
|Pause Button Execution| Checkbox |Choose whether you want to temporarily freeze SAMMI (i.e. pause all commands and SAMMI itself) while showing the popup. 
{:class='table table-primary'}









