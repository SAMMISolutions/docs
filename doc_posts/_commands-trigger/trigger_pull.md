---
title: "Math: Trigger Pull"
num: 1
---

Used in combination with any triggers you set up for the button.\
For example, if you set up a button with a Twitch Subs trigger, you can use this command to get the subscriber's name once the button is triggered.\
Refer to our [Triggers]({{ "/triggers/twitch" | relative_url }}) section to learn more about triggers and their pull values. 

{% include alert.html text="Set turn to real to false if you're expecting the value to be a string (i.e. username) and to true if you're expecting a number (i.e. amount of bits)." type="info" %}  

| Box Name | Type | Description | 
|-------|--------|--------|
| Variable | String | Variable name to save the pulled value into. |
|Pull Value|Dropdown| Value you wish to pull from the trigger.
|Turn to real|boolean| Whether you want to turn the pulled value to real (number).
{:class='table table-primary ' }

{% include media_modal.html img="math-trigger.png" w="100" btn="1" alt="Pull a name of a viewer who types !test in your chat" pastebin="m8TTMThe" %} 












