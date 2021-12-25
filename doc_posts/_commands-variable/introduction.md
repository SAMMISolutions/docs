---
title: "Introduction"
num: 0
---

Variables are containers for storing data values (including numbers and strings), that can be reused over and over again.\
Variable names are case sensitive, meaning that "Variable" and "variable" are not going to have the same value.

{% include alert.html text='Variables can be used as parameters or inside any string. If the input box name contains a <i class="fas fa-asterisk" style="color:FireBrick;" title="Parameter can be a variable, real value or a string"></i>, you can type the variable name as it is. If the input box does not contain a <i class="fas fa-asterisk" style="color:FireBrick;" title="Parameter can be a variable, real value or a string"></i>, you need to wrap any variable in /$ $/, i.e. /$MyVariable$/.' type="warning" %} 

Value of a variable can be:

- Another variable - `myVariable` or `/$myVariable$/`
- Real value (number) - `50`
- String - `"My Cat"`
- Stack value [index]stackname - `[2]myStack`
- Math expression including variables and Complex Math operators. Must be wrapped in (). - `(myVariable * 10 - [2]myStack + 3)`

All variables inside Receiver are global and get deleted every time you close or reset Receiver.\
Variables are not unique to a button that created them and any button/deck can access them.

{% include alert.html text="Press Tab in the main screen of the Receiver to view all the existing variables." type="info" %} 








