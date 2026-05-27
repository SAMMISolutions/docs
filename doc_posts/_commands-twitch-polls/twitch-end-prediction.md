---
title: "End Prediction"
num: 15.5
redirect_from:
  - commands/183
---

Ends a currently running prediction. 

| Box Name | Type | Description | 
|-------|--------|--------
|Login Name | Dropdown |Your Twitch login name (all lowercase characters).
|Status|Dropdown|Status of the ending prediction.
|Prediction ID|String|Prediction ID, wrapped in /$$/ if a variable is being used.
|Result ID (resolved only)|String|Result ID, wrapped in /$$/ if a variable is being used.
{:class='table table-primary'}

**Twitch API Endpoint:** `PATCH /helix/predictions`

| Request Field | Type | Description |
|-------|--------|--------
| broadcaster_id | string | The ID of the broadcaster that's running the prediction. |
| id | string | The ID of the prediction to update. |
| status | string | The status to set the prediction to. Possible values: `RESOLVED`, `CANCELED`, `LOCKED`. |
| winning_outcome_id | string | The ID of the winning outcome. Required only if `status` is `RESOLVED`. |
{:class='table table-secondary w-auto table-hover text-break'}







