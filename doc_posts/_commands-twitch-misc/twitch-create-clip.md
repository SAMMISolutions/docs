---
title: "Create Clip"
num: 5
redirect_from:
  - commands/188
---

Creates a new clip.
For more information on creating clips, check out the [Twitch API Reference Guide for Create Clip](https://dev.twitch.tv/docs/api/reference/#create-clip).

{% include async.html %}

| Box Name | Type | Description | 
|-------|--------|--------
|Login Name | Dropdown |Your Twitch login name (all lowercase characters) to create the clip for.
|Clip Title|String|Optional title to apply to the created clip.
|Clip Duration|Number {% include asterisk.html%}|Optional clip duration in seconds. Must be between 5 and 60 seconds.
|Save Variable As (optional)|String|Variable to save your newly created clip ID.
{:class='table table-primary'}

{% include alert.html text="Requires the <code>clips:edit</code> Twitch scope." type="info" %}











