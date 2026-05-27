---
title: "Source Get Transform"
num: 21
version: 202640
redirect_from:
  - commands/370
---

Gets transform data for an OBS source in a scene and saves it as an object.

{% include alert.html text="Available in SAMMI Pro." type="info" %}

{% include async.html %}

| Box Name | Type | Description |
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to, if using multiple OBS connections.
|Scene Name|String|Scene the source is located in. Select from dropdown or input manually.
|Source Name|String|Source to get transform data from. Select from dropdown or input manually.
|Save Variable As|String|Variable name to save the transform object.
{:class='table table-primary'}

Example:

| Scene Name | Source Name | Save Variable As | Saved Object Example |
|-------|--------|--------|--------
|Gameplay|Webcam|webcamTransform|Object containing transform values returned by OBS.
{:class='table table-secondary w-auto table-hover text-break'}

Typical values can include:

| Key | Description |
|-------|--------
|positionX / positionY|Source position inside the scene.
|width / height|Current source size after transform.
|rotation|Source rotation.
|cropLeft / cropTop / cropRight / cropBottom|Crop values.
|sourceWidth / sourceHeight|Original source size.
{:class='table table-secondary w-auto table-hover text-break'}

The exact keys depend on what OBS returns for the selected source and OBS WebSocket version.
