---
title: "Modify Button/Group"
num: 1
redirect_from:
  - commands/28
---

Changes the appearance of a button or group (color, text, image and border).\
All changes are temporary, the button will return to its original state if you reset or close and reopen SAMMI.\
If you wish to reset the button back to its default appearance, set the values to `buttond_id, -1, -1, -1, notext, leave empty, -1`.

| Box Name | Type | Description 
|-------|--------|--------
|Button/Group ID|	Any| Button ID or group ID to change the appearance of
|Text	|String| New button text. Use `-default-` to revert the button to its default value.
|Picture| String/File Select|	File name of an image to use. You can use the file explorer or manually type it.
|Border|Int	|Size of the button border, between 0-8. <br/> Use `-1` for default border size and `0` for no border.
|Set Color|checkbox|Whether you want to also change the button color.
|Color|color picker|Select new color for the button.
{:class='table table-primary'}

{% include example_public.html src="/assets/images/commands-button/buttonMod_Ex.gif" size="100" title="Modify colour and text of a button" pastebin="pRqfUXF8" %}







