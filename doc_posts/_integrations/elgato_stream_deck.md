---
layout: default
title: Elgato Stream Deck
menu: Integrations
num: 8
permalink: /integrations/elgato-stream-deck
type: fullpage
version: 202430
---

Our integration connects SAMMI with Elgato Stream Deck unlocking even more potential out of your Stream Deck powered devices such as the Stream Deck, Footpedal, Stream Deck+, and more!

#### Download
First, you'll need the SAMMI Extension below:

<iframe frameborder="0" src="https://itch.io/embed/2921928?bg_color=222222&amp;fg_color=eeeeee&amp;link_color=103b93&amp;border_color=363636" width="552" height="167"><a href="https://sammisolutions.itch.io/elgato-stream-deck">Elgato Stream Deck by SAMMI</a></iframe>

Next, you'll need the Elgato Stream Deck plugin.
Currently, we are awaiting approval of our plugin to show up on the Elgato Marketplace.

In the meantime, you can download the plugin file [from our Github Releases here](https://github.com/SAMMISolutions/SAMMI-Elgato-StreamDeck-Extension/releases)

Make sure that you are looking at the latest version, and click on the file that says:
`SAMMI.streamDeckPlugin`

{% include image.html w="50" src="elgatostreamdeck_plugin_download.png" alt="Elgato Stream Deck plugin download screen indicating that you must press on the file that says SAMMI stream deck plugin" %}


#### Install
For the SAMMI extension, you can follow the [Extension Install Guide](https://sammi.solutions/extensions/install)

For the Elgato Stream Deck plugin, you'll want to navigate to where your `SAMMI.streamDeckPlugin` was downloaded.

If you have the Stream Deck software installed on your system, this plugin should have a unique icon. Double click on the file with the Stream Deck software open, and the window should suddenly become focused.

Wait a moment or two and you should get a popup on the top right indicating that the plugin was successfully installed.

{% include image.html w="50" src="elgatostreamdeck_plugin_install.png" alt="Elgato Stream Deck plugin installation process with the successful install alert highlighted in red" %}

#### Bridge Interface 

This simply lets you know if the extension is successfully connected to SAMMI or not!

You should see "Connected" in green if the Stream Deck software successfully has a connection with SAMMI!

You'll need the Elgato Stream Deck *Plugin* for that!

{% include image.html w="50" src="elgatostreamdeck_bridge.png" alt="Elgato Stream Deck Bridge Interface" %}

#### Elgato Stream Deck Interface

There should be a new category in your Stream Deck software under the name "SAMMI". Click it to expand all available "Actions".

{% include image.html w="50" src="elgatostreamdeck_plugin_sidebar.png" alt="Elgato Stream Deck Plugin Sidebar showing a new SAMMI section" %}

#### Elgato Stream Deck Actions
The Stream Deck offers (currently) a single action to you:

The "Action" Action

{% include image.html w="50" src="elgatostreamdeck_plugin_action.png" alt="Elgato Stream Deck Plugin Action, known as 'Action'." %}

Sounds a little confusing, but it'll all make sense once you drag that action onto your "Canvas", where all of your active Actions are stored.

Upon clicking on your new SAMMI Action in your Canvas, you should see the "Property Inspector" along the bottom of the application window.

{% include image.html w="50" src="elgatostreamdeck_plugin_pi.png" alt="Elgato Stream Deck Plugin Property Inspector for Action" %}

Here is what each field does:

| Action Field                  | Description |
|--------------------------|-------------|
| Action ID | A UUID used to identify this action from within SAMMI. It is highly recommended that you do not change this value, however, you may as long as you keep them unique. Overlapping Action IDs may have unintended side effects! |
| Title | A clone of the disabled "Title" field above, with the same functionality. You can click the text options beside the disabled text field to give your text some style just like in other Actions.|
| Icon | Provide a local filepath, URL, or Base64 URI to give your action an icon! An unknown image will appear as a question mark until resolved, or the field becomes blank. |
| Custom Properties | This section allows you to provide custom metadata to be attatched to your action. You may add as many as you want, these will appear as an Object within SAMMI. |
{:class='table table-primary w-auto table-hover data-toggle='table'}

Each of these fields can be read, **and** manipulated using SAMMI!

{% include alert.html text="Fields manipulated via SAMMI are not visible in the Property Inspector. Treat these fields as the startup-defaults to your action." type="warning" %}

#### SAMMI Commands
SAMMI offers a powerful command for Elgato Stream Deck:

{% include alert.html text="changes using this command are **not** saved in the Stream Deck software across loads." type="warning" %}

| Command                  | Description |
|--------------------------|-------------|
| Update Action | Manipulate any of the fields in your Stream Deck Action. Provide the Action ID found in your Action's property inspector to identify which action you will be editing. Title can be whatever you'd like, while Icon follows the same rules outlined above. Custom Properties (JSON) allows you to change the metadata of the action via providing the box a Stringified Object. If this command is ran in quick succession, it will be queued in the Stream Deck software.|
{:class='table table-primary w-auto data-toggle='table'}

#### SAMMI Triggers

SAMMI offers a single "Elgato Stream Deck" trigger, which contains types you can pick to fire on.

{% include alert.html text="Make sure you provide the Action ID from your Action's property inspector in the Stream Deck software! leave as a * to fire the button on any pressed Action." type="info" %}

{% include alert.html text="If the action has updated fields via the 'Update Action' SAMMI command, this is the only way to visually see that information as it's not visible in the Action's Property Inspector." type="warning" %}

| Trigger                  | Description |
|--------------------------|-------------|
| Pressed | Triggered whenever an Elgato Stream Deck action is pressed. |
| Released | Triggered whenever an Elgato Stream Deck action is released. |
{:class='table table-primary w-auto data-toggle='table'}

| Pull Data Value | Explanation |
|-------|--------|
| Action ID | The Elgato Stream Deck action's ID. |
| Title | The Elgato Stream Deck action's title. |
| Icon | The Elgato Stream Deck action's displayed icon in whichever format you provided. |
| Custom Properties | An object containing the Elgato Stream Deck action's custom properties. |
{:class='table table-secondary' }