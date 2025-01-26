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

##### Gamepad
Trigger a button whenever you interact with a gamepad such as pressing and releasing digital features (buttons), or changing the value of an analog feature (triggers, sticks)


|Condition|Type|Explanation|
|--------|----|--------|
|Type | Dropdown | The type of feature you're interacting with. choices are `Digital`, or `Analog`.|
|Action | Dropdown | The action of the feature you're interacting with. If digital, your choices are `Pressed`, or `Released`. If analog, your choices are `Start` which will fire when the feature starts moving (for sticks this would be when moving in the x or y direction away from 0), `Change`, when the feature changes it's value at all, and `End`, when the feature returns back to it's default position (for sticks this would be when the x and y are at 0)|
|Target | Dropdown (Typeable) | The name of the feature that you're interacting with. Choose from the dropdown what feature you want to target, and make sure the section you pick from matches the type of feature you chose. Supports [Wildcards]({{ "triggers/introduction#wildcards" | relative_url }}).|
{:class='table table-primary' }

{% include alert.html text="Due to an oversight, <code>Horizontal</code>, <code>Vertical</code>, and <code>Value</code> pull data values are missing from the <code>Trigger Pull Data</code> command's dropdown. please manually type in the field's box <code>horizontal</code>, <code>vertical</code>, or <code>value</code> for the time being." type="warning" %}

| Pull Data Value | Data Type | Explanation |
|-------|------|--------|
| Action Type | String | The feature's type of action. values can be `pressed`, `released`, `start`, `change`, and `end`.|
|Horizontal| Number | The analog stick's horizontal position from `-1` to `1`. Negative means left, `0` means middle, positive means right. Only available when the feature type is analog, and the target used is a stick.|
|Vertical| Number | The analog stick's vertical position from `-1` to `1`. Negative means up, `0` means middle, positive means down. Only available when the feature type is analog, and the target used is a stick.|
|Value| Number |The analog trigger (as in gamepad feature)'s value from `0` to `1`. the more towards `1`, the more pressed down it is. Only available when the feature type is analog, and the target used is a trigger.|
| Pad Index | Number | The index associated to the gamepad that fired the trigger. Useful for separating out two different gamepad's interactions. Note, can change depending on the order in which gamepads are detected as connected. |
| Target | String | The name of the feature that fired the trigger. You can find the name of all gamepad feature targets in the Target field's dropdown list. |
| Type | String | The type of feature itself. values can be `digital` or `analog`. |
{:class='table table-secondary table-hover' }


##### Hotkey

Trigger a button when you press a specified hotkey.\
You can select a key and attach a modifier (or multiple modifier).

| Condition | Type | Explanation |
|-------|--------|
| Key | Dropdown | Key press to listen to
| Ctrl (optional) | Checkbox | Whether you want to attach Ctrl modifier, for example press CTRL+K.
| Alt (optional) | Checkbox | Whether you want to attach Alt modifier, i.e. press Alt+K.
| Shift (optional) | Checkbox | Whether you want to attach Shift modifier, i.e. press Shift+K.
{:class='table table-primary' }

{% include alert.html text="Trigger Pull Data command lets you check which key press triggered the button" type="info" %}

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
|SAMMI Crash | Every time SAMMI crashes.
|OBS Connected | Every time SAMMI connects to OBS.
|OBS Disconnected|Every time SAMMI disconnects from OBS.
|SAMMI Bridge Connected| Every time SAMMI Bridge connects to SAMMI.
|SAMMI Bridge Disconnected| Every time SAMMI Bridge disconnects from SAMMI.
|SAMMI Panel Connected| Every time SAMMI Panel connects to SAMMI.
|SAMMI Panel Disconnected| Every time SAMMI Panel disconnects from SAMMI.
|Deck Enabled/Disabled|Triggers every time a deck is enabled/disabled.
|Third Party Connected| Third party application connects to SAMMI.
|Third Party Disonnected| Third party application disconnects from SAMMI.
{:class='table table-secondary table-hover' }

<hr>


##### Extension Trigger

Extension triggers can come from Bridge extensions or from [Trigger Extension Trigger]({{ "commands/trigger#triggerextensiontriggers" | relative_url }}) command.
