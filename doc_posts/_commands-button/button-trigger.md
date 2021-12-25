---
title: "Trigger Button"
num: 0
---

Triggers any button of a given ID.\
If the button ID does not exist, sends an extension trigger instead.

{% include alert.html text="You can right click on a button to retrieve its button ID." type="info" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|Button ID|	Any	|ID of a button you want to activate.
|Queue-Able|	boolean	| If set to true and the button is already activated, it will wait for it to finish and trigger the button again. Will get queued as many times as you execute the command. <br/> If set to false and the button is already activated, nothing will happen.
|Hidden Delay|	Int|	This exists to make a button happen without greying it out in case the button is showing valuable info.<br/> The delay is hidden and cannot be cancelled (unless you use Reset or press Done in your Receiver).
{:class='table table-primary'}

{% include example_public.html src="https://imgur.com/0HLJLde.jpeg" title="Timers (Auto trigger button)" pastebin="kL3HndM7" desc=description %} 







