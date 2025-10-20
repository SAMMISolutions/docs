---
title: "Swap Red & Blue"
num: 6
redirect_from:
  - commands/170
---

Takes in a decimal number and swaps red and blue values.
Useful for converting RGB colors to SAMMI or OBS colors.\
SAMMI uses BGR colors while OBS uses ABGR colors, instead of RGB colors.

{% include alert.html text="If you have a Hex string (like #1f9250) use <a href='/docs/commands/number#hexstringtonumber'>Hex String To Number</a> to get a RGB decimal number which you can use to swap red and blue values" type="warning" %}

{% include alert.html text="As mentioned above, OBS uses ABGR. If you're converting for use in OBS, add the number 4278190080 after conversion to make it work. Check the example below." type="warning" %}

Parameters:

| Name | Type | Value Type | Description |
|-------|--------|--------|----------|
| Variable Name | {% include cmd_param.html param="Text Box" %} | string | Name of the variable containing the color value to swap red and blue. Can use an [Accessor Path](/commands/variables#accessors).|
{:class='table table-primary table-cmd-params'}

{% include example_public.html src="https://i.imgur.com/lV14JhI.png" size="100" title="Converting a hex string to an OBS Color" pastebin="8BfSVAC4" %} 
