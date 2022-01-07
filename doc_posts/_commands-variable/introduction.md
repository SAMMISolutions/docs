---
title: "Introduction"
num: 0
---

Variables are containers for storing data values (including numbers and strings), that can be reused over and over again.\
Variable names are case sensitive, meaning that "Variable" and "variable" are not going to have the same value. Variable name must always start with a letter and must only contain letters, numbers and `_`. 

{% include alert.html text='Variables can be used as parameters or inside any string. If the input box color is YELLOW, you can type the variable name as it is. If the input box color is WHITE, you need to wrap any variable in /$ $/, i.e. /$MyVariable$/.' type="warning" %} 

#### Variable types

| Variable Type | Example | Color in variable window | 
|-------|--------|--------
Real value (number) | `50` | green|
String (text) | `"My Cat"` or `'My Cat'` | blue
Boolean | 1 = true, 0 = false | cyan
Array | `["cat","rabbit","dog"]` | yellow
Object | `{"name": John, "age": 25, "country": Canada"}` | purple
Undefined | Variable does not exist/is set to empty value| red 
Null | Variable with empty or non existent reference | red
{:class='table table-secondary w-auto table-responsive table-hover'}

**Real value(number)**
Variable containing numbers only. Negative values, decimal points and Euler's numbers are allowed.\
Examples: `50`, `1.25`, `-15`, `10e+2`

**String (text)**
Variable that contains not just numbers, but also other characters (possibly mixed with numbers).\
If you are inserting a string into a YELLOW variable box, you must wrap it in double or single quotes.\
Note that a string containing only numbers is not regarded as a number and cannot be used as such. You must use 'String to Number' command to convert to number first.\
Examples: `"Hello world!"`, `'This is cool'`, `"The tickets cost $50"`, `'50'` (still regarded as a string!)

**Boolean**
In LioranBoard, boolean is a number that is either 0 (false) or 1 (true).\
{% include alert.html text="In some languages comparing <code>2</code> or non empty string returns true, however in LioranBoard it will always return false. The only value that returns true is <code>1</code>. " type="warning" %} 

**A




- Real value (number) - `50`
- String - `"My Cat"`
- Boolean - true for 1 and false for 0
- Another variable - `myVariable` or `/$myVariable$/`
- Array - `[2]myStack`
- Math expression including variables and Complex Math operators. Must be wrapped in (). - `(myVariable * 10 - [2]myStack + 3)`

{% include alert.html text="Press Tab in the main screen of the Receiver to view a list of your existing buttons. Click on the eye icon next to a button to view the variables contained in it." type="info" %} 








