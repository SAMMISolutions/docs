---
title: "Source Motion: Position Curve"
num: 7
---
Moves a Source from point A to point B over a given duration and curves it in a circle pattern.\
You can make a source complete a half circle or have a slight curve in its transition.\
If you want to move a source from its current position, you can use the command Math: Pull Source Value to find current source's X and Y position and incorporate it into this command.

{% include alert.html text="The higher your Receiver's FPS (max 60) the smoother the animation is going to be." type="info" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|scene|	String|	Scene name containing the source
|source	|String	|Source name to move
|Start X {% include asterisk.html%}|	Real|	Starting X position
|Start Y {% include asterisk.html%}|	Real|	Starting Y position
|Final X {% include asterisk.html%}|	Real|	Final X position
|Final Y {% include asterisk.html%}|	Real|	Final Y position
|Curve % {% include asterisk.html%}|	Real|	The amplitude of the curve. Can be negative or over 100. <br/> **100%** = perfect half circle, **0%** = straight line with a slower start and slower finish. <br/> **-200%** elongated half circle on the opposite side.
|Dur.(MS) {% include asterisk.html%}|	Int|	Duration of the transition in milliseconds
|Smooth|	dropdown |	Type of transition.<br/> **None** = Normal, **Out** = Starts out fast and ends slow, **In** = Starts out slow and ends fast,  <br/> **In/Out**= Starts out slow, gets faster and then slows down at the end again.
{:class='table table-primary'}









