---
title: "Custom Packet"
num: 5
---
Sends a custom packet to the OBS websocket in JSON format.\
All the possible requests are documented in [OBS websocket protocol reference](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md).

If the value you're requesting is inside an object, you have to provide the whole object. For example, to set the scale for a scene item in `SetSceneItemProperties` request, you need to do: `"scale":{"x":NEW SCALE X, "y":NEW SCALE Y }`, just `scale.x : NEW SCALE X` is not gonna work as it's not a valid JSON format.\
Use [JSON string validator](https://jsonlint.com/) if you want to make sure your formatting is correct.

{% include alert.html text="This command doesn't return anything, so requests like GetSourceSettings doesn't work. Use [Fetch OBS Data]({{ "commands/obs-general#fetchobsdata" | relative_url }}) to do that." type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS)|
|Custom Packet	|JSON String|	JSON string to send to OBS Websocket. 
{:class='table table-primary'}

**Custom packet examples**

| JSON String | Description | 
|-------|--------|
|<code class="user-select-all">{"request-type":"GetVersion"}</code>|Current OBS websocket version, status and available requests|
|<code class="user-select-all">{"request-type":"GetStats"}</code>|OBS stats (similar info as provided in OBS's stats window)|
|<code class="user-select-all">{"request-type":"SetCurrentProfile","profile-name":"YOURPROFILENAME"} | changes active profile in OBS|
|<code class="user-select-all">{"request-type":"SetSceneItemProperties","scene-name":"YOURSCENENAME", "item": {"name":"YOURSOURCENAME"}, "position": {"x":500, "y":500 }, "scale":{"x":0.5, "y":0.5}, "locked":true}</code>| changes position and scale of a source and locks it|
|<code class="user-select-all">{"request-type":"StartRecording"}| Starts recording|
|<code class="user-select-all">{"request-type":"StartReplayBuffer"} | Starts replay buffer |
|<code class="user-select-all">{"request-type":"GetSceneList"}</code> | Retrieves a list of scenes in the current profile |
|<code class="user-select-all">{"request-type":"GetSceneItemProperties","scene-name":"YOURSCENENAME", "item":"YOURSOURCENAME"}</code> | Retrieves source item properties (position, rotation, scale etc.)|
|<code class="user-select-all">{"request-type":"GetSourceFilterInfo", "sourceName":"YOURSOURCENAME", "filterName":"YOURFILTERNAME"}</code> | Retrieves current source filter settings|
{:class='table table-secondary w-auto table-responsive table-hover text-break' }








