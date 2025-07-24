---
title: Core Concepts
num: 1
---

{% include alert.html text='This section assumes you finished reading the <a href="decks-and-buttons/introduction">Decks and Buttons - Introduction</a>!' type="warning" %}

### Button Appearance

This is the visual representation of your button in a deck. This is purely visual, and is meant to help you easily identify your buttons and lay them out in a way that works for you. You can apply images, colors, borders, and lots more! Not only does this matter for organization, but doing so also directly impacts your use with a Deck App.

Right clicking on a button and clicking **Edit Appearance** will open up a window dedicated to customizing the way your button looks in the Deck.

{% include image.html external="true" src="https://placehold.co/600x400" alt="placeholder"%}

Upon opening, you will be greeted with color options on the left, label information in the center, and miscellanous details on the right.

For color, you have a color pallete you can click and drag through, as well as fine-tuning in the form of HSL, RGB, and Hex values. If you cannot decide, there is a random button aswell.

For the label, you are able to put any text you'd like on the button. You also have the ability to write text on multiple lines.

{% include alert.html text="The way your button will look depends on the way your button is sized on the Deck. Long text with little width will look very small, and vice versa. Make sure to frequently save and check how it looks!" type="warning" %}

For miscellaneous customization, you have the ability to pick an image to be plastered ontop of your button by clicking the folder icon, and choosing an image using the file explorer that pops up. You can remove an image from a button by clicking **Remove**.

{% include alert.html text=".gif files are supported! They will only appear animated while using a Deck App." type="info" %}

By default, the image will resize, as well as attempt to maintain it's aspect ratio, and overflow within the button to do so. This can cause the image to crop akwardly, so play around with changing the grid spacing of your Deck, or turn off Grid Snapping.

Checking the box **Stretch to Size** will stretch the image to fit within the bounds of the button on the Deck. This eliminates the cropping of the image, but in return, stretches it to resolve itself.

Checking **Transparent Button** will remove the background of the image, but maintain the border.

**Border Size** allows you to adjust the size of the border on the button, with the very left being no border, and very right being most border.

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

