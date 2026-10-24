---
layout: default
title: Twitch Extension
menu: Integrations
num: 3
type: fullpage
permalink: /integrations/twitch-extension
---

#### Introduction

The official **SAMMI Twitch Extension** adds a component to your Twitch channel that lets your viewers trigger your SAMMI buttons themselves.

You decide which buttons exist, what they are called, what they look like and how much **Power** each one requires. When a viewer presses one, SAMMI receives a trigger and runs whatever you built behind it - a sound, an overlay, a scene change, a whole automation chain.

Viewers can only press the buttons you configured. They cannot type anything, create their own buttons or send any other data to your SAMMI.

{% include image.html w="75" src="twitchext_viewer_panel.png" alt="The extension as viewers see it" %}


#### Requirements

- SAMMI with a linked Twitch account
- SAMMI Bridge, connected to SAMMI
- The extension installed and activated on your Twitch channel

Bits unlocks are only available to channels that are eligible for Bits. Everything else works without them.


#### Install and activate

1. Open the [extension's page on Twitch](https://dashboard.twitch.tv/extensions/8c4yn5m3gp6e4w2jy0106cy8k0htki-0.0.1) and press **Install**.
2. Go to **Creator Dashboard** - **Extensions** - **My Extensions**.
3. On the SAMMI tile press **Activate** and choose **Set as Component 1** or **Set as Component 2**.

{% include image.html w="75" src="twitchext_activate.png" alt="Activating the extension on your channel" %}

{% include alert.html text="Installing on its own is not enough. Until you activate it in one of the two component slots, the extension does not appear on your channel page at all." type="warning" %}


#### Connect SAMMI to the extension

The extension talks to SAMMI through the **SAMMI Bridge**. There are two ways to open that connection.

**Automatically (recommended)**

1. In SAMMI open **Settings** - **Connections**.
2. Under **Twitch Extension**, turn **Auto Connect** on.
3. Save and close.

From now on the Bridge connects on its own whenever it starts.

{% include image.html w="75" src="twitchext_auto_connect.png" alt="Auto Connect setting in SAMMI" %}

**Manually**

1. Open the SAMMI Bridge.
2. On the **Settings** tab, find **Twitch Extension WebSocket**.
3. Press **Toggle Connection**. The status switches to `Connected`.

{% include image.html w="75" src="twitchext_bridge.png" alt="Twitch Extension WebSocket in the SAMMI Bridge" %}

{% include alert.html text="Only run the SAMMI Bridge once. A second Bridge trying to connect for the same channel is refused, because two of them would fight over the same connection." type="warning" %}

If SAMMI is not connected when a viewer presses a button, the redemption fails, the viewer is told so, and their Power is given back automatically.


#### What Power is

**Power** is the value viewers use to press your buttons. It only exists inside the extension.

- Every viewer starts with **500 Power** on your channel, free of charge.
- Power is **per channel**. Power unlocked on your channel cannot be used anywhere else.
- Power has **no cash value**. It cannot be paid out, transferred or traded.

Viewers who want more can unlock Power with Bits through the Power menu.

{% include image.html w="75" src="twitchext_power_menu.png" alt="The Power menu" %}

The base rate is **2.5 Power per Bit**. Larger unlocks come with a bonus on top:

| Bits | Power | Bonus | Total |
|------|-------|-------|-------|
| 10 | 25 | - | 25 |
| 50 | 125 | - | 125 |
| 100 | 250 | - | 250 |
| 250 | 625 | +75 | 700 |
| 500 | 1 250 | +250 | 1 500 |
| 1 000 | 2 500 | +1 000 | 3 500 |
| 2 500 | 6 250 | +2 750 | 9 000 |
| 5 000 | 12 500 | +7 500 | 20 000 |
| 10 000 | 25 000 | +20 000 | 45 000 |
{:class='table table-primary w-auto table-hover data-toggle='table'}

Bits spent in the extension are split by Twitch: **80% goes to you**, 20% to the extension developer. Twitch sets that split for every Bits-enabled extension - it is the same for all of them and not something SAMMI chooses. The developer share covers the running costs behind all of this - servers, code signing certificates, domains - as well as SAMMI's ongoing development.


**Give yourself Power for testing**

You do not have to spend Bits to try out your own buttons. Open the Power menu on the **Configure** page and pick any amount - it is added to your balance right away, with no Bits transaction.

{% include alert.html text="This works only for you, only on your own channel and only on the Configure page. In the live view the same menu starts the normal Bits flow." type="info" %}


#### Rules for your buttons

{% include alert.html text="Read this before you design your buttons. Because viewers can use Bits to unlock Power, everything your buttons do falls under Twitch's Bits rules - and breaking them has real consequences for your channel." type="danger" %}

Your buttons must follow the [Bits Acceptable Use Policy](https://www.twitch.tv/p/legal/bits-acceptable-use-policy/), the [Community Guidelines](https://safety.twitch.tv/s/article/Community-Guidelines) and the [Terms of Service](https://www.twitch.tv/p/legal/terms-of-service/).

**Fine - on-stream digital effects:**

- Playing a sound or a sound alert
- Showing, hiding or animating an overlay
- Switching or changing an OBS scene, source or filter
- Changing your voice, your camera, your lights
- Starting a poll, a wheel spin or a minigame on stream

**Not allowed:**

| Not allowed | Why |
|-------------|-----|
| Real-world goods or services | Bits may not be used to buy anything that exists outside the stream. |
| Off-Twitch benefits | No Discord roles, game keys, subscriptions elsewhere, coaching, shoutouts on other platforms. |
| Money, donations or financial support | Power is not a payment and must not be framed as one. |
| Specific song or music track requests | Playing a requested track is a licensing problem and is not allowed. A generic sound effect you own is fine. |
| Giveaways, raffles, contests, gambling or wagering | Includes anything where Power buys a chance to win. |
| Anything against the Community Guidelines | Harassment, hateful content, sexual content, and so on. |
{:class='table table-primary table-hover data-toggle='table'}

{% include alert.html text="The difference is the same one Sound Alerts lives by: a sound effect, an overlay or a scene change is a digital on-stream effect and is fine. A named song, a real-world item, or anything of value off Twitch is not." type="info" %}

**What happens if a button breaks the rules**

1. The button is **removed from your channel**. It disappears for viewers, can no longer be triggered, and cannot be saved again - not even under a different name, if it is the same button in disguise.
2. You receive a notice in the extension that you have to confirm before you can change your configuration again.
3. Repeated cases mean losing the ability to add new buttons, then losing Bits in the extension, and finally losing access to the extension entirely.

Violations are reported to Twitch.


#### Create your buttons

1. On Twitch, go to **Creator Dashboard** - **Extensions** - **My Extensions** and open the extension's **Configure** page.
2. Stay on the **Twitch View** tab. This is the extension exactly as your viewers see it, with editing controls added.
3. Press the **+** tile to add a button.
4. Press the pencil icon on a button to edit it.
5. Use the arrows on a button to move it left or right.

{% include image.html w="75" src="twitchext_edit_button.png" alt="Editing a button" %}

| Field | What it does |
|-------|--------------|
| Button Label | What the viewer reads on the button. Emojis are fine. |
| Power required | How much Power pressing it takes. Without SAMMI Pro the minimum is 100. |
| Hover Description | One short line, shown when a viewer hovers the button. |
| Full Description | The longer text in the confirmation dialog, before the viewer commits. |
| Trigger Name | **The link to SAMMI.** This is the text your SAMMI trigger listens for. |
| Background Color | Any CSS color, e.g. `green`, `#1f8b4c` or `rgb(31,139,76)`. |
| Text Color | Same, for the label. |
| Disable Button | Hides the button from viewers without deleting it. |
| Delete this button when saving | Removes the button when you press Save. |
{:class='table table-primary table-hover data-toggle='table'}

{% include alert.html text="Every button needs its own Trigger Name. Two buttons sharing one cannot be told apart, so saving is refused until you rename one of them." type="warning" %}

Your changes are saved to your channel as soon as you press Save - no need to restart anything.


#### JSON Editor

The **JSON Editor** tab shows your whole configuration as text. It is useful for bulk edits, reordering many buttons at once, or copying a setup between channels.

{% include image.html w="75" src="twitchext_json_editor.png" alt="The JSON editor" %}

It checks your JSON while you type and will tell you if something is wrong. Press **Save Config** when you are done.

The `settings` block holds the defaults for the whole extension:

```json
{
  "buttons": [
    {
      "label": "🌳 Test",
      "amount": 150,
      "hoverDescription": "This is a small example",
      "fullDescription": "The longer text shown before confirming",
      "triggerName": "My Example Trigger",
      "style": { "background": "green", "color": "white" },
      "disabled": false
    }
  ],
  "settings": {
    "font": "Inter, sans-serif",
    "defaultButtonDesign": {
      "style": { "background": "blue", "color": "white" }
    }
  }
}
```

{% include alert.html text="The same rules apply here. Power values below 100 are raised back to 100 unless you have SAMMI Pro, and buttons that were removed for a rule violation cannot be added back through the editor either." type="warning" %}


#### Receive the button in SAMMI

1. Right click a button in SAMMI - **Edit Triggers** (or CTRL + double click).
2. Press **+** and choose **Twitch Extension**.
3. Put the **Trigger Name** from the extension into the **Message** field. It has to match exactly.
4. Press Save.

{% include image.html w="75" src="twitchext_sammi_trigger.png" alt="The Twitch Extension trigger in SAMMI" %}

Use [Trigger Pull Data]({{ "commands/trigger#triggerpulldata" | relative_url }}) inside the button to read who pressed it and what they pressed. All available values are listed under [Integration Triggers]({{ "triggers/integrations" | relative_url }}).

{% include alert.html text="Consider enabling <b>Add to Request Queue</b> in the button settings. If several viewers press the same button at once, the requests are handled one after another instead of interrupting each other." type="info" %}


#### Test without a viewer

You do not need a real viewer to build your buttons. The SAMMI Bridge can send a test trigger.

1. Open the SAMMI Bridge and go to the **Twitch Triggers** tab.
2. Find **Twitch Extension** and press **Show Options**.
3. Fill in the fields and send the trigger.

{% include image.html w="75" src="twitchext_test_trigger.png" alt="The Twitch Extension test trigger in the Bridge" %}

| Field | What it does |
|-------|--------------|
| Display Name | The viewer name the test pretends to come from. Left empty, a random one is used. |
| Redemption Name | The button label. Left empty, a random example name is used. |
| Trigger Name | What your SAMMI trigger listens for. Left empty, the Redemption Name is used. |
| Power | The Power amount in the test event. Defaults to 100. |
{:class='table table-primary table-hover data-toggle='table'}

No Power is taken from anyone and nothing is written to your redemption log - the test only sends the trigger to SAMMI.

To test the whole path instead - a real press in the extension, Power deducted, SAMMI reacting - give yourself Power on the Configure page as described above.


#### Redemption Log

The **Redemption Log** tab lists everything your viewers redeemed in the last 72 hours, newest first. Click a column header to sort.

{% include image.html w="75" src="twitchext_redemption_log.png" alt="The redemption log" %}

Each entry has two actions:

- **▶ Replay** sends the same trigger to SAMMI again. Useful when something went wrong on your side - an overlay did not load, SAMMI was restarting, a scene was missing. The viewer is not charged again.
- **✕ Cancel** refunds the Power to the viewer and removes the entry. Use it when you could not deliver what the button promised.

{% include alert.html text="Entries are deleted automatically after 72 hours, and replaying is only possible while an entry is still listed." type="info" %}


#### SAMMI Pro

[SAMMI Pro](https://api.sammi.solutions/sammipro.html) removes the Power floor in the extension.

| | Free | SAMMI Pro |
|---|------|-----------|
| Minimum Power per button | 100 | any value, including 0 |
| Everything else | identical | identical |
{:class='table table-primary w-auto table-hover data-toggle='table'}

A button set to 0 Power can be pressed without any Power at all, which is handy for a free "say hi" interaction next to your paid ones. Without Pro, anything you set below 100 is raised to 100 when you save.


#### Troubleshooting

| Problem | What to check |
|---------|---------------|
| The extension does not show up on my channel | It is installed but not activated. Set it as Component 1 or 2 under **My Extensions**. |
| Nothing happens when a button is pressed | Is SAMMI running and is the Bridge connected? The extension tells the viewer when it is not, and gives the Power back. |
| The trigger does not fire | The **Trigger Name** in the extension and the **Message** in the SAMMI trigger must match exactly, including spaces and capitalisation if Case Sensitive is on. |
| A button disappeared after saving | It was either removed for a rule violation, or it shared a Trigger Name with another button. The extension tells you which. |
| The Power menu is missing for viewers | Bits in Extensions are not available on your channel, or Bits were disabled for it. |
| Power values jumped back to 100 | That is the minimum without SAMMI Pro. |
{:class='table table-primary table-hover data-toggle='table'}


#### Legal

Viewers and broadcasters both have to accept these once before using the extension.

- [End User License Agreement](https://api.sammi.solutions/eula.html)
- [Privacy Policy](https://api.sammi.solutions/privacy_policy.html)
