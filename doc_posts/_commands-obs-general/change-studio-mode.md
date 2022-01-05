---
title: "Custom Packet"
num: 4
---
Sends a custom packet to the OBS websocket in JSON format.\
All the possible requests are documented in [OBS websocket protocol reference](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md).

1. Use `"message-id": "6666"` to get a pop up message on your screen every time you execute the command (useful for troubleshooting). 
2. Use `"message-id": "1"` to hide the pop up message.  
<br/>

If the value you're requesting is inside an object, you have to provide the whole object. For example, to set the scale for a scene item in `SetSceneItemProperties` request, you need to do: `"scale":{"x":NEW SCALE X, "y":NEW SCALE Y }`, just `scale.x : NEW SCALE X` is not gonna work as it's not a valid JSON format.\
Use [JSON string validator](https://jsonlint.com/) if you want to make sure your formatting is correct.

| Box Name | Type | Description | 
|-------|--------|--------
|String	|JSON String|	JSON string to send to OBS Websocket. 
{:class='table table-primary'}

**Custom packet examples**

| JSON String | Description | 
|-------|--------|
|<code class="user-select-all">{"request-type":"GetVersion","message-id":"6666"}</code>|Current OBS websocket version, status and available requests|
|<code class="user-select-all">{"request-type":"GetStats","message-id":"6666"}</code>|OBS stats (similar info as provided in OBS's stats window)|
|<code class="user-select-all">{"request-type":"SetCurrentProfile","profile-name":"YOURPROFILENAME","message-id":"1"} | changes active profile in OBS|
|<code class="user-select-all">{"request-type":"SetSceneItemProperties","scene-name":"YOURSCENENAME", "item": {"name":"YOURSOURCENAME"}, "position": {"x":500, "y":500 }, "scale":{"x":0.5, "y":0.5}, "locked":true,"message-id":"6666"}</code>| changes position and scale of a source and locks it|
|<code class="user-select-all">{"request-type":"StartRecording","message-id":"1"}| Starts recording|
|<code class="user-select-all">{"request-type":"StartReplayBuffer","message-id":"1"} | Starts replay buffer |
|<code class="user-select-all">{"request-type":"GetSceneList","message-id":"6666"}</code> | Retrieves a list of scenes in the current profile |
|<code class="user-select-all">{"request-type":"GetSceneItemProperties","scene-name":"YOURSCENENAME", "item":"YOURSOURCENAME", "message-id":"6666"}</code> | Retrieves source item properties (position, rotation, scale etc.)|
|<code class="user-select-all">{"request-type":"GetSourceFilterInfo", "sourceName":"YOURSOURCENAME", "filterName":"YOURFILTERNAME", "message-id":"6666"}</code> | Retrieves current source filter settings|
{:class='table table-secondary w-auto table-responsive table-hover text-break' }








