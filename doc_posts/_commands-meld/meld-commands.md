---
title: "Meld Commands"
num: 1
redirect_from:
  - commands/377
  - commands/378
  - commands/379
  - commands/380
  - commands/381
  - commands/382
  - commands/383
  - commands/384
  - commands/385
  - commands/386
  - commands/387
  - commands/388
  - commands/389
  - commands/390
  - commands/391
  - commands/392
  - commands/394
  - commands/395
  - commands/396
  - commands/397
  - commands/398
  - commands/399
  - commands/400
  - commands/401
  - commands/402
  - commands/403
  - commands/404
  - commands/405
  - commands/406
  - commands/407
  - commands/408
  - commands/409
  - commands/410
  - commands/411
---

Meld commands let SAMMI control Meld Studio through Meld's local WebChannel API.

Meld currently exposes its WebChannel API locally. In SAMMI, open **Connections > Meld Studio** and connect to the default IP and port unless your Meld version changes them.

These commands are based on [Meld Studio's WebChannel API](https://github.com/MeldStudio/streamdeck/blob/main/WebChannelAPI.md). Meld may add more properties, commands, functions, and widget events over time; when that happens you can usually type the new raw value manually into SAMMI's writable dropdown boxes.

{% include alert.html text="Meld scene, layer, track, and effect boxes display human-readable names. SAMMI keeps the IDs internally when you pick an item from the dropdown. You can also type a name manually. For scene-based commands, SAMMI resolves the layer or track name inside the selected scene." type="info" %}

{% include alert.html text="Meld scene dropdowns include <b>Current Scene</b> and <b>Previous Scene</b>. SAMMI resolves those at runtime from the global Meld scene values, so the command follows the active session instead of storing a fixed scene ID." type="info" %}

{% include alert.html text="Most Meld commands require SAMMI to be connected to Meld Studio and for the WebChannel session to be ready. Use <b>Meld: Get Status</b> or the global <code>Meld</code> object to inspect the connection state." type="warning" %}

#### Global Meld object

SAMMI maintains a global `Meld` object with the most important connection and session values.

| Variable | Type | Description |
|-------|--------|--------|
| global.Meld.connected | Boolean | True if SAMMI is connected to Meld Studio. |
| global.Meld.webchannelReady | Boolean | True if Meld's WebChannel API is ready. |
| global.Meld.ip | String | IP used for the Meld connection. |
| global.Meld.port | Number | Port used for the Meld connection. |
| global.Meld.isStreaming | Boolean | True if Meld is currently streaming. |
| global.Meld.isRecording | Boolean | True if Meld is currently recording. |
| global.Meld.isReplayBufferActive | Boolean | True if Meld's replay buffer is active. |
| global.Meld.streamTime | String | Meld stream timer value, if provided by Meld. |
| global.Meld.recordingTime | String | Meld recording timer value, if provided by Meld. |
| global.Meld.version | String | Meld version, if provided by Meld. |
| global.Meld.currentScene | String | Current Meld scene name. |
| global.Meld.currentSceneId | String | Current Meld scene ID. |
| global.Meld.stagedScene | String | Staged Meld scene name. |
| global.Meld.stagedSceneId | String | Staged Meld scene ID. |
| global.Meld.previousScene | String | Previous scene name. Empty until SAMMI has observed a scene change. |
| global.Meld.previousSceneId | String | Previous scene ID. Empty until SAMMI has observed a scene change. |
| global.Meld.sceneCount | Number | Number of scenes reported by the current Meld session. |
| global.Meld.layerCount | Number | Number of layers reported by the current Meld session. |
| global.Meld.trackCount | Number | Number of tracks reported by the current Meld session. |
| global.Meld.effectCount | Number | Number of effects reported by the current Meld session. |
| global.Meld.lastSignal | String | Last Meld WebChannel signal received by SAMMI. |
{:class='table table-secondary table-hover text-break' }

#### Item names and IDs

Meld items have internal IDs. SAMMI hides those IDs in the command UI whenever possible:

- Scene boxes show scene names and store scene IDs in the background.
- Layer boxes show layer names and store layer IDs in the background.
- Track boxes show only tracks from the selected scene and store track IDs in the background.
- Effect boxes show only effects from the selected layer and store effect IDs in the background.
- Scene boxes can also use `Current Scene` or `Previous Scene` to resolve dynamically when the command runs.
- If you type a name manually, SAMMI resolves it at runtime. If two items share the same name, use the scene or layer context boxes to disambiguate.

#### Connection and status commands

##### Meld: Connect

Connects SAMMI to Meld Studio.

| Box Name | Type | Description |
|-------|--------|--------|
| None | - | Uses the IP and port configured in the Meld Connection window. |
{:class='table table-primary' }

##### Meld: Disconnect

Disconnects SAMMI from Meld Studio.

| Box Name | Type | Description |
|-------|--------|--------|
| None | - | Closes the current Meld WebChannel connection. |
{:class='table table-primary' }

##### Meld: Get Status

Saves the current Meld connection and session status as an object.

| Box Name | Type | Description |
|-------|--------|--------|
| Save Variable As | String | Variable name where the status object will be saved. |
{:class='table table-primary' }

The returned object can include:

| Key | Type | Description |
|-------|--------|--------|
| connected | Boolean | SAMMI is connected to Meld Studio. |
| webchannelReady | Boolean | Meld's WebChannel API is ready. |
| ip | String | Meld connection IP. |
| port | Number | Meld connection port. |
| isStreaming | Boolean | Meld is streaming. |
| isRecording | Boolean | Meld is recording. |
| isReplayBufferActive | Boolean | Replay buffer is active. |
| previousScene | String | Previous scene name. |
| streamTime | String | Meld stream timer value, if provided by Meld. |
| recordingTime | String | Meld recording timer value, if provided by Meld. |
| version | String | Meld version, if provided by Meld. |
| currentScene | String | Current scene name. |
| currentSceneId | String | Current scene ID. |
| stagedScene | String | Staged scene name. |
| stagedSceneId | String | Staged scene ID. |
| sceneCount | Number | Number of scenes. |
| layerCount | Number | Number of layers. |
| trackCount | Number | Number of tracks. |
| effectCount | Number | Number of effects. |
| lastSignal | String | Last WebChannel signal received from Meld. |
{:class='table table-secondary table-hover text-break' }

##### Meld: Send Command

Sends a raw Meld command string.

| Box Name | Type | Description |
|-------|--------|--------|
| Meld Command | Dropdown / String | Raw Meld command to send. You can select a known command or type one manually. |
{:class='table table-primary' }

Known command shortcuts include:

`meld.screenshot`, `meld.screenshot.vertical`, `meld.startStreamingAction`, `meld.stopStreamingAction`, `meld.toggleStreamingAction`, `meld.startRecordingAction`, `meld.stopRecordingAction`, `meld.toggleRecordingAction`, `meld.toggleVirtualCameraAction`, `meld.recordClip`, `meld.replay.show`, `meld.replay.dismiss`

#### Streaming and recording commands

##### Meld: Streaming

Starts, stops, or toggles streaming in Meld.

| Box Name | Type | Description |
|-------|--------|--------|
| Action | Dropdown | `start`, `stop`, or `toggle`. |
{:class='table table-primary' }

##### Meld: Recording

Starts, stops, or toggles recording in Meld.

| Box Name | Type | Description |
|-------|--------|--------|
| Action | Dropdown | `start`, `stop`, or `toggle`. |
{:class='table table-primary' }

##### Meld: Record Clip

Asks Meld to record a clip.

| Box Name | Type | Description |
|-------|--------|--------|
| None | - | Sends `meld.recordClip`. |
{:class='table table-primary' }

##### Meld: Replay

Shows or dismisses Meld replay.

| Box Name | Type | Description |
|-------|--------|--------|
| Action | Dropdown | `Show` or `Dismiss`. |
{:class='table table-primary' }

##### Meld: Toggle Virtual Camera

Toggles Meld's virtual camera.

| Box Name | Type | Description |
|-------|--------|--------|
| None | - | Sends `meld.toggleVirtualCameraAction`. Meld currently only exposes a toggle action for this command. |
{:class='table table-primary' }

##### Meld: Take Screenshot

Takes a Meld screenshot.

| Box Name | Type | Description |
|-------|--------|--------|
| Type | Dropdown | `normal` sends `meld.screenshot`. `vertical` sends `meld.screenshot.vertical`. |
{:class='table table-primary' }

#### Scene commands

##### Meld: Show Scene

Shows the selected scene.

| Box Name | Type | Description |
|-------|--------|--------|
| Scene | Meld Scene | Scene to show. Select from the dropdown or type a scene name manually. |
{:class='table table-primary' }

##### Meld: Set Staged Scene

Sets the staged scene.

| Box Name | Type | Description |
|-------|--------|--------|
| Scene | Meld Scene | Scene to stage. Select from the dropdown or type a scene name manually. |
{:class='table table-primary' }

##### Meld: Show Staged Scene

Shows the currently staged scene.

| Box Name | Type | Description |
|-------|--------|--------|
| None | - | Uses Meld's current staged scene. |
{:class='table table-primary' }

#### Track commands

Track commands are scene-aware. Select a scene first; the track dropdown will list tracks from that scene.

##### Meld: Change Track Mute

Changes the mute state of a track.

| Box Name | Type | Description |
|-------|--------|--------|
| Scene | Meld Scene | Scene containing the track. |
| Track | Meld Track | Track to modify. The dropdown is filtered by scene. |
| Action | Dropdown | `Toggle`, `Mute`, or `Unmute`. |
{:class='table table-primary' }

##### Meld: Change Track Monitoring

Changes the monitoring state of a track.

| Box Name | Type | Description |
|-------|--------|--------|
| Scene | Meld Scene | Scene containing the track. |
| Track | Meld Track | Track to modify. The dropdown is filtered by scene. |
| Action | Dropdown | `Toggle`, `On`, or `Off`. |
{:class='table table-primary' }

##### Meld: Set Track Volume

Sets the track gain from a percentage value.

| Box Name | Type | Description |
|-------|--------|--------|
| Scene | Meld Scene | Scene containing the track. |
| Track | Meld Track | Track to modify. The dropdown is filtered by scene. |
| Gain | Number | Volume percentage from `0` to `100`. Values are clamped. Undefined or empty values are ignored. |
{:class='table table-primary' }

##### Meld: Set Track Position

Sets the playback position of a track.

| Box Name | Type | Description |
|-------|--------|--------|
| Scene | Meld Scene | Scene containing the track. |
| Track | Meld Track | Track to modify. The dropdown is filtered by scene. |
| Timestamp In Seconds | Number | Target playback position in seconds. |
{:class='table table-primary' }

#### Layer and effect commands

##### Meld: Layer Toggle Visibility

Toggles a layer's visibility.

| Box Name | Type | Description |
|-------|--------|--------|
| Scene | Meld Scene | Scene containing the layer. |
| Layer | Meld Layer | Layer to toggle. The dropdown is filtered by scene. |
{:class='table table-primary' }

##### Meld: Layer Change Visibility

Sets a layer's visibility to a specific state.

| Box Name | Type | Description |
|-------|--------|--------|
| Scene | Meld Scene | Scene containing the layer. |
| Layer | Meld Layer | Layer to modify. The dropdown is filtered by scene. |
| Visible | Checkbox | Checked means visible. Unchecked means hidden. |
{:class='table table-primary' }

##### Meld: Toggle Effect

Toggles an effect on a layer.

| Box Name | Type | Description |
|-------|--------|--------|
| Scene | Meld Scene | Scene containing the layer. |
| Layer | Meld Layer | Layer containing the effect. The dropdown is filtered by scene. |
| Effect | Meld Effect | Effect to toggle. The dropdown is filtered by layer. |
{:class='table table-primary' }

#### Layer property commands

##### Meld: Set Properties

Sets one property on a Meld layer. This is the flexible low-level property command; the smaller `Meld: Set ...` commands below are convenience wrappers around it.

| Box Name | Type | Description |
|-------|--------|--------|
| Scene | Meld Scene | Scene containing the layer. |
| Layer | Meld Layer | Layer to modify. The dropdown is filtered by scene. |
| Property Name | Dropdown / String | Property to set. You can select a known property or type one manually. |
| Property Value | String | Value to set. JSON values are parsed when possible; otherwise the value is sent as text. |
{:class='table table-primary' }

SAMMI sends this through Meld's `setProperty(id, propertyName, value)` WebChannel slot. Meld documents `parent`, `type`, and `index` as properties that cannot be set, so they are intentionally not part of SAMMI's default property dropdown.

Known property names:

`current`, `enabled`, `height`, `isEffectivelyVisible`, `isPlaying`, `mediaSource`, `monitoring`, `muted`, `name`, `rotation`, `source`, `staged`, `text`, `url`, `vertical`, `visible`, `width`, `x`, `y`

Some properties only affect layer types that support them. For example, `text` is useful for text layers, `url` for browser/source layers, `source` for image-like layers, and `mediaSource` for media layers. Boolean-like values can be entered as `1`/`0`, `true`/`false`, or JSON booleans.

Common values:

| Property | Example Value | Notes |
|-------|--------|--------|
| current | `1` | Boolean-like value. |
| enabled | `1` | Boolean-like value. |
| height | `720` | Number. |
| isEffectivelyVisible | `1` | Boolean-like value. Usually read-only in many systems, but available as a property name. |
| isPlaying | `1` | Boolean-like value. |
| mediaSource | `file:///C:/Users/Chrizzz/Music/song.mp3` | Media file URI. |
| monitoring | `1` | Boolean-like value. |
| muted | `0` | Boolean-like value. |
| name | `My Layer` | Layer name. |
| rotation | `45` | Degrees. |
| source | `file:///C:/Users/Chrizzz/Pictures/image.png` | Source file URI. |
| staged | `1` | Boolean-like value. |
| text | `Hello World` | Text value. |
| url | `https://www.meldstudio.co/browser` | Browser/source URL. |
| vertical | `1` | Boolean-like value. |
| visible | `1` | Boolean-like value. |
| width | `1280` | Number. |
| x | `100` | Number. |
| y | `200` | Number. |
{:class='table table-secondary table-hover text-break' }

##### Meld: Set Size

Sets layer width and height.

| Box Name | Type | Description |
|-------|--------|--------|
| Scene | Meld Scene | Scene containing the layer. |
| Layer | Meld Layer | Layer to resize. |
| Width | Number | New width. |
| Height | Number | New height. |
{:class='table table-primary' }

##### Meld: Set Position

Sets layer x/y position.

| Box Name | Type | Description |
|-------|--------|--------|
| Scene | Meld Scene | Scene containing the layer. |
| Layer | Meld Layer | Layer to move. |
| X | Number | New x position. |
| Y | Number | New y position. |
{:class='table table-primary' }

##### Meld: Set Visibility

Sets layer visibility.

| Box Name | Type | Description |
|-------|--------|--------|
| Scene | Meld Scene | Scene containing the layer. |
| Layer | Meld Layer | Layer to modify. |
| Visible | Checkbox | Checked means visible. Unchecked means hidden. |
{:class='table table-primary' }

##### Meld: Set Rotation

Sets layer rotation in degrees.

| Box Name | Type | Description |
|-------|--------|--------|
| Scene | Meld Scene | Scene containing the layer. |
| Layer | Meld Layer | Layer to rotate. |
| Rotation | Number | Rotation in degrees. |
{:class='table table-primary' }

##### Meld: Set Text

Sets text on a text-capable layer.

| Box Name | Type | Description |
|-------|--------|--------|
| Scene | Meld Scene | Scene containing the layer. |
| Layer | Meld Layer | Layer to modify. |
| Text | String | Text to send to Meld. |
{:class='table table-primary' }

##### Meld: Set URL

Sets a URL on a URL/browser-capable layer.

| Box Name | Type | Description |
|-------|--------|--------|
| Scene | Meld Scene | Scene containing the layer. |
| Layer | Meld Layer | Layer to modify. |
| URL | String | URL to set. |
{:class='table table-primary' }

##### Meld: Set Source

Sets the `source` file property on a layer.

| Box Name | Type | Description |
|-------|--------|--------|
| Scene | Meld Scene | Scene containing the layer. |
| Layer | Meld Layer | Layer to modify. |
| Filepath | File | File to use as the layer source. SAMMI converts the path to a `file:///` URI. |
{:class='table table-primary' }

##### Meld: Set Media Source

Sets the `mediaSource` file property on a layer.

| Box Name | Type | Description |
|-------|--------|--------|
| Scene | Meld Scene | Scene containing the layer. |
| Layer | Meld Layer | Layer to modify. |
| Filepath | File | File to use as media source. SAMMI converts the path to a `file:///` URI. |
{:class='table table-primary' }

##### Meld: Set Layer Name

Renames a layer.

| Box Name | Type | Description |
|-------|--------|--------|
| Scene | Meld Scene | Scene containing the layer. |
| Layer | Meld Layer | Layer to rename. |
| Name | String | New layer name. |
{:class='table table-primary' }

#### Function and media commands

##### Meld: Call Function

Calls a function on a Meld layer.

| Box Name | Type | Description |
|-------|--------|--------|
| Scene | Meld Scene | Scene containing the layer. |
| Layer | Meld Layer | Layer to call the function on. |
| Command Name | Dropdown / String | Function name. Defaults include `play`, `pause`, and `seekTo`; you can type another function name manually. |
| Args JSON | JSON / String | Optional argument JSON. Leave empty for no arguments. A single non-array value is wrapped into an array before being sent. |
{:class='table table-primary' }

SAMMI uses Meld's `callFunction(layerId, command)` when Args JSON is empty, and `callFunctionWithArgs(layerId, command, args)` when arguments are provided. Meld expects `args` to be an array. If you enter a single JSON value such as `30`, SAMMI sends it as `[30]`.

Examples:

| Goal | Command Name | Args JSON |
|-------|--------|--------|
| Play media | `play` | Empty |
| Pause media | `pause` | Empty |
| Seek to 30 seconds | `seekTo` | `[30]` |
{:class='table table-secondary table-hover text-break' }

##### Meld: Control Media

Shortcut command for media play/pause on a layer.

| Box Name | Type | Description |
|-------|--------|--------|
| Scene | Meld Scene | Scene containing the layer. |
| Layer | Meld Layer | Media layer to control. |
| Action | Dropdown | `Play` or `Pause`. |
{:class='table table-primary' }

##### Meld: Control Widget

Sends a stream event to Meld widgets.

| Box Name | Type | Description |
|-------|--------|--------|
| Event Name | Dropdown / String | Widget event name. Select a known event or type one manually. |
| Event Data JSON | JSON | Optional JSON object sent with the event. Empty sends `{}`. |
{:class='table table-primary' }

SAMMI sends this through Meld's `sendStreamEvent(type, data)` WebChannel slot. Event names are case-sensitive. Events marked with no payload can leave Event Data JSON empty.

Known widget events:

| Event Name | Widget | Event Data JSON |
|-------|--------|--------|
| STOPWATCH_RESET | Stopwatch | Empty |
| STOPWATCH_PAUSE | Stopwatch | Empty |
| STOPWATCH_RESUME | Stopwatch | Empty |
| COUNTDOWN_RESET | Countdown | Empty |
| COUNTDOWN_PAUSE | Countdown | Empty |
| COUNTDOWN_RESUME | Countdown | Empty |
| CONFETTIFALL_TRIGGER | Confetti fall | Empty |
| CONFETTIPOP_TRIGGER | Confetti pop | Empty |
| SUBATHONTIMER_RESET | Subathon timer | Empty |
| SUBATHONTIMER_PAUSE | Subathon timer | Empty |
| SUBATHONTIMER_RESUME | Subathon timer | Empty |
| SUBATHONTIMER_ADDTIME | Subathon timer | `{ "amount": 120 }` |
| WHEELSPIN_SPIN | Wheel spin | Empty |
| COUNTER_INCREMENT | Counter | Empty |
| COUNTER_DECREMENT | Counter | Empty |
{:class='table table-secondary table-hover text-break' }

For `SUBATHONTIMER_ADDTIME`, Meld expects the payload shape `{ "amount": number }`, where `amount` is the number of seconds to add. Example:

```json
{ "amount": 120 }
```

#### Trigger data command

##### Meld: Event Pull

Pulls data from the current Meld Trigger payload and saves it to a variable.

| Box Name | Type | Description |
|-------|--------|--------|
| Save Variable As | String | Variable name where the pulled value will be saved. |
| Pull Value | Dropdown / String | Payload key to pull. Use `all` or leave empty to save the whole payload object. |
{:class='table table-primary' }

The pull value names are case-sensitive. For example, use `currentScene`, not `current_scene`.

Common pull values:

| Pull Value | Type | Description |
|-------|--------|--------|
| all | Object | Full Meld event payload. |
| connected | Boolean | Current Meld connection state. |
| currentScene | String | Current scene name. |
| currentSceneId | String | Current scene ID. |
| effectCount | Number | Number of effects in the session. |
| event | String | Event name. |
| ip | String | Meld connection IP. |
| isRecording | Boolean | Current recording state. |
| isReplayBufferActive | Boolean | Current replay buffer state. |
| isStreaming | Boolean | Current streaming state. |
| layerCount | Number | Number of layers in the session. |
| port | Number | Meld connection port. |
| previousScene | String | Previous scene name. |
| previousSceneId | String | Previous scene ID. |
| sceneCount | Number | Number of scenes in the session. |
| stagedScene | String | Staged scene name. |
| stagedSceneId | String | Staged scene ID. |
| trackCount | Number | Number of tracks in the session. |
| trigger | String | Event name used by the trigger system. |
| trigger_type | Number | SAMMI trigger type. Meld Trigger is `50`. |
| type | String | Event name. |
| updatetype | String | Event name. |
| webchannelReady | Boolean | Meld WebChannel ready state. |
{:class='table table-secondary table-hover text-break' }

Event-specific pull values:

| Event | Extra Pull Values |
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
