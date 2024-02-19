---
title: "Deck App: Wait for Multi Choice"
num: 4
version: 202331
redirect_from:
  - commands/323
---

{% include alert.html text="Available in Deck Hopper Pro." type="info" %} 

Command is available in [Developer Mode](https://sammi.solutions/docs/faq/general#developermode).

Pauses a button execution for the specified amount of time, and a pop up message appears for the user asking for their choice. Once the user presses OK or the time runs out, it resumes the button execution and continues with the rest of the commands.

| Box Name | Type | Description | 
|-------|--------|--------
|Client Name| String | Name of your Deck App (set in the Deck App's connection settings).
|Message| String | Popup message to show the user
|Default Choice | String | Default choice value, must be the exact match of one of the choices in the choice array
|Choice Array name | String | Name of the array of choices to select from
|Timeout After | Number | Time in milliseconds before SAMMI resumes the button execution, leave empty to wait indefinitely
|Save Variable As | String | Variable name to save the result
{:class='table table-primary'}
