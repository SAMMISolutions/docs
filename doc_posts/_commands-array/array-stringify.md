---
title: "Stack: Stringify"
num: 10
---

Returns a JSON string of the whole stack.\
First value will be listed as "0", second one as "1", etc., "name"  and "size" values will be also included.\
Default JSON string format is `{"size":3, "0":"white cat", "1":"blue car", "2":8}`.\
You can use this command together with File: Save String command to save the stack values into .ini file. Once loading it back from the .ini file, you can use Stack: Parse to turn the JSON string back into a stack. 

| Box Name | Type | Description | 
|-------|--------|--------
|Stack Name	|String	| Name of the stack
{:class='table table-primary'}

| Original Stack | JSON string after conversion (notice the order is not consistent)|  
|-------|--------
|0: 5 <br/> 1: 20 <br/>2: 100| { "1": 20.000000, "size": 3.000000, "0": 5.000000, "2": 100.000000, "name": "numbers" }
|0: "Cat" <br/> 1: "Rabbit" <br/>2: "Dog"| { "1": "Rabbit", "size": 3.000000, "0": "Cat", "2": "Dog", "name": "animals" }|
|0: "Cat" <br/> 1: 50<br/>2: "Rabbit" <br/>3: 100| { "1": 50.000000, "3": 100.000000, "size": 4.000000, "0": "Cat", "2": "Rabbit", "name": "mixed" }|
{:class='table table-secondary w-auto table-hover align-middle data-toggle='table' text-break }







