---
title: Twitch Connection
num: 4
---

#### Resolving ERR_BADAUTH Error

If you encounter an ERR_BADAUTH error, your authentication token may have expired. Follow these steps to resolve the issue:
1. In SAMMI Core, navigate to Twitch Connections and click "Revoke Token" for the affected account.
2. Re-link your Twitch account by clicking the `Link Streamer Account` or `Link Bot Account` button.

#### Resolving Issues with Twitch Alerts

If Twitch Alerts are not working as expected, consider the following troubleshooting steps:

**Verify Your Twitch Pubsub/Chat Connection**\
Ensure that both your Twitch Pubsub and Chat are connected (indicated by green light indicators) and that you are listening to the correct topics (which can be verified under Twitch Connections).

{% include image.html w="75" src="twitch_connected.png" alt="Twitch Connected" %}

**Test Alerts from Your Bridge**\
In your Bridge, go to the Twitch Triggers tab and click any of the test buttons. A small yellow notification should appear in the bottom-left corner of SAMMI Core. Based on the results, consider the following:
- *No notification appears* - Your Bridge may not be connected to SAMMI. Check for incorrect Bridge versions or duplicate instances.
- *Notification appears, but buttons don't trigger* - Review your button triggers and follow the guide in the Triggers section.
- *Notification appears, buttons trigger, but OBS is unresponsive* - Check your connection to OBS and verify your button commands.

#### Resolving Issues with Twitch Chat Messages

If sending Twitch chat messages is not working, consider the following troubleshooting steps:

**Ensure Connection to Twitch Chat**\
In SAMMI > Twitch Connections, click "Connect Twitch Chat" and enable `Auto connect to Twitch Chat` to automatically connect upon launching SAMMI.

**Verify the Target Channel for Messages**\
- For a single linked Twitch account, leave the channel name field empty.
- For multiple linked Twitch accounts, enter the correct Twitch channel name (in lowercase).

**Avoid Excessive Messaging**\
Twitch may temporarily block accounts that send too many messages in a short period. Avoid sending excessive messages.

#### Chat Slash Commands do not work
In SAMMI versions 2023.1.0 and later, deprecated Twitch chat slash commands are automatically converted to the appropriate API calls. However, in some cases you may need to manually update these commands to use the corresponding API calls.

See below which SAMMI command corresponds to which chat slash command.

| Chat Slash Command | SAMMI Command to use instead |
|-------|--------|
|/announce| Twitch: Send Announcement|
|/ban|Twitch: Ban User||
|/unban|Twitch: Unban User|
|/timeout and /untimeout|Twitch: Timeout User|
|/clear| Twitch: Delete Chat Message|
|/color|Twitch: Set User Color|
|/commercial|Twitch: Run Ad (Commercial) |
|/delete|Twitch: Delete Chat Message |
|/emoteonly and /emoteonlyoff|Twitch: Set Emote Mode|
|/followers and /followersoff |Twitch: Set Follower Mode |
|/marker|Twitch: Create Marker|
|/mod|Twitch: Add Moderator|
|/mods|Twitch: Get Moderators|
|/unmod|Twitch: Remove Moderator|
|/raid|Twitch: Start Raid|
|/unraid|Twitch: Cancel Raid|
|/slow and /slowoff|Twitch: Set Slow Mode|
|/subscribers and /subscribersoff|Twitch: Set Subscriber Mode|
|/uniquechat and /uniquechatoff|Twitch: API Call|
|/vip|Twitch: Add VIP|
|/unvip|Twitch: Remove VIP|
|/vips |Twitch: Get VIPs|
|/w |Twitch: Send Whisper|
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }










**Try triggering a test alert from your Bridge**
In your Bridge, go to Twitch Triggers tab and press any of the test buttons.\
A small yellow notification message should pop up in the bottom-left corner of SAMMI Core. 

- *I do not see the message at all* - your Bridge is not connected to SAMMI. You might be running a wrong version or duplicate instance of your Bridge. 
- *I see the message, but buttons do not trigger at all* - your button triggers are set up wrong. Follow the guide in our Triggers section.
- *I see the message, buttons trigger, but nothing happens in OBS* - You're either not connected to OBS, or your button commands are wrong.

#### Twitch: Send message doesn't work

**Check you're connected to Twitch Chat**\
In SAMMI > Twitch Connections, press "Connect Twitch Chat", then enable `Auto connect to Twitch Chat`, otherwise you will need to press this button every time you launch SAMMI.

**Check you're sending the message to the right channel**
- If you have only a single Twitch account linked, leave the channel name empty.\
  {% include image.html w="75" src="chat-message.png" alt="Chat Message command with single Twitch account linked" %}
- If you have multiple Twitch accounts linked, correctly fill out the field with your Twitch channel name (all lowercase characters)\
  {% include image.html w="75" src="chat-message2.png" alt="Chat Message command with multiple Twitch accounts linked" %}

**Check you're not sending too many messages**\
If you send too many messages in a short period of time, Twitch might temporarily block you from sending more.

#### Twitch Chat Whispers do not work

**Using `/w username` in a Send Chat Message command**\
This method for sending whispers is unreliable, as Twitch can prevent accounts from sending whispers using this method without warning or any visible indication it has.\
Instead, try the [Send Whispers]({{ "commands/twitch#sendwhispers" | relative_url }}) command.
