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
| Mod | Triggers only if a mod sends the message. |
| Sub | Triggers only if a subscriber sends the message. |
| Broadcaster | Triggers only if the broadcast themselves sends the message. |
| VIP | Triggers only if a VIP viewer sends the message. |
| Founder | Triggers only if the viewer has founders badge. |
Message | Chat message to listen to. Must be an exact match. Can include **[Wild Cards](introduction#wildcards)**. |
| Username | Triggers only if the viewer's username who sent the chat message matches the one in the box. Must be an exact match. Does NOT accept wild cards. Case insensitive. |
| Case Sensitive | If the user message trigger should be case sensitive
{:class='table table-primary' }

{% include alert.html text="If two or more conditions are checked (such as Mod and Sub), <b>all</b> conditions must be met (user must be a mod and a subscriber). Create separate chat triggers for multiple conditions." type="warning" %}


| Pull Data Value | Explanation |
|-------|--------|
| User Name | Viewer's username (all lowercase characters). |
| Display Name | Viewer's display name (can contain uppercase characters). |
| User ID | Viewer's user ID. |
| Message | Viewer's message. |
| Message ID | ID of the viewer's message |
| Emote List | Viewer's available emotes. <br/> Basic format: `FirstEmoteID:FirstIndex-LastIndex/ SecondEmoteID:FirstIndex-LastIndex` <br/> Message containing multiple emotes will be formatted such as: `FirstEmoteID:FirstIndex(1)-LastIndex(1),FirstIndex(2)-LastIndex(2),FirstIndex(3)-LastIndex(3)` <br/>{% include image_collapse_table.html name="chat_emotes" src="chat_emotes.png" alt="Chat Emotes List" btn="Emotes Example" %}|
| Badge List | Basic format: `FirstBadgeName/version,SecondBadgeName/version` <br/> For example: `broadcaster/1, subscriber/0` <br/> [Global Badges List](https://badges.twitch.tv/v1/badges/global/display), [Channel Badges List](https://badges.twitch.tv/v1/badges/channels/CHANNEL_ID/display) <br/> To find the badge ID in the JSON, look for BadgeList.badge_sets[`BADGENAME`].versions[`VERSION`].image_url_1x. The last part 1x can be changed to 2x, 3x or 4x for bigger size. |
| Channel | Channel Name where the message originated from. Will return `w` if it's a whisper. |
| Name Color | Chat name color in hexadecimal format. |
| Bits | The amount of bits cheered. (<strong>Does not include PowerUps</strong>) |
| Custom Reward ID | ID of the Reward that was redeemed. |
| Reply Parent User Login | User login of the sender of the parent message. |
| Reply Parent Display Name | User name of the sender of the parent message. |
| Reply Parent User ID | User ID of the sender of the parent message. | 
| Reply Parent Message Body | The message body of the parent message. |
| Reply Parent Message Id | An ID that uniquely identifies the parent message that this message is replying to. |
| Reply Thread Parent Message ID | An ID that identifies the parent message of the reply thread. |
| Reply Thread Parent User Login | User ID of the sender of the thread’s parent message. |
| Room ID | An ID that identifies the chat room (channel). |
| Source ID | A UUID that identifies the source message from the channel the message was sent from. |
| Source Room ID | An ID that identifies the chat room (channel) the message was sent from. |
| Source Badges | Comma-seperated list of chat badges for the chatter in the room the message was sent from. This uses the same format as the <code>badges</code> list. |
| Source Badge Info | Contains metadata related to the chat badges in the source-badges tag. |
| Is Broadcaster | Whether the chatter is the broadcaster. 0 = not broadcaster, 1 = broadcaster |
| Is Mod | Whether the chatter is a mod. 0 = not mod, 1 = mod |
| Is VIP | Whether the chatter is a vip. 0 = not vip, 1 = vip |
| Is Founder | Whether the chatter is a Founder. 0 = not founder, 1 = founder |
| Is Subscriber | Whether the chatter is a subscriber. 0 = not subscriber, 1 = subscriber |
| Is Turbo | Whether the chatter is a turbo user. 0 = no turbo, 1 = has turbo |
| First Time | Whether it's user's first chat message. 0 = not first, 1 = first |
| Unix Timestamp | The timestamp when the message was sent, in Unix format. |
| From Channel ID | Which channel the trigger came from. |
{:class='table table-secondary table-hover' }

<hr>

##### Whispers
Triggers for any new received whisper messages. Must use [Twitch Open Whispers]({{ "commands/twitch#openwhispers" | relative_url }}) command to enable whisper messages.

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
| Recipient Display Name | UsDisplay Namername of the user who received the whisper |
| Recipient User ID | User ID of the user who received the whisper  |
| Recipient Color | Color of the user who received the whisper |
| Message | Received message. |
| Sent | Sent message |
| Emote List | Sender's available emotes. <br/> Basic format: `FirstEmoteID:FirstIndex-LastIndex/ SecondEmoteID:FirstIndex-LastIndex` <br/> Message containing multiple emotes will be formatted such as: `FirstEmoteID:FirstIndex(1)-LastIndex(1),FirstIndex(2)-LastIndex(2),FirstIndex(3)-LastIndex(3)` <br/>{% include image_collapse_table.html name="chat_emotes" src="chat_emotes.png" alt="Chat Emotes List" btn="Emotes Example" %}|
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
| Context | Sub Type. Returns `sub`, `resub`, `resubgift`, `subgift` or `anonsubgift` |
| Message | Viewer's message |
| Month | Amount of months the viewer has been subscribed |
| Community Gift | Whether it's a community gift. Boolean value. Returns `0` or `1`. |
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
| User Name | Gifter's username. Returns `ananonymousgifter` for anonymous gifters. |
| Display Name | Gifter's display name. Returns `AnAnonymousGifter` for anonymous gifters. |
| User ID | Gifter's user ID. |
| Amount | Amount of subs gifted. |
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

| Pull Data Value | Explanation |
|-------|--------|
| User Name | Viewer's username. |
| User ID | Viewer's user ID. |
| Amount | Amount of bits donated. |
| Total Amount | Amount of total bits donated. |
| Message | Viewer's message. |
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
| Display Name | Raider's or host's display name. |
| User ID | Raider's user ID. |
| Amount | Amount of raiders or host's viewers. |
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
| Image | Reward's image URL. Returns default crystal ball if there's no image. |
| Reward ID | Reward's general ID. |
| Redeem ID | Redeem's specific ID. Can be used to fulfill or cancel the redemption with Channel Points extension. |
| From Channel ID | Which channel the trigger came from. |
{:class='table table-secondary table-hover' }

<hr>

##### Prediction
Triggers for all prediction events.

| Condition | Explanation |
|-------|--------|
|Type |Type of the prediction event to trigger the button <br/> **Created** = when a new prediction is created <br/>  **Voted** = when a current prediction receives a new vote, <br/> **Locked** = when a current prediction ends and no more votes are accepted, <br/> **Resolved** - when the broadcaster chooses an outcome for the prediction
{:class='table table-primary' }

| Pull Data Value | Explanation |
|-------|--------|
| Duration | Duration of the prediction |
| Event | |
| Prediction Name | Name of the prediction |
| Prediction ID | Prediction unique ID |
| Vote Total | Total prediction votes |
| Outcome 1 Info | An object containing prediction's outcome 1 information |
| Outcome 2 Info | An object containing prediction's outcome 2 information |
| Outcome x Info | An object containing prediction's outcome x information, up to 10 |
| Winning Outcome | Winning outcome |
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
| Duration | Duration of the poll |
| Poll Name | Name of the poll |
| Poll ID | Poll unique ID |
| Vote Total | Total poll votes |
| Vote Total Base | Total base poll votes (no bits or points used) |
| Vote Total Bits | Total bits poll votes |
| Vote Total Points | Total channel points poll votes |
| Top Vote List | Array of the poll's current choice rankings |
| Choice 1 Info | An object containing poll's Choice 1 information |
| Choice 2 Info | An object containing poll's Choice 2 information |
| Choice 3 Info | An object containing poll's Choice 3 information |
| Choice 4 Info | An object containing poll's Choice 4 information |
| Choice 5 Info | An object containing poll's Choice 5 information |
| From Channel ID | Which channel the trigger came from. |
{:class='table table-secondary table-hover' }

<hr>

##### Hype Train
Triggers for all new hype train events.

| Condition | Explanation |
|-------|--------|
| Started | Triggers when a hype train has started |
| Progressed | Triggers when an event progresses the hype train level |
| Ended | Triggers when a hype train has ended |
| Approaching `DEPRECATED` | Triggers when a hype train is approaching |
| Conductor Update `DEPRECATED` | Triggers when a hype train conductor is assigned |
| Level Up `DEPRECATED` | Triggers when the hype train levels up |
| Cooldown expired `DEPRECATED` | Triggers when a previous hype train's cooldown has expired |
{:class='table table-primary' }

<hr>

##### Moderation
Triggers for any of the selected moderation events. Due to some back-end changes from Twitch, listening to some moderation events currently do not work.

| Condition | Explanation |
|-------|--------|
Type | Dropdown | Type of the event to trigger the button
{:class='table table-primary' }

<hr>

##### Shoutout
Triggers when the /shoutout command is used. The channel must be live and streaming for this to work. 

| Pull Data Value | Explanation |
|-------|--------|
| User Name | User name of the person being shouted out. |
| Display Name | Display name of the person being shouted out. |
| User ID | User ID of the person being shouted out. |
| Picture URL | URL of the profile picture of the person being shouted out. |
| ID | Shoutout ID |
| Name Color | Hex code colour of the name of the person being shouted out. |
| Recent Categories | Recent categories streamed by the person being shouted out. |
| From Channel ID | Channel ID of the channel making the shoutout. |
{:class='table table-secondary table-hover' }

<hr>

##### Twitch Automatic Reward Redemption
Triggers when any automatic reward is redeemed, for example "Gigantify an Emote" or "Unlock a Random Sub Emote".

{% include alert.html text="Cost <strong>does not</strong> show Bit cost. It only shows the amount of channel points something cost." type="warning" %}
{% include alert.html text="If user redeems <code>Gigantify Emote</code> the emote the user Gigantified will be the last index in the array." type="info" %}

| Pull Data Value | Explanation |
|-------|--------|
| User Name | Viewers username. |
| Display Name | Viewer's display name. |
| User ID | Viewer's user ID. |
| Cost | Reward cost. |
| Message | Viewer's message if required. |
| Emotes | Array of objects with the Emote IDs within the message. |
| Type | Redemption Type. Returns <code>message_effect</code>, <code>gigantify_an_emote</code>, <code>celebration</code>, <code>send_highlighted_message</code>, <code>random_sub_emote_unlock</code>, <code>single_message_bypass_sub_mode</code>, <code>chosen_sub_emote_unlock</code> or <code>chosen_modified_sub_emote_unlock</code> |
| Unlocked Emote | Returns an Object with the ID and Name of the unlocked emote |
| Redeemed At | The time in twitch format, that the item was redeemed |
| Reward ID | Reward's general ID. |
| Redeem ID | Redeem's specific ID. | 
| Channel ID | Which channel the trigger came from. |
| From Channel ID | Which channel the trigger came from. |
{:class='table table-secondary table-hover' }


