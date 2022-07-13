---
layout: default
title: Introduction
menu: Triggers
num: 0
type: fullpage
permalink: /triggers/introduction
---

LioranBoard can trigger your buttons based on specific events (such as new Twitch subscriber, whenever you change scenes in OBS, when you start LioranBoard etc.). 

##### Add a new trigger to a button
1. Right click on a button in your LioranBoard - **Edit Triggers** (or CTRL + double click). 
2. Click on the **+** button and select the trigger type. 
3. Fill out the fields and options for the selected trigger and press Save.

##### Get trigger data once button is triggered
Once your button is triggered via a trigger, you can use [Trigger Pull Data]({{ "/commands/trigger#triggerpulldata" | relative_url }}) command to retrieve all the provided information from the trigger event (such as viewer's name, their message, emotes, badge etc.).  

##### Queueable vs. non-queueable buttons
If you right click on a button - **Edit Settings** and check `Add to Request Queue`, all triggers that come in while the button is still active (for example if you get two subscribers at the same time) will be put in a queue and the button will be reactivated as soon as it's ready again.\
If you do not check `Add to Request Queue`, the button will ignore any triggers that come in while the button is active and discard them.

{% include alert.html text="Does not apply if button overlap is enabled" type="warning" %} 

##### Overlappable buttons
If you right click on a button - **Edit Settings** and check `Allow Button Overlap`, multiple instances of the same button can be triggered at the same time (even if the previous button is still active).  


This is not something you want to enable for certain triggers attached to buttons controlling your OBS animations (for example, you probably don't want two subscriber animations to happen at the same time on your screen), but it can be useful for other events (for example for `!enter giveaway` chat trigger where a lot of users enter at the same time and you want to collect their names as quickly as possible without any queue). 

##### Wild Cards 
**Some trigger fields (such as Twitch chat messags trigger) accept wild cards.**\
For example, you want your user to type a color in your chat. Instead of creating separate triggers for ALL possible colors, you can create one trigger that will accept a wild card in place of the specific color.  


A wild card <i class="fas fa-star-of-life fa-sm"></i> refers to a character that can be substituted for zero or more characters in a string. They are used to search for partial matches instead of exact ones.\
Wild cards can be used for **Twitch Chat**, **Twitch Whispers**, **Twitch Channel Points Messages** and **Extension** triggers.\
You can pull their value by using the [Pull Wildcard]({{ "commands/trigger#pullwildcard" | relative_url }}) command.

**Wild Card Rules:**
- They need to match exactly, including the position in the text and spaces
- a single <i class="fas fa-star-of-life fa-sm"></i> will allow any message to trigger your button
- You can use as many wild cards as you want as long as the formatting is matched
- 2 wild cards back to back without a space will be turned into just one wildcard
- wild card matches are checked in the order the triggers were added and the check stops as soon as it finds the first match
- Twitch automatically removes double space in the message, so you do not need to worry about that


|Trigger |	Chat Input | <i class="fas fa-check" style="color: green"></i> = accepted | <i class="fas fa-times" style="color: red"></i> = rejected ||
|-------|--------|--------|--------|--------|
|world <span class="fas fa-star-of-life fa-sm" />|	world hello <i class="fas fa-check" style="color: green"></i>	|world hello hi there <i class="fas fa-check" style="color: green"></i>|	hello world	 <i class="fas fa-times" style="color: red"></i>|hello world hello <i class="fas fa-times" style="color: red"></i>
|<i class="fas fa-star-of-life fa-sm"></i> world|	world hello <i class="fas fa-times" style="color: red"></i>|	world hello hi there <i class="fas fa-times" style="color: red"></i>|	hello world <i class="fas fa-check" style="color: green"></i>|	hello world hello <i class="fas fa-times" style="color: red"></i>
|<i class="fas fa-star-of-life fa-sm"></i> world <i class="fas fa-star-of-life fa-sm"></i>|	world hello	<i class="fas fa-times" style="color: red"></i>|world hello hi there <i class="fas fa-times" style="color: red"></i>	|hello world <i class="fas fa-times" style="color: red"></i>|	hello world hello <i class="fas fa-check" style="color: green"></i>
|world <i class="fas fa-star-of-life fa-sm"></i> <i class="fas fa-star-of-life fa-sm"></i>|	world hello <i class="fas fa-times" style="color: red"></i>|	world hello hi there <i class="fas fa-check" style="color: green"></i>|	hello world	<i class="fas fa-times" style="color: red"></i>|hello world hello <i class="fas fa-times" style="color: red"></i>
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }

If you want to allow a single word for your trigger, no matter where it is placed in the sentence, you will need 4 different triggers: `word`, `word *`, `* word` and `* word *`.\
Please note this assumes there's a space before and after `word`.

Want to capture only a single word after a specific keyword and ignore the rest of the text? Use these two triggers: `keyword * *` and `keyword *` (order matters!).\
Now if you make your [Pull Wildcard]({{ "commands/trigger#pullwildcard" | relative_url }}) command pull the first (0) wildcard, it will always pull whatever word comes after `keyword` and ignore any additional text afterwards.

{% include alert.html text='A single <i class="fas fa-star-of-life fa-sm"></i> in your Channel Points Message Trigger field allows for any message to trigger your button, but does not function as an actual wild card. Use <b>Trigger Pull Data</b> command to pull the whole message.' type="warning" %} 
