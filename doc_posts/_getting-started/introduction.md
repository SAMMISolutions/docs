---
layout: default
title: Introduction
menu: Getting Started
num: 1
permalink: /getting-started/introduction
notoc: true
type: fullpage
---

<p class="lb-lead">SAMMI is a versatile Streaming Assistant designed to enhance interactivity between streamers and their audiences, and automate various components of your stream based on an input output system.</p>

### What services are supported?

Out of the box, SAMMI is compatible with the following services:
- Twitch
  - Listen to alerts and chat messages, send chat messages, manage channel point rewards, control your Twitch stream, and much more via Twitch APIs such as EventSub, Helix, and IRC. Learn more in [Integrations - Twitch]({{ "integrations/twitch" | relative_url }}).
- YouTube Live
  - Listen to live events and manage your live stream. Learn more in [Integrations - YouTube]({{ "integrations/youtube" | relative_url }}).
- OBS
  - Full control over your streaming setup via it's websocket. Learn more in [Integrations - OBS]({{ "integrations/obs" | relative_url }}).
- Discord
  - Send basic webhook messages.
- MixItUp
  - Grab, and run commands from MixItUp. Learn more in [Integrations - MixItUp]({{ "integrations/mix-it-up" | relative_url }}).
- And more!

SAMMI is modular by design! we have plenty of official, separate, downloadable integrations:
- Elgato Stream Deck
  - Bind Elgato Stream Deck Actions to SAMMI buttons, and influence Action graphics and data. Learn more in [Integrations - Elgato Stream Deck]({{ "integrations/elgato-stream-deck" | relative_url }}).
- Crowd Control
  - Listen to ran effects, grab list of effects for current game, and much more. Learn more in [Integrations - Crowd Controlk]({{ "integrations/crowd-control" | relative_url }}).
- And much more!

Developers in the community can make their own integrations with the power of [Extensions](#extensions) too, which keeps SAMMI on the cutting edge!

### How is it used?

With SAMMI Core (the main component of SAMMI), you create "buttons" which contain instructions known as "commands" for the program to execute via a super easy drag-and-drop block based programming system. Buttons can be customized with colors, graphics, and more, which are then placed freely in a "Deck", which houses multiple buttons.

Buttons can then be ran **manually** using hotkeys, and pressed through what is known as a Deck App which loads a Deck into an application on your mobile device, web browser, and even [smart fridge...?](https://x.com/sammisolutions/status/1650203870545563657)

Buttons can also be ran **automatically** using events from connected services like whenever someone follows on Twitch, subscribes on YouTube, and, *much more*.

From a very basic viewpoint, you can think of SAMMI Core as an *input-output* system.

SAMMI Core accepts *inputs* like
- Events from services (Twitch, YouTube, OBS, Webhooks, etc)
- Pressed buttons from Deck Apps
- Hotkeys from your keyboard
- Files changing content
- etc

SAMMI Core then *outputs* based on instruction, like
- Writing to a file
- Sending messages to a service (Twitch, YouTube, etc)
- Changing around stream information
- Influencing streaming layout in OBS
- Triggering events in games (if game supports it)
- etc

As you become more proficient with this software, you'll discover a wealth of possibilities you never thought possible within your streams!

{% include alert.html text="SAMMI Core requires <u>no prior knowledge of programming langauges to use.</u> If you're already familiar with programming, SAMMI Core functions like a programming language, offering variables, operators, arrays, objects, string and number methods, conditional statements, loops, async/await commands, and more." type="info" %} 

### What can be made?

Plenty! Sky is the limit, but here is a list of examples.

You can make simple buttons, such as:
- Switching scenes in OBS
- Posting messages in Twitch chat
- Shouting out a user in your audience
- Making chat commands like "!socials", or "!hug"
- Automatically ban bad actors

Or more advanced buttons, like:
- Creating fully local, modular alerts using OBS
- Control smart lights in your home based on events like donations and raids
- Automatically switch your streaming layout and open different applications based on which game category you're streaming
- Integrate game events to influence your OBS Layout
- Create a series of buttons that all work together to create a fully cohesive game

### Extensions

For even greater functionality, SAMMI Core supports community-created JavaScript extensions via SAMMI Bridge. These extensions allow you to interact with other apps and services, including:
- Ko-Fi
- Twitter
- Spotify
- LIFX
- IFTTT
- foobar2000
- More advanced Discord integration
- Heat Map Twitch extension
- and more!

Explore the full list of SAMMI extensions in [Extensions](https://sammi.solutions/extensions) and on our [Discord Server](https://discord.gg/dXez8Zh)!