---
layout: default
title: OBS Triggers
menu: Triggers
num: 2
type: fullpage
permalink: /triggers/obs
---
LioranBoard can listen to OBS events provided by OBS Websocket. All triggers you create are saved in `listen_obs_event.ini` in your Receiver folder. 

#### 1. Add a new OBS trigger 
You can add new triggers manually or by listening to OBS events.   

##### Manually 
1. Find the event's name you would like to listen to. All available events can be found in the [OBS websocket documentation](https://github.com/Palakis/obs-websocket/blob/4.x-current/docs/generated/protocol.md#events).
2. In the main Receiver menu, click on `OBS Trigger` button.
3. Press Add: 
  - Event: The event's name found in the OBS Websocket documentation
  - Trigger: Your custom trigger. Can be anything you'd like.
  - Values 1-10: Response item's names found in the OBS Websocket documentation. One per box.
4. Press Add again. 
5. Press Done. 
    
{% include video_collapse.html w="100" name="obs_add" src="obs_add.mp4" alt="Video Guide" btn="1" %}

##### By listening to OBS events
1. In the main Receiver menu, click on `OBS Trigger` button.
2. Press Add. LioranBoard will start scanning for all OBS events. 
3. Manually perform the OBS action in your OBS. For example, for Switch Scenes event, go to your OBS and switch scenes. 
4. A list of all events will appear in the Latest Event window. 
   - Select the one you wish to add.
   - Event and Trigger boxes will automatically populate
   - You can freely change the Trigger name to a custom name. Can contain spaces. 
5. Perform the same OBS action in your OBS again. 
6. This time you will see a list of all values OBS Websocket provides for the specific event in the same window.
   - Select all values you need. 
   - Selected values will automatically populate Value 1-10 boxes. 
7. Press Add. 
8. Press Done.

{% include video_collapse.html w="100" name="obs_add2" src="obs_add2.mp4" alt="Video Guide" btn="1" %}


#### 2. Attach your trigger to a button 
1. Select a button you want to trigger for the event. 
2. Right click on the button - Add/Edit Twitch Triggers.
3. Click on the + sign and select Extension Trigger.
7. Type the custom trigger's name you added in the previous step. 
8. Inside the button, use Math: Trigger Pull command to pull Extension values 1-10 that you added in the previous steps.

{% include video_collapse.html w="100" name="obs_attach" src="obs_attach.mp4" alt="Video Guide" btn="1" %}