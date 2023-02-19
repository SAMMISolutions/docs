---
title: "Modify Channel Information"
num: 8
version: 202310
redirect_from:
  - commands/293
---

Updates a channel's information, such as title, language, tags.
Leave a box blank to not update that information. Requires at least 1 field to update.

| Box Name | Type | Description | 
|-------|--------|--------
Channel|String|Channel name to change the information for
Category|String|Category of the stream (game name, "Just Chatting", etc.)
Language|Dropdown|The [ISO 639-1 2 letter language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes). Select from dropdown menu or manually input
Title|String|Title of the stream
Tags|Stringified array|Tags to apply to the channel, as a stringified array (`["Tag1", "Tag2"]`)
{:class='table table-primary'}
