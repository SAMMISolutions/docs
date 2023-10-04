---
title: "Reply to Message"
num: 0.1
version: 202330
redirect_from:
  - commands/324
---

Replies to a sent Twitch chat message.

{% include alert.html text='Accidentally providing an undefined variable for the "Message ID" box will run the default behavior!' type="warning" %}

| Box Name | Type | Description | 
|-------|--------|--------|
|Chat Message| String | The message to be sent as a reply over chat.
|Message ID| String | The ID of the chat message you wish to reply to (typically fetched from a trigger pull). Leave blank to reply to the user that triggered the button!
|Channel Name |	String	| Channel Name (all lowercase) to send the message to. Leave blank unless you have multiple accounts connected to SAMMI.
{:class='table table-primary'}