---
layout: default
title: Integrations
menu: Triggers
num: 6
type: fullpage
permalink: /triggers/integrations
version: 202322
---

Following are all available integration triggers. 

#### Crowd Control

| Trigger                  | Description |
|--------------------------|-------------|
| Effect Success | Triggered whenever an effect is successfully activated. |
| Effect Failure | Triggered whenever an effect fails to trigger. |
| Effect Request | Triggered whenever an effect is requested. This is always followed by either an Effect Success or an Effect Failure trigger. |
| Timed Effect Update | Triggered whenever a timed effect is updated, such as when the effect has started (begin), the game was paused (pause), or resumed (resume). |
{:class='table table-primary w-auto table-hover data-toggle='table'}

#### Voicemod

SAMMI has a trigger for Voicemod that activates when the voice changes.

| Trigger Name     | Description                                       |
|-----------------|------------------------------------------------|
| Voicemod: Voice Changed | This is triggered whenever the voice is altered in any way. |
{:class='table table-primary w-auto table-hover data-toggle='table'}

#### Elgato Stream Deck

Triggers whenever a button is pressed or released on an Elgato Stream Deck. Requires the SAMMI plugin for Stream Deck to be installed on your device.

| Condition | Explanation |
|-------|--------|
| Type | Dropdown | Whether to trigger on `Pressed` or `Released`. |
| Action ID | The Stream Deck action ID to match against. Use `*` to match all buttons. Supports [wildcards](introduction#wildcards). |
{:class='table table-primary' }

| Pull Data Value | Explanation |
|-------|--------|
| Action ID | The action ID of the Stream Deck button that was pressed or released. |
| Type | The type of action. Returns `pressed` or `released`. |
{:class='table table-secondary table-hover' }

<hr>

#### Pulsoid

Triggers based on the viewer's heart rate data from Pulsoid. Requires the Pulsoid extension installed in your Bridge.

| Condition | Explanation |
|-------|--------|
| Minimum | The minimum heart rate (in BPM) required to trigger the button. |
| Maximum | The maximum heart rate (in BPM) allowed to trigger the button. |
{:class='table table-primary' }

| Pull Data Value | Explanation |
|-------|--------|
| Heart Rate | The current heart rate in BPM. |
{:class='table table-secondary table-hover' }

<hr>

#### Twitch Extension

Triggers when a viewer presses one of your buttons in the official [SAMMI Twitch Extension]({{ "integrations/twitch-extension" | relative_url }}). Requires the SAMMI Bridge to be connected to the extension.

| Condition | Explanation |
|-------|--------|
| Message | The **Trigger Name** you gave the button in the extension configuration. Must be an exact match. Can include **[Wild Cards](introduction#wildcards)**. |
| Case Sensitive | Whether the trigger name has to match upper and lower case exactly. |
| Allow empty Wildcard | Whether a wildcard is allowed to match an empty value. |
{:class='table table-primary' }

| Pull Data Value | Explanation |
|-------|--------|
| trigger_name | The Trigger Name of the button that was pressed. |
| redemption_name | The button label the viewer saw. |
| amount | How much Power the button required. |
| display_name | The viewer's Twitch display name, or `Anonymous User` if it could not be resolved. |
| real_user_id | The viewer's Twitch user ID. Only present if the viewer shared their identity with the extension. |
| extension_user_id | The viewer's extension ID. Always present, and the same viewer always gets the same one on your channel. Use this one if you want to recognise a returning viewer. |
| broadcaster_user_id | Your Twitch channel ID. |
| redeemed_at | When the button was pressed, in ISO 8601 format. |
| event_id | The ID of this redemption, matching the entry in your redemption log. |
{:class='table table-secondary table-hover' }

{% include alert.html text="The test trigger in the SAMMI Bridge sends exactly these values, so a button you build against the test keeps working once real viewers press it." type="info" %}
