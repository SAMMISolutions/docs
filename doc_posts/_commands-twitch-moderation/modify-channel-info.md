---
title: "Modify Channel Information"
num: 
version: 202310
---

Updates a channel's information, such as title, language, tags.
Leave a box blank to not update that information. Requires at least 1 field to update.

| Box Name | Type | Description | 
|-------|--------|--------
Channel|String|Channel name to change the information for
Game ID|{% include asterisk.html%}|The ID of the category to set the channel to. Can be found using the [Get Game Info]({{ "commands/twitch-info#getgameinfo" | relative_url }}) command
Language|String|The [ISO 639-1 2 letter language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)
Title|String|Title of the stream
Delay|Number {% include asterisk.html%}|**Partner only** How long to artificially delay the stream
Tags|Stringified array|Tags to apply to the channel. To remove all tags, send an empty array string (<code>[]</code>)
{:class='table table-primary'}

{% include alert.html text="Removing all tags by sending an empty array string currently does not work, but Chrizzz is working on fixing it" type="warning" %}