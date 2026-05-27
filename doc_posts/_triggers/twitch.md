---
layout: default
title: Twitch
menu: Triggers
num: 2
grouped_by: base
type: fullpage
permalink: /triggers/twitch
---

SAMMI can listen to Twitch events and automatically execute your buttons. For example, it can automatically trigger a button every time you get a new subscriber.

#### Add a new trigger
1. Right click on a button in SAMMI - **Edit Triggers** (or CTRL + double click).
2. Click on the **+** button and select the Twitch trigger type.
3. Fill out the fields and options for the selected trigger (read below) and press Save.
4. Optionally you can right click on a button - **Edit Settings** and check  `Add to Request Queue`, which acts as a button queue. If there is another trigger event while the button is still active (for example if you get two subscribers at the same time), it will place is in the queue and reactivate the button as soon as it's ready again.
4. In your button commands, use [Trigger Pull Data]({{ "commands/trigger#triggerpulldata" | relative_url }}) command to retrieve all the provided information from the event (viewer's name, their message, emotes, badge etc.).
<br>


#### Trigger Types

##### Chat
Listens to all chat messages and triggers when specific conditions are met.\
The message field comes with a prefilled `*`, which means it will allow ALL chat messages to come through. You can delete the `*` and use your own keyword.

| Condition | Explanation |
|-------|--------|
| Mod | Triggers only if a mod sends the message. Mutually exclusive with Lead Mod and VIP. |
| Lead Mod | Triggers only if a Lead Moderator sends the message. Mutually exclusive with Mod and VIP. |
| Sub | Triggers only if a subscriber sends the message. |
| Broadcaster | Triggers only if the broadcast themselves sends the message. |
| VIP | Triggers only if a VIP viewer sends the message. Mutually exclusive with Mod and Lead Mod. |
| Founder | Triggers only if the viewer has founders badge. Checking Founder also checks Sub. |
Message | Chat message to listen to. Must be an exact match. Can include **[Wild Cards](introduction#wildcards)**. |
| Username | Triggers only if the viewer's username who sent the chat message matches the one in the box. Must be an exact match. Does NOT accept wild cards. Case insensitive. |
| Case Sensitive | If the user message trigger should be case sensitive.
| Only Trigger in own Chat | If the user message should only be triggered in your own chat and not in the shared chat.
{:class='table table-primary' }

{% include alert.html text="If two or more conditions are checked (such as Mod and Sub), <b>all</b> conditions must be met (user must be a mod and a subscriber). Create separate chat triggers for multiple conditions." type="warning" %}


| Pull Data Value | Explanation |
|-------|--------|
| User Name | Viewer’s login name (all lowercase). |
| Display Name | Viewer’s display name (can contain uppercase characters). |
| User ID | Viewer’s user ID. |
| Message | Viewer’s message. |
| Message ID | ID of the viewer’s message. |
| Message No Emotes | The viewer’s message with all emote text removed. |
| Emote List | List of emotes in the message. <br/> Basic format: `FirstEmoteID:FirstIndex-LastIndex/ SecondEmoteID:FirstIndex-LastIndex` <br/> Message containing multiple emotes will be formatted such as: `FirstEmoteID:FirstIndex(1)-LastIndex(1),FirstIndex(2)-LastIndex(2),FirstIndex(3)-LastIndex(3)` <br/>{% include image_collapse_table.html name="chat_emotes" src="chat_emotes.png" alt="Chat Emotes List" btn="Emotes Example" %}|
| Badge List | Basic format: `FirstBadgeName/version,SecondBadgeName/version` <br/> For example: `broadcaster/1, subscriber/0` <br/> [Global Badges List](https://badges.twitch.tv/v1/badges/global/display), [Channel Badges List](https://badges.twitch.tv/v1/badges/channels/CHANNEL_ID/display) <br/> To find the badge ID in the JSON, look for BadgeList.badge_sets[`BADGENAME`].versions[`VERSION`].image_url_1x. The last part 1x can be changed to 2x, 3x or 4x for bigger size. |
| Channel | Login name of the channel where the message was sent. |
| Name Color | Chat name color in hexadecimal format. |
| Custom Reward ID | ID of the Reward that was redeemed. |
| Reply Parent User Login | User login of the sender of the parent message. |
| Reply Parent Display Name | User name of the sender of the parent message. |
| Reply Parent User ID | User ID of the sender of the parent message. |
| Reply Parent Message Body | The message body of the parent message. |
| Reply Parent Message Id | An ID that uniquely identifies the parent message that this message is replying to. |
| Reply Thread Parent Message ID | An ID that identifies the parent message of the reply thread. |
| Reply Thread Parent User Login | User ID of the sender of the thread’s parent message. |
| Is Broadcaster | Whether the chatter is the broadcaster. 0 = not broadcaster, 1 = broadcaster |
| Is Mod | Whether the chatter is a mod or lead moderator. 0 = not mod, 1 = mod |
| Is Lead Moderator | Whether the chatter is a Lead Moderator. 0 = not lead mod, 1 = lead mod |
| Is VIP | Whether the chatter is a vip. 0 = not vip, 1 = vip |
| Is Founder | Whether the chatter is a Founder. 0 = not founder, 1 = founder |
| Is Subscriber | Whether the chatter is a subscriber. 0 = not subscriber, 1 = subscriber |
| Is Turbo | Whether the chatter is a turbo user. 0 = no turbo, 1 = has turbo |
| Is Own Chat | Whether the message originated from your own chat and not from a Shared Chat session. Returns `0` or `1`. |
| From Channel ID | Which channel the trigger came from. |
{:class=’table table-secondary table-hover’ }

<hr>

##### Whispers
Triggers for any new received whisper messages.

| Condition | Explanation |
|-------|--------|
|Message | Whisper message to listen to. Must be an exact match. Can include **[Wild Cards](introduction#wildcards)**. |
| Case Sensitive | If the user message trigger should be case sensitive
| Allow Empty Wildcard | Check to allow empty strings as valid results
| Sent Messages | Whether you want the button to trigger for not only received, but also sent messages
{:class='table table-primary' }

| Pull Data Value | Explanation |
|-------|--------|
| Sender User Name | Username of the user who sent the whisper. |
| Sender Display Name | Display Name of the user who sent the whisper. |
| Sender User ID | User ID of the user who sent the whisper. |
| Sender Color | Color of the user who sent the whisper. |
| Recipient User Name | Username of the user who received the whisper. |
| Recipient Display Name | Display Name of the user who received the whisper |
| Recipient User ID | User ID of the user who received the whisper  |
| Recipient Color | Color of the user who received the whisper |
| Message | Received message. |
| Sent | Sent message |
| Emote List | List of emotes in the message. <br/> Basic format: `FirstEmoteID:FirstIndex-LastIndex/ SecondEmoteID:FirstIndex-LastIndex` <br/> Message containing multiple emotes will be formatted such as: `FirstEmoteID:FirstIndex(1)-LastIndex(1),FirstIndex(2)-LastIndex(2),FirstIndex(3)-LastIndex(3)` <br/>{% include image_collapse_table.html name="chat_emotes" src="chat_emotes.png" alt="Chat Emotes List" btn="Emotes Example" %}|
| Badge List | Basic format: `FirstBadgeName/version,SecondBadgeName/version` <br/> For example: `broadcaster/1, subscriber/0` <br/> [Global Badges List](https://badges.twitch.tv/v1/badges/global/display), [Channel Badges List](https://badges.twitch.tv/v1/badges/channels/CHANNEL_ID/display) <br/> To find the badge ID in the JSON, look for BadgeList.badge_sets[`BADGENAME`].versions[`VERSION`].image_url_1x. The last part 1x can be changed to 2x, 3x or 4x for bigger size. |
{:class='table table-secondary table-hover' }

<hr>

##### New Follower
Triggers for all new channel followers.

| Pull Data Value | Explanation |
|-------|--------|
| User Name | Viewer's username (all lowercase characters). |
| Display Name | Viewer's display name (can contain uppercase characters). |
| User ID | Viewer's user ID. |
| Followed At | Timestamp when the user followed (ISO 8601 format). |
| From Channel ID | Which channel the trigger came from. |
{:class='table table-secondary table-hover' }


<hr>

##### Subscription
Listens to all new subscribers in your channel.

{% include alert.html text="This trigger will send individual alerts for gifted subs. If you receive 5 gifted subs, 5 individual alerts will be sent by this trigger. If you want one single alert for gifted subs, see Community Gift Subs below." type="warning" %}

| Condition | Explanation |
|-------|--------|
| Tier 1 | Triggers for tier 1 subscriptions. |
| Tier 2 | Triggers for tier 2 subscriptions. |
| Tier 3 | Triggers for tier 3 subscriptions. |
| Prime | Triggers for prime subscriptions. |
| Normal Sub | Triggers for regular subscriptions.
| Sub Gift | Triggers for non anonymous gifted subscriptions. |
| Anonymous Sub Gift | Triggers for anonymous gifted subscriptions. |
| Allow Community Gifts | Triggers for community gifted subscriptions|
| Month Range | Minimum and maximum amount of months the user must be suscribed for the event to trigger.
{:class='table table-primary' }

| Pull Data Value | Explanation |
|-------|--------|
| User Name | Viewer's or gifter's username (all lowercase characters). |
| Display Name | Viewer's or gifter's display name (can contain uppercase characters). |
| User ID | Viewer's or gifter's user ID. |
| Gifted User Name | Recipient's user name if the sub was gifted. |
| Gifted Display Name | Recipient's display name if the sub was gifted. |
| Gifted User ID | Recipient's user ID if the sub was gifted.  |
| Tier | Sub Tier. Returns `Tier 1`, `Tier 2`, `Tier 3` or `Prime` |
| Context | Sub Type. Returns `sub`, `resub`, `resubgift`, `anonresubgift`, `subgift` or `anonsubgift` |
| Message | Viewer's message |
| Message ID | ID of the message (for resubs with a message). |
| Month | Amount of months the viewer has been subscribed (cumulative for resubs). |
| Duration Months | Number of months of the sub gift duration (for resub gifts). |
| Cumulative Total | Total number of subs this user has gifted in the channel (for sub gifts). |
| Community Gift | Whether it's a community gift. Boolean value. Returns `0` or `1`. |
| Community Gift ID | ID of the community gift batch (for subs that were part of a community gift). |
| Name Color | Chat name color of the subscriber in hexadecimal format. |
| Badge List | Subscriber's badge list. Basic format: `FirstBadgeName/version,SecondBadgeName/version` |
| System Message | System message shown in chat for the event (e.g. "X subscribed for 5 months"). |
| Emote List | List of emotes in the subscription message. |
| From Channel ID | Which channel the trigger came from. |
{:class='table table-secondary table-hover' }

<hr>

##### Community Gift Subs
Triggers for all community gift subscriptions.

{% include alert.html text="This will not send the names of who the subs were gifted to. If you want to retrieve all the names of the gifted subs, you need to also use Subscriber trigger" type="warning" %}

| Condition | Explanation |
|-------|--------|
| Tier 1 | Triggers for tier 1 gifted subscriptions. |
| Tier 2 | Triggers for tier 2 gifted subscriptions. |
| Tier 3 | Triggers for tier 3 gifted subscriptions. |
| Minimum | Specify the minimum amount of gifted subs to trigger the button. |
| Maximum | Specify the maximum amount of gifted subscribers to trigger the button.
{:class='table table-primary' }

| Pull Data Value | Explanation |
|-------|--------|
| ID | Unique ID of the community gift batch. |
| User Name | Gifter's username. Returns `ananonymousgifter` for anonymous gifters. |
| Display Name | Gifter's display name. Returns `AnAnonymousGifter` for anonymous gifters. |
| User ID | Gifter's user ID. |
| Amount | Amount of subs gifted in this batch. |
| Cumulative Total | Total number of community subs this gifter has given in the channel. |
| Tier | Sub Tier. Returns `Tier 1`, `Tier 2`, `Tier 3` or `Prime` |
| From Channel ID | Which channel the trigger came from. |
{:class='table table-secondary table-hover' }

<hr>

##### Bits
Listens to all bit events in your stream.

| Condition | Explanation |
|-------|--------|
| Minimum |  Specify the minimum amount of bits to trigger the button. |
| Maximum |  Specify the maximum amount of bits to trigger the button.
{:class='table table-primary table-hover' }

{% include alert.html text="This trigger only fires for regular <code>cheer</code> events. Power-Up cheers and Combo events are separate triggers." type="info" %}

| Pull Data Value | Explanation |
|-------|--------|
| User Name | Viewer's username (all lowercase). |
| Display Name | Viewer's display name. |
| User ID | Viewer's user ID. |
| Amount | Amount of bits cheered. |
| Total Amount | Always returns `0` (kept for backwards compatibility). |
| Type | Type of the bits event. Returns `cheer`. |
| Message | Viewer's message. |
| Emote List | List of emotes in the message. |
| Fragments | Array of message fragments (text and emote objects). |
| Message No Emotes | The viewer's message with all emote text removed. |
| Broadcaster User ID | User ID of the broadcaster. |
| Broadcaster Display Name | Display name of the broadcaster. |
| Broadcaster User Login | Login name of the broadcaster. |
| From Channel ID | Which channel the trigger came from. |
{:class='table table-secondary table-hover' }

<hr>

##### Raid
Listens to all raid events in your stream.

| Condition | Explanation |
|-------|--------|
| Minimum | Specify the minimum amount of raiders to trigger the button. |
| Maximum | Specify the maximum amount of raiders to trigger the button.
{:class='table table-primary' }

| Pull Data Value | Explanation |
|-------|--------|
| User Name | Raider's username. |
| Display Name | Raider's display name. |
| User ID | Raider's user ID. |
| Amount | Amount of raiders. |
| Picture URL | Profile picture URL of the raiding channel. |
| From Channel ID | Which channel the trigger came from. |
{:class='table table-secondary table-hover' }

<hr>

##### Channel Points
Listens to all custom channel points redeems.

In order for SAMMI to listen to Channel Point triggers, make sure the scope to listen to Channel Points has been enabled in SAMMI. Twitch and the Bridge also has to be connected.

| Condition | Explanation |
|-------|--------|
| Redemption Name | Select the name of the redemption from the list or type in manually. A single `*` allows all redeems to trigger the button (does not act as a wildcard). |
| Username | Triggers only if the viewer's username who redeemed it matches the one in the box. Must be an exact match. Does NOT accept wild cards. Case insensitive. |
| User Input Required | Whether the particular redemption requires viewers to enter text when redeemed |
| Case Sensitive | If the user message trigger should be case sensitive |
| User Input | User input if the redemption requires requires viewers to enter text when redeemed (use `*` to accept all user messages). Can include **[Wild Cards](introduction#wildcards)**. |
| Allow Empty Wildcard | Check to allow empty strings as valid results |
{:class='table table-primary' }

| Pull Data Value | Explanation |
|-------|--------|
| User Name | Viewer's username. |
| Display Name | Viewer's display name. |
| User ID | Viewer's user ID. |
| Redeem Name | Name of the reward redeemed. |
| Message | Viewer's redeem message if required. |
| Cost | Reward cost. |
| Image | Reward's image URL. Always returns the default crystal ball image (custom images are not provided by Twitch's API). |
| Reward ID | Reward's general ID. |
| Redeem ID | Redeem's specific ID. Can be used to fulfill or cancel the redemption with Channel Points extension. |
| Redeemed At | Timestamp when the reward was redeemed (ISO 8601 format). |
| Reward Description | Description/prompt text of the reward. |
| Status | Current status of the redemption. Returns `unfulfilled`, `fulfilled`, or `canceled`. |
| Channel ID | User ID of the broadcaster's channel. |
| From Channel ID | Which channel the trigger came from. |
{:class='table table-secondary table-hover' }

<hr>

##### Prediction
Triggers for all prediction events.

| Condition | Explanation |
|-------|--------|
|Type |Type of the prediction event to trigger the button <br/> **Created** = when a new prediction is created <br/>  **Voted** = when a current prediction receives a new vote <br/> **Locked** = when a current prediction ends and no more votes are accepted <br/> **Resolved** = when the broadcaster chooses an outcome for the prediction <br/> **Canceled** = when the broadcaster cancels the prediction
{:class='table table-primary' }

| Pull Data Value | Explanation |
|-------|--------|
| Duration | Duration of the prediction in seconds |
| Event | The event type string. Returns `Created`, `Voted`, `Locked`, `Resolved` or `Canceled` |
| Prediction Name | Name of the prediction |
| Prediction ID | Prediction unique ID |
| Outcome Amount | Number of outcomes in the prediction |
| Vote Total | Total number of users who voted |
| Vote Total Points | Total channel points wagered across all outcomes |
| Outcome 1 Info | An object containing prediction's outcome 1 information (id, name, color, total_user, total_points, top_predictors, percentage) |
| Outcome 2 Info | An object containing prediction's outcome 2 information |
| Outcome x Info | An object containing prediction's outcome x information, up to 10 |
| Winning Outcome | ID of the winning outcome (only for Resolved events) |
| Started At | Timestamp when the prediction started (ISO 8601 format) |
| Locks At | Timestamp when the prediction will lock (Created and Voted events) |
| Locked At | Timestamp when the prediction was locked (Locked event) |
| Ended At | Timestamp when the prediction ended (Resolved and Canceled events) |
| From Channel ID | Which channel the trigger came from. |
{:class='table table-secondary table-hover' }

<hr>

##### Poll
Triggers for all poll events.

| Condition | Explanation |
|-------|--------|
| Type | Type of the poll event to trigger the button <br/> **Created** = when a new poll is created <br/>  **Voted** = when a current poll receives a new vote, <br/> **Ended** = when a current poll ends and no more votes are accepted, <br/> **Archived** - when a current poll is archived (and disappears from Twitch chat) |
{:class='table table-primary' }

| Pull Data Value | Explanation |
|-------|--------|
| Choice Amount | Number of poll choices |
| Duration | Duration of the poll in seconds |
| Event | The event type string. Returns `Created`, `Voted`, `Ended` or `Archived` |
| Poll Name | Name of the poll |
| Poll ID | Poll unique ID |
| Vote Total | Total poll votes |
| Vote Total Base | Total base poll votes (no channel points used) |
| Vote Total Bits | Always returns `0` (bits voting is no longer supported by Twitch) |
| Vote Total Points | Total channel points poll votes |
| Channel Points Voting | Object with channel points voting settings (e.g. amount per vote) |
| Top Vote List | Array of choice indices sorted by vote count (descending) |
| Choice 1 Info | An object containing poll's Choice 1 information (choice_id, title, votes, tokens, percentage, total_voters) |
| Choice 2 Info | An object containing poll's Choice 2 information |
| Choice 3 Info | An object containing poll's Choice 3 information |
| Choice 4 Info | An object containing poll's Choice 4 information |
| Choice 5 Info | An object containing poll's Choice 5 information |
| Started At | Timestamp when the poll started (ISO 8601 format) |
| Ends At | Timestamp when the poll ends (Created and Voted events) |
| Ended At | Timestamp when the poll ended (Ended and Archived events) |
| From Channel ID | Which channel the trigger came from. |
{:class='table table-secondary table-hover' }

<hr>

##### Hype Train
Triggers for all new hype train events.

| Condition | Explanation |
|-------|--------|
| Begin | Triggers when a hype train has started |
| Progressed | Triggers when an event progresses the hype train level |
| Ended | Triggers when a hype train has ended |
| Approaching `DEPRECATED` | Triggers when a hype train is approaching |
| Updated `DEPRECATED` | Triggers when a hype train conductor is updated |
| Leveled Up `DEPRECATED` | Triggers when the hype train levels up |
| Cooldown Expired `DEPRECATED` | Triggers when a previous hype train's cooldown has expired |
{:class='table table-primary' }

The following pull data values are available for **all** Hype Train events:

| Pull Data Value | Explanation |
|-------|--------|
| ID | Unique ID of the hype train. |
| Broadcaster User ID | User ID of the broadcaster. |
| Broadcaster Display Name | Display name of the broadcaster. |
| Broadcaster User Login | Login name of the broadcaster. |
| Level | Current level of the hype train. |
| Total | Total points contributed to the hype train so far. |
| Top Contributions | Array of the top contributors to the hype train. |
| Shared Train Participants | Array of broadcasters participating in a shared hype train. |
| Started At | Timestamp when the hype train started (ISO 8601 format). |
| Is Shared Train | Whether this is a shared hype train. Returns `true` or `false`. |
| Type | Type of the hype train. |
| Event | The event string. Returns `begin`, `progress` or `end`. |
| From Channel ID | Which channel the trigger came from. |
{:class='table table-secondary table-hover' }

The following pull data values are only available for **Begin** events:

| Pull Data Value | Explanation |
|-------|--------|
| Progress | Current progress towards the next level goal. |
| Goal | Points needed to reach the next level. |
| Expires At | Timestamp when the hype train expires (ISO 8601 format). |
| All Time High Level | The all-time highest level this channel's hype train has reached. |
| All Time High Total | The all-time highest total points for a hype train on this channel. |
{:class='table table-secondary table-hover' }

The following pull data values are only available for **Progress** events:

| Pull Data Value | Explanation |
|-------|--------|
| Progress | Current progress towards the next level goal. |
| Goal | Points needed to reach the next level. |
| Expires At | Timestamp when the hype train expires (ISO 8601 format). |
{:class='table table-secondary table-hover' }

The following pull data values are only available for **Ended** events:

| Pull Data Value | Explanation |
|-------|--------|
| Ended At | Timestamp when the hype train ended (ISO 8601 format). |
| Cooldown Ends At | Timestamp when the hype train cooldown ends (ISO 8601 format). |
{:class='table table-secondary table-hover' }

<hr>

##### Moderation
Triggers for any of the selected moderation events.

| Condition | Explanation |
|-------|--------|
| Type | Type of the moderation event. See table below for all available types. |
{:class='table table-primary' }

Available moderation event types:

| Type | Description |
|-------|--------|
| Ban / Timeout | User was banned or timed out (legacy event) |
| Unban / Untimeout | User was unbanned or untimeout (legacy event) |
| Timeout | User was timed out |
| Untimeout | User's timeout was removed |
| Chat Cleared | Chat was cleared |
| Chat Message Deleted | A chat message was deleted |
| Emote-Only Mode On | Emote-only mode was enabled |
| Emote-Only Mode Off | Emote-only mode was disabled |
| Followers-Only Mode On | Followers-only mode was enabled |
| Followers-Only Mode Off | Followers-only mode was disabled |
| Subscribers-Only Mode On | Subscribers-only mode was enabled |
| Subscribers-Only Mode Off | Subscribers-only mode was disabled |
| Slow Mode On | Slow mode was enabled |
| Slow Mode Off | Slow mode was disabled |
| Unique-Chat Mode On | Unique-chat (R9K) mode was enabled |
| Unique-Chat Mode Off | Unique-chat (R9K) mode was disabled |
| Blocked Term Added | A blocked term was added |
| Blocked Term Removed | A blocked term was removed |
| Moderator Added | A user was added as moderator |
| Moderator Removed | A user was removed as moderator |
| VIP Added | A user was added as VIP |
| VIP Removed | A user was removed as VIP |
| Raid Created | Broadcaster initiated a raid |
| Ban | User was banned (new event) |
| Unban | User was unbanned (new event) |
| Warning Issued | A warning was issued to a user |
{:class='table table-primary' }

The following pull data values are available for **all** moderation events (where applicable):

| Pull Data Value | Explanation |
|-------|--------|
| Event | The event type string (e.g. `ban`, `timeout`, `clear chat`). |
| Broadcaster User ID | User ID of the broadcaster. |
| Broadcaster Display Name | Display name of the broadcaster. |
| Broadcaster User Login | Login name of the broadcaster. |
| Moderator User ID | User ID of the moderator who performed the action. |
| Moderator Display Name | Display name of the moderator. |
| Moderator User Login | Login name of the moderator. |
| Target | Login name of the targeted user (for ban, timeout, unban, untimeout, warn). |
| Target User ID | User ID of the targeted user. |
| Target Display Name | Display name of the targeted user. |
| Target User Login | Login name of the targeted user. |
| Reason | Reason for the moderation action (for ban, timeout, warn). |
| Is Permanent | Whether the ban is permanent (for ban events). |
| Ends At | Timestamp when the timeout ends (for timeout events). |
| Banned At | Timestamp when the ban occurred. |
| Expires At | Timestamp when the timeout expires (for timeout events). |
| Message | The deleted message (for message delete — always empty, not provided by Twitch). |
| Message ID | ID of the deleted message (for message delete). |
| Wait Time Seconds | Seconds between messages (for slow mode). |
| Terms | Array of added/removed terms (for blocked term events). |
| List | Which list the term was added to (for blocked term events). |
| Action | The automod action (for blocked term events). |
| From Automod | Whether the action came from AutoMod (for blocked term events). |
| Viewer Count | Number of viewers in the raid (for raid created). |
| From Channel ID | Which channel the trigger came from. |
{:class='table table-secondary table-hover' }

<hr>

##### Shoutout Created
Triggers when the broadcaster or a moderator uses the /shoutout command. The channel must be live for this to work.

| Pull Data Value | Explanation |
|-------|--------|
| User Name | User name of the person being shouted out. |
| Display Name | Display name of the person being shouted out. |
| User ID | User ID of the person being shouted out. |
| Picture URL | Returns a default profile image URL (Twitch does not provide the actual profile image). |
| Name Color | Always returns empty string (not provided by Twitch). |
| Recent Categories | Always returns empty string (not provided by Twitch). |
| Moderator User ID | User ID of the moderator who sent the shoutout. |
| Moderator User Name | Login name of the moderator who sent the shoutout. |
| Moderator Display Name | Display name of the moderator who sent the shoutout. |
| Viewer Count | Number of viewers watching the shouted-out channel at the time. |
| Started At | Timestamp when the shoutout was sent (ISO 8601 format). |
| Cooldown Ends At | Timestamp when the broadcaster can send another shoutout (ISO 8601 format). |
| Target Cooldown Ends At | Timestamp when the same channel can be shouted out again (ISO 8601 format). |
| From Channel ID | Channel ID of the channel making the shoutout. |
{:class='table table-secondary table-hover' }

<hr>

##### Twitch Automatic Reward Redemption
Triggers when any automatic reward is redeemed, for example "Gigantify an Emote" or "Unlock a Random Sub Emote".

{% include alert.html text="Cost <strong>does not</strong> show Bit cost. It only shows the amount of channel points something cost." type="warning" %}
{% include alert.html text="If user redeems <code>Gigantify Emote</code> the emote the user Gigantified will be the last index in the array." type="info" %}

| Pull Data Value | Explanation |
|-------|--------|
| User Name | Viewer's username (all lowercase). |
| Display Name | Viewer's display name. |
| User ID | Viewer's user ID. |
| Cost | Reward cost in channel points. |
| Type | Redemption type. Returns `message_effect`, `gigantify_an_emote`, `celebration`, `send_highlighted_message`, `random_sub_emote_unlock`, `single_message_bypass_sub_mode`, `chosen_sub_emote_unlock` or `chosen_modified_sub_emote_unlock` |
| Emote | Emote object from the reward (for emote-related redemptions). |
| Message | Viewer's message (only for message-based redemptions). |
| Emote List | List of emotes in the message (only for message-based redemptions). |
| Message No Emotes | The message with all emote text removed (only for message-based redemptions). |
| Redeemed At | Timestamp when the reward was redeemed (ISO 8601 format). |
| Redeem ID | Redeem's specific ID. |
| Channel ID | Broadcaster's user ID. |
| From Channel ID | Which channel the trigger came from. |
{:class='table table-secondary table-hover' }

<hr>

##### Shoutout Received
Triggers when another broadcaster shouts out your channel.

| Pull Data Value | Explanation |
|-------|--------|
| From User ID | User ID of the broadcaster who sent the shoutout. |
| From User Name | Login name of the broadcaster who sent the shoutout. |
| From Display Name | Display name of the broadcaster who sent the shoutout. |
| Viewer Count | Number of viewers watching the shouting-out channel at the time. |
| Started At | Timestamp when the shoutout was received (ISO 8601 format). |
| From Channel ID | Which channel the trigger came from. |
{:class='table table-secondary table-hover' }

<hr>

##### Announcement
Triggers when an announcement is sent in the chat using the /announce command.

| Pull Data Value | Explanation |
|-------|--------|
| Message ID | ID of the announcement message. |
| User Name | Login name of the user who sent the announcement. |
| Display Name | Display name of the user who sent the announcement. |
| User ID | User ID of the user who sent the announcement. |
| Message | The announcement message text. |
| Announcement Color | Color of the announcement. Returns `PRIMARY`, `BLUE`, `GREEN`, `ORANGE` or `PURPLE`. |
| Badge List | Announcer's badge list. Basic format: `FirstBadgeName/version,SecondBadgeName/version` |
| Emote List | List of emotes in the announcement. |
| Fragments | Array of message fragments (text and emote objects). |
| Message No Emotes | The announcement text with all emote text removed. |
| From Channel ID | Which channel the trigger came from. |
{:class='table table-secondary table-hover' }

<hr>

##### Twitch Stream
Triggers when a stream starts or ends.

| Condition | Explanation |
|-------|--------|
| Type | **Started** = when the stream goes live <br/> **Ended** = when the stream ends |
{:class='table table-primary' }

| Pull Data Value | Explanation |
|-------|--------|
| Display Name | Display name of the broadcaster. |
| User Name | Login name of the broadcaster. |
| User ID | User ID of the broadcaster. |
| ID | Stream ID (only for Started events). |
| Type | Stream type, e.g. `live` (only for Started events). |
| Started At | Timestamp when the stream started (only for Started events, ISO 8601 format). |
| From Channel ID | Which channel the trigger came from. |
{:class='table table-secondary table-hover' }

<hr>

##### Twitch Channel Information Updated
Triggers when the broadcaster updates their channel information (title, game, language, etc.).

| Pull Data Value | Explanation |
|-------|--------|
| Broadcaster User ID | User ID of the broadcaster. |
| Broadcaster User Login | Login name of the broadcaster. |
| Broadcaster User Name | Display name of the broadcaster. |
| Title | New stream title. |
| Language | New stream language code (e.g. `en`). |
| Category ID | ID of the new game/category. |
| Category Name | Name of the new game/category. |
| Content Classification Labels | Array of content classification labels. |
| From Channel ID | Which channel the trigger came from. |
{:class='table table-secondary table-hover' }

<hr>

##### Twitch Ad Break
Triggers when an ad break starts.

| Pull Data Value | Explanation |
|-------|--------|
| Display Name | Display name of the broadcaster. |
| User Name | Login name of the broadcaster. |
| User ID | User ID of the broadcaster. |
| Started At | Timestamp when the ad break started (ISO 8601 format). |
| Duration | Duration of the ad break in seconds. |
| Is Automatic | Whether the ad break was automatically scheduled. Returns `true` or `false`. |
| Requester User ID | User ID of the user who started the ad break. |
| Requester User Name | Login name of the user who started the ad break. |
| Requester Display Name | Display name of the user who started the ad break. |
| From Channel ID | Which channel the trigger came from. |
{:class='table table-secondary table-hover' }

<hr>

##### Twitch Charity
Triggers for charity campaign events.

| Condition | Explanation |
|-------|--------|
| Type | **Charity Start** = when a charity campaign starts <br/> **Charity Progress** = when the campaign total updates <br/> **Charity Stop** = when the campaign ends <br/> **Charity Donate** = when a viewer donates to the charity |
{:class='table table-primary' }

| Pull Data Value | Explanation |
|-------|--------|
| Event | The event type string. Returns `start`, `progress`, `stop` or `donate`. |
| ID | Unique ID of the charity campaign (or donation for donate events). |
| Campaign ID | ID of the campaign (for donate events). |
| Charity Name | Name of the charity. |
| Charity Description | Description of the charity. |
| Charity Logo | URL of the charity's logo. |
| Charity Website | URL of the charity's website. |
| Current Amount | Current amount raised (in the smallest currency unit, e.g. cents). |
| Current Amount Currency | Currency code for the current amount (e.g. `USD`). |
| Target Amount | Target amount for the campaign (in the smallest currency unit). |
| Target Amount Currency | Currency code for the target amount. |
| User Name | Login name of the donor (only for donate events). |
| Display Name | Display name of the donor (only for donate events). |
| User ID | User ID of the donor (only for donate events). |
| Amount | Donation amount in the smallest currency unit (only for donate events). |
| Currency | Currency code of the donation (only for donate events). |
| Started At | Timestamp when the campaign started (only for start events, ISO 8601 format). |
| Stopped At | Timestamp when the campaign ended (only for stop events, ISO 8601 format). |
| From Channel ID | Which channel the trigger came from. |
{:class='table table-secondary table-hover' }

<hr>

##### Twitch Guest Star
Triggers for Guest Star session events.

| Condition | Explanation |
|-------|--------|
| Type | **Session Begin** = when a Guest Star session starts <br/> **Guest Update** = when a guest's status changes <br/> **Session End** = when the session ends <br/> **Settings Update** = when Guest Star settings change |
{:class='table table-primary' }

| Pull Data Value | Explanation |
|-------|--------|
| Event | The event type string. Returns `begin`, `update`, `end` or `settings`. |
| ID | Session ID (for begin, update, end events). |
| Started At | Timestamp when the session started (for begin and end events). |
| Ended At | Timestamp when the session ended (for end events). |
| Moderator User ID | User ID of the moderator (for update events). |
| Moderator Display Name | Display name of the moderator (for update events). |
| Moderator User Name | Login name of the moderator (for update events). |
| Guest User ID | User ID of the guest (for update events). |
| Guest Display Name | Display name of the guest (for update events). |
| Guest User Login | Login name of the guest (for update events). |
| Slot ID | Slot ID the guest is in (for update events). |
| State | Guest's state in the session (for update events). |
| Host Video Enabled | Whether the host's video is enabled for this guest (for update events). |
| Host Audio Enabled | Whether the host's audio is enabled for this guest (for update events). |
| Host Volume | Host volume level for this guest (for update events). |
| Is Moderator Send Live Enabled | Whether mods can send guests live (for settings events). |
| Slot Count | Number of guest slots (for settings events). |
| Is Browser Source Audio Enabled | Whether browser source audio is enabled (for settings events). |
| Group Layout | The group layout setting (for settings events). |
| From Channel ID | Which channel the trigger came from. |
{:class='table table-secondary table-hover' }

<hr>

##### Twitch Watch Streak
Triggers when a viewer reaches a watch streak milestone.

| Condition | Explanation |
|-------|--------|
| Range | Enable to set a minimum and maximum streak amount to trigger the button. |
| Minimum | Minimum streak amount to trigger the button. |
| Maximum | Maximum streak amount to trigger the button. |
{:class='table table-primary' }

| Pull Data Value | Explanation |
|-------|--------|
| Display Name | Display name of the viewer. |
| User Name | Login name of the viewer. |
| User ID | User ID of the viewer. |
| Amount | The watch streak value. |
| Message | The system message shown in chat. |
| Reward | Channel points reward amount associated with the streak. |
| From Channel ID | Which channel the trigger came from. |
{:class='table table-secondary table-hover' }

<hr>

##### Twitch Default Power-Ups
Triggers when a viewer uses a Power-Up (bits power-up cheer). This is a separate trigger from the regular Bits trigger.

| Condition | Explanation |
|-------|--------|
| Minimum | Minimum amount of bits to trigger the button. |
| Maximum | Maximum amount of bits to trigger the button. |
{:class='table table-primary' }

| Pull Data Value | Explanation |
|-------|--------|
| User Name | Viewer's username (all lowercase). |
| Display Name | Viewer's display name. |
| User ID | Viewer's user ID. |
| Amount | Amount of bits used. |
| Type | Always returns `power_up`. |
| Message | Viewer's message. |
| Emote List | List of emotes in the message. |
| Fragments | Array of message fragments (text and emote objects). |
| Message No Emotes | The message with all emote text removed. |
| Power Up | Object with power-up details. |
| Broadcaster User ID | User ID of the broadcaster. |
| Broadcaster Display Name | Display name of the broadcaster. |
| Broadcaster User Login | Login name of the broadcaster. |
| From Channel ID | Which channel the trigger came from. |
{:class='table table-secondary table-hover' }

<hr>

##### Twitch Combo
{% include alert.html text="Twitch has deprecated bits combos. This trigger is no longer expected to fire." type="warning" %}
Triggers when a viewer makes a bits combo. This is a separate trigger from the regular Bits trigger.

| Condition | Explanation |
|-------|--------|
| Minimum | Minimum amount of bits to trigger the button. |
| Maximum | Maximum amount of bits to trigger the button. |
{:class='table table-primary' }

| Pull Data Value | Explanation |
|-------|--------|
| User Name | Viewer's username (all lowercase). |
| Display Name | Viewer's display name. |
| User ID | Viewer's user ID. |
| Amount | Amount of bits in the combo. |
| Type | Always returns `combo`. |
| Broadcaster User ID | User ID of the broadcaster. |
| Broadcaster Display Name | Display name of the broadcaster. |
| Broadcaster User Login | Login name of the broadcaster. |
| From Channel ID | Which channel the trigger came from. |
{:class='table table-secondary table-hover' }

<hr>

##### Twitch Custom Power-Ups
Triggers when a viewer redeems a Custom Power-Up (bits-based custom redemption).

| Condition | Explanation |
|-------|--------|
| Power-Up Name | Name of the power-up to listen to. Use `*` to trigger for all power-ups. |
| Username | Triggers only if the viewer's username matches. Must be an exact match. Case insensitive. |
| User Input Required | Whether the power-up requires viewers to enter text when redeemed. |
| User Input | User input if required (use `*` to accept all messages). Can include **[Wild Cards](introduction#wildcards)**. |
| Allow Empty Wildcard | Check to allow empty strings as valid results. |
{:class='table table-primary' }

| Pull Data Value | Explanation |
|-------|--------|
| User Name | Viewer's username (all lowercase). |
| Display Name | Viewer's display name. |
| User ID | Viewer's user ID. |
| Power Up Name | Name of the custom power-up. |
| Power Up ID | ID of the custom power-up. |
| Cost | Cost in bits. |
| Message | Viewer's input message (if required). |
| Redeemed At | Timestamp when the power-up was redeemed (ISO 8601 format). |
| Redeem ID | Unique ID of this redemption. |
| Status | Current status of the redemption. |
| Broadcaster User ID | User ID of the broadcaster. |
| Broadcaster Display Name | Display name of the broadcaster. |
| Broadcaster User Name | Login name of the broadcaster. |
| From Channel ID | Which channel the trigger came from. |
{:class='table table-secondary table-hover' }

<hr>

##### Twitch EventSub Status Changed
Triggers when SAMMI's connection to Twitch EventSub changes.

| Condition | Explanation |
|-------|--------|
| Type | **Connected** = when EventSub connects successfully <br/> **Disconnected** = when EventSub disconnects |
{:class='table table-primary' }

| Pull Data Value | Explanation |
|-------|--------|
| Status | Whether connected. Returns `true`. |
| From Channel ID | Which channel the trigger came from. |
{:class='table table-secondary table-hover' }

<hr>

##### Twitch Custom EventSub Subscription
Triggers when any custom EventSub subscription event is fired.

{% include alert.html text="You need to use the <a href='/docs/commands/twitch-misc#createeventsubsubscription'>Twtich: Create EventSub Subscription</a> command in order to subscribe to custom events." type="warning" %}

| Pull Data Value | Explanation |
|-------|--------|
| All | The raw parsed payload from Twitch. This will be different per EventSub subscription, so please check the Twitch documentation for the payload structure. |
| Subscription Type | The name of the subscription that triggered the button. |
| Trigger Type | The SAMMI trigger type. |
{:class='table table-secondary table-hover' }
