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

**Saved Value:**

| Value | Type | Description |
|-------|------|-------------|
|savedVariable|String|ID of the newly created clip (`data[0].id`).|
|undefined|Undefined|Saved if Twitch is not connected, the channel cannot be resolved, required scopes are missing, Twitch returns an empty response, or the request fails.|
{:class='table table-secondary w-auto table-hover text-break'}

{% include alert.html text="Requires the <code>clips:edit</code> Twitch scope." type="info" %}

**Twitch API Endpoint:** `POST /helix/clips`

| Request Field | Type | Description |
|-------|--------|--------
| broadcaster_id | string | The ID of the broadcaster whose stream you want to create a clip from. |
| has_delay | boolean | When `true`, adds a delay before the clip is captured (accounts for the typical stream delay). Default: `false`. |
{:class='table table-secondary w-auto table-hover text-break'}

**Response Fields:**

| Response Field | Type | Description |
|-------|--------|--------
| data[0].id | string | The ID of the clip that was created. Saved as the command's output variable. |
| data[0].edit_url | string | The URL of the Twitch webpage where the user can edit the clip. |
{:class='table table-secondary w-auto table-hover text-break'}











