---
title: "Custom Packet"
num: 5
---
Sends a custom packet to the OBS websocket in JSON format.\
All the possible requests are documented in [OBS websocket protocol reference](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md).

If the value you're requesting is inside an object, you have to provide the whole object. For example, to set the scale for a scene item in `SetSceneItemProperties` request, you need to do: `"scale":{"x":NEW SCALE X, "y":NEW SCALE Y }`, just `scale.x : NEW SCALE X` is not gonna work as it's not a valid JSON format.\
`"message-id":1` is needed at the end of your request.
Use [JSON string validator](https://jsonlint.com/) if you want to make sure your formatting is correct.

{% include alert.html text="This command doesn't return anything, so requests like GetSourceSettings doesn't work. Use <a href='#fetchobsdata'>Fetch OBS Data</a> to do that." type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS)|
|Custom Packet	|JSON String|	JSON string to send to OBS Websocket. 
{:class='table table-primary'}

**Custom packet examples**

| JSON String | Description | 
|-------|--------|
|<code class="user-select-all">{"request-type":"SetCurrentProfile","profile-name":"YOURPROFILENAME", "message-id":"1"} | changes active profile in OBS|
|<code class="user-select-all">{"request-type":"SetSceneItemProperties","scene-name":"YOURSCENENAME", "item": {"name":"YOURSOURCENAME"}, "position": {"x":500, "y":500 }, "scale":{"x":0.5, "y":0.5}, "locked":true, "message-id":"1"}</code>| changes position and scale of a source and locks it|
|<code class="user-select-all">{"request-type":"StartRecording", "message-id":"1"}| Starts recording|
|<code class="user-select-all">{"request-type":"StartReplayBuffer", "message-id":"1"} | Starts replay buffer |
{:class='table table-secondary w-auto table-responsive table-hover text-break' }








