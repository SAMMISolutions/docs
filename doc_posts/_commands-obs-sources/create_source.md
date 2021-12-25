---
title: "Create Source"
num: 1
---


Creates a new source and adds it to a scene.\
You can pass a JSON string containing the new source's settings as well.\
The source will be added at the top of the list. To reorder it, use a Custom Packet command to send a JSON string containing the new order of all sources in your scene: {% include selectAll.html text='<code>{"request-type":"ReorderSceneItems","scene":"YOURSCENENAME","items":[{"name":"YOURSOURCENAME1"},{"name":"YOURSOURCENAME2"},{"name":"YOURSOURCENAME3"},{"name":"YOURSOURCENAME4"}(etc.)],"message-id":"6666"}</code>' %}`.

{% include alert.html text="If you want to add the newly created source into a group, you must do so manually." type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|sourceName|String|Name of the new OBS source
|sourceKind|String|Type of the new source. <br/> `ffmpeg_source ` Media Source <br/> `vlc_source` VLC media source  <br/> `image_source` Image Source  <br/>`slideshow` Image slide show  <br/>`text_ft2_source` Free Type 2 text source  <br/>`text_gdiplus` Text GDI+ source  <br/>`browser_source` Browser source  <br/>`wasapi_input_capture` Audio Input capture  <br/>`wasapi_output_capture` Audio Output Capture  <br/>`color_source` Color source  <br/>`monitor_capture` Display Capture  <br/>`window_capture` Window capture  <br/>`game_capture` Game Capture  <br/>`dshow_input` Capture device(webcam)  <br/>`dshow_input_replay`  Video Capture Device with replay buffer  <br/> For other sources and plugin sources you should look at the OBS JSON file to figure out the correct value.
|sceneName|String|Name of the scene to add the source to.|
|sourceSettings |	JSON |	Source settings. Same format which is used in Source Change Settings command.|
|setVisible|	boolean	|Whether the source should be visible.|
{:class='table table-primary'}









