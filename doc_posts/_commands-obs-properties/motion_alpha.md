---
title: "Source Motion: Alpha Filter"
num: 11
---
Changes the transparency of a source over a set duration.\
Requires a Color Correction filter to be added to your source.\
This way you can gradually fade out a source before turning its visibility completely off and gradually fade in a source after turning its visibility on.

{% include alert.html text="Older Color Correction filters require 0-100 range, however newer ones require 0-1 range." type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|source |	String	Source name to change the transparency of.
|filterName	| String|	Filter name. Must be a Color Correction filter.
|Start Alpha% {% include asterisk.html%}|	Real|	Starting transparency percentage. 0-100 or 0-1 depending on the filter's version.
|Final Alpha% {% include asterisk.html%}|	Real|	Final transparency percentage. 0-100 or 0-1 depending on the filter's version.
|Dur.(MS) {% include asterisk.html%}|	Int|	Transition duration in milliseconds
{:class='table table-primary'}









