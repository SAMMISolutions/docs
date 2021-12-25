---
title: "Pull Source Value"
num: 0
---

Pulls the last known value of a source. Will return 0 if the source doesn't exist.\
Very useful command to use together with Source: Motion commands. For example, you can pull the current X and Y position of a source and then use [Source: Motion Position]({{ "commands/obs-properties#sourcemotionposition" | relative_url }}) to smoothly move it across the screen.

| Pull Type | Description | Possible values | 
|-------|--------|--------
|X/Y position  | returns X or Y position of the source | for example 500 
|X/Y scale | returns scale of the source that affects its width (X) and height (Y) |  1 = 100% scale
|Rotation | returns the degree of rotation of the source | 0-360
|Volume | returns the volume percentage of the source | 0-100
|Muted | returns boolean value whether the source is muted or not | 0 for unmuted and 1 for muted
|Visible | returns boolean value whether the source is visible or not | 0 for not visible and 1 for visible
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }

{% include alert.html text="This command might not work correctly if the source is inside a group. It's recommended to use nested scenes instead." type="danger" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|Scene|	String|	Scene name containing the source
|Source|	String|	Source name to pull the value
|Variable	|String|	Variable name to save the pulled value into
|Pull	|Dropdown menu| Type of the value you wish to pull
{:class='table table-primary'}

{% include example_public.html src="https://i.imgur.com/2WaxEEy.jpeg" title="Add 5% volume to a source" pastebin="VQQ32eaE" %} 



