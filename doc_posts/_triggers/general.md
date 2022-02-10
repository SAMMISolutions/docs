---
layout: default
title: General
menu: Triggers
num: 1
type: fullpage
permalink: /triggers/general
---

LioranBoard has some very useful internal triggers.\
For example, you can make your buttons automatically trigger every time you start LioranBoard, when you press a specific hotkey or put them on a timer.

#### Add a new trigger 
You can attach a trigger by right clicking on a button - Add/Edit Twitch Triggers, clicking on the + sign and selecting one of the General Triggers.
In your button commands, use [Trigger Pull Data]({{ "commands/trigger#triggerpulldata" | relative_url }}) command to retrieve all the provided information from the event.   

#### Trigger types  


##### Hotkey

Trigger a button when you press a specified hotkey.\
You can select a key and attach a modifier (or multiple modifier).

| Condition | Explanation | 
|-------|--------|
| Key | Dropdown | Key press to listen to
| Ctrl (optional) | Checkbox | Whether you want to attach Ctrl modifier, for example press CTRL+K.
| Alt (optional) | Checkbox | Whether you want to attach Alt modifier, i.e. press Alt+K.
| Shift (optional) | Checkbox | Whether you want to attach Shift modifier, i.e. press Shift+K.
{:class='table table-primary' }

{% include alert.html text="Trigger Pull Data command doesn't let you check which key press triggered the button" type="warning" %} 

<hr>

##### Repeat Interval
Repeat interval allows you to continously trigger a button on a timer.\
**Repeat interval is started as soon as LioranBoard starts up (or resets) and cannot be freely enabled or disabled with a command.**\
You can use **[Block Button/Group]({{ "commands/button#blockbuttongroup" | relative_url }})** command to block a button on a timer from executing.

| Condition | Explanation | 
|-------|--------|
| Milliseconds | Int | How often to trigger the button.
{:class='table table-primary' }


<hr>


##### LioranBoard Trigger
These triggers allows you to listen to LioranBoard state and connection changes.

| Condition | Explanation | 
|-------|--------|
| Type | Dropdown | Select type of the trigger.
{:class='table table-primary' }

| Trigger Name | Event | 
|-------|--------|
|LioranBoard Startup| Lioranboard starts up. 
|LioranBoard Shutdown | Before LioranBoard shut downs. Does not work if LioranBoard crashes.
|LioranBoard Deck Reload| Decks are reloaded (when you press Save button)
|LioranBoard Reset | You use the reset button.
|OBS Connected | Every time LioranBoard connects to OBS.
|OBS Disconnected|Every time LioranBoard disconnects from OBS.
|Twitch Connected | Every time LioranBoard connects to Twitch.
|Twitch Disconnected |Every time LioranBoard disconnects from Twitch.
|Streamdeck/Transmitter Connected| Every time Stream Deck or Transmitter connects to LioranBoard.
|Streamdeck/Transmitter Disconnected| Every time Stream Deck or Transmitter disconnects from LioranBoard.
{:class='table table-secondary table-hover' }

<hr>


##### Extension Trigger

Extension triggers can come from Transmitter extensions or from [Trigger Extension Trigger]({{ "commands/trigger#triggerextensiontriggers" | relative_url }}) command.