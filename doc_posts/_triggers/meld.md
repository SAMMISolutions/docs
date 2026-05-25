---
layout: default
title: Meld
menu: Triggers
num: 7
type: fullpage
permalink: /triggers/meld
---

SAMMI can listen to Meld Studio WebChannel events through the **Meld Trigger**.

Meld triggers are useful when you want a button to react to Meld connection changes, scene/session changes, streaming state changes, recording state changes, or scene/layer creation and removal.

#### Add a Meld trigger

1. Right click a button in SAMMI and open **Edit Triggers**.
2. Click the **+** button.
3. Select **Meld Trigger** from the General Triggers section.
4. Select the Meld event type.
5. Save the trigger.

{% include alert.html text="Meld Trigger uses trigger type value <code>50</code>. You can pull this value with <b>Trigger Pull Data</b> using <code>trigger_type</code>. The global <code>trigger_type</code> array also exposes index <code>50</code> as <code>meldtrigger</code>." type="info" %}

#### Trigger types

| Trigger Type | When it fires |
|-------|--------|
| Connected | SAMMI connected to Meld Studio. |
| Disconnected | SAMMI disconnected from Meld Studio. |
| Session Changed | Meld reported that the session object changed. This is the broad session update event. |
| Scene Changed | The current scene changed. SAMMI also keeps the previous scene name and ID. |
| Layer Created | A layer was added to the Meld session. |
| Layer Removed | A layer was removed from the Meld session. |
| Scene Created | A scene was added to the Meld session. |
| Scene Removed | A scene was removed from the Meld session. |
| Streaming Changed | Meld reported a streaming state change. |
| Stream Started | Streaming changed to active. |
| Stream Stopped | Streaming changed to inactive. |
| Recording Changed | Meld reported a recording state change. |
| Recording Started | Recording changed to active. |
| Recording Stopped | Recording changed to inactive. |
{:class='table table-primary' }

#### Retrieve Meld trigger values

Use [Meld: Event Pull]({{ "commands/meld#meldeventpull" | relative_url }}) inside the triggered button to read values from the Meld event payload.

The pull value names are case-sensitive. For example, use `currentScene`, not `current_scene`.

| Common Pull Value | Type | Explanation |
|-------|--------|--------|
| all | Object | Returns the whole Meld event payload. |
| connected | Boolean | Current Meld connection state. |
| currentScene | String | Current scene name. |
| currentSceneId | String | Current scene ID. |
| effectCount | Number | Number of effects in the current session. |
| event | String | Meld event name, such as `SceneChanged` or `RecordingStarted`. |
| ip | String | Meld connection IP. |
| isRecording | Boolean | Current recording state. |
| isReplayBufferActive | Boolean | Current replay buffer state. |
| isStreaming | Boolean | Current streaming state. |
| layerCount | Number | Number of layers in the current session. |
| port | Number | Meld WebChannel port. |
| previousScene | String | Previous scene name. Empty until a scene change has been observed. |
| previousSceneId | String | Previous scene ID. Empty until a scene change has been observed. |
| sceneCount | Number | Number of scenes in the current session. |
| stagedScene | String | Staged scene name. |
| stagedSceneId | String | Staged scene ID. |
| trackCount | Number | Number of tracks in the current session. |
| trigger | String | Same event name used for trigger matching. |
| trigger_type | Number | SAMMI trigger type. Meld Trigger is `50`. |
| type | String | Same event name used for trigger matching. |
| updatetype | String | Same event name used for trigger matching. |
| webchannelReady | Boolean | True if Meld's WebChannel API is ready. |
{:class='table table-secondary table-hover text-break' }

#### Event-specific pull values

| Event | Additional Pull Values |
|-------|--------|
| SessionChanged | `args`, `session`, `signal` |
| SceneChanged | `sceneId`, `sceneName` |
| SceneCreated | `itemId`, `itemName`, `itemType`, `sceneId`, `sceneName` |
| SceneRemoved | `itemId`, `itemName`, `itemType`, `sceneId`, `sceneName` |
| LayerCreated | `itemId`, `itemName`, `itemType`, `layerId`, `layerName`, `parentId`, `parentName`, `sceneId`, `sceneName` |
| LayerRemoved | `itemId`, `itemName`, `itemType`, `layerId`, `layerName`, `parentId`, `parentName`, `sceneId`, `sceneName` |
| StreamingChanged | `args`, `signal` |
| StreamStarted | `args`, `signal` |
| StreamStopped | `args`, `signal` |
| RecordingChanged | `args`, `signal` |
| RecordingStarted | `args`, `signal` |
| RecordingStopped | `args`, `signal` |
{:class='table table-secondary table-hover text-break' }

#### Payload examples

Pull the current scene name from any Meld trigger:

| Command | Save Variable As | Pull Value |
|-------|--------|--------|
| Meld: Event Pull | `scene` | `currentScene` |
{:class='table table-primary w-auto' }

Pull the whole event payload:

| Command | Save Variable As | Pull Value |
|-------|--------|--------|
| Meld: Event Pull | `payload` | `all` |
{:class='table table-primary w-auto' }
