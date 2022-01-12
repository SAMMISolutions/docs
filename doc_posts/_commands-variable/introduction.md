---
title: "Introduction"
num: 0
---

Variables are containers for storing data values (including numbers and strings), that can be reused over and over again.\
Variable names are case sensitive, meaning that "Variable" and "variable" are not going to have the same value. Variable name must always start with a letter and must only contain letters, numbers and `_`. 

{% include alert.html text="You can view all existing variables by pressing Variable Viewer at the bottom menu of your LioranBoard" type="info" %}

#### Global Variables
All global variables are stored inside `global` variables object and are accessible from any button at all times. Some of these variables are permanent.\
Use **Get Global Variable** command to get a global variable and **Set Global Variable** command to set a new or update an existing global variable.\
Do not pollute global namespace unless you absolutely have to. It's almost always better to use either local or button variables.

#### Button Variables
Button variables are stored inside every button object. They can be accessed from any other button (if their own button is set to persistent) by using **Get Button Variable** command and created or updated by using **Set Button Variable** command.

#### Local Variables
Local variables are button's own variables that can be directly accessed from its own button at anytime (even if the button is set to non persistent). This is what you want to use 99% of the time.\
Using **Set String Variable command** lets you set a local variable containing text.

#### Persistent vs. non persistent variables
By going to your Button Settings, you can decide whether you want your local variables to persist or not for the given button.\
If you check the box, it means the variables will be accessible even after the button has finished. If `Allow Button Overlap` is enabled, all button executions will share the same variables.\
If you uncheck the box, the variables will be accessible only when the button is running and only inside their own button. Other buttons cannot access them even if the button is currently running. If `Allow Button Overlap` is enabled, unique variables will be created for each button execution and will never be shared.


#### Init Variables
If you right click on a button, you can edit its INIT variables.\
These exist to prevent crashes if you have enabled persistent variables.


#### Variable types

| Variable Type | Example | Color in variable window | 
|-------|--------|--------|
|Real value (number) | `50` | green|
|String (text) | `"My Cat"` or `'My Cat'` | blue|
|Boolean | 1 = true, 0 = false | cyan|
|Array | `["cat","rabbit","dog"]` | yellow|
|Object | `{"name": John, "age": 25, "country": Canada"}` | purple|
|Undefined | Variable does not exist/is set to empty value| red |
|Null | Variable with empty or non existent reference | red|
{:class='table table-secondary w-auto table-responsive table-hover'}

**Real value (number)**  

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

**Array**  

Array is a special variable which can hold more than one value at a time. Learn more about arrays in our [Array Introduction section]({{ "commands/array#introduction" | relative_url }}).

**Object**  

Object is another special variables which can hold more than one value at a time. Unlike arrays, objects have named values, key-value pairs. Learn more about objects in our [Object Introduction section]({{ "commands/object#introduction" | relative_url }}).

#### White vs. Yellow Box for parameters
When you start using commands in LioranBoard, you will notice that some parameter boxes have yellow color and some have white color.
{% include image.html w="100" src="variable_box.png" alt="Different parameter box colors" %}
It's extremely important to know the difference as you need to **format your input according to the color of the box**.

| Operation | White Box| Yellow Box| 
|-------|--------|--------
|Inserting another variable | You must wrap other variables in */$$/*. <br/> `/$myVariable$/` | You can directly type another variable.<br/> `myVariable`
|Inserting array value | You must wrap them in */$$/*. <br/> `/$myArray[0]$/` | You can directly insert them. <br/> `myArray[0]`
|Inserting real values (numbers) | You can directly insert them.<br/> `26` | You can directly insert them. <br/> `26`
|Inserting string values (text) | You can directly insert them, such as `Hello World` and even use new lines by pressing ENTER | You have to wrap any string in double/single quotes. <br/> `"Hello World"` or `'Hello World'`
|Using a combination of strings and variables | You can insert a variable into text by wrapping it in */$$/*. <br/> `Hello world, this is my /$myVariable$/, isn't it cool?` | You must wrap any string in double/single quotes and use `+` to combine them with other variables. The whole value must be enclosed in parentheses. <br/> `( "Hello World, this is my " + myVariable + ", isn't this cool?" )`
|Math Operations| All math operations must be enclosed in */$$/* and parentheses.<br/> `Hello world, do you know what's 3+7? It's /$(3+7)$/!` | All math operations must be enclosed in parentheses.<br/> `( "Hello world, do you know what's 2+7? It's " + (2 + 7) + "!" )`
{:class='table table-secondary w-auto table-hover text-break' }










