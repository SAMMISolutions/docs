---
title: Set up button cooldowns
num: 3
---

**Adding a cooldown for a single button**\
Use the Overtime command, which artificially increases the duration of the button and prevents it from getting triggered again.

**Adding a cooldown for a group of buttons**\
If you want to put a group of buttons on cooldown as soon as one of them is triggered, you can follow these steps: 
1. Add all buttons to the **same** group ID *(right click on a button - Group ID).*
2. Make sure `Add to Request Queue` is checked for all your button triggers *(right click on a button - Twitch triggers)*.
3. Now every time one of the buttons in the same group triggers, it will automatically add any other triggered buttons sharing the same group into a **queue**, wait for the currently running button to be over and execute the next button in the queue.

{% include alert.html text="Group ID and queues only work for buttons that have NOT been manually triggered from your Stream Deck, but rather initiated from an external trigger or Button: Trigger command." type="warning" %} 

