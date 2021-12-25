---
layout: default
title: Twitch
menu: Integrations
num: 2
permalink: /integrations/twitch
type: fullpage
---

LioranBoard can connect to your Twitch account, remotely control it and listen to events in your stream. 

{% include alert.html text="Your Transmitter must be running at all times for Twitch to stay connected." type="warning" %}

#### Link a single Twitch account
First we need to authorize LioranBoard to interact with your Twitch account.

1. In your Receiver click on **Link your Twitch** button. 
A new menu will pop up and you will see the following options:
 - Account - select Main for linking a single Twitch account
 - Scopes - you can give LioranBoard permissions as to what it can access. 
2. Click on **Open URL** which should open a new browser window and redirect you to Twitch to authorize LioranBoard.  
Press **Authorize** and wait to be redirected again to see `All good, you can go back to LioranBoard now` message in your browser.
3. Go back to your Receiver. You should see a green text `Token was obtained successfully. Token will expire on XXX.` It means you will need to repeat this process again on this date. Don't worry, LioranBoard will remind you when it's due. Press Close. 
   {% include image.html w="50" src="twitch_connect.png" alt="Successfully linked Twitch account" type="image" %}
{:start="4"}
4. Press **Connect to Twitch** button. The button will grey out and you should see **all** the following yellow notification messages:
   
   {% include image.html w="100" src="twitch_connected_message.png" alt="Successfully connected to Twitch" type="image" %}
   In your Transmitter, Pubsub and Chat status should change to **{% include colored_text.html color="green" text="Connected" %}** or {% include svg_dot.md color="green" %}. Congratulations, your Twitch account is now connected!    



#### Link multiple Twitch accounts
You can link multiple Twitch accounts to your LioranBoard. This is useful if you want to use a different Twitch account to send Twitch chat messages from. It makes it easier for your viewers to tell the difference between you personally interacting with them and any automated messages you have set up in LioranBoard.

{% include alert.html text="All Twitch chat messages will be sent from your Twitch account that is marked as <strong>Main</strong> in the <code>Link to Twitch</code> menu. Unlink your primary Twitch account and link your bot/alternate Twitch account instead as <strong>Main</strong> account if you wish to send chat messages from it." type="danger" %} 

**1. Link another Twitch account**

{% include video_collapse.html w="75" src="alternate-account-link.mp4" alt="Show video guide" btn="1" %}

