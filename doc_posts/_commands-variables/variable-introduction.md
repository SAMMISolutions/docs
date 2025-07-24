---
title: "Introduction"
num: 0
---

In SAMMI, you will need to store values (data) somehow in a lot of cases.

Maybe you need something as simple as just incrementing a counter everytime an action is done, like stream chat running a `!fail` command.\
Maybe you need to store a message from chat to display in OBS?\
Or maybe you're doing something more on the math side and calculating a multiplier based on how long someone has been subscribed on Twitch to determine a benefit for an interaction?

Variables are your answer!

{% include image.html w="50" src="variable.png" alt="SAMMI holding a box-like container labelled 'subGoal', containing a block labelled 10." %}

Variables are labelled containers that store values and can swap it's contents at any time. They can both be created by the user, and provided by SAMMI!\
Values always have a [Type](#placeholder). There are only a few, and it's important you familiarize yourself with them!

Variable names are __case sensitive__, meaning that `gameCategory` and `GameCategory` are not going to have the same value and are registered as two completely separate variables.\
Variable names must always start with a letter and must only contain letters, numbers and `_`. **Failure to do this will cause unexpected behavior when used in expressions.**

There are few [Value Types](#value-types) in SAMMI. 

Variable usage can vary depending on it's [Scope](#scopes).

Variables exist inside buttons and globals only. You cannot manipulate or reference variables anywhere else in the program except for within buttons in command parameters.

Variables can have their data be replaced, and have their type changed whenever! This becomes very apparent when using commands that convert variables from one type to another.

{% include alert.html text="Buttons can have persistent, or non-persistent variables. Learn more in the <a href='#placeholder'>Button Variable Persistence</a> section." type="info" %}

{% include alert.html text="Buttons can also start with Default Variables on startup. Learn more in the <a href='#placeholder'>Button Default Variables</a> section." type="info" %}

{% include alert.html text="You can view all existing persistant variables in buttons and global variables by pressing Variable Viewer at the bottom menu of SAMMI or using CTRL + Tab on your keyboard" type="info" %}

## Value Types

Values can be a specific "type", which are recognized differently by SAMMI Core for different operations. These values can then be stored in a variable which will inherit that value's type.

{% include alert.html text="The type directly impacts how you utilize the data! When stored in a variable, the variable inherits the value's type. Failure to respect the type of value a command expects can result in crashes, or unexpected behavior." type="warning" %}

### number

Value containing numbers only. Negative numbers, decimal points and Euler's numbers are allowed.\
A variable containing a number value will be green in the variable viewer.\
Can be typed as-is in an expression.\
Examples: `50`, `1.25`, `-15`, `10e+2`

### string (text)

Value that contains not just numbers, but also other characters (possibly mixed with numbers).\
A variable containing a number value will be beige in the variable viewer.\
you must wrap it in double or single quotes if using in an expresion.\
Examples: `"Hello world!"`, `'This is cool'`, `"The tickets cost $50"`, `'50'` (still regarded as a string!)

{% include alert.html text="A string containing only numbers is not regarded as a number and cannot be used as such. You must use 'String to Number' command to convert to number first." type="warning" %}

### boolean

A value that is either `false` or `true`. In SAMMI, booleans are actually just numbers `0` (false) or `1` (true). Keep this in mind when working with them!\
A variable containing a number value will be cyan in the variable viewer.\
Can be typed as-is in an expression.\
Examples: `true`, `false`

{% include alert.html text="In some languages comparing <code>2</code> or non empty string returns true, however in SAMMI it will always return false. The only value that returns true is <code>1</code>. " type="warning" %}

### undefined
A value representing missing data. Commonly returned when accessing a variable that doesn't exist, or a command has nothing to return to the user. It is not recommended to set this manually, and to use null instead.\
A variable containing a number value will be red in the variable viewer.\
Can be typed as-is in an expression.\
Example: `undefined`

### null
A value representing nothing, or empty. At first, this seems the same as undefined, but null is to be used by users to intentionally indicate empty, and isn't the result of an error like undefined is.\
A variable containing a number value will be red in the variable viewer.\
Can be typed as-is in an expression.\
Example: `null`

### Array

An Array is a special type known as a Data Structure, which can hold more than one value at a time. Learn more about arrays in our [Array Introduction section]({{ "commands/array#introduction" | relative_url }}).\
A variable containing a number value will be yellow in the variable viewer.\
Cannot be defined in an expression, and must be defined in a variable ahead of time. Can access values inside in an expression by providing an index number either in a variable, or just the number.\
Example: `myArray[0]`, `myArray[someNumber]`

### Object

An Object is another special type known as a Data Structure which can hold more than one value at a time.\
Unlike Arrays, Objects can contained named values, which are just variables! Learn more about objects in our [Object Introduction section]({{ "commands/object#introduction" | relative_url }}).\
A variable containing a number value will be purple in the variable viewer.\
Cannot be defined in an expression, and must be defined in a variable ahead of time. Can access variables from within, inside in an expression by using dot notation.\
Examples: `myObject.someVariable`, `global.main_directory`

## Scopes

Variables can exist in three scopes:

- [Local](#local)
- [Button](#button)
- and [Global](#global)

The scope a variable is in, determines how you interact with variables in different contexts. For example, you might not be able to interact with a set of variables when you are in one button vs another.

Scope allows you to have variables named the same and not fear accidentally overwriting other variables so long as they are in different scopes! One button can have variable `name`, and so can another, without risking any overlap!

Most of the time you will be dealing with local variables, while occasionally working with another button's variables, or even global variables. It really depends on what you are building!

### Local
Local variables are specific to the button you're working on and can be accessed directly without any extra steps—even if the button is set to non-persistent.\
This is what you will be using 99% of the time.

Using **Set String Variable command** lets you set a local variable containing a string.

### Button
Button variables are the same as local variables, just in a different button from the one you are currently working in.\
Button variables are stored in an object named after the button's ID, so you can use dot notation to interact with button variables. Example: `ID64.volunteers`
You can also interact with another button's variables easier by using **Get Button Variable** and **Set Button Variable** commands respectively, although it's recommended to get comfortable using the dot notation syntax.

### Global
Do not attempt to overwrite global variables that are not your own!
All global variables are stored inside a `global` object and are accessible from any button at all times.
Use **Get Global Variable** command to get a global variable, or use dot notation like `global.someVariable`.\
Do not pollute the global namespace unless you absolutely have to (which is almost always never!).\
It is always better to use either Local or Button variables.

<!-- ## Persistent vs. non persistent
By going to your Button Settings, you can decide whether you want your local variables to persist or not for the given button.\
If you check the box, it means the variables will be accessible even after the button has finished. If `Allow Button Overlap` is enabled, all button executions will share the same variables.\
If you uncheck the box, the variables will be accessible only when the button is running and only inside their own button. Other buttons cannot access them even if the button is currently running. If `Allow Button Overlap` is enabled, unique variables will be created for each button execution and will never be shared. -->

<!-- ## Default Variables
If you right click on a button, you can edit its initial variables.\
These exist to prevent crashes if you have enabled persistent variables.\
The window uses a simple JSON format to initialize your variables.\
For example, if you want your variable `name` to have a value of `SAMMI` and your variable `age` to have a value of 18 on initilization, you can do:
```
{
	"name": "SAMMI",
	"age": 18,
}
```

{% include alert.html text='Strings must be enclosed in <code>"</code>, but numbers (real values) must be without <code>"</code> (else they will be also regarded as strings).' type='warning' %}

You can also initiliaze complex variables, such as arrays or objects:
```
{
	"namesArray": ["Silverlink", "Melonax", "Cyanidesugar"],
	"colorObject": {
		"Silverlink": "blue",
		"Melonax": "purple",
		"Cyanidesugar": "red "
	}

}
``` -->