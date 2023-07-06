---
layout: default
title: Voicemod
menu: Integrations
num: 4
permalink: /integrations/voice-mod
type: fullpage
version: 202322
---

SAMMI integrates with Voicemod, a popular voice-changing software. This allows you to transform your voice during live streams, adding an element of surprise and fun for your viewers.

#### Download 
<iframe frameborder="0" src="https://itch.io/embed/2110760?bg_color=222222&amp;fg_color=e4e3e3&amp;link_color=103b93&amp;border_color=141617" width="552" height="167"><a href="https://sammisolutions.itch.io/voicemod">Voicemod by SAMMI</a></iframe>

#### Install
You can follow the [Extension Install Guide](https://sammi.solutions/extensions/install)

#### Bridge Interface

The Bridge Interface provides information on the current settings of the Voicemod software.

{% include image.html w="50" src="voicemod_bridge.png" alt="Voicemod Bridge Interface" %}

| Feature             | Description                                         |
|----------------|------------------------------------------------|
| Status             | Shows whether you're connected to Voicemod or not. |
| Voicechanger    | Displays the current voice setting.                |
| Background Effects | Indicates the status of background effects.   |
| Hear My Voice     | Shows if you can hear your own transformed voice. |
| Muted              | Indicates if your voice is muted.               |
| License Type      | Displays the type of Voicemod license you have. |
| Voice ID           | Shows the identifier for the current voice.       |
{:class='table table-primary w-auto table-hover data-toggle='table'}

#### Voicemod Commands

The Voicemod extension comes with several commands to provide easy control over the software directly from SAMMI.

{% include alert.html text="These commands needs some time to execute, we recommend to use <a href='/docs/commands/wait#waituntilvariableexists'>Wait Until Variable Exists</a> command." type="warning" %}

| Command Name                  | Description                                                     |
|----------------------|------------------------------------------------------------|
| VM: Change to Specific Voice | Switch to a specific voice of your choice.                |
| VM: Random Voice             | Have SAMMI surprise you with a random voice selection.    |
| VM: Reset Voice              | Reset your voice to the default voice.                    |
| VM: Toggle Background Effects | Turn on or off any background effects.                   |
| VM: Toggle Hear My Voice      | Control whether you can hear your own voice transformation. |
| VM: Toggle Mute               | Mute or unmute your voice.                                |
| VM: Toggle Voice Changer      | Enable or disable the voice changer feature.             |
| VM: Get Voice Bitmap          | Get the bitmap image for the selected voice.             |
| VM: Prevent Bad Language      | This command will mute/beep you out for x milliseconds (1000ms => 1s) |
{:class='table table-primary w-auto table-hover data-toggle='table'}

<hr>

#### Voicemod Triggers

SAMMI has a trigger for Voicemod that activates when the voice changes.

| Trigger Name     | Description                                       |
|-----------------|------------------------------------------------|
| Voicemod: Voice Changed | This is triggered whenever the voice is altered in any way. |
{:class='table table-primary w-auto table-hover data-toggle='table'}

<hr>

Now, with SAMMI's Voicemod extension, you can seamlessly integrate voice-changing features into your live streams, all with the click of a button. Happy streaming!

<hr>
