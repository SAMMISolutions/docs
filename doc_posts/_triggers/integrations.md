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
