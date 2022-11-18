---
title: "Motion: Change Cropping"
num: 5
---

Gradually changes the crop settings of a source over a set duration.

| Box Name | Type | Description | 
|-------|--------|--------
|OBS|Dropdown|OBS to send this command to (if using multiple OBS)|
|Scene Name|	String	|Scene name containing the source. Select from the menu or type manually. Leave blank for current active scene.
|Source Name|	String|	Source name. Select from dropdown or input manually.
|Start L|Number {% include asterisk.html%}|Starting left crop settings.
|Start T|Number {% include asterisk.html%}|Starting top crop settings.
|Start R|Number {% include asterisk.html%}|Starting right crop settings.
|Start B|Number {% include asterisk.html%}|Starting bottom crop settings.
|End L|Number {% include asterisk.html%}|Final left crop settings.
|End T|Number {% include asterisk.html%}|Final top crop settings.
|End R|Number {% include asterisk.html%}|Final right crop settings.
|End B|Number {% include asterisk.html%}|Final bottom crop settings.
|Dur. (ms)|Number {% include asterisk.html%}|Duration of the animation in milliseconds
|Smooth|	Dropdown |	Type of transition.<br/> **None** = Normal, **Out** = Starts out fast and ends slow, **In** = Starts out slow and ends fast,  <br/> **In/Out**= Starts out slow, gets faster and then slows down at the end again.
{:class='table table-primary'}

{% include example_public.html src="https://i.imgur.com/gnoypKZ.png" size="100" title="Change source cropping on a bits trigger" pastebin="Adg3hZpj" %}  







