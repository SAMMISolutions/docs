---
title: Core Concepts
num: 0
---

{% include alert.html text='This section assumes you finished reading the <a href="decks-and-buttons/introduction">Decks and Buttons - Introduction</a>!' type="warning" %}

### Button Appearance

This is the visual representation of your button in a deck. This is purely visual, and is meant to help you easily identify your buttons and lay them out in a way that works for you. You can apply images, colors, borders, and lots more! All customization options are available in [Appearance Options](#appearance-options).

### Button ID

Each button, when created, is automatically assigned an ID along the conventions of `ID` + an available number starting from `1`.

Examples: `ID1`, `ID341`, `ID201`, `ID10`

This is an identifier for your button, used in various contexts.\
Some use cases include:

- Referring to a button from another button for [Command](#placeholder) usage
- Easier navigation in the [Variable Viewer](#placeholder)
- Getting and/or setting [Variables](#placeholder) from one button to another

It is common practice to always rename your Button IDs to stay organized, and to not interfere with setups that could potentially break if an ID was expected to be something but isn't. This can happen most commonly when Importing Buttons via _any means_ such as Importing Decks and Buttons from JSON, or Installing Extensions that include a Deck with Buttons, as any Buttons that already exist within SAMMI that share an imported button's ID, will revert back to default automatic assignment mentioned above.

you don't HAVE to, but it will make your life easier if you have loads of buttons (which you will have!)

You can rename a button's ID by going into it's [Settings](#placeholder) window.

Renaming a button's ID should follow a specific naming convention known as <u>Pascal case</u> to avoid conflict issues in the future.

{% include alert.html text='Pascal case simply means, the first letter of each word in the ID should be capitalized, and any spaces, symbols, and special characters are ommitted.' type="info" %}

It is also recommended that Button IDs are prefixed with the subject in which the button belongs. If you are making a sub alert, your ID might look something like `AlertsSub`.

Renamed Button ID Examples: `AlertsFollow`, `VtuberEmotionsHappy`, `SceneSwapsGaming`, `QuotesAdd`

### Execution Time

Buttons, when ran, are not always immediate! If its not immediate, its usually an extremely small amount of time like a frame or two, so its best to <u>treat them as if they never are immediate</u>. This is *always* the case when using [Asynchronous commands](#placeholder) within them.

If a button is already running and you attempt to run it again via any means, **That trigger will be dropped by default**. This, most times, isn't a desired effect; especially if a button gets fired multiple times in quick succession and you want to queue up people's events like Twitch subscriptions, redeems, etc, so it is recommended you [Allow Queueing](#queueing) on your button, otherwise you risk loosing the trigger.

### Queueing

As mentioned above, when a button is triggered and it's already running, that trigger will disappear. If making something like alerts, it's likely you want to instead *Queue* additional triggers, instead of loosing them. That is where the **Allow Queueing** option in a button's [Settings](#placeholder) window comes in.

Toggling this on will now queue additional triggers made to a button.

If you want to queue multiple buttons into the *same* queue, which is commonly done with Alerts so they don't overlap one another but still queue up together, you'll want all those buttons to share the same [Group](#placeholder).

### Groups, Group IDs

Buttons can optionally be included in a Group. Buttons that share a group, will not overlap one another no matter what when executed. To assign buttons to a group, you need to assign it a Group ID via the [Settings](#placeholder) window.

Renaming a group's ID should follow a specific naming convention known as <u>Pascal case</u> to avoid conflict issues in the future.

{% include alert.html text='Pascal case simply means, the first letter of each word in the ID should be capitalized, and any spaces, symbols, and special characters are ommitted.' type="info" %}

It is also recommended to name the Group ID the *prefix* of your Button ID if you don't already have a Group ID name in mind. Example: `AlertsFollow` and `AlertsBits` share the `Alerts` Group ID. Perhaps you want some alerts to queue, and some to overlap, so splitting buttons that are a part of the same topic is totally okay, and you can build off the prefix, like `AlertsLeftSide` and `AlertsOverlay`. Up to you!

If buttons `AlertsFollow` and `AlertsBits` are a part of the `Alerts` group, only one may be active at a time. Attempting to run `AlertsBits` while `AlertsFollow` is running will result in that trigger being dropped. This use case is relatively niche, however, where it shines the most is when you combine it with [Queueing](#Queueing), as combining queueing with grouped buttons, will group them the same, but **will not** drop the trigger and instead queue them until no buttons from the group are running. 

### Press Type

While using a [Deck App](#placeholder), you have the option to change the press type of your buttons via it's [Settings menu](#placeholder). The press type determines how your button behaves based on certain gestures done to the button on whichever device runs your Deck App. The following press types are:

- Normal - Runs button when pressed only.
- Single Drag - Runs button when pressed, and when dragged over. Will need to lift finger between drag presses.
- Multi Drag - Runs button when pressed, and when dragged over. Do not need to lift finger between drag presses.