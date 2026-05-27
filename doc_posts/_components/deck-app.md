---
layout: default
title: Deck App
menu: Components
num: 4
type: fullpage
permalink: /deck-app
version: 202320
---

A Deck App is a type of application designed to interact with decks and buttons created in SAMMI Core. It's a great way to control SAMMI from a different device, such as a tablet or a phone. 

{% include image.html w="75" src="deckapp.png" alt="Spotify Deck in Deck Hopper" %}

### SAMMI Panel and SAMMI Deck

{% include alert.html text="SAMMI Panel development has been resumed. It is not a priority, and Deck Hopper and DeckMate Control remain the recommended alternatives — but the project is being actively improved again." type="info" %}

SAMMI Panel is a free, open-source web-based Deck App. Development was previously paused but has resumed. It is not prioritized over other efforts, so updates may be infrequent.

The latest version of SAMMI Panel can be accessed at [https://panel.sammi.solutions/](https://panel.sammi.solutions/) and supports the full SAMMI Deck App protocol including:
- Triggering and releasing buttons
- Real-time button modifications and ongoing-button tracking
- Deck switching (specific deck, next, previous)
- Enabling and disabling decks (`ChangeDeckStatus`)
- Stopping buttons (`StopButton`)
- Reinitialising button variables (`ReinitButtonVars`)
- Sending custom messages to SAMMI triggers (`CustomMessage`)
- Responding to `Deck App: Wait for Input`, `Wait for Choice`, and `Wait for Multi Choice` commands
- Receiving custom JSON payloads via `Deck App: Send JSON` (dispatched as a `SAMMISendJSON` DOM event for developers building on top of the panel)

SAMMI Deck is now outdated and incompatible with the latest SAMMI Core versions.

### Deck Hopper
We highly recommend using [Deck Hopper](https://christinak.ca/deckhopper/), a solution officially endorsed by the SAMMI team. 

{% include alert.html text="Deck Hopper, created and maintained solely by Christina Kral, a SAMMI founder, is a personal project and not officially part of SAMMI Solutions." type="info" %} 

Deck Hopper is available for [Desktop](https://christinak.itch.io/deck-hopper) (Windows, macOS, Linux), [Android](https://play.google.com/store/apps/details?id=ca.christinak.DeckHopper) and [iOS](https://apps.apple.com/us/app/deck-hopper/id6746429701).

It comes with a [free trial](https://christinak.ca/deckhopper/download), and a [PRO version](https://christinak.ca/deckhopper/upgrade) that removes ads and includes all advanced features. (not applicable to the iOS version, which is Pro by default)

### Setup 

#### Deck Hopper
Deck Hopper setup file is included in all SAMMI 2024.1.0 or newer downloads by default.  

Go to SAMMI Core - Deck App and select **Open Deck Hopper**. If Deck Hopper isn't installed, you'll be prompted to install it. After installation, you can launch it from the same menu. 

Follow the setup instructions on the [Deck Hopper Setup Page](https://christinak.ca/deckhopper/setup#initialSetup) to connect it with your SAMMI Core. 

{% include image.html w="75" src="deckhopper.png" alt="Deck Hopper" %}

#### SAMMI Panel

{% include alert.html text="SAMMI Panel development has resumed but is not prioritized. Deck Hopper and DeckMate Control are the recommended alternatives." type="info" %}

Visit the SAMMI Panel website at [https://panel.sammi.solutions/](https://panel.sammi.solutions/).

Upon first use, you'll see an agreement page. After agreeing to the SAMMI Panel EULA, the Panel will start. You'll then see the connection settings for the Panel.

The default IP address for using the Panel on the same PC as SAMMI Core is `127.0.0.1` with the port `9470`.

For accessing SAMMI Panel from a different device, use the IP address of the PC running SAMMI Core. This can be found in SAMMI Core → Deck App → Get LAN IP. Enter this IP address in the Panel's IP address field.

{% include image.html w="75" src="panel2.png" alt="SAMMI Panel Connection Settings" %}

Choose a deck from the dropdown and click **Select Deck**. You can now interact with it by pressing its buttons.

{% include alert.html text="Press Backspace to return to the deck selection screen at any time." type="info" %}

**What's supported in SAMMI Panel:**
- Full button control (trigger, release, stop, block/unblock)
- Real-time button modifications and state sync
- Deck switching (specific, next, previous) via `Deck App: Switch Deck`
- Enable/disable decks programmatically
- `Deck App: Wait for Input`, `Wait for Choice`, and `Wait for Multi Choice` — shows a pop-up inside the panel
- `Deck App: Send JSON` — dispatched as a `SAMMISendJSON` DOM event (useful for developers building on top of SAMMI Panel)

### Other Alternatives

[Deck Mate Control](https://play.google.com/store/apps/details?id=com.flipstream.android.deckmatecontrol&pli=1), developed by SAMMI Community member Flipstream, is an Android-exclusive alternative to SAMMI Panel. 

---

## For Deck App Developers

This section documents the WebSocket protocol that SAMMI Core exposes for Deck App connections. Any app that speaks this protocol can act as a fully featured Deck App.

SAMMI Core listens on port `9470` by default (configurable in Settings). Deck Apps connect via a standard WebSocket (`ws://`).

### Recommended Library

The easiest way to implement a JavaScript/browser-based Deck App is to use the [SAMMI WebSocket library](https://github.com/SAMMISolutions/SAMMI-Websocket), which wraps the protocol and exposes a promise-based API. SAMMI Panel is built on top of this library. For other platforms, implement the protocol described below directly.

### Operation Codes

Every message is a JSON object with a top-level `op` field that identifies the message type.

| OP | Name | Direction | Purpose |
|---|---|---|---|
| 1 | Heartbeat | Both | Keep-alive ping — send periodically to maintain the connection |
| 2 | Identify | Client → Server | Authentication request sent immediately after connecting |
| 3 | Identified | Server → Client | Confirms successful authentication |
| 4 | Request | Client → Server | A request to SAMMI (fetch data, trigger a button, etc.) |
| 5 | Response | Server → Client | SAMMI's reply to a Request |
| 6 | Event | Server → Client | Unsolicited event broadcast by SAMMI (button state changes, deck updates, etc.) |
| 7 | Close | Both | Signals that the connection is being closed |
{:class='table table-primary'}

### Authentication

After the WebSocket connection is established, the client must send an **Identify** message:

```json
{
  "op": 2,
  "id": "optional-request-id",
  "data": {
    "clientName": "My Deck App",
    "authentication": "<password-hash>"
  }
}
```

- `clientName` — a human-readable name for the connection. SAMMI uses this to target events at a specific panel via the `panelName` field on Switch Deck commands.
- `authentication` — the password hash. If SAMMI has no panel password set, send an empty string. The hash algorithm matches the one used by SAMMI Bridge.

On success SAMMI replies with **Identified** (`op: 3`). On failure the connection is closed.

### Requests (Client → SAMMI)

All requests use `op: 4`. Supply an `id` to match the response.

```json
{
  "op": 4,
  "id": "my-request-id",
  "data": {
    "requestName": "RequestName",
    "requestData": { }
  }
}
```

SAMMI replies with `op: 5`:

```json
{
  "op": 5,
  "id": "my-request-id",
  "data": {
    "requestName": "RequestName",
    "requestSuccess": true,
    "responseData": { }
  }
}
```

On failure, `requestSuccess` is `false` and `responseData` contains `{ "error": { "errorCode": 106, "errorMessage": "..." } }`.

#### GetDeckList

Returns a flat list of all decks and their current status.

```json
{ "requestName": "GetDeckList" }
```

`responseData`:
```json
{
  "deckList": [
    { "deckName": "Main Deck", "deckId": "20230101120000000000001", "crc": "abc123", "status": true },
    { "deckName": "Hidden Deck", "deckId": "20230101120000000000002", "crc": "def456", "status": false }
  ]
}
```

`status: true` = enabled, `status: false` = disabled/hidden.

#### GetDeck

Returns the full data for a single deck including all button properties.

```json
{
  "requestName": "GetDeck",
  "requestData": { "deckId": "20230101120000000000001" }
}
```

`responseData.deckData` contains the full deck structure: deck dimensions, background image CRC, per-button image CRCs, and a `button_list` array with each button's position, size, color, text, image, border, and group information.

#### GetImage

Returns a button or background image as a base64-encoded string.

```json
{
  "requestName": "GetImage",
  "requestData": { "fileName": "my_button.png" }
}
```

`responseData`: `{ "fileName": "my_button.png", "imageData": "<base64>" }`

Use the per-button CRC values from `GetDeck` to determine whether you need to re-fetch an image.

#### GetModifications

Returns all currently active button modifications (temporary appearance overrides applied by "Modify Button" commands).

```json
{ "requestName": "GetModifications" }
```

`responseData`: `{ "modifications": { "<buttonId>": { "text": "...", "image": "...", ... } } }`

#### GetOngoingButtons

Returns all buttons that are currently executing (held down / still running their command list).

```json
{ "requestName": "GetOngoingButtons" }
```

`responseData.buttons` is an array of `{ buttonId, groupId, overlappable, releaseType, duration, elapsedTime }` objects.

#### TriggerButton

Triggers a button as if it were pressed.

```json
{
  "requestName": "TriggerButton",
  "requestData": { "buttonId": "MyButton" }
}
```

#### ReleaseButton

Sends the release signal to a held button.

```json
{
  "requestName": "ReleaseButton",
  "requestData": { "buttonId": "MyButton" }
}
```

#### StopButton

Force-stops a button that is currently executing.

```json
{
  "requestName": "StopButton",
  "requestData": {
    "buttonId": "MyButton",
    "stopOngoing": true,
    "stopQueued": false,
    "stopAll": false
  }
}
```

Set `stopAll: true` to stop every running button regardless of `buttonId`.

#### BlockUnblockButton

Toggles the block state of a button (blocked buttons ignore trigger events).

```json
{
  "requestName": "BlockUnblockButton",
  "requestData": { "buttonId": "MyButton" }
}
```

#### ReinitButtonVars

Resets a button's local variables back to their initial values.

```json
{
  "requestName": "ReinitButtonVars",
  "requestData": { "buttonId": "MyButton" }
}
```

#### GetDeckStatus

Returns whether a specific deck is currently enabled or disabled.

```json
{
  "requestName": "GetDeckStatus",
  "requestData": { "deckId": "20230101120000000000001" }
}
```

`responseData`: `{ "status": true }`

#### ChangeDeckStatus

Enables or disables a deck.

```json
{
  "requestName": "ChangeDeckStatus",
  "requestData": { "deckId": "20230101120000000000001", "status": true }
}
```

`status: true` enables the deck, `status: false` disables it.

#### InputRequestReply

Responds to a `WaitForInput` event (see Events below). The button that issued the wait command will unblock and receive this value.

```json
{
  "requestName": "InputRequestReply",
  "requestData": {
    "requestId": 42,
    "input": "user typed value",
    "type": "waitForInput"
  }
}
```

`type` must be one of `"waitForInput"`, `"waitForChoice"`, or `"waitForMultiChoice"`.  
For `waitForChoice`, send the zero-based index of the selected choice as `input`.  
For `waitForMultiChoice`, send a comma-separated string of selected values as `input`.

#### CustomMessage

Sends a custom payload to SAMMI that fires a Deck App trigger. Buttons with a **Deck App** trigger type can listen for these.

```json
{
  "requestName": "CustomMessage",
  "requestData": {
    "triggerName": "my_custom_event",
    "data": { "foo": "bar", "count": 3 }
  }
}
```

#### EditButton

Opens the button command editor in SAMMI Core for a specific button.

```json
{
  "requestName": "EditButton",
  "requestData": { "deckId": "20230101120000000000001", "buttonId": "MyButton" }
}
```

---

### Events (SAMMI → Client)

All events use `op: 6`:

```json
{
  "op": 6,
  "data": {
    "eventType": "EventName",
    "eventData": { }
  }
}
```

#### ButtonTriggered

Fired when a button starts executing.

```json
{
  "eventType": "ButtonTriggered",
  "eventData": { "buttonId": "MyButton", "groupId": "", "overlappable": false, "duration": 0 }
}
```

#### ButtonEnded

Fired when a button finishes executing.

```json
{
  "eventType": "ButtonEnded",
  "eventData": { "buttonId": "MyButton", "groupId": "", "overlappable": false }
}
```

#### ReleaseEnded

Fired when the release command list of a button finishes executing.

```json
{
  "eventType": "ReleaseEnded",
  "eventData": { "buttonId": "MyButton", "groupId": "", "overlappable": false }
}
```

#### ButtonModified

Fired when a button's visual appearance is temporarily overridden (e.g. by a "Modify Button" command). Also fired when modifications are cleared (`SAMMIReset`).

```json
{
  "eventType": "ButtonModified",
  "eventData": {
    "buttonId": "MyButton",
    "modifications": { "text": "New Label", "image": "new.png", "color": 255 }
  }
}
```

An empty `modifications` object means all overrides have been cleared for that button.

#### DeckStatusChanged

Fired when a deck is enabled or disabled.

```json
{
  "eventType": "DeckStatusChanged",
  "eventData": { "deckId": "20230101120000000000001", "status": true }
}
```

#### DeckUpdated

Fired when a deck's configuration changes (e.g. after editing a button in SAMMI Core). The full updated deck structure is included so the app can refresh its view.

```json
{
  "eventType": "DeckUpdated",
  "eventData": { "deckData": { } }
}
```

#### SwitchDeck

SAMMI Core is instructing this Deck App to navigate to a different deck. The `panelName` field is set to the target client name; if it doesn't match the connected client name the event can be ignored.

```json
{
  "eventType": "SwitchDeck",
  "eventData": { "panelName": "My Deck App", "deckID": "20230101120000000000001" }
}
```

#### SwitchDeckNext / SwitchDeckPrevious

SAMMI Core is instructing the Deck App to navigate to the next or previous deck in the enabled deck list.

```json
{ "eventType": "SwitchDeckNext",     "eventData": { "panelName": "My Deck App" } }
{ "eventType": "SwitchDeckPrevious", "eventData": { "panelName": "My Deck App" } }
```

#### SAMMIReset

Fired when SAMMI Core resets all button modifications. The Deck App should clear all stored overrides and redraw buttons in their default state.

```json
{ "eventType": "SAMMIReset", "eventData": {} }
```

#### WaitForInput

Fired by the **Deck App: Wait for Input**, **Wait for Choice**, or **Wait for Multi Choice** commands. The Deck App must show a UI prompt and reply with `InputRequestReply` to unblock the waiting button.

```json
{
  "eventType": "WaitForInput",
  "eventData": {
    "commandName": "waitForChoice",
    "requestId": 42,
    "buttonId": "MyButton",
    "message": "Pick a colour",
    "choices": "[\"Red\",\"Green\",\"Blue\"]",
    "defaultInput": "",
    "timeoutAfter": 15000
  }
}
```

- `commandName` — `"waitForInput"`, `"waitForChoice"`, or `"waitForMultiChoice"`
- `requestId` — echo this back in `InputRequestReply`
- `choices` — JSON-encoded array of strings; only present for choice variants
- `timeoutAfter` — milliseconds before SAMMI times out and uses the default value (`0` = no timeout)

If the user cancels or the timeout fires without a reply, the Deck App should still send `InputRequestReply` with the `defaultInput` value so the button can continue.

#### SendJSON

Fired by the **Deck App: Send JSON** command. Delivers an arbitrary payload to the Deck App.

```json
{
  "eventType": "SendJSON",
  "eventData": { "event": "score_update", "json": { "score": 42 } }
}
```

SAMMI Panel dispatches this as a `SAMMISendJSON` DOM `CustomEvent` on `document` so third-party scripts embedded in the panel can react to it.