If you want to queue multiple buttons into the *same* queue, which is commonly done with Alerts so they don't display over one another but still queue up together, you'll want all those buttons to share the same [Group](#placeholder).

### Overlap

Button Overlap is another way to handle when a button is triggered and it's already running. When triggering a button with overlap enabled, it makes a new "instance" of your button and all of it's commands then runs it, meaning, you can stack multiple simultaneous executions of the same button. Each instance is given a unique instance ID to help refer to individual instances if needed.

This differs from queueing, because queueing only allows one instance to be active at a time, until running itself again.

{% include alert.html text='As a result, Allow Queueing and Button Overlap cannot be toggled on the same button, and will only allow one or the other, as they are contradictary!' type="warning" %}

If a button with overlap enabled is set to have [Local Variable Persistence](#placeholder), all instances of that button running will share the same [Variables](#placeholder).\
If persistence is disabled instead, each instance will have it's own pool of variables that don't interfere with each other.

Overlap is commonly used to, well, overlap buttons! really useful for stackable interactions, or in more advanced cases, run complicated tasks in parallel.

### Groups, Group IDs

Buttons can optionally be included in a Group. Buttons that share a group, will not overlap one another no matter what when executed. To assign buttons to a group, you need to assign it a Group ID via the [Settings](#placeholder) window.

Renaming a group's ID should follow a specific naming convention known as <u>Pascal case</u> to avoid conflict issues in the future.

{% include alert.html text='Pascal case simply means, the first letter of each word in the ID should be capitalized, and any spaces, symbols, and special characters are ommitted.' type="info" %}

It is also recommended to name the Group ID the *prefix* of your Button ID if you don't already have a Group ID name in mind. Example: `AlertsFollow` and `AlertsBits` share the `Alerts` Group ID. Perhaps you want some alerts to queue, and some to overlap, so splitting buttons that are a part of the same topic is totally okay, and you can build off the prefix, like `AlertsLeftSide` and `AlertsOverlay`. Up to you!

If buttons `AlertsFollow` and `AlertsBits` are a part of the `Alerts` group, only one may be active at a time. Attempting to run `AlertsBits` while `AlertsFollow` is running will result in that trigger being dropped. This use case is relatively niche, however, where it shines the most is when you combine it with [Queueing](#Queueing), as combining queueing with grouped buttons, will group them the same, but **will not** drop the trigger and instead queue them until no buttons from the group are running. 

### Local Variable Persistence

By default, buttons allow variables to persist. This means that variables can exist in a button before, and after execution.

This also enables usage of the [Variable Viewer](#placeholder).

For an example of *after* execution, if you have a button that sets a variable like `favoriteFood` to the string value of `"Sushi"`, that variable will remain there until it is deleted explicitly somehow.

For an example of *before* execution, a very common scenario could be a `counter` variable that is supposed to start at 0 when you start the application, and running the button it's attatched to, simply adds +1 to that counter. Using [Default Variables](#placeholder) would allow you to have that `counter` variable defined ahead of time, which variable persistence needs to be on, to allow.

In a button's settings, you can also turn *off* the option **Local Variable Persist**, meaning variables cannot exist before, or after a button's execution.\
In practice, what this looks like is all variables defined during the execution of your button will be deleted after it is finished running.

Leaving persistence on is extremely handy for buttons that have variables that need to exist from prior executions, to use the variable viewer, to debug and understand whats happening in a button, and a lot more.

Turning it off is also extremely handy for overlapping buttons that need their own individual, isolated variables, optimization, and for buttons that primarily influence other buttons rather than itself.

It is strongly recommended to keep persistence on for your buttons when starting out, and experiment with turning it off for optimizations and more niche use cases.

### Default Variables

Each button can have "Default Variables" set that allow you to specify what variables a button should initialize to on application startup. You can edit these by right clicking a button and clicking **Edit Default Variables**. This can help prevent unexpected outcomes, and prevents crashes at worst.

For exxample, Default Variables are really handy if you want to start off with a counter at number 0, so all your button has to worry about is adding +1 to the already existing counter instead of doing logic to determine if it exists or not. If you tried adding +1 to a variable before initializing it ahead of time, it will try adding 1 to `undefined`, which results in the string `"undefined1"` as the output.

Creating default variables takes a simple [JSON](#placeholder) structure as it's input.

Here is an example of defining every value type in the input.

```json
{
	"myString": "Hello World!",
	"myNumber": 42,
    "myNull": null,
    "myArray": ["just", "some", "values"],
    "myObject": {
        "favoriteFood":"Rice Cake",
        "name":"Landie",
        "spiritAnimal":"Fox"
    }
}
```

This example creates the variables `myString` with value `"Hello World!"`, `myNumber` with the value `42`, `myNull` with the value `null`, `myArray` with the values `"just"`, `"some"`, `"values"`, and an object containing the variables `favoriteFood`, `name`, and `spiritAnimal`.

{% include image.html w="50" external="true" src="https://i.imgur.com/P9sUpBc.gif" alt="resulting output of example json above, in SAMMI." %}

You can validate your JSON input by clicking **Validate JSON Syntax**.

If you want to have the variables initialized now instead of on next application startup, make sure to click **Reinitialize Default Variables** at the bottom left before clicking **Save**.

Additionally, you can programatically reset variables specified in Default Variables via the command [Reinitialize Default Variables](#placeholder).

### Press Type

While using a [Deck App](#placeholder), you have the option to change the press type of your buttons via it's [Settings menu](#placeholder). The press type determines how your button behaves based on certain gestures done to the button on whichever device runs your Deck App. The following press types are:

- Normal - Runs button when pressed only.
- Single Drag - Runs button when pressed, and when dragged over. Will need to lift finger between drag presses.
- Multi Drag - Runs button when pressed, and when dragged over. Do not need to lift finger between drag presses.