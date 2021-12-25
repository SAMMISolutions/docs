---
title: Twitch Connection
num: 0
---

#### Getting an ERR_BADAUTH error
Your auth token probably expired. 
1. In your Receiver, go to Link your Twitch and press the Unlink button. 
2. Relaunch Receiver and Link your Twitch account again.

**Didn't help? Try these steps instead:**
1. Completely close your Receiver
2. Delete `connect.ini` file located in LioranBoard Receiver folder
3. Relaunch your Receiver
4. Link your Twitch account again 

#### Twitch Alerts don't work

**Check your Transmitter connection**\
Make sure your Transmitter is running and press Connect to Twitch in your Receiver if it's not automatically connected.\
In your Transmitter it must say <strong>Pubsub: {% include colored_text.html color="green" text="Connected" %}<strong>.  


**Try triggering a test alert from your Transmitter**  


In your Transmitter, go to Twitch Triggers tab and press any of the test buttons.\
A small yellow notification message should pop up at the bottom of your Receiver. 

{% include image.html w="75" src="tsl-test.png" alt="Notification messages from test alert" %}

- *I do not see the message at all* - your Transmitter is not connected to the Receiver. You might be running a wrong version or duplicate instance of your Transmitter. 
- *I see the message, but buttons do not trigger at all* - your button triggers are set up wrong. Follow the guide in our Triggers section.
- *I see the message, buttons trigger, but nothing happens in OBS* - You're either not connected to OBS or your commands are wrong.

#### Twitch: Chat message doesn't work

**Check you're connected to Twitch Chat**\
Check that your Transmitter is running and says <strong>Chat: {% include colored_text.html color="green" text="Connected" %}.<strong>
- *it says chat is disconnected* - press Connect to Twitch in your Receiver. 
    - *it says Twitch account must be linked to connect to Twitch* - press Link your Twitch in your Receiver and Open URL. Authenticate your Twitch account. Press close once you see  <code>{% include colored_text.html color="green" text="Token was obtained successfully." %}</code>

**Check you're sending the message to the right channel**
- If you have only a single Twitch account linked to your LioranBoard, leave the channel name empty.\
  {% include image.html w="75" src="chat-message.png" alt="Chat Message with single Twitch account linked" %}
- If you have multiple Twitch accounts linked to your LioranBoard, correctly fill out the channel name with your Twitch channel name (all lowercase characters)\
  {% include image.html w="75" src="chat-message2.png" alt="Chat Message with multiple Twitch accounts linked" %}

**Check you're not sending too many messages**\
If you send too many messages in a short period of time from LioranBoard, Twitch might temporarily block you from sending more.

**Enable Twitch Chat debugging**
1. In your Transmitter, go to Status tab and enable Message Logging for Twitch Chat.
2. Refresh your Transmitter and connect to Twitch
3. Try sending a few chat messages
4. Look at the generated log in your Status tab in Transmitter. See if there are any error messages received from Twitch IRC (red arrow). 

**Did none of these help? Try these steps instead:**
1. Completely close your Receiver
2. Delete `connect.ini` file located in LioranBoard Receiver folder
3. Relaunch your Receiver
4. Link your Twitch account again 

#### Twitch Chat Whispers do not work

**Check you're using the right formatting**\
You can send a whisper by using Twitch: Chat Message command and putting `/w username` in the message field.

**Request Verified Bot Status**\
Sometimes Twitch will block your account from sending whispers from 3rd party applications (such as LioranBoard).\
You can try filling out the [IRC Command and Message Rate form](https://dev.twitch.tv/limit-increase) to verify your bot.