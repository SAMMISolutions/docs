---
title: "Source Change Text (FT2)"
num: 9
redirect_from:
  - commands/36
---
Changes the text of a Freetype 2 text source.\
If you wish to change the text to a value saved in a variable, you need to wrap it: `/$variable$/`.

{% include alert.html text="Set the text value to one empty space if you wish to clear all text in your OBS source." type="info" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS)|
|Source Name	|String	| Text FT2 source name. Select from dropdown or input manually.
|New Text	|String	| The new text
{:class='table table-primary'}

**OBS WebSocket 5 Request:** `SetInputSettings`

Sends `SetInputSettings` with `inputSettings: { "text": "your text here" }`.

| Request Field | Type | Description |
|-------|--------|--------
| inputName | String | Name of the Text (Freetype 2) source. |
| inputSettings | Object | `{"text": "..."}` — the new text content. |
{:class='table table-secondary w-auto table-hover text-break'}









