---
title: "Swap Red & Blue"
num: 6
redirect_from:
  - commands/170
---

Swaps red and blue value for a color in DEC format and returns its DEC value.
Useful for converting HTML colors to SAMMI or OBS colors.\
SAMMI uses BGR colors while OBS uses ABGR colors, instead of RGB colors.

{% include alert.html text="If you have a Hex string (like #1f9250) use <a href='/docs/commands/number#hexstringtonumber'>Hex String To Number</a> to get a decimal number which you can use to swap red and blue values" type="warning" %}

{% include alert.html text="As mentioned above, OBS uses ABGR. If you're converting for use in OBS, add the number 4278190080 after conversion to make it work. Check the example below." type="warning" %}

| Box Name | Type | Description |
|-------|--------|--------
| Variable Name | String | Name of the variable containing the color value to swap red and blue. |
{:class='table table-primary' }

{% include example_public.html src="https://i.imgur.com/a/8CTbOa3.png" size="100" title="Converting a hex string to an OBS Color" pastebin="8BfSVAC4" %} 
