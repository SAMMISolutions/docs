---
title: "Panel: Wait for Input"
num: 2
version: 202331
redirect_from:
  - commands/321
---

{% include alert.html text="Currently only supported in Deck Hopper." type="warning" %} 

Similar to Wait for User Input command, but the prompt will originate from SAMMI Panel instead.  
Command is available in [Developer Mode](https://sammi.solutions/docs/faq/general#developermode).

Pauses a button execution for the specified amount of time, and a pop up message appears for the user asking for their input. Once the user presses OK or the time runs out, it resumes the button execution and continues with the rest of the commands.


| Box Name | Type | Description | 
|-------|--------|--------
|Message| String | Popup message to show the user
|Default Text | String | Default value prefilled in the input field 
|Timeout After | Number | Time in milliseconds before SAMMI resumes the button execution, leave empty to wait indefinitely
|Save Variable As | String | Variable name to save the result
{:class='table table-primary'}
