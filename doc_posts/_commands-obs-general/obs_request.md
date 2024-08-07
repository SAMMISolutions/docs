---
title: "Send OBS Request"
num: 1
redirect_from:
  - commands/65
---
Allows you to request data from OBS websocket and save it in a variable.

This command should be followed by a `Wait until Variable Exists` command with an adequate timeout to allow for the OBS Websocket to respond.

<a href="https://github.com/obsproject/obs-websocket/blob/4.x-compat/docs/generated/protocol.md#events"><button type="button" class="btn btn-outline-secondary">OBS Websocket 4.9.1 Protocol</button></a>

<a href="https://github.com/obsproject/obs-websocket/blob/master/docs/generated/protocol.md"><button type="button" class="btn btn-outline-secondary">OBS Websocket 5.0 Protocol</button></a>

The requested value will always be inside an object called `responseData` (for OBSws 5), but may be inside a second object. You can access it with [object dot notation](https://docs.oracle.com/en/database/oracle/oracle-database/19/adjsn/simple-dot-notation-access-to-json-data.html).\
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
|OBS Command (JSON)|	JSON String|	JSON String to send to OBS Websocket. You can use the dropdown to select a JSON template for each request (OBSws 5 only).
|Fetch Value|	String or object|	Name of a value you wish to get. Leave blank to fetch the whole object.<br/> For values inside another object use [object dot notation](https://docs.oracle.com/en/database/oracle/oracle-database/19/adjsn/simple-dot-notation-access-to-json-data.html). For values inside an array use [index position](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).
Save Variable As (optional)|	String	|Name of a variable to save the data under.
{:class='table table-primary'}

{% include video.html w="100" src="json_templates.mp4" alt="Selecting different JSON templates for OBS Request command" %}

**Send OBS Request Examples (OBSws 5)**

|What to retrieve|OBS Command|Fetch Value|
|--------|--------|--------|
|current CPU usage|<code class="user-select-all">{"op":6,"d":{<br />"requestType":"GetStats",<br />"requestData":{}<br />}}</code>|<code class="user-select-all">responseData.cpuUsage</code>|
|Time elapsed since streaming started |<code class="user-select-all">{"op":6,"d":{<br />"requestType":"GetStreamStatus",<br />"requestData":{}<br />}}</code>|<code class="user-select-all">responseData.outputTimecode</code>|
|Scene Item ID of a source|<code class="user-select-all">{"op":6,"d":{<br />"requestType":"GetSceneItemId",<br />"requestData":{"sceneName":"YOUR SCENE NAME","sourceName":"YOUR SOURCE NAME"}<br />}}</code>|<code class="user-select-all">responseData.sceneItemId</code>|
|Current width of a source|<code class="user-select-all">{"op":6,"d":{<br />"requestType":"GetSceneItemTransform",<br />"requestData":{"sceneName":"YOUR SCENE NAME","sceneItemId":"YOUR SCENE ITEM ID"}<br />}}</code>|<code class="user-select-all">responseData.sceneItemTransform.width</code>|
|Current text in a GDI source|<code class="user-select-all">{"op":6,"d":{<br />"requestType":"GetInputSettings",<br />"requestData":{"inputName":"YOUR SOURCE NAME"}<br />}}</code>|<code class="user-select-all">responseData.inputSettings.text</code>|
|Brightness value of a Colour Correction filter|<code class="user-select-all">{"op":6,"d":{<br />"requestType":"GetSourceFilter",<br />"requestData":{"sourceName":"YOUR SOURCE NAME","filterName":"YOUR FILTER NAME"}<br />}}</code>|<code class="user-select-all">responseData.filterSettings.brightness</code>|
|First source name in a specified scene|<code class="user-select-all">{"op":6,"d":{<br />"requestType":"GetSceneItemList",<br />"requestData":{"sceneName":"YOUR SCENE NAME"}<br />}}</code>|<code class="user-select-all">responseData.sceneItems[0].sourceName</code>|
{:class='table table-secondary w-auto table-responsive table-hover text-break' }

{% include example_public.html src="/docs/assets/images/commands-obs-general/obsReq_Ex.png" size="100" title="Add 1 to Text GDI+ Source (OBSws 4)" pastebin="ccUwx1GE" %}










