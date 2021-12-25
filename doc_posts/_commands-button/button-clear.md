---
title: "Clear button"
num: 2
---

Clears the given button ID or all the buttons (in all decks). You can choose to clear queued buttons as well.\
If you clear all buttons, you can specify whether you want to clear the button performing this command as well.

| Box Name | Type | Description | 
|-------|--------|--------
|Button ID|	Any	|Button ID to clear
|Ongoing|	boolean	|Specify whether the ongoing buttons should be cleared.
|Queue|	boolean|	Specify whether the queued buttons should be cleared.
|Self|	boolean	|If you selected all in your Button ID field, you can choose whether you want to clear this button as well.<br/>Does not work if the button ID is itself (in that case use False in Ongoing field).
{:class='table table-primary'}









