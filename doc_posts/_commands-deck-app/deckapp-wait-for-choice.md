---
title: "Deck App: Wait for Choice"
num: 3
version: 202331
redirect_from:
  - commands/322
---

{% include alert.html text="Available in Deck Hopper Pro." type="info" %} 

Similar to Wait for User Choice command, but the prompt will originate from SAMMI Panel instead.  
Command is available in [Developer Mode](https://sammi.solutions/docs/faq/general#developermode).

Pauses a button execution for the specified amount of time, and a pop up message appears for the user asking for their choice. Once the user presses OK or the time runs out, it resumes the button execution and continues with the rest of the commands.

| Box Name | Type | Description | 
|-------|--------|--------
|Client Name| String | Name of your Deck App (set in the Deck App's connection settings).
|Message| String | Popup message to show the user
|Timeout After | Number | Time in milliseconds before SAMMI resumes the button execution, leave empty to wait indefinitely
|Save Variable As | String | Variable name to save the result
{:class='table table-primary'}
