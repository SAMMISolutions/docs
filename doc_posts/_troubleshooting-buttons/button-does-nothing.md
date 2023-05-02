---
title: Button doesn’t do anything
num: 1
---

#### Check whether the button is triggering
Unless you’re triggering the button by pressing it on the SAMMI Deck, it’s possible that your button didn’t work because it isn’t triggering properly. There are two ways to check whether your button triggered:

- Look at the SAMMI Deck to see whether the button shows an animation
- Click ‘Active Buttons’ in SAMMI to see whether the button ID pops up there. If the button doesn’t have any delays or wait commands this will be a quick flash, but you should still be able to see it.

#### Possibility A: The button did not trigger
Your button not triggering at all could have three causes: either your button's trigger is set up incorrectly, the button is being blocked somehow, or SAMMI is not receiving the trigger at all.

*Check whether your trigger is correct*

- Make sure the trigger is added on the correct button.
- Whenever you need to enter text, check for typos or extra spaces.
- Make sure you set up the trigger correctly [according to the documentation]({{ "triggers/introduction" | relative_url }}).

##### Common issues with specific triggers:

| Trigger | Common Issue |
|-------|--------|
|Chat | The permission checkboxes stack. If you check both ‘vip’ and ‘sub’ in the same trigger, only subbed vip’s will be able to trigger the button. Add more triggers to separate them out. |
|Chat | Make sure you’re typing the exact same trigger in chat. If your trigger is “!command”, then typing “!command hello” will not work. You would have to use a [wildcard]({{ "triggers/introduction#wildcards" | relative_url }}) for that. |
|Channel Points | Make sure the ‘User Input Required’ checkbox matches with the setting on Twitch. |
|Gift Subscription | Twitch sends two events when someone gifts multiple subs (aka ‘community gifts’). If you want to receive a single trigger when someone gifts 5 subs, add a Twitch Community Gift Subs trigger. If you want to receive 5 triggers when someone gifts 5 subs, add a Twitch Subscription trigger and allow community gifts. |
{:class='table table-primary'}

*Check whether SAMMI is receiving the trigger*

- You cannot test via a third party app such as StreamLabs or StreamElements. Only test with the test buttons in the Bridge, or via Twitch.
- Make sure whatever is sending your trigger is connected to SAMMI. You can see this in the bottom left of the main window. Twitch Subs, Channel Points, etc. arrive via Pubsub
- Make sure you’re listening for the triggers in the Twitch Connections window.

##### Common issues with specific triggers:

| Trigger | Common Issue |
|-------|--------|
|Channel Points | If you see a yellow message about ‘scopes’ in SAMMI when redeeming, go to Twitch Connections → Edit Scopes and add the required scopes. You will need to relink your Twitch account after doing so. |
|OBS trigger | If you can’t connect or it disconnects every time, check Common Issues in Troubleshooting. |
{:class='table table-primary' }

{% include image.html w="100" src="/assets/images/troubleshooting-buttons/btnDoNothing.png" alt="Communication between Twitch and SAMMI" type="image" external="true" %}

*Check whether the button is being blocked*

If you’re sure SAMMI is receiving the trigger and the trigger on your button is set up correctly, your button may be blocked. A button could be blocked for three reasons:

- It is still/already active, for example because of a ‘Wait’ command. You can manually clear active buttons via the ‘Active Buttons’ window, or change the button settings to allow queues or overlap.
- It has a group ID, and another button in that button group is still active. Same as above applies.
- You used the Block Button/Group command on its button or group ID. Make sure to unblock it first.

If you can’t figure out why the button is blocked, try restarting SAMMI. That should allow you to start fresh.

#### Possibility B: The button did trigger

If your button triggered when it should have but nothing happened, that means something is wrong with your commands. Check the ‘Button doesn’t do what you want’ section below.
