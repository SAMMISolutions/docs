---
title: Core Concepts
num: 0
---

{% include alert.html text='This section assumes you finished reading the <a href="decks-and-buttons/introduction">Decks and Buttons - Introduction</a>!' type="warning" %}

### Button ID

Each button, when created, is automatically assigned an ID along the conventions of `ID` + an available number starting from `1`.

Examples: `ID1`, `ID341`, `ID201`, `ID10`

This is an identifier for your button, used in various contexts.\
Some use cases include:

- Referring to a button from another button for [Command](#placeholder) usage
- Easier navigation in the [Variable Viewer](#placeholder)
- Getting and/or setting [Variables](#placeholder) from one button to another

It is common practice to always rename your Button IDs to stay organized, and to not interfere with setups that could potentially break if an ID was expected to be something but isn't. This can happen most commonly when Importing Buttons via _any means_ such as Importing Decks and Buttons from JSON, or Installing Extensions that include a Deck with Buttons, as any Buttons that already exist within SAMMI that share an imported button's ID, will revert back to default automatic assignment mentioned above.