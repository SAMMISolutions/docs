---
title: "Get Channel Info"
num: 8
---

Gets specified channel information.

{% include alert.html text="This command needs some time to execute, either delay your next commands by 1-2 seconds or use <a href='/docs2/commands/wait#waituntilvariableexists'>Wait Until Variable Exists</a> command." type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|User ID|Number|ID of the channel
|Save Variable|String|Variable to save the response
{:class='table table-primary'}

You can access the response object fields by using [Get Object Variable]({{ "commands/object#getobjectvariable" | relative_url }}) command. The object is the Save Variable and key is one of the response fields.


**Response fields:**

| Field | Type| Description| 
|-------|--------|--------
|broadcaster_id|	string	|Twitch User ID of this channel owner
|broadcaster_name|	string|	Twitch user display name of this channel owner
|game_name|	string|	Name of the game being played on the channel
|game_id|	string|	Current game ID being played on the channel
|broadcaster_language|	string|	Language of the channel. A language value is either the ISO 639-1 two-letter code for a supported stream language or "other".
|title|	string|	Title of the stream
|delay	|integer|	Stream delay in seconds
{:class='table table-secondary w-auto table-hover' }