1. Make sure you're logged into the right account at [Twitch.tv](https://www.twitch.tv/), the one you want to link.
2. In your Receiver, click on Link your Twitch.
3. In the Account dropdown menu, select Alternate 1 (if you're linking a second account).
4. Fill out the login input box with your account's login name (all lowercase characters).
5. Alternatively add more Authorization Scopes if your account needs them.
6. Press Copy URL. You will get a popup warning you to check that you used the right login name from step 3. Press OK.
7. Press Copy URL again. A yellow message should show up: <i>Waiting for authorization. Do not close this window.</i>
8. Paste the URL in your browser and authorize it. You should get redirected with *All good, you can go back to LioranBoard now.* message.
9. Back in your LioranBoard, there should be a green message: {% include colored_text.html color="green" text="<i>Token was obtained successfully.</i>." %}
10. Press close and you're done!  
<br/>

**2. Listen to Twitch events from your alternate account(s)**\
LioranBoard will automatically listen to events from all your alternate accounts. This does not include chat. 

{% include alert.html text="LioranBoard doesn't have a way to tell where your Twitch triggers come from, be it your main or one of your alternate accounts." type="warning" %} 

**3. Listen to Twitch chat messages from your alternate account(s)**\
Use Twitch: Join Channel command if you wish to listen to chat messages in your alternate Twitch account that you just linked.<br/> {% include image_collapse.html w="75" src="auto-join-chat.png" btn="1" pastebin="zrnqaeA3" alt="Button which auto connects to your alternate account" %} 

**4. Remember to specify channel name when using Twitch: Chat message command**\
If you've linked more than more Twitch account to your LioranBoard, you must specify the channel name in your Twitch: Chat message command. Otherwise the message will be sent to your primary LioranBoard account's channel.\
All chat messages will be sent from your Twitch account that's marked as **Main** in the `Link to Twitch` menu.

#### Connect to Twitch
Once you successfully link your Twitch account(s), you can press `Connect to Twitch` button in your LioranBoard Receiver. You should receive the following yellow notification messages: 

- *Twitch is connected*
- *Secure Twitch Chat connected*
- *Listening for Channel Points Redeems*
- *Listening for Bits donations*
- *Listening for Channel Subscriptions*
- *Listening for Chat moderation*

  {% include image.html w="75" src="twitch-connection-single.png" alt="Twitch successful connection for a single account" %}

For multiple Twitch accounts you should also receive yellow notification messages prepended with *Listening for Alternate Account...* 

{% include image.html w="75" src="twitch-connection-multiple.png" alt="Twitch successful connection for multiple accounts" %}


#### Listen to Twitch Events

Once you link your account(s) and press `Connect to Twitch` button, LioranBoard automatically connects to Twitch PubSub and Twitch Chat IRC.   


**LioranBoard natively listens to:** 
- Subscriptions
- Bits
- Channel Point Redeems
- Hosts
- Raids
- Chat Messages

A guide to setting up native Twitch triggers for your buttons can be found in the [Triggers-Twitch]({{ "triggers/twitch" | relative_url }}) section.   

**Eventsub Webhook**\
Extends LioranBoard's functionality and listens to Followers, Predictions, Polls and Hype Trains, adding extra triggers for each event.

<iframe class="itch" frameborder="0" src="https://itch.io/embed/1119813?border_width=2&amp;bg_color=0b1a2d&amp;fg_color=ffffff&amp;link_color=790158&amp;border_color=284c7b" width="554" height="169"><a href="https://christinak.itch.io/lb-eventsub-webhook">LB-EventSub Webhook by Christina K</a></iframe>
<br>

#### Listen to Twitch Chat 

**Join Chat**\
Your main account automatically joins your Twitch chat and listens to all messages.\
Special rules apply for [multiple Twitch accounts](multipletwitchaccounts).\
LioranBoard can join any other Twitch chat channel (even one you do not own) with a [Twitch: Join Channel]({{ "commands/twitch#twitchjoinchannel" | relative_url }}) command.

**Listen to chat and whisper messages**\
A guide to setting up Twitch chat triggers for your buttons can be found in the [Triggers-Twitch]({{ "triggers/twitch" | relative_url }}) section.   

#### Send chat messages

LioranBoard can natively send Twitch chat messages, whispers and commands (if the linked account has the permissions) to any Twitch chat channel by using [Twitch: Chat Message]({{ "commands/twitch#twitchchatmessage" | relative_url }}) command.

See a list of all possible [Twitch chat commands](https://help.twitch.tv/s/article/chat-commands?language=en_US#AllMods).

#### More Twitch Controls

**Premade extensions**\
There are several preinstalled extensions in your Transmitter.

  {% include image_collapse.html src="change-twitch-status.png" btn="1" alt="Change Twitch Status" pastebin="kSBfhGsy" %} 
  {% include image_collapse.html src="viewer-count.png" btn="1" alt="Viewer Count" pastebin="ZfC1tkBB" %} 
  {% include image_collapse.html src="sub-count.png" btn="1" alt="Subscriber Count" pastebin="sjh1tLvV" %} 
  {% include image_collapse.html src="bits_leaderboard.png" btn="1" alt="Bits Leaderboard" pastebin="Tc8Zukqg" %} 
  {% include image_collapse.html src="profile-picture.png" btn="1" alt="Get Profile picture" pastebin="gVis7DLg" %} 
  {% include image_collapse.html src="channel-id-ext.png" btn="1" alt="Get Channel ID" pastebin="JfePhmE0" %} 


**Community made extensions**\
Our community made extensions allow you to further control your Twitch stream. You can find them all in our [Official Discord Server](https://discord.gg/dXez8Zh) in #releases channel. 


Examples of commmunity made extensions:
- Get latest subscriber and follower
- Create Marker
- Create a new clip
- Get Clips
- Create and modify channel points
- Create new predictions and polls



