---
title: Premade Variables
num: 3
---

The following premade/permanent global variables are accessible from all the buttons and their commands at all times. These global variables can be viewed in the Variable Viewer in your receiver. You can retrieve/access them by using the `Get Global Variable` command, or reference them with `global.variablename` in a command.



| Variable | Explanation|
|-------|--------|--------
{% include selectAll.html text="bridge_connected" %}| True if connected, false if not connected
{% include selectAll.html text="twitch_chat_connected" %}| True if connected, false if not connected
{% include selectAll.html text="twitch_client_id" %}| SAMMI Twitch Client ID, used in Twitch API calls
{% include selectAll.html text="main_directory" %}| Main directory where SAMMI folder resides. Useful for extension makers to be able to easily copy files.
{% include selectAll.html text="Architecture" %}| Type of architecture you're on. x64 or x86.
{% include selectAll.html text="elapsed_time" %}| Elapsed time in seconds since you last started SAMMI
{% include selectAll.html text="since_2020" %}| Elapsed time in seconds since January 1st, 2020.
{% include selectAll.html text="mouse_x" %}| Current x position of your mouse
{% include selectAll.html text="mouse_y" %}| Current y position of your mouse
{% include selectAll.html text="twitch_accounts" %}| Array of all linked Twitch account login names
{% include selectAll.html text="Main" %}| An object containing information about your main OBS connection.
{% include selectAll.html text="Main.connected" %}| Whether SAMMI is currently connected to your main OBS, true = connected, false = disconnected
{% include selectAll.html text="Main.current_scene" %}| Current scene in your main OBS
{% include selectAll.html text="Main.previous_scene" %}| Previous scene in your main OBS
{% include selectAll.html text="administrator_mode" %}| True if running in Administrator mode
{% include selectAll.html text="trigger_type" %}| Array that lists all available trigger types
{% include selectAll.html text="deck_connected" %}| Returns true if SAMMI deck is connected, false if not.
{:class='table table-secondary w-auto table-hover text-break' }
