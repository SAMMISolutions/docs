---
layout: default
title: Crowd Control
menu: Integrations
num: 5
permalink: /integrations/crowd-control
type: fullpage
version: 202322
---

{% include alert.html text="This integration no longer exists, and is here for legacy purposes to those already using it." type="warning" %}

Our integration connects SAMMI with Crowd Control, providing an interactive gaming experience where viewers on platforms like Twitch and YouTube can directly impact your games.

#### Download 
<iframe frameborder="0" src="https://itch.io/embed/2110758?bg_color=222222&amp;fg_color=e4e3e3&amp;link_color=103b93&amp;border_color=141617" width="552" height="167"><a href="https://sammisolutions.itch.io/crowd-control">Crowd Control by SAMMI</a></iframe>

#### Install
You can follow the [Extension Install Guide](https://sammi.solutions/extensions/install)

#### Bridge Interface 

You can select the platform, username, game and pack in Bridge. 

{% include image.html w="50" src="crowdcontrol_bridge.png" alt="Crowd Control Interface" %}


#### Crowd Control Commands
SAMMI offers several commands for Crowd Control:

{% include alert.html text="These commands needs some time to execute, we recommend to use <a href='/docs/commands/wait#waituntilvariableexists'>Wait Until Variable Exists</a> command." type="warning" %}

| Command                  | Description |
|--------------------------|-------------|
| Get Effects for current game | Returns an object with all the available effects for the selected game/pack in the bridge. |
| Get Game List | Returns an object array with all available Crowd Control games. |
| Get Connection Status | Returns the connection status, returning 0 if not connected, and 1 when connected. |
| Toggle Connection Status | Changes your connection status based on the connection settings from the bridge. Returns 0 if not connected or 1 when connected. |
{:class='table table-primary w-auto table-hover data-toggle='table'}

#### Crowd Control Triggers

| Trigger                  | Description |
|--------------------------|-------------|
| Effect Success | Triggered whenever an effect is successfully activated. |
| Effect Failure | Triggered whenever an effect fails to trigger. |
| Effect Request | Triggered whenever an effect is requested. This is always followed by either an Effect Success or an Effect Failure trigger. |
| Timed Effect Update | Triggered whenever a timed effect is updated, such as when the effect has started (begin), the game was paused (pause), or resumed (resume). |
{:class='table table-primary w-auto table-hover data-toggle='table'}


