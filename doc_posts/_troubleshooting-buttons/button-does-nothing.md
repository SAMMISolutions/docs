---
title: Button doesn’t do anything
num: 1
---

#### Check whether the button is triggering
Unless you’re triggering the button by pressing it on the stream deck, it’s possible that your button didn’t work because it isn’t triggering properly. There are two ways to check whether your button triggered:

- Look at the stream deck to see whether the button shows an animation
- Click ‘Active Buttons’ in the receiver main window to see whether the button ID pops up there. If the button doesn’t have any delays or wait commands this will be a quick flash, but you should still be able to see it.

#### Possibility A: The button did not trigger
Your button not triggering at all could have three causes: either your button trigger is incorrect, the button is being blocked somehow, or LioranBoard doesn’t receive the trigger at all.

*Check whether your trigger is correct*

- Make sure the trigger is added on the correct button.
- Whenever you need to enter text, check for typo’s or extra spaces.
- Make sure you set up the trigger correctly [according to the documentation]({{ "triggers/introduction" | relative_url }}).

##### Common issues with specific triggers:

| Trigger | Common Issue |
|-------|--------|
|Chat | The permission checkboxes stack. If you check both ‘vip’ and ‘sub’ in the same trigger, only subbed vip’s will be able to trigger the button. Add more triggers to separate them out. |
|Chat | Make sure you’re typing the exact same trigger in chat. If your trigger is “!command”, then typing “!command hello” will not work. You would have to use a [wildcard]({{ "triggers/introduction#wildcards" | relative_url }}) for that. |
|Channel Points | Make sure the ‘User Input Required’ checkbox matches with the setting on Twitch. |
|Gift Subscription | Twitch sends two events when someone gifts multiple subs (aka ‘community gifts’). If you want to receive a single trigger when someone gifts 5 subs, add a Twitch Community Gift Subs trigger. If you want to receive 5 triggers when someone gifts 5 subs, add a Twitch Subscription trigger and allow community gifts. |
{:class='table table-primary'}

*Check whether LioranBoard is receiving the trigger*

- You cannot test via a third party such as StreamLabs or StreamElements. You should test via the test buttons in the transmitter or via Twitch.
- Make sure whatever is sending your trigger is connected to LioranBoard. You can see this in the bottom left of the receiver main window. Twitch Subs, Channel Points etc. arrive via the transmitter! 
- Make sure you’re listening for the triggers in the Twitch Connections window.

##### Common issues with specific triggers:

| Trigger | Common Issue |
|-------|--------|
|Channel Points | If you see a yellow message about ‘scopes’ in the receiver when redeeming, go to Twitch Connections → Edit Scopes and add the required scopes. You will need to relink your Twitch account after doing so. |
|OBS trigger | If you can’t connect or it disconnects every time, check Common Issues in Troubleshooting. |
{:class='table table-primary' }

{% include image.html w="100" src="https://i.imgur.com/gdSzRl1.png" alt="Comunication between Twitch and Liraonboard" type="image" external="true" %}

*Check whether the button is being blocked*

If you’re sure LioranBoard is receiving the trigger and the trigger on your button is set up correctly, your button may be blocked. A button could be blocked for three reasons:

- It is still active, for example because of a ‘Wait’ command. You can manually clear active buttons via the ‘Active Buttons’ window, or change the button settings to allow queues or overlap.
- It has a group ID and another button in that group is still active. Same as above applies.
- You used the Block Button/Group command on its ID. Make sure to unblock it first.

If you can’t figure out why the button is blocked, try restarting LioranBoard. That should allow you to start fresh.

#### Possibility B: The button did trigger

If your button triggered when it should have but nothing happened, that means something is wrong with your commands. Check the ‘Button doesn’t do what you want’ section below.

