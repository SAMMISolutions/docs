---
title: "Get Poll/Prediction Result"
num: 16.6
---

Gets the result of a poll or prediction. Must provide its ID which can be retrieved by listening to Twitch Poll/Prediction triggers or from [Get Latest Poll/Prediction ID]({{ "#getlatestpollpredictionid" | strip }}) command.

{% include alert.html text="This command needs some time to execute, either delay your next commands by 1-2 seconds or use <a href='/docs/commands/wait#waituntilvariableexists'>Wait Until Variable Exists</a> command." type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|Login Name|String|Your Twitch login name (all lowercase characters)
|Poll/Prediction ID | The ID of your poll or prediction | 
|Get|Dropdown |Whether it's a poll or prediction
|Save Variable|String|Variable name to save the response
{:class='table table-primary'}

You can access the response object fields by using [Get Object Variable]({{ "commands/object#getobjectvariable" | relative_url }}) command. The object is the Save Variable and key is one of the response fields.


**Response fields for polls:**

<div style="height: 40vh; overflow-y: auto" markdown="1">

| Field | Type| Description| 
|-------|--------|--------
|id	|string|	ID of the poll.
|broadcaster_id	|string|	ID of the broadcaster.
|broadcaster_name	|string|	Name of the broadcaster.
|broadcaster_login	|string|	Login of the broadcaster.
|title	|string|	Question displayed for the poll.
|choices	object[]|	Array of the poll choices.
|choice.id	|string|	ID for the choice.
|choice.title	|string|	Text displayed for the choice.
|choice.votes	|integer|	Total number of votes received for the choice across all methods of voting.
|choice.channel_points_votes	|integer|	Number of votes received via Channel Points.
|choice.bits_votes	|integer|	Number of votes received via Bits.
|bits_voting_enabled	|boolean|	Indicates if Bits can be used for voting.
|bits_per_vote	|integer|	Number of Bits required to vote once with Bits.
|channel_points_voting_enabled	|boolean|	Indicates if Channel Points can be used for voting.
|channel_points_per_vote	|integer|	Number of Channel Points required to vote once with Channel Points.
|status	|string|	Poll status. Valid values are: <br/> ACTIVE: Poll is currently in progress.  <br/>COMPLETED: Poll has reached its ended_at time.  <br/>TERMINATED: Poll has been manually terminated before its ended_at time.  <br/>ARCHIVED: Poll is no longer visible on the channel.  <br/>MODERATED: Poll is no longer visible to any user on Twitch.  <br/>INVALID: Something went wrong determining the state.
|duration|	integer|	Total duration for the poll (in seconds).
|started_at|	string|	UTC timestamp for the poll’s start time.
|ended_at|	string|	UTC timestamp for the poll’s end time. Set to null if the poll is active.
{:class='table table-secondary w-auto table-hover' }

</div>
 <br/>
**Response fields for predictions:**

<div style="height: 40vh; overflow-y: auto" markdown="1">

| Field | Type| Description| 
|-------|--------|--------
|id	|string|	ID of the Prediction.
|broadcaster_id	|string|	ID of the broadcaster.
|broadcaster_name	|string|	Name of the broadcaster.
|broadcaster_login	|string|	Login of the broadcaster.
|title	|string|	Title for the Prediction.
|winning_outcome_id	|string|	ID of the winning outcome. If the status is ACTIVE, this is set to null.
|outcomes|	object[]|	Array of possible outcomes for the Prediction.
|outcome.id	|string|	ID for the outcome.
|outcome.title	|string|	Text displayed for outcome.
|outcome.users	|integer|	Number of unique uesrs that chose the outcome.
|outcome.channel_points	|integer|	Number of Channel Points used for the outcome.
|outcome.top_predictors	|object[]|	Array of users who were the top predictors. null if none.
|outcome.top_predictors.user.id	|string|	ID of the user.
|outcome.top_predictors.user.name	|string|	Display name of the user.
|outcome.top_predictors.user.login	|string|	Login of the user.
|outcome.top_predictors.user.channel_points_used	|integer|	Number of Channel Points used by the user.
|outcome.top_predictors.user.channel_points_won	|integer|	Number of Channel Points won by the user.
|outcome.color	|string|	Color for the outcome. Valid values: BLUE, PINK
|prediction_window	|integer|	Total duration for the Prediction (in seconds).
|status	|string|	Status of the Prediction. Valid values are: <br/> RESOLVED: A winning outcome has been chosen and the Channel Points have been distributed to the users who guessed the correct outcome. <br/>ACTIVE: The Prediction is active and viewers can make predictions. <br/>CANCELED: The Prediction has been canceled and the Channel Points have been refunded to participants. <br/>LOCKED: The Prediction has been locked and viewers can no longer make predictions.
|created_at	|string|	UTC timestamp for the Prediction’s start time.
|ended_at	|string|	UTC timestamp for when the Prediction ended. If the status is ACTIVE, this is set to null.
|locked_at	|string|	UTC timestamp for when the Prediction was locked. If the status is not LOCKED, this is set to null.
{:class='table table-secondary w-auto table-hover' }

</div>





