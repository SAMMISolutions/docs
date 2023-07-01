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
