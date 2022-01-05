---
title: "Stack: Find"
num: 5
---

Finds the first instance of a given value inside the stack. Needs to be the exact value.\
Return -1 if not found.


{% include alert.html text="The value you're trying to find needs to be an exact match (case sensitive) to the stack value." type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|Stack Name	|String	| Name of the stack to search for the value
|Variable| Name of the variable to save the position of the found value under|
|Find {% include asterisk.html%} | Var./String/Real | The value to find in the stack
{:class='table table-primary'}

| Find Value | Stack | Result | 
|-------|--------|--------
| "blue" | ["yellow","red","blue","orange","blue"] | 2
|"blue" | ["yellow","red","blue cat","orange"] | -1 (not found)
| "blue" | ["yellow","Blue","blue cat","blue"] | 3
{:class='table table-secondary w-auto table-hover data-toggle='table' text-break }

{% include example_public.html src="https://i.imgur.com/iqXZByZ.png" title="Greet chatter at their first message (every session)" pastebin="BTCTGm8e" %}







