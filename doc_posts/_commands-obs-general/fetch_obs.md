---
title: "Send OBS Request"
num: 1
---
Allows you to request data from OBS websocket and save it in a variable.

This command should be followed by a `Wait until Variable Exists` command with an adequate timeout to allow the data to be sent to SAMMI.

All the possible requests are documented [here](https://github.com/obsproject/obs-websocket/blob/master/docs/generated/protocol.md#requests) for version 5.0, and [here](https://github.com/Palakis/obs-websocket/blob/4.x-compat/docs/generated/protocol.md) for version 4.9.1 (and version 4.x-compat).

The requested value will always be inside an object called `responseData`, but may be inside a second object. You can access it with [object dot notation](https://grasshopper.app/glossary/data-types/object-dot-notation/).\
For example, if you want to retrieve the Brightness value from a Colour Correction filter, you will notice that it is inside an object called filterSettings. `{ "filterEnabled": true, "filterKind": "color_filter_v2", "filterSettings": { "brightness": 0.078 }, "filterIndex": 0.0 }`. In this case, the Fetch Value will be `responseData.filterSettings.brightness`.

Use [JSON string validator](https://jsonlint.com/) if you want to make sure your formatting is correct.    
Be mindful of any trailing commas in your request that will cause OBS to disconnect, such as: 
```json
{
  "op": 6,
  "d": {
    "requestType": "GetVersion",  // this trailing commma must be removed
  }
}
```

{% include alert.html text="If the name of the fetched value contains dots, it needs to be wrapped in parentheses like this: <code>(Filter.Transform.Rotation.X)</code>." type="warning" %}

| Box Name | Type | Description |
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS connections).|
|OBS Command (JSON)|	JSON String|	JSON String to send to OBS Websocket. Will default to OBSws5 syntax:<br /><code class="user-select-all">{"op":6,"d":{"requestType":"","requestData":{}}}</code>
|Fetch Value|	String or object|	Name of a value you wish to get. Leave blank to fetch the whole object.<br/> For values inside another object use [object dot notation](https://grasshopper.app/glossary/data-types/object-dot-notation/). For values inside an array use [index position](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).
Save Variable As|	String	|Name of a variable to save the data under.
{:class='table table-primary'}

**Send OBS Request Examples**

|What to retrieve|OBS Command|Fetch Value|
|--------|--------|--------|
|current CPU usage|<code class="user-select-all">{"op":6,"d":{<br />"requestType":"GetStats",<br />"requestData":{}<br />}}</code>|responseData.cpuUsage|
|Time elapsed since streaming started |<code class="user-select-all">{"op":6,"d":{<br />"requestType":"GetStreamStatus",<br />"requestData":{}<br />}}</code>|responseData.outputTimecode|
|Scene Item ID of a source|<code class="user-select-all">{"op":6,"d":{<br />"requestType":"GetSceneItemId",<br />"requestData":{"sceneName":"YOUR SCENE NAME","sourceName":"YOUR SOURCE NAME"}<br />}}</code>|responseData.sceneItemId|
|Current width of a source|<code class="user-select-all">{"op":6,"d":{<br />"requestType":"GetSceneItemTransform",<br />"requestData":{"sceneName":"YOUR SCENE NAME","sceneItemId":"YOUR SCENE ITEM ID"}<br />}}</code>|responseData.sceneItemTransform.width|
|Current text in a GDI source|<code class="user-select-all">{"op":6,"d":{<br />"requestType":"GetInputSettings",<br />"requestData":{"inputName":"YOUR SOURCE NAME"}<br />}}</code>|responseData.inputSettings.text|
|Brightness value of a Colour Correction filter|<code class="user-select-all">{"op":6,"d":{<br />"requestType":"GetSourceFilter",<br />"requestData":{"sourceName":"YOUR SOURCE NAME","filterName":"YOUR FILTER NAME"}<br />}}</code>|responseData.filterSettings.brightness|
|First source name in a specified scene|<code class="user-select-all">{"op":6,"d":{<br />"requestType":"GetSceneItemList",<br />"requestData":{"sceneName":"YOUR SCENE NAME"}<br />}}</code>|responseData.sceneItems[0].sourceName|
{:class='table table-secondary w-auto table-responsive table-hover text-break' }

{% include example_public.html src="https://i.imgur.com/IH9L1VE.png" size="100" title="Add 1 to Text GDI+ Source" pastebin="ccUwx1GE" %}










