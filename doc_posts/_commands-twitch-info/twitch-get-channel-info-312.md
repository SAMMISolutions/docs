---
title: "Get Channel Info"
num: 1.3
version: 202322
redirect_from:
  - commands/312
---

Gets specified channel information.

{% include alert.html text="This command needs some time to execute, either delay your next commands by 1-2 seconds or use <a href='/docs/commands/wait#waituntilvariableexists'>Wait Until Variable Exists</a> command." type="warning" %} 

{% include alert.html text="This command is exactly the same as the old Get Channel Info command, but updated to use the channel name, rather than the channel ID - if you try to use a channel ID, it will fail (which can be verified by the response object not being created in the Variable Viewer). Please make sure to check the first box's label to see whether you need to enter the name or the ID" type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|Channel|string|Name of the channel
|Save Variable As|String|Variable to save the response
{:class='table table-primary'}

You can access the response object's data by using [Get Object Variable]({{ "commands/object#getobjectvariable" | relative_url }}) command.


**Response Data:**

| Variable Name | Type | Description | 
|-------|--------|--------
|broadcaster_id|	string	|Twitch User ID of this channel owner
|broadcaster_name|	string|	Twitch user display name of this channel owner
|game_name|	string|	Name of the game being played on the channel
|game_id|	string|	Current game ID being played on the channel
|broadcaster_language|	string|	Language of the channel. A language value is either the ISO 639-1 two-letter code for a supported stream language or "other".
|title|	string|	Title of the stream
|delay	|number|	Stream delay in seconds
{:class='table table-secondary table-hover' }











