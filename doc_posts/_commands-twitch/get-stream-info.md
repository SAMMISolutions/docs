---
title: "Get Stream Info"
num: 9
---

Gets information about an active stream.

{% include alert.html text="This command needs some time to execute, either delay your next commands by 1-2 seconds or use <a href='/docs2/commands/wait#waituntilvariableexists'>Wait Until Variable Exists</a> command." type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|Login Name|String|Channel name for the stream 
|Save Variable|String|Variable name to save the whole response object
{:class='table table-primary'}


You can access the response object fields by using [Get Object Variable]({{ "commands/object#getobjectvariable" | relative_url }}) command. The object is the Save Variable and key is one of the response fields.


**Response fields:**

<div style="height: 40vh; overflow-y: auto" markdown="1">

| Field | Type| Description| 
|-------|--------|--------
|id	|string|	Stream ID.
|user_id|	string|	ID of the user who is streaming.
|user_login|	string|	Login of the user who is streaming.
|user_name|	string|	Display name corresponding to user_id.
|game_id|	string|	ID of the game being played on the stream.
|game_name|	string|	Name of the game being played.
|type|	string|	Stream type: "live" or "" (in case of error).
|title|	string|	Stream title.
|viewer_count|	int	|Number of viewers watching the stream at the time of the query.
|started_at|	string|	UTC timestamp.
|language	|string|	Stream language. A language value is either the ISO 639-1 two-letter code for a supported stream language or “other”.
|thumbnail_url|	string|	Thumbnail URL of the stream. All image URLs have variable width and height. You can replace {width} and {height} with any values to get that size image
|tag_ids|	string|	Shows tag IDs that apply to the stream.
|is_mature	|boolean|	Indicates if the broadcaster has specified their channel contains mature content that may be inappropriate for younger audiences.
{:class='table table-secondary w-auto table-hover' }

</div>










