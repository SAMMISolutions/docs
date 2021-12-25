---
title: "Modify button"
num: 1
---

Changes the appearance of a button (color, text, image and border).\
All changes are temporary, the button will return to its original state if you reset or close and reopen Receiver.\
If you wish to reset the button back to its default appearance, set the values to `buttond_id, -1, -1, -1, notext, leave empty, -1`.

| Box Name | Type | Description 
|-------|--------|--------
|Button ID|	Any| Button ID to change the appearance of
|Red {% include asterisk.html%}	|Int|	Red value, 0-255.
|Green {% include asterisk.html%}	|Int|	Green value, 0-255.
|Blue {% include asterisk.html%} |Int|	Blue value, 0-255.
|Text	|String|	New button text. Leave blank or enter notext to use default value.
|Picture|	String|	File name of a picture to use. <br/> Must be formatted as image.png and placed in Lioranboard Receiver/image folder. <br/>Do not include path. Leave empty to use default value.
|Border Size|	Int	|Size of the button border, between 0-8. Only applies if a picture is included. <br/> Use -1 for default border size and 0 for no border.
{:class='table table-primary'}









