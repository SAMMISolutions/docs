---
title:  New Chat Message
num: 9
---

This trigger is a bit different. It is a modified version of the original Twitch chat message trigger.\
**The trigger names come from Twitch and might not exactly match the YouTube triggers** (this will be fixed in LioranBoard2), so read up!

1. Add the trigger by right clicking on the button - Edit Twitch Triggers, and selecting Chat Message. 
2. You will see a bunch of checkboxes in the trigger options:
- 1st - does not do anything, ignore it (leave unchecked)
- Sub - triggers only if the viewer is your channel member (on Twitch they're called subscribers)
- Broadcaster - triggers only for the channel broadcaster 
- Mod - triggers only if the viewer is a mod 
- VIP - triggers only if the viewer's status is verified
- Message - if you use `*` all chat messages will pass through, you can also use [Wild Cards](https://lioranboard.ca/docs/faq/receiver#wildcards)
- You cannot combine triggers. If you select Sub and Mod both, it means the viewer would need to be a sub (member) and a mod both. Add multiple triggers in that case, one for a mod and one for a sub (member).
  {% include image.html w="75" src="yt-chat-trigger.png" alt="Chat Message Trigger Options" top="true" %}

{:start="3"}
3. Once the trigger fires, you can retrieve the following values by using [Math: Trigger Pull]({{ "/commands/trigger#mathtriggerpull" | relative_url }}) command and selecting the following values from the **Chat Trigger** submenu in the pull value dropdown menu. 

  {% include alert.html text="Read carefully. Some of these values pull a bit different information than their names suggest (since they're originally for Twitch)!" type="warning" %} 

  | Math Trigger Pull Name | Description | 
  |-------|--------|
  |Display Name|Viewer's chat display name.|
  |User ID|Viewer's channel ID.|
  |Channel|Viewer's channel URL.|
  |Badge List|Viewer's badges. ADJUSTED to fit YouTube instead of Twitch, so it might look weird if you never used Twitch.<br/> `broadcaster/1` = viewer is a broadcaster, `moderator/1` = viewer is a mod, `subscriber/1` = viewer is a member, `vip` = viewer is verified. |
  |Message|Viewer's message|
  |Emote List|This one is completely different. It says emote list, but it actually delivers **VIEWER'S PROFILE IMAGE URL.**|
  {:class='table table-primary w-auto table-hover data-toggle='table' text-break }






