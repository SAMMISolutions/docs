---
title: Twitch Connection
num: 0
---

#### Getting an ERR_BADAUTH error

Your auth token probably expired. 
1. In SAMMI Core, go to Twitch Connections. Click "Revoke Token" for the problem account.
2. Link your Twitch account again by pressing Open URL.

#### Twitch Alerts don't work

**Check your Bridge connection**\
Make sure your Bridge is running and connected to SAMMI (the status should be green for Bridge in the left bottom corner of SAMMI Core).
In your Bridge it must say <strong>Pubsub: {% include colored_text.html color="green" text="Connected" %}<strong>.  

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
- If you have multiple Twitch accounts linked, correctly fill the field with your Twitch channel name (all lowercase characters)\
  {% include image.html w="75" src="chat-message2.png" alt="Chat Message command with multiple Twitch accounts linked" %}

**Check you're not sending too many messages**\
If you send too many messages in a short period of time, Twitch might temporarily block you from sending more.

#### Twitch Chat Whispers do not work

**Check you're using the right formatting**\
You can send a whisper by using Twitch: Send Message command and putting `/w username` in the message field.

**Request Verified Bot Status**\
Sometimes Twitch will block your account from sending whispers from 3rd party applications (such as SAMMI).\
You can try filling out the [IRC Command and Message Rate form](https://dev.twitch.tv/limit-increase) to verify your bot.
