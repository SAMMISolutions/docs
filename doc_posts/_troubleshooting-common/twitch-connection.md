---
title: Twitch Connection
num: 0
---

#### Getting an ERR_BADAUTH error
Your auth token probably expired. 
1. In your LioranBoard, go to Twitch Connections-Revoke Token.
2. Link your Twitch account again by pressing Open URL.

#### Twitch Alerts don't work

**Check your Transmitter connection**\
Make sure your Transmitter is running is connected to LioranBoard (the status should be green for Transmitter in your left bottom corner in LioranBoard).
In your Transmitter it must say <strong>Pubsub: {% include colored_text.html color="green" text="Connected" %}<strong>.  

**Try triggering a test alert from your Transmitter**  
In your Transmitter, go to Twitch Triggers tab and press any of the test buttons.\
A small yellow notification message should pop up at the bottom of your LioranBoard. 

- *I do not see the message at all* - your Transmitter is not connected to LioranBoard. You might be running a wrong version or duplicate instance of your Transmitter. 
- *I see the message, but buttons do not trigger at all* - your button triggers are set up wrong. Follow the guide in our Triggers section.
- *I see the message, buttons trigger, but nothing happens in OBS* - You're either not connected to OBS or your commands are wrong.

#### Twitch: Send message doesn't work

**Check you're connected to Twitch Chat**\
In LioranBoard-Twitch Connections, press Connect Twitch Chat and check `Auto connect to Twitch Chat`, otherwise you will need to press this button every time you launch LioranBoard.

**Check you're sending the message to the right channel**
- If you have only a single Twitch account linked to your LioranBoard, leave the channel name empty.\
  {% include image.html w="75" src="chat-message.png" alt="Chat Message with single Twitch account linked" %}
- If you have multiple Twitch accounts linked to your LioranBoard, correctly fill out the channel name with your Twitch channel name (all lowercase characters)\
  {% include image.html w="75" src="chat-message2.png" alt="Chat Message with multiple Twitch accounts linked" %}

**Check you're not sending too many messages**\
If you send too many messages in a short period of time from LioranBoard, Twitch might temporarily block you from sending more.

#### Twitch Chat Whispers do not work

**Check you're using the right formatting**\
You can send a whisper by using Twitch: Send Message command and putting `/w username` in the message field.

**Request Verified Bot Status**\
Sometimes Twitch will block your account from sending whispers from 3rd party applications (such as LioranBoard).\
You can try filling out the [IRC Command and Message Rate form](https://dev.twitch.tv/limit-increase) to verify your bot.