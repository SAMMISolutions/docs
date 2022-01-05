---
title: "Stack: Parse "
num: 11
---

Turns a JSON string into a stack.\
Default JSON string format is `{"size":3, "0":"white cat", "1":"blue car", "2":8}`.

{% include alert.html text="The JSON string must contain size value and the corresponding amount of values for the command to get properly executed." type="warning" %} 

| Box Name | Type | Description | 
|-------|--------|--------
|Stack Name	|String	| Name of the stack to save the parsed string into
|String	|String	| Name of the string to parse. 
{:class='table table-primary'}

| JSON string before conversion|  New Stack|  
|-------|--------
| { "1": 20.000000, "size": 3.000000, "0": 5.000000, "2": 100.000000, "name": "numbers" }  |0: 5 <br/> 1: 20 <br/>2: 100|
| { "1": "Rabbit", "size": 3.000000, "0": "Cat", "2": "Dog", "name": "animals" }|0: "Cat" <br/> 1: "Rabbit" <br/>2: "Dog"|
| { "1": 50.000000, "3": 100.000000, "size": 4.000000, "0": "Cat", "2": "Rabbit", "name": "mixed" }|0: "Cat" <br/> 1: 50<br/>2: "Rabbit" <br/>3: 100
{:class='table table-secondary w-auto table-hover align-middle data-toggle='table' text-break }







