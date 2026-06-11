---
layout: default
title: Meld Studio
menu: Integrations
num: 9
permalink: /integrations/meld-studio
type: fullpage
version: 202650
---

SAMMI interacts with Meld Studio through its **WebChannel API**, enabling remote control of scenes, layers, tracks and more — and listening to Meld events to trigger buttons in SAMMI.

<div class="my-3">
  <a href="https://meldstudio.co/" target="_blank" rel="noopener noreferrer" class="d-inline-flex align-items-center gap-2 text-decoration-none">
    <img src="{{ '/assets/images/integrations/meld-logo.png' | relative_url }}" alt="Meld Studio logo" width="48" height="48" class="rounded">
    <span>Meld Studio website</span>
  </a>
</div>

#### Connect SAMMI to Meld Studio

1. In SAMMI, click **Connections** in the bottom menu and select **Meld Studio**.

    {% include image.html w="75" src="meld-startscreen.png" alt="Opening the Meld Studio connection from the SAMMI Connections menu" %}

{:start="2"}
2. The Meld Connection window opens. Click **Connect to Meld** — SAMMI will connect to Meld Studio running on the same machine.

    {% include image.html w="75" src="meld-connection.png" alt="Meld Studio connection window in SAMMI showing connection status and session info" %}

   The default settings are:
   - **IP:** `127.0.0.1`
   - **Port:** `13376` (Meld's default WebChannel port)

   Leave these untouched unless Meld Studio is running on a different machine or you have changed the WebChannel port in Meld.

{:start="3"}
3. Once connected, the **Status** indicator turns green and the **Session Status** section shows your current scene, streaming/recording state, and scene/layer/track counts.

4. Check **Auto Connect** if you want SAMMI to connect to Meld Studio automatically every time it starts.

{% include alert.html text="Make sure Meld Studio is running and the WebChannel API is enabled in Meld's settings before connecting." type="info" %}

<hr>

#### Control Meld Studio from SAMMI

You can control Meld Studio using [Meld Commands]({{ "commands/meld" | relative_url }}). Here is a practical example — a **Swap Scene** button that listens for a Twitch chat command like `!swapscene Gaming` and switches to the named scene in Meld:

**1. Set up the Trigger**

Open the button's Triggers and add a **Twitch Chat Message** trigger. Set the message to `!swapscene *` — the `*` acts as a wildcard that captures the scene name typed in chat.

{% include image.html w="75" src="meld-swap-scene-trigger.png" alt="Twitch Chat Message trigger set to !swapscene * to capture a scene name from chat" %}

**2. Add the Commands**

In the button's Command Editor, add:

- **Pull Wildcard** — saves the first wildcard value (`*`) as `sceneName`
- **Meld: Show Scene** — uses `/$sceneName$/` as the scene name to switch to

{% include image.html w="75" src="meld-swap-scene-commands.png" alt="SAMMI commands for the Swap Scene button: Pull Wildcard followed by Meld Show Scene" %}

When a moderator (or you) types `!swapscene Gaming` in chat, SAMMI pulls `Gaming` from the wildcard and tells Meld Studio to switch to that scene immediately.

<hr>

#### Meld Commands & Triggers

For the full list of all available Meld commands and triggers, see:

- [Meld Commands]({{ "commands/meld" | relative_url }}) — control scenes, layers, tracks, streaming, recording and more
- [Meld Triggers]({{ "triggers/meld" | relative_url }}) — react to Meld events such as scene changes, stream start/stop, layer created and more
