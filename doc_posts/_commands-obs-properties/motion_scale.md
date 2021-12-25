---
title: "Source Motion: Scale"
num: 8
---
Resizes a source from Size A to size B over a given duration.\
Due to the way the OBS source resizing work, the result might look a bit snappy sometimes.\
The way the source is resized is based on what the source's point of origin is set to in OBS.\
You can use negative values for a horizontal (mirror) or vertical source flip.\
You can use Math: Pull Source Value command to find current source's X and Y size and incorporate it into this command.

{% include alert.html text="The higher your Receiver's FPS (max 60) the smoother the animation is going to be." type="info" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|scene|	String|	Scene name containing the source
|source	|String	|Source name to scale
|Start Xscale {% include asterisk.html%}|	Real	|Starting X size
|Start Yscale {% include asterisk.html%}|	Real|	Starting Y size
|Final Xscale {% include asterisk.html%}|	Real	|Final X size
|Final Yscale {% include asterisk.html%}|	Real	|Final Y size
|Dur.(MS) {% include asterisk.html%}|	Int|	Duration of the transition in milliseconds
|Smooth|	dropdown |	Type of transition.<br/> **None** = Normal, **Out** = Starts out fast and ends slow, **In** = Starts out slow and ends fast,  <br/> **In/Out**= Starts out slow, gets faster and then slows down at the end again.
{:class='table table-primary'}









