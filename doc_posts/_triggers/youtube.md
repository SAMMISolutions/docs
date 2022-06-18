---
layout: default
title: Youtube Live
menu: Triggers
num: 3
type: fullpage
permalink: /triggers/youtube
---
LioranBoard can listen to all YouTube Live events provided by the YouTube API automatically execute your buttons. For example, it can automatically trigger a button every time you get a new subscriber.

#### Add a new trigger 
1. Right click on a button in your LioranBoard - **Edit Triggers** (or CTRL + double click). 
2. Click on the **+** button and select any YouTube Trigger.
3. Fill out the fields and options for the selected trigger (read below) and press Save.
4. Optionally you can right click on a button - **Edit Settings** and check  `Add to Request Queue`, which acts as a button queue. If there is another trigger event while the button is still active (for example if you get two subscribers at the same time), it will place is in the queue and reactivate the button as soon as it's ready again.
4. In your button commands, use [Trigger Pull Data]({{ "commands/trigger#triggerpulldata" | relative_url }}) command to retrieve all the provided information from the event (viewer's name, their message, channel ID etc.).   
<br>


#### Trigger Types

##### Chat
Listens to all chat messages and triggers when specific conditions are met.\
The message field comes with a prefilled `*`, which means it will allow ALL chat messages to come through. You can delete the `*` and use your own keyword.

| Condition | Explanation | 
|-------|--------|
| Mod | Triggers only if a mod sends the message. |
| Member | Triggers only if a Member sends the message. |
| Broadcaster | Triggers only if the broadcast themselves sends the message. |
| Verified | Triggers only if a verified viewer sends the message. |
Message | Chat message to listen to. Must be an exact match. Can include **[Wild Cards](introduction#wildcards)**. |
| Case Sensitive | If the user message trigger should be case sensitive 
{:class='table table-primary' }

{% include alert.html text="If two or more conditions are checked (such as mod and subscriber), <b>all</b> conditions must be met (user must be a mod and a subscriber). Create separate chat triggers for multiple conditions." type="warning" %}


| Pull Data Value | Explanation | 
|-------|--------|
| Display Name | Viewer's display name. |
| User ID | Viewer's user ID. |
| Channel URL | Viewer's channel URL. |
| Picture URL | Viewer's channel picture URL |
| Chat ID | Chat ID where the message originated from|
| Message | Viewer's message. |
| Is Broadcaster | Whether the viewer who sent the message is a broadcaster |
| Is Moderator | Whether the viewer who sent the message is a moderator |
| Is Member | Whether the viewer who sent the message is a member of your channel |
| Is Verified | Whether the viewer who sent the message is verified |
{:class='table table-secondary table-hover' }


<hr>

##### Subscriber
Triggers for all new channel subscribers.

| Pull Data Value | Explanation | 
|-------|--------|
| Display Name | Viewer's display name. |
| User ID | Viewer's user ID. |
| Picture URL | Viewer's channel picture URL |
{:class='table table-secondary table-hover' }


<hr>

##### Member
Listens to all new members (formerly sponsors) in your channel. 

| Condition | Explanation | 
|-------|--------|
| Months |Minimum and maximum amount of months the viewer must be a member for the event to trigger. |
{:class='table table-primary' }

| Pull Data Value | Explanation | 
|-------|--------|
| Display Name | Viewer's display name. |
| User ID | Viewer's user ID. |
| Channel URL | Viewer's channel URL. |
| Picture URL | Viewer's channel picture URL |
| Chat ID | Chat ID where the message originated from|
| Message | Viewer's message (only applies for member renewal events where the viewers can attach a message) |
| Level Name | Your member's level name | 
|Months | How long the viewer has been your member (only applies for member renewal events)
{:class='table table-secondary table-hover' }

<hr>

##### Super Chat
Listens to all Super Chat events in your stream.

| Condition | Explanation | 
|-------|--------|
| Minimum |  Specify the minimum amount of micros to trigger the button. |
| Maximum |  Specify the maximum amount of micros to trigger the button.
{:class='table table-primary table-hover' }

| Pull Data Value | Explanation | 
|-------|--------|
| Display Name | Viewer's display name. |
| User ID | Viewer's user ID. |
| Channel URL | Viewer's channel URL. |
| Picture URL | Viewer's channel picture URL |
| Chat ID | Chat ID where the message originated from|
| Message | Viewer's message |
| Amount | The purchase amount in Micros. If the purchase amount is $1, the value will be 1000000. 
| Amount as String | A string, like $1.00, that contains the purchase amount and currency.
| Currency | The currency in which the purchase was made. The value is an ISO 4217 currency code.
| Tier | The tier for the paid message. The tier is based on the amount of money spent to purchase the message. 
{:class='table table-secondary table-hover' }

<hr>

##### Super Sticker
Listens to all Super Sticker events in your stream.

| Condition | Explanation | 
|-------|--------|
| Minimum |  Specify the minimum amount of micros to trigger the button. |
| Maximum |  Specify the maximum amount of micros to trigger the button.
{:class='table table-primary table-hover' }

| Pull Data Value | Explanation | 
|-------|--------|
| Display Name | Viewer's display name. |
| User ID | Viewer's user ID. |
| Channel URL | Viewer's channel URL. |
| Picture URL | Viewer's channel picture URL |
| Chat ID | Chat ID where the message originated from|
| Message | Viewer's message |
| Amount | The purchase amount in Micros. If the purchase amount is $1, the value will be 1000000. 
| Amount as String | A string, like $1.00, that contains the purchase amount and currency.
| Currency | The currency in which the purchase was made. The value is an ISO 4217 currency code.
| Sticker ID | A unique ID that identifies the sticker image. Note that the image is only displayed as part of the Super Sticker message when users view the chat window on YouTube. However, the image URL is not available via LioranBoard. 
| Sticker Text  | A text string that describes the sticker. 
{:class='table table-secondary table-hover' }

<hr>
