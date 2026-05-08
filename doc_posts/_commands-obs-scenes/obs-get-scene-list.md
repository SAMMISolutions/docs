---
title: "OBS Get Scene List"
num: 8
version: 202640
redirect_from:
  - commands/364
---

Gets the current OBS scene list and saves the scene names as an array.

{% include alert.html text="Available in SAMMI Pro." type="info" %}

| Box Name | Type | Description |
|-------|--------|--------
|OBS|Dropdown|OBS to get the scene list from, if using multiple OBS connections.
|Save Variable As|String|Variable name to save the scene name array.
{:class='table table-primary'}

Example:

| OBS Scenes | Save Variable As | Saved Array |
|-------|--------|--------
|Starting, Gameplay, BRB, Ending|sceneList|[`Starting`, `Gameplay`, `BRB`, `Ending`]
{:class='table table-secondary w-auto table-hover text-break'}

You can combine this command with `Array Get Size`, `Array Get Value`, or `Repeat` to loop through all OBS scenes.
