---
title: "Filter Change Visibility"
num: 2
---
Changes visibility of a filter in a given source.\
It is highly recommended to use True and False. Toggle should be used only if it's a single button command.

{% include alert.html text="Changing filter visibility on sources inside groups is very inconsistent. It's recommended to use nested scenes instead." type="warning
" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|sourceName	|String	| Source name containing the filter
|filterName	|String	| Filter name to change the visibility
|filterEnabled|boolean| Enable or disable filter's visibility. On/off or toggle to reverse current state.
{:class='table table-primary'}









