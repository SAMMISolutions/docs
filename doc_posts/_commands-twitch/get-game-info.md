---
title: "Get Game Info"
num: 7
---

Gets game information by game name.

{% include alert.html text="This command needs some time to execute, either delay your next commands by 1-2 seconds or use <a href='/commands/statements#waituntilvariableexists'>Wait Until Variable Exists</a> command." type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|Game Name|String|Game name. The name must be an exact match. For example, “Pokemon” will not return a list of Pokemon games; instead, query any specific Pokemon games in which you are interested. At most 100 name values can be specified.
|Save Variable|String|Variable name to save the response 
{:class='table table-primary'}

You can access the response object fields by using [Get Object Variable]({{ "commands/object#getobjectvariable" | relative_url }}) command. The object is the Save Variable and key is one of the response fields.


**Response fields:**


| Field | Type| Description| 
|-------|--------|--------
box_art_url | Object	| Template URL for the game’s box art.
id	| string |	Game ID.
name |	string	| Game name.
{:class='table table-secondary w-auto table-hover' }











