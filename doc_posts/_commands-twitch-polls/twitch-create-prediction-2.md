---
title: "Create Prediction 2 Outcomes"
num: 15.1
redirect_from:
  - commands/182
---

Creates a new prediction for your channel with 2 outcomes. Must be at least affiliate.\
If you want to create a prediction with more than 2 outcomes, you can use [Create Prediction](#createprediction) command instead.

| Box Name | Type | Description | 
|-------|--------|--------
|Login Name | Dropdown |Your Twitch login name (all lowercase characters)
|Prediction Name|String|Question displayed for the prediction. Maximum: 60 characters.
|Choice 1|String|Text displayed for the choice. Maximum: 25 characters.
|Choice 2|String|Text displayed for the choice. Maximum: 25 characters.
|Dur.(s)|Number {% include asterisk.html%}|Total duration for the prediction in seconds.
{:class='table table-primary'}

**Twitch API Endpoint:** `POST /helix/predictions`

| Request Field | Type | Description |
|-------|--------|--------
| broadcaster_id | string | The ID of the broadcaster creating the prediction. |
| title | string | The question displayed for the prediction. Maximum: 60 characters. |
| outcomes | array | Array of outcome objects. Each must contain a `title` field (max 25 characters). Exactly 2 outcomes. |
| prediction_window | integer | The length of time (in seconds) that the prediction will run for. Minimum: 30, Maximum: 1800. |
{:class='table table-secondary w-auto table-hover text-break'}










