---
title: "Get Latest Poll/Prediction ID"
num: 16.5
redirect_from:
  - commands/184
---

Gets the latest poll ID, prediction ID, or outcome ID to use with [Get Poll/Prediction Result]({{ "#getpollpredictionresult" | strip }}) or [End Prediction]({{ "#endprediction" | strip }}). This only works for predictions/polls initiated through SAMMI.


| Box Name | Type | Description |
|-------|--------|--------
|Login Name | Dropdown |Your Twitch login name (all lowercase characters)
|Get|Dropdown |Whether it's a poll or prediction ID
|Save Variable As|String|Variable name to save the ID
{:class='table table-primary'}

**Saved Value:**

| Get Selection | Saved Type | Description |
|-------|------|-------------|
|Poll ID|String|ID of the latest poll returned by Twitch.|
|Prediction ID|String|ID of the latest prediction returned by Twitch.|
|Prediction Outcome ID|String|ID of the selected outcome on the latest prediction.|
|""|String|Saved as an empty string if the selected prediction outcome does not exist.|
|undefined|Undefined|Saved if Twitch is not connected, the channel cannot be resolved, required scopes are missing, Twitch returns an empty response, or the request fails.|
{:class='table table-secondary w-auto table-hover text-break'}

**Twitch API Endpoints:**

`GET /helix/polls` — used when fetching the latest Poll ID.

`GET /helix/predictions` — used when fetching the latest Prediction ID or Prediction Outcome ID.

| Query Parameter | Type | Description |
|-------|--------|--------
| broadcaster_id | string | The ID of the broadcaster whose polls or predictions to get. |
| first | integer | Maximum number of items to return per page (set to 1 to retrieve the latest). |
{:class='table table-secondary w-auto table-hover text-break'}







