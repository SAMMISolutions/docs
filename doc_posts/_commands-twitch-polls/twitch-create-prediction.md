---
title: "Create Prediction"
num: 15.2
redirect_from:
  - commands/240
---

Creates a new prediction for your channel with 2-10 outcomes. Must be at least affiliate.

| Box Name | Type | Description | 
|-------|--------|--------
|Login Name | Dropdown |Your Twitch login name (all lowercase characters)
|Prediction Name|String|Question displayed for the prediction. Maximum: 60 characters.
|Choice Array Name|String|Name of the array containing all your outcome names (min 2, max 10)
|Dur.(s)|Number {% include asterisk.html%}|Total duration for the prediction in seconds.
{:class='table table-primary'}

{% include example_public.html src="https://i.imgur.com/NVuUigP.png" size="50" title="Usage Example" %}

**Twitch API Endpoint:** `POST /helix/predictions`

| Request Field | Type | Description |
|-------|--------|--------
| broadcaster_id | string | The ID of the broadcaster creating the prediction. |
| title | string | The question displayed for the prediction. Maximum: 60 characters. |
| outcomes | array | Array of outcome objects built from the provided array. Each must contain a `title` field (max 25 characters). Minimum 2, maximum 10 outcomes. |
| prediction_window | integer | The length of time (in seconds) that the prediction will run for. Minimum: 30, Maximum: 1800. |
{:class='table table-secondary w-auto table-hover text-break'}







