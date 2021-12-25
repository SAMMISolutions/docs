---
title: "Twitch: Chat Message "
num: 0
---

Sends a message to your Twitch chat from your default account that is connected to LioranBoard.\
You can send emotes, whispers and chat commands (if your account has the privileges). See a list of **[all possible chat commands](https://help.twitch.tv/s/article/chat-commands?language=en_US#AllMods)**.\
Whispers might not natively work. Make sure your linked Twitch account contains `whispers:edit scope` in Link your Twitch menu in LioranBoard Receiver. Twitch may also flag you as a bot and ask you to **[verify your bot account](https://dev.twitch.tv/docs/irc/guide#:~:text=appear%20in%20chat.-,Requesting%20Verified%20Bot%20Status,expect%20a%20response%20via%20email.)**.


{% include alert.html text="If you have linked more than one Twitch account to LioranBoard, you must specify the channel name, otherwise the message is sent to your Twitch account's channel marked as <strong>Main</strong> in the <code>Link your Twitch</code> menu." type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------
Message|String | The message to be sent over the chat.|
Channel Name |	String	| Channel to send the message to. Leave blank unless you have multiple accounts connected to LB.
{:class='table table-primary'}

| Chat Message Example | Description |  
|-------|--------|--------
|/followers|Sets the chat to follower mode|
|/emoteonly|Sets chat to emote only mode
|/clear|Clears the chat|
|/w lioran|Sends a whisper to Lioran|
|/ban lioran| Bans Lioran|
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }

{% include example_public.html src="https://i.imgur.com/NBTMyqr.jpeg" title="Steal a VIP" pastebin="VYCCCtjT" desc=description %} 










