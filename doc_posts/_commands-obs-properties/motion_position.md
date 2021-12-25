---
title: "Source Motion: Position"
num: 6
---
Moves a source from point A to point B over a given duration.\
If you want to move a source from its current position, you can use the command Math: Pull Source Value to find the current source's X and Y position and incorporate it into this command.

{% include alert.html text="The higher your Receiver's FPS (max 60) the smoother the animation is going to be." type="info" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|scene|	String|	Scene name containing the source
|source	|String	|Source name to move
|Start X {% include asterisk.html%}|	Real|	Starting X position
|Start Y {% include asterisk.html%}|	Real|	Starting Y position
|Final X {% include asterisk.html%}|	Real|	Final X position
|Final Y {% include asterisk.html%}|	Real|	Final Y position
|Dur.(MS) {% include asterisk.html%}|	Int|	Duration of the transition in milliseconds
|Smooth|	dropdown |	Type of transition.<br/> **None** = Normal, **Out** = Starts out fast and ends slow, **In** = Starts out slow and ends fast,  <br/> **In/Out**= Starts out slow, gets faster and then slows down at the end again.
{:class='table table-primary'}









