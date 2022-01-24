---
title: "Switch Statement"
num: 1
---

Switch statement is used to select one of many blocks of commands to be executed based on single condition.   

Add one Switch statement and then nest Case Statement commands inside for each case.   

Use the **+** button in the Case Statement command to add more than one condition to the same Switch Statement.  

Use 'default' as a Case Statement text if you want to execute an action when no other cases meet the conditions.

{% include alert.html text="If you have a lot of different conditions to check for, it is faster and more readable to use Switch Statement instead of multiple nested If Statements." type="info" %} 

| Box Name | Type | Description | 
|-------|--------|--------|
| Value| {% include asterisk.html%}	 | Expression to evaluate. Its result will be matched against each case you add.
{:class='table table-primary' }

1. Add a new Switch Statement command
1. Decide what expression you want to evaluate.\
*For example, you would like to check the name of the viewer.*
2. Add a Case Statement for each choice.\
*For example, add a Case Statement for Lioran, Melonax, Sebas and Cyanidesugar.*
3. Under each Case Statement, decide what commands you want to execute.\
*For example, under Case Statement for Lioran, you want to play a specific sound effect. And under the Case Statement for Melonax, you want to play a different sound effect.*
4. (Optional) Add a default case to execute a block of commands if no Case Statement matches the expression.\
*For example, if the viewer's name isn't Lioran, Melonax, Sebas or Cyanidesugar, play a default sound effect.*
5. Now every time the button is pressed, it will check the name of the viewer and execute one Case Statement command block matching their name (or execute the default block).  


  {% include image.html w="100" src="switch2.png" alt="Example of Switch Statement for viewer names" %}









