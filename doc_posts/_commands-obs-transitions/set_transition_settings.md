---
title: "Set Transition Settings"
num: 3
---

Changes the current settings of a transition. Same as going to your OBS and clicking on 'Properties' in your Scene Transitions.\
Example: `{"transition_match": "Fade","switch_percentage": 30,"easing_match": 2,"position_in": 10}`

You can retrieve your current transition settings by executing a Custom Packet command with the following JSON: `{"request-type":"GetTransitionSettings","transitionName":"YOURTRANSITIONNAME","message-id":"6666"}`

| Box Name | Type | Description | 
|-------|--------|--------
|TransitionName|	String|	Name of the transition to modify|
|transitionSettings	|JSON	|JSON string containing the transition settings|
{:class='table table-primary'}









