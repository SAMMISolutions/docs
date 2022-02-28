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
We need to authorize LioranBoard to interact with your Twitch account.

1. In your LioranBoard click on **Twitch Connections** button.
2. Click on **Open URL** which should open a new browser window and redirect you to Twitch to authorize LioranBoard.  
3. Press **Authorize** and wait to be redirected again to see `All good, you can go back to LioranBoard now` message in your browser.
4. Back in LioranBoard you should now see your Twitch account in the list!  


   {% include video.html w="75" src="link-twitch.mp4" alt="Linking a Twitch account" %}

{% include alert.html text="You must relink your Twitch account every 60 days as that's when your token expires. LioranBoard will automatically remind you to do so." type="warning" %} 

**Linked Twitch account's settings:**

{% include image.html w="75" src="account-settings.png" alt="Active Twitch Connection" %}

- `Join chat under this name` - all your Twitch chat messages and whispers from LioranBoard will be sent under this Twitch account's name
- `Join channel` - whether you want to join this Twitch account's chat and listen for chat messages
- `Listen for` - check all events you wish to listen for and received triggers for. Some events will be greyed out if you're not affiliate.
- `Revoke Token` - disconnect your Twitch account from LioranBoard
- (only if affiliate) `Edit Channel Points` - allows you to create, modify and delete all your current channel points.

**Twitch Connections General Settings**

{% include image.html w="75" src="account-settings2.png" alt="Active Twitch Connection" %}

- `Connect/Disconnect Twitch Chat` - connect to Twitch chat to be able to receive and send chat messages
- `Auto connect to Twitch Chat` - check this if you want LioranBoard to automatically connect to Twitch chat once launched, otherwise you will have to press Connect Twitch Chat button every time.
- `Copy URL` - if you would rather copy the URL instead of opening it in your default browser to link your account, you can use this option instead
- `Edit Scopes` - allows you to edit scopes, i.e. what information LioranBoard can access on your Twitch account. For example, if you want to be able to listen to poll events, you must check View & Edit Polls scope. **If you edit any scopes, you must relink your account (revoke token and link it again) for it to take effect.**
- `Done` - click Done to save the settings


#### Link multiple Twitch accounts
You can link multiple Twitch accounts to your LioranBoard by following the same steps in [Link a single Twitch account](#linkasingletwitchaccount) section.\
This is useful if you want to use a different Twitch account to send Twitch chat messages from. It makes it easier for your viewers to tell the difference between you personally interacting with them and any automated messages you have set up in LioranBoard.

{% include alert.html text="All Twitch chat messages will be sent from your Twitch account that is marked as <strong>Join chat under this name</strong> in the <code>Twitch Connections</code> menu. You can freely switch to a different account your messages will be sent from." type="danger" %} 

**Listen to Twitch events from your alternate account(s)**\
LioranBoard will automatically listen to all selected events and chat (if Join Channel is checked) from all your Twitch accounts.

{% include alert.html text="LioranBoard doesn't have a way to tell where your Twitch triggers come from, be it your main or one of your alternate accounts." type="warning" %} 

**Remember to specify channel name when using Twitch: Chat message command**\
If you've linked more than more Twitch account to your LioranBoard, you must specify the channel name in your [Twitch: Send Message]({{ "commands/twitch#sendchatmessage" | relative_url }}) command. Otherwise the message will be sent to your primary LioranBoard account's channel (the one with `Join chat under this name` selected). NOTE: The channel name must be in all lowercase. Otherwise the message will not appear in chat until user refreshes their chat.

#### Listen to Twitch Events

Once you link your account(s), LioranBoard automatically connects to Twitch PubSub and Twitch Chat IRC (if you pressed Connect Twitch Chat button) to listen to all selected Twitch events and Twitch chat.\
Learn more about all Twitch event triggers in our [Triggers-Twitch]({{ "triggers/twitch" | relative_url }}) section.


#### Send Twitch chat messages

LioranBoard can natively send Twitch chat messages, whispers and moderation commands (if the linked account has the permissions) to any Twitch chat channel by using [Twitch: Send Message]({{ "commands/twitch#sendchatmessage" | relative_url }}) command.

See a list of all possible [Twitch chat mod commands](https://help.twitch.tv/s/article/chat-commands?language=en_US#AllMods).

#### Other Twitch Commands
Navigate to our [Commands-Twitch]({{ "commands/twitch" | relative_url }}) section to see all possible Twitch commands.
