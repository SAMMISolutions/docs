---
title: Premade Variables
num: 3
---

The following premade/permanent global variables are accessible from all the buttons and their commands at all times.\
These global variables can be viewed in the Variable Viewer in your SAMMI.\
You can access them by using the `Get Global Variable` command, or reference them with `global.variablename` in a command.

{% include image.html w="75" src="premade_variables.png" alt="SAMMI Global Premade Variables" %}

**General Variables**

| Variable | Type | Explanation|
|-------|--------|--------
{% include selectAll.html text="<code>administrator_mode</code>" %}| Boolean | True if running in Administrator mode.
{% include selectAll.html text="<code>Architecture</code>" %}| String | Type of architecture you're on. x64 or x86.
{% include selectAll.html text="<code>elapsed_time</code>" %}| Number | Time in seconds since you started SAMMI.
{% include selectAll.html text="<code>main_directory</code>" %}| String | Main directory where SAMMI folder resides, using forward slashes (<code>/</code>). Useful for extension makers to be able to easily copy files.
{% include selectAll.html text="<code>main_directory_slash</code>" %}| String | Main directory where SAMMI folder resides, using backslashes (<code>\\</code>). Useful for sending file paths to OBS.
{% include selectAll.html text="<code>mouse_x</code>" %}| Number | Current x position of your mouse.
{% include selectAll.html text="<code>mouse_y</code>" %}| Number | Current y position of your mouse.
{% include selectAll.html text="<code>since_2020</code>" %}| Number | Elapsed time in seconds since January 1st, 2020.
{:class='table table-secondary w-auto table-hover text-break' }

**SAMMI Variables**

| Variable | Type | Explanation|
|-------|--------|--------
{% include selectAll.html text="<code>api_port</code>" %}| Number | The port number for the Local API server.
{% include selectAll.html text="<code>api_pw_enabled</code>" %}| Boolean | Returns true if SAMMI Local API server has a password.
{% include selectAll.html text="<code>api_server_opened</code>" %}| Boolean | Returns true if SAMMI Local API server is running.
{% include selectAll.html text="<code>bridge_connected</code>" %}| Boolean | True if connected, false if not connected.
{% include selectAll.html text="<code>extensions</code>" %}| Object | Contains all extensions and their versions installed in Bridge (only if Bridge is connected to SAMMI)
{% include selectAll.html text="<code>browser_name</code>" %}| String | Browser name your Bridge connected to SAMMI is using.
{% include selectAll.html text="<code>client_language</code>" %}| String | Language SAMMI is currently using.
{% include selectAll.html text="<code>deck_connected</code>" %}| Boolean | Returns true if SAMMI deck is connected, false if not.
{% include selectAll.html text="<code>panel_connected</code>" %}| Boolean | True if connected, false if not connected.
{% include selectAll.html text="<code>panel_port</code>" %}| Number | The port number for SAMMI Panel.
{% include selectAll.html text="<code>SAMMI</code>" %}| Object | Contains information about your current SAMMI versions.
{% include selectAll.html text="<code>SAMMI.bridge_version</code>" %}| String | Your current SAMMI Bridge version.
{% include selectAll.html text="<code>SAMMI.deck_version</code>" %}| String | Your current SAMMI Deck version.
{% include selectAll.html text="<code>SAMMI.sammi_version</code>" %}| String | Your current SAMMI Core version.
{% include selectAll.html text="<code>streamdeck_port</code>" %}| Number | The port number for SAMMI Deck.
{% include selectAll.html text="<code>trigger_type</code>" %}| Array | All available trigger types.
{% include selectAll.html text="<code>Extensions</code>" %}| Object | Shows all currently installed extensions in Bridge connected to SAMMI. 
{:class='table table-secondary w-auto table-hover text-break' }

**Twitch Variables**

| Variable | Type | Explanation|
|-------|--------|--------
{% include selectAll.html text="<code>twitch_accounts</code>" %}| Array | All linked Twitch account login names.
{% include selectAll.html text="<code>twitch_chat_connected</code>" %}| Boolean | Twitch chat connection status. True if connected, false if not connected.
{% include selectAll.html text="<code>twitch_client_id</code>" %}| String | SAMMI Twitch Client ID, used in Twitch API calls.
{% include selectAll.html text="<code>twitch_pubsub_connected</code>" %}| Boolean | Twitch Pubsub (for Twitch alerts) connection status. True if connected, false if not connected.
{:class='table table-secondary w-auto table-hover text-break' }

**OBS Variables**

| Variable | Type | Explanation|
|-------|--------|--------
{% include selectAll.html text="<code>obs_connections</code>" %}| Array | Names of all your OBS connections.
{% include selectAll.html text="<code>[obsName]</code>" %}| Object | Contains information about your main/alternate OBS connection.
{% include selectAll.html text="<code>[obsName].connected</code>" %} | Boolean | Returns true if SAMMI is connected to that OBS.
{% include selectAll.html text="<code>[obsName].current_scene</code>" %} | String | Your selected OBS current scene.
{% include selectAll.html text="<code>[obsName].ip</code>" %} | String | The IP address of the OBS connection.
{% include selectAll.html text="<code>[obsName].obs_studio_version</code>" %} | String | Current OBS studio version the OBSws is connected to.
{% include selectAll.html text="<code>[obsName].obs_websocket_version</code>" %} | String |  Current OBS Websocket version the OBSws is connected to.
{% include selectAll.html text="<code>[obsName].port</code>" %} | Number | The port of the OBS connection.
{% include selectAll.html text="<code>[obsName].previous_scene</code>" %} | String | Your selected OBS previous scene.
{% include selectAll.html text="<code>[obsName].type</code>" %} | String | OBSws selected type in OBS Connections, either `OBSws4`, `OBSws5` or `Auto`.
{:class='table table-secondary w-auto table-hover text-break' }


