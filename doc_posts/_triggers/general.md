---
layout: default
title: General
menu: Triggers
num: 1
type: fullpage
permalink: /triggers/general
---

SAMMI has some very useful internal triggers.\
For example, you can make your buttons automatically trigger every time you start SAMMI, when you press a specific hotkey or put them on a timer.

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
**Repeat interval is started as soon as SAMMI starts up (or resets) and cannot be freely enabled or disabled with a command.**\
You can use **[Block Button/Group]({{ "commands/button#blockbuttongroup" | relative_url }})** command to block a button on a timer from executing.

| Condition | Explanation |
|-------|--------|
| Milliseconds | Int | How often to trigger the button.
{:class='table table-primary' }


<hr>


##### SAMMI Trigger
These triggers allows you to listen to SAMMI state and connection changes.

| Condition | Explanation |
|-------|--------|
| Type | Dropdown | Select type of the trigger.
{:class='table table-primary' }

| Trigger Name | Event |
|-------|--------|
|SAMMI Startup| SAMMI starts up.
|SAMMI Shutdown | Before SAMMI shut down. Does not work if SAMMI crashes.
|SAMMI Deck Reload| Decks are reloaded (when you press Save button)
|SAMMI Reset | You use the reset button.
|OBS Connected | Every time SAMMI connects to OBS.
|OBS Disconnected|Every time SAMMI disconnects from OBS.
|Twitch Connected | Every time SAMMI connects to Twitch.
|Twitch Disconnected |Every time SAMMI disconnects from Twitch.
|SAMMI Deck/Bridge Connected| Every time SAMMI Deck or Bridge connects to SAMMI.
|SAMMI Deck/Bridge Disconnected| Every time SAMMI Deck or Bridge disconnects from SAMMI.
{:class='table table-secondary table-hover' }

<hr>


##### Extension Trigger

Extension triggers can come from Bridge extensions or from [Trigger Extension Trigger]({{ "commands/trigger#triggerextensiontriggers" | relative_url }}) command.