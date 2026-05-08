---
title: "OBS Get Source List"
num: 20
version: 202640
redirect_from:
  - commands/365
---

Gets OBS source names and saves them as an array. If a scene is selected, only sources in that scene are returned. If the scene field is empty, all known sources are returned.

{% include alert.html text="Available in SAMMI Pro." type="info" %}

| Box Name | Type | Description |
|-------|--------|--------
|OBS|Dropdown|OBS to get the source list from, if using multiple OBS connections.
|Scene Name|String|Optional scene to get sources from. Leave empty to get all known sources.
|Save Variable As|String|Variable name to save the source name array.
{:class='table table-primary'}

Examples:

| Scene Name | Save Variable As | Saved Array Example |
|-------|--------|--------
|Gameplay|sourceList|[`Game Capture`, `Webcam`, `Chat`, `Alerts`]
| |sourceList|All known OBS sources from the current OBS connection.
{:class='table table-secondary w-auto table-hover text-break'}

Use an empty scene name when you want every known source, or select a scene when you only want the sources currently listed in that scene.
