---
layout: default
title: Twitch Triggers
menu: Triggers
num: 1
grouped_by: base
type: fullpage
permalink: /triggers/twitch
---
LioranBoard can listen to Twitch events and automatically execute your buttons. For example, it can automatically trigger a button every time you get a new subscriber. 

#### Add a new trigger 
1. Right click on the button in your Receiver - Add Twitch Triggers. 
2. Click on the `+` button and select the trigger type. 
4. Optionally check `Add to Request Queue`, which acts as a button queue. If there is another trigger event while the button is still active (for example if you get two subscribers at the same time), it will place is in the queue and reactivate the button as soon as it's ready again.
5. In your button commands, use [Math: Trigger Pull]({{ "commands/trigger#mathtriggerpull" | relative_url }}) command to retrieve all the provided information (viewer's name, their message, emotes, badge etc.).   
<br>


#### Type of Twitch Triggers 

##### Chat or whisper message  
Listens to all chat messages and triggers when specific conditions are met.     
Will also listen to whisper messages if you use Twitch: Open Whispers command.    
All chat message triggers are case sensitive by default. You can uncheck `Case Sensitive` to allow all messages no matter the case. 

{% include image_collapse.html name="chat_trigger" src="chat_message.png" btn="1" alt="Twitch Chat Trigger Example" pastebin="vBfdhdH9" %}

| Condition | Explanation | 
|-------|--------|
| 1st | Triggers only if the viewer has founders badge. |
| Sub | Triggers only if a subscriber sends the message. |
| Broadcaster | Triggers only if the broadcast themselves sends the message. |
| Mod | Triggers only if a mod sends the message. |
| VIP | Triggers only if a VIP viewer sends the message. |
Message | Chat message to listen to. Must be an exact match. Can include wild cards. |
{:class='table table-primary' }

{% include alert.html text="If two or more conditions are checked, <b>all</b> conditions must be met. Create separate chat triggers for multiple conditions." type="warning" %} 


| Math Trigger Pull | Explanation | 
|-------|--------|
| User Name | Viewer's username (all lowercase characters). |
| Display Name | Viewer's display name (can contain uppercase characters). |
| User ID | Viewer's user ID. |
| Message | Viewer's message. |
| Emote List | Viewer's available emotes. <br/> Basic format: `FirstEmoteID:FirstIndex-LastIndex/ SecondEmoteID:FirstIndex-LastIndex` <br/> Message containing multiple emotes will be formatted such as: `FirstEmoteID:FirstIndex(1)-LastIndex(1),FirstIndex(2)-LastIndex(2),FirstIndex(3)-LastIndex(3)` <br/>{% include image_collapse_table.html name="chat_emotes" src="chat_emotes.png" alt="Chat Emotes List" btn="Emotes Example" %}|
| Badge List | Basic format: `FirstBadgeName/version,SecondBadgeName/version` <br/> For example: `broadcaster/1, subscriber/0` <br/> [Global Badges List](https://badges.twitch.tv/v1/badges/global/display), [Channel Badges List](https://badges.twitch.tv/v1/badges/channels/CHANNEL_ID/display) <br/> To find the badge ID in the JSON, look for BadgeList.badge_sets[`BADGENAME`].versions[`VERSION`].image_url_1x. The last part 1x can be changed to 2x, 3x or 4x for bigger size. |
| Channel | Channel Name where the message originated from. Will return `w` if it's a whisper. |
| Name Color | Chat name color in hexadecimal format. |
{:class='table table-secondary table-hover' }


##### Follower
Requires an [extension](https://christinak.itch.io/lb-eventsub-webhook ), since Twitch PubSub does not send follower events.


##### Subscriber  
Listens to all new subscribers in your channel. 

{% include image_collapse.html name="sub_trigger" src="sub_trigger.png" btn="1" alt="Subscriber Trigger Example" pastebin="tRp5tPpN" %} 


| Condition | Explanation | 
|-------|--------|
| T1 | Triggers for tier 1 subs. |
| T2 | Triggers for tier 2 subs. |
| T3 | Triggers for tier 3 subs. |
| Prime | Triggers for prime subs. |
| SubGift | Triggers for non anonymous subgifts. |
| AnonSubGift | Triggers for anonymous subgifts. |
{:class='table table-primary' }

{% include alert.html text="You need to set up 6 triggers total to receive all possible subscriber triggers." type="info" %} 

| Math Trigger Pull | Explanation | 
|-------|--------|
| User Name | Viewer's or gifter's username (all lowercase characters). |
| Display Name | Viewer's or gifter's display name (can contain uppercase characters). |
| User ID | Viewer's or gifter's user ID. |
| Gifted User Name | Recipient's user name if the sub was gifted. |
| Gifted Display Name | Recipient's display name if the sub was gifted. |
| Gifted User ID | Recipient's user ID if the sub was gifted.  |
| Tier | Sub Tier. Returns `Tier 1`, `Tier 2`, `Tier 3` or `Prime` |
| Context | Sub Type. Returns `sub`, `resub`, `subgift` or `anonsubgift` |
| Message | Viewer's message |
| Month | Amount of months the viewer has been subscribed |
| Community Gift | Whether it's a community gift. Boolean value. Returns `0` or `1`. |
{:class='table table-secondary table-hover' }



##### Gift Sub Amount
Trigers every time a viewer gifts a subscriber to another viewer.  

{% include image_collapse.html name="giftsub_trigger" src="subgift_trigger.png" btn="1" alt="Gift Sub Amount Trigger Example" pastebin="DX8hCNK4" %} 


| Condition | Explanation | 
|-------|--------|
| Gift Amount | Specify the minimum and maximum amount of gifted subscribers to trigger the button. |
{:class='table table-primary' }

{% include alert.html text="If you want to retrieve all the names of the gifted subs, you need to also use Subscriber trigger" type="warning" %} 

| Math Trigger Pull | Explanation | 
|-------|--------|
| User Name | Gifter's username. Returns `ananonymousgifter` for anonymous gifters. |
| Display Name | Gifter's display name. Returns `AnAnonymousGifter` for anonymous gifters. |
| User ID | Gifter's user ID. |
| Amount | Amount of subs gifted. |
| Tier | Sub Tier. Returns `Tier 1`, `Tier 2`, `Tier 3` or `Prime` |
{:class='table table-secondary table-hover' }

##### Bits
Listens to all bit events in your stream.

{% include image_collapse.html name="bits_trigger" src="bits_trigger.png" btn="1" alt="Bits Trigger Example" pastebin="pAhUZgpt" %} 


| Condition | Explanation | 
|-------|--------|
| Bits | Specify the minimum and maximum amount of bits to trigger the button. |
{:class='table table-primary' }

| Math Trigger Pull | Explanation | 
|-------|--------|
| User Name | Viewer's username. |
| User ID | Viewer's user ID. |
| Amount | Amount of bits donated. |
| Total Amount | Amount of total bits donated. |
| Message | Viewer's message. |
{:class='table table-secondary table-hover' }


##### Host and Raid
Listens to all hosts or raid events in your stream. These are two separate triggers. 

{% include image_collapse.html name="raid_trigger" src="raid_trigger.png" btn="1" alt="Raid Trigger Example" pastebin="twdTrWkt" %} 


| Condition | Explanation | 
|-------|--------|
| Amount | Specify the minimum and maximum amount of raiders to trigger the button. |
{:class='table table-primary' }

| Math Trigger Pull | Explanation | 
|-------|--------|
| User Name | Raider's username. Host's username not provided. |
| Display Name | Raider's or host's display name. |
| User ID | Raider's user ID. Host's user ID not provided. |
| Amount | Amount of raiders or host's viewers. |
{:class='table table-secondary table-hover' }

##### Channel Points Redeem
Listens to all custom channel points redeems.

{% include image_collapse.html name="redeem_trigger" src="redeem_trigger.png" btn="1" alt="Channel Points Trigger Example" pastebin="b7B5jDeh" %} 


| Condition | Explanation | 
|-------|--------|
| Redeem Name | Specify the name of the redeem. A single `*` allows all redeems to trigger the button (does not act as a wildcard). |
{:class='table table-primary' }

| Math Trigger Pull | Explanation | 
|-------|--------|
| User Name | Viewer's username. |
| Display Name | Viewer's display name. |
| User ID | Viewer's user ID. |
| Redeem Title | Name of the reward redeemed. |
| Message | Viewer's redeem message if required. |
| Cost | Reward cost. |
| Image | Reward's image URL. Returns default crystal ball if there's no image. |
| Reward ID | Reward's general ID. |
| Redeem ID | Redeem's specific ID. Can be used to fulfill or cancel the redemption with Channel Points extension. |
{:class='table table-secondary table-hover' }

##### Channel Points Redeem With Message
Listens to all custom channel points redeems that require viewers to enter text. 

{% include image_collapse.html name="redeemmsg_trigger" src="redeemmsg_trigger.png" btn="1" alt="Channel Points with Message Trigger Example" pastebin="jGF3WCiS" %} 


| Condition | Explanation | 
|-------|--------|
| Redeem Name | Specify the name of the redeem. A single `*` allows all redeems to trigger the button. |
| Redeem Message | Specify the redeem message. Can contain wildcards. A single `*` allows all redeem messages to trigger the button (does not act as a wildcard). |
{:class='table table-primary' }

| Math Trigger Pull | Explanation | 
|-------|--------|
| User Name | Viewer's username. |
| Display Name | Viewer's display name. |
| User ID | Viewer's user ID. |
| Redeem Title | Name of the reward redeemed. |
| Message | Viewer's redeem message. |
| Cost | Reward cost. |
| Image | Reward's image URL. Returns default crystal ball if there's no image. |
| Reward ID | Reward's general ID. |
| Redeem ID | Redeem's specific ID. Can be used to fulfill or cancel the redemption with Channel Points extension. |
{:class='table table-secondary table-hover' }