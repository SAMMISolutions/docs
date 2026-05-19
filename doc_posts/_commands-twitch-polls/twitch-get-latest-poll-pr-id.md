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







