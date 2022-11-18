---
title: Premade Variables
num: 3
---

The following premade/permanent global variables are accessible from all the buttons and their commands at all times.\
These global variables can be viewed in the Variable Viewer in your SAMMI.\
You can access them by using the `Get Global Variable` command, or reference them with `global.variablename` in a command.

{% include image.html w="75" src="premade_variables.png" alt="SAMMI Global Premade Variables" %}

**General Variables**

| Variable | Explanation|
|-------|--------|--------
{% include selectAll.html text="<code>main_directory</code>" %}| Main directory where SAMMI folder resides. Useful for extension makers to be able to easily copy files.
{% include selectAll.html text="<code>Architecture</code>" %}| Type of architecture you're on. x64 or x86.
{% include selectAll.html text="<code>administrator_mode</code>" %}| True if running in Administrator mode
{% include selectAll.html text="<code>elapsed_time</code>" %}| Elapsed time in seconds since you last started SAMMI
{% include selectAll.html text="<code>since_2020</code>" %}| Elapsed time in seconds since January 1st, 2020.
{% include selectAll.html text="<code>mouse_x</code>" %}| Current x position of your mouse
{% include selectAll.html text="<code>mouse_y</code>" %}| Current y position of your mouse
{:class='table table-secondary w-auto table-hover text-break' }

**SAMMI Variables**

| Variable | Explanation|
|-------|--------|--------
{% include selectAll.html text="<code>SAMMI</code>" %}| An object containing information about your current SAMMI versions.
{% include selectAll.html text="<code>SAMMI.bridge_version</code>" %}| Your current SAMMI Bridge version
{% include selectAll.html text="<code>SAMMI.deck_version</code>" %}| Your current SAMMI Deck version
{% include selectAll.html text="<code>SAMMI.sammi_version</code>" %}| Your current SAMMI Core version
{% include selectAll.html text="<code>client_language</code>" %}| Language SAMMI is currently using
{% include selectAll.html text="<code>browser_name</code>" %}| Browser name your Bridge connected to SAMMI is using
{% include selectAll.html text="<code>bridge_connected</code>" %}| True if connected, false if not connected
{% include selectAll.html text="<code>deck_connected</code>" %}| Returns true if SAMMI deck is connected, false if not.
{% include selectAll.html text="<code>api_server_opened</code>" %}| Returns true if SAMMI Local API server is running.
{% include selectAll.html text="<code>trigger_type</code>" %}| Array that lists all available trigger types
{:class='table table-secondary w-auto table-hover text-break' }

**Twitch Variables**

| Variable | Explanation|
|-------|--------|--------
{% include selectAll.html text="<code>twitch_client_id</code>" %}| SAMMI Twitch Client ID, used in Twitch API calls
{% include selectAll.html text="<code>twitch_accounts</code>" %}| Array of all linked Twitch account login names
{% include selectAll.html text="<code>twitch_chat_connected</code>" %}| Twitch chat connection status. True if connected, false if not connected
{% include selectAll.html text="<code>twitch_pubsub_connected</code>" %}| Twitch Pubsub (for Twitch alerts) connection status. True if connected, false if not connected
{:class='table table-secondary w-auto table-hover text-break' }

**OBS Variables**

| Variable | Explanation|
|-------|--------|--------
{% include selectAll.html text="<code>obs_connections</code>" %}| An array of all your OBS connection names
{% include selectAll.html text="<code>[obsName]</code>" %}| An object containing information about your main/alternate OBS connection.
{% include selectAll.html text="<code>[obsName].connected</code>" %} | Whether you're connected to your selected OBS Name, 1 = connected, 0 = not connected
{% include selectAll.html text="<code>[obsName].current_scene</code>" %} | Your selected OBS current scene
{% include selectAll.html text="<code>[obsName].previous_scene</code>" %} | Your selected OBS previous scene
{% include selectAll.html text="<code>[obsName].type</code>" %} | OBSws selected type in OBS Connections, either `OBSws4`, `OBSws5` or `Auto`
{% include selectAll.html text="<code>[obsName].ip</code>" %} | The IP address of the OBS connection
{% include selectAll.html text="<code>[obsName].port</code>" %} | The port of the OBS connection
{% include selectAll.html text="<code>[obsName].obs_studio_version</code>" %} | Current OBS studio version the OBSws is connected to
{% include selectAll.html text="<code>[obsName].obs_websocket_version</code>" %} |  Current OBS Websocket version the OBSws is connected to
{:class='table table-secondary w-auto table-hover text-break' }


