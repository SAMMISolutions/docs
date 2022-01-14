---
title: Premade Variables
num: 3
---

The following premade/permanent global variables are accessible from all the buttons and their commands at all times. 

| Variable | Explanation|  
|-------|--------|--------
{% include selectAll.html text="transmitter_connected" %}| true if connected, false if not connected
{% include selectAll.html text="twitch_chat_connected" %}| true if connected, false if not connected
{% include selectAll.html text="twitch_client_id" %}| LioranBoard Twitch Client ID, used in Twitch API calls
{% include selectAll.html text="main_directory" %}| Main directory where LioranBoard folder resides. Useful for extension makers to be able to easily copy files. 
{% include selectAll.html text="Architecture" %}| Type of architecture you're on. x64 or x86. 
{% include selectAll.html text="elapsed_time" %}| Elapsed time in seconds since you last started LioranBoard
{% include selectAll.html text="since_2020" %}| Elapsed time in seconds since January 1st, 2020.
{% include selectAll.html text="mouse_x" %}| Current x position of your mouse 
{% include selectAll.html text="mouse_y" %}| Current y position of your mouse 
{% include selectAll.html text="twitch_accounts" %}| array of all linked Twitch account login names
{% include selectAll.html text="Main" %}| An object containing information about your main OBS connection. 
{% include selectAll.html text="Main.connected" %}| Whether LioranBoard is currently connected to your main OBS, true = connected, false = disconnected
{% include selectAll.html text="Main.current_scene" %}| Current scene in your main OBS
{% include selectAll.html text="Main.previous_scene" %}| Previous scene in your main OBS
{:class='table table-secondary w-auto table-hover text-break' }
