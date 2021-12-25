---
layout: default
title: LioranBoard YouTube Live
menu: Integrations
num: 3
ignore: true
type: fullpage
permalink: /integrations/youtube
---

{% include alert.html text="YouTube Live is a <strong>completely new integration</strong> that we have been working on hard to bring to you! <br> Please note it's still in <strong>alpha phase</strong> and there might be bugs. <br> Feel free to report any issues in <i>#bug-report</i> channel in our official <a href='https://discord.gg/dXez8Zh'><strong>LioranBoard Discord server.</strong></a>" type="info" %} 

#### Download and install
LioranBoard YouTube Live is not a native integration in LioranBoard, but rather an extension made by [Christina K](https://github.com/christinna9031?tab=repositories).\
It can be downloaded from Itch.io, which is a platform for developers to share their indie games and tools.

<iframe frameborder="0" src="https://itch.io/embed/1206259?border_width=2&bg_color=0b1a2d&fg_color=ffffff&link_color=790158&border_color=284c7b" width="554" height="169"><a href="https://christinak.itch.io/lb-eventsub-webhook">LioranBoard YouTube Live</a></iframe><br>

Once you have downloaded the zip file, extract it. You will see the following files: 
- `transmitter_youtube.html` - this is your new Transmitter to use with YouTube Live.\
  Read [How to Run Transmitter]() if this is your first time using LioranBoard
- `youtube_live.lbe` - this is your YouTube Live extension file. Please follow our guide on [How to install an extension](). Make sure you select `transmitter_youtube.html` to install it in.

{% include alert.html text="<code>transmitter_youtube.html</code> does not contain any Twitch related integrations. If you wish to regularly switch between streaming on YouTube Live and Twitch, add both Transmitters to your OBS dock and swap between them." type="warning" %} 

#### Link your account
You must [Authorize the extension]({{ "integrations/youtube/auth" | relative_url }}) to get access to your YouTube Live account. 

#### Setup your INIT button
1. Go to your YouTube Live premade deck in LioranBoard Receiver.
2. Right click on the red INIT button - Edit Commands.
3. If you completed [Link your account](#linkyouraccount) step, you should have refresh token and Itch key boxes filled out. If they're empty, please make sure you [Link your account](#linkyouraccount) first.
4. Fill out Stream Element credentials (OPTIONAL)
 - by default the extension will retrieve your chat message every 10-20s. If you wish to poll for new chat messages every 1-2s instead, connect your YouTube account to Stream Elements. You can then find your credentials at your [Stream Elements Dashboard](https://streamelements.com/dashboard/account/channels).
 - `SE_accountID` - your Stream Elements account ID 
 - `SE_token` - your Stream Elements overlay token (toggle 'Show Secrets' to reveal the token) 
4. Fill out the remaining fields: 
- X

#### Get familiar with YouTube commands and triggers

{% include alert.html text="The following commands can be found under <strong>Send to extension</strong> command" type="info" %}

##### YouTube Live Listener
This button automatically triggers as soon as LioranBoard detects your stream is live.\
By default it starts listening to new subscribers, super chat events and chat messages.\
Chat polling mode: 
- YouTube - polls for new chat messages every 10-20 seconds
- Stream Elements - polls for new chat messages every 1-2 seconds\
  *This mode is available only if you have set up your SE credentials in the INIT button* 


#### Terms of Service 
Read our [Terms of service]({{ "integrations/youtube/tos" | relative_url }}) before using the extension.

#### Privacy Policy
Read our [Privacy Policy]({{ "integrations/youtube/privacy-policy" | relative_url }}) before using the extension.

<!---
**Why is YouTube Live not completely free like other integrations**\
YouTube Live has a very strict policy when it comes to allowing 3rd party applications to connect and control your stream.\
There are daily **quota limits** applied to all users using the extension that took a long time to negotiate with YouTube.\
We want for everyone to use the integration in a way that allows us to make sure there is enough daily quota for all our users.\
In the future the integration might become free if YouTube provides us with a higher quota.
-->
