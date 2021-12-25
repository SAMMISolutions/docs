---
layout: default
title: Premade Triggers
menu: Triggers
num: 3
type: fullpage
permalink: /triggers/premade
---
LioranBoard has some very useful premade triggers.     
For example, you can make your buttons automatically trigger every time you start LioranBoard or every time your LioranBoard connects to Transmitter. 

##### Attach a premade trigger to a button 
You can attach a premade trigger by right clicking on a button - Add/Edit Twitch Triggers, clicking on the + sign and selecting Extension trigger.


| Trigger Name | Event | Math: Trigger Pull (extension)| 
|-------|--------|
| {% include selectAll.html text="!initlioranboard" %}  | Lioranboard starts up. |
| {% include selectAll.html text="!reinitializing" %} | Decks are reloaded. | 
| {% include selectAll.html text="!resetlioranboard" %} | You use the reset button. |
| {% include selectAll.html text="!obsconnected" %} | Receiver first connects to OBS. |
| {% include selectAll.html text="!twitchconnected" %}  | Receiver first connects to Twitch chat. |
| {% include selectAll.html text="!transmitterconnected" %} | Receiver first connects to Transmitter. |
| {% include selectAll.html text="!obsalways" %} | Every time Receiver connects to OBS. |
| {% include selectAll.html text="!twitchalways" %} | Every time Receiver connects to Twitch chat. |
| {% include selectAll.html text="!transmitteralways" %} | Every time Receiver connects to Transmitter.|
| {% include selectAll.html text="!leavescene <code>Scene Name</code>" %}|  Every time you leave a scene. | 1 = transition type, 2 = transition duration|
| {% include selectAll.html text="!enterscene <code>Scene Name</code>" %}| Every time you enter a scene. | 1 = transition type, 2 = transition duration|
| {% include selectAll.html text="!ban" %} | A user gets banned in your channel. | 1 = name of the mod, 2 = user name who got banned| 
| {% include selectAll.html text="!unban" %} | A user gets unbanned in your channel. | 1 = name of the mod, 2 = user name who got unbanned |
| {% include selectAll.html text="!timeout" %} | A user gets timed out in your channel. | 1 = name of the mod, 2 = user name who got timed out, 3 = duration of the timeout in seconds |
| {% include selectAll.html text="!untimedout" %} | A user's timeout is cleared. | 1 = name of the mod, 2 = user name whose timeout got cleared |
| {% include selectAll.html text="!clearchat" %} | Every time chat gets cleared. | 1 = name of the mod who cleared the chat |
{:class='table table-primary table-hover' }

