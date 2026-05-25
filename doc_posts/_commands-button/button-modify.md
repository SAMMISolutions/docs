---
title: "Modify Button/Group"
num: 1
redirect_from:
  - commands/28
---

Changes the appearance of a button or group (color, text, image, border, font color, border color, and font shadow).\
All changes are temporary, the button will return to its original state if you reset or close and reopen SAMMI.\
If you wish to reset a temporary override, leave the related value empty or use its default reset value. To reset all temporary changes for a button, run the command with only the Button/Group ID.

| Box Name | Type | Description 
|-------|--------|--------
|Button/Group ID|	Any| Button ID or group ID to change the appearance of
|Text	|String| New button text. Use `-default-` to revert the button to its default value.
|Image| String/File Select|	File name of an image to use. You can use the file explorer or manually type it.
|Border Size|Int	|Size of the button border, between 0-8. Use `-1` to keep/default and `0` for no border.
|Set Color|checkbox|Whether you want to also change the button color.
|Color|color picker|Select new color for the button.
|Set Border Color|checkbox|Whether you want to also change the button border color.
|Border Color|color picker|Select new border color for the button.
|Set Font Color|checkbox|Whether you want to also change the button text color.
|Font Color|color picker|Select new text color for the button.
|Font Shadow|Dropdown|Choose `Don't change`, `Show Font Shadow`, or `Hide Font Shadow`.
{:class='table table-primary'}

Deck Apps receive these appearance fields through button and modification payloads as `border`, `border_color`, `font_color`, and `font_shadow`.

{% include example_public.html src="/docs/assets/images/commands-button/buttonMod_Ex.gif" size="100" title="Modify colour and text of a button" pastebin="pRqfUXF8" %}







