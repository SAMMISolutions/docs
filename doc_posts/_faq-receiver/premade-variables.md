---
layout: default
title: Premade variables
num: 2
---

The following premade variables are accessible from all the buttons and their commands at all times. 

| Variable | Description |
|-------|--------|
{% include selectAll.html text="current_scene" %} | your current OBS scene
{% include selectAll.html text="previous_scene" %} | your previous OBS scene
{% include selectAll.html text="elapsed_time" %} | time elapsed since LB was launched
{% include selectAll.html text="lioranboard_version" %} | your LioranBoard Receiver version
{% include selectAll.html text="obs_studio_version" %} | your OBS version
{% include selectAll.html text="obs_websocket_version" %} | your OBS websocket version
{% include selectAll.html text="transmitter_is_connected" %} | whether Transmitter is connected, 1 for connected and 0 for disconnected
{% include selectAll.html text="channel_id" %}(hidden) | Twitch Channel ID. Does not show in the list of variables, but can be passed as a parameter in extension fields.
{% include selectAll.html text="oauth_token" %}(hidden) | Twitch Channel ID. Does not show in the list of variables, but can be passed as a parameter in extension fields.
{% include selectAll.html text="USERNAME_channelid" %} | Your channel ID for your alternative accounts. Available after Transmitter is connected.
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }




