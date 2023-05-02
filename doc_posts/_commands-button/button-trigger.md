---
title: "Trigger Button"
num: 0
redirect_from:
  - commands/132
---

Triggers any button by its ID.\
If the button ID does not exist, sends an extension trigger instead.

{% include alert.html text="You can right click on a button and left click on its ID to copy it into your clipboard." type="info" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|Button ID|	String/Number	|ID of a button you want to activate.
|Delay Activation|	Int|	This exists to make a button happen without greying it out in case the button is showing valuable info.<br/> The delay is hidden and cannot be cancelled.
|Queueable|	checkbox	| If checked and the button is already activated, it will wait for it to finish and trigger the button again. Will get queued as many times as you execute the command. <br/> If unchecked and the button is already activated, nothing will happen.
{:class='table table-primary'}

{% include example_public.html src="/assets/images/commands-button/buttonTrig_Ex.png" size="100" title="Auto-trigger a button to send messages in chat" pastebin="rJrMeWFs" %}





