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
A variable containing a string value will be beige in the variable viewer.\
you must wrap it in double or single quotes if using in an expresion.\
Examples: `"Hello world!"`, `'This is cool'`, `"The tickets cost $50"`, `'50'` (still regarded as a string!)

{% include alert.html text="A string containing only numbers is not regarded as a number and cannot be used as such. You must use 'String to Number' command to convert to number first." type="warning" %}

### boolean

A value that is either `false` or `true`. In SAMMI, booleans are actually just numbers `0` (false) or `1` (true). Keep this in mind when working with them!\
A variable containing a boolean value will be cyan in the variable viewer.\
Can be typed as-is in an expression.\
Examples: `true`, `false`

{% include alert.html text="In some languages comparing <code>2</code> or non empty string returns true, however in SAMMI it will always return false. The only value that returns true is <code>1</code>. " type="warning" %}

### undefined
A value representing missing data. Commonly returned when accessing a variable that doesn't exist, or a command has nothing to return to the user. It is not recommended to set this manually, and to use null instead.\
A variable containing a undefined value will be red in the variable viewer.\
Can be typed as-is in an expression.\
Example: `undefined`

### null
A value representing nothing, or empty. At first, this seems the same as undefined, but null is to be used by users to intentionally indicate empty, and isn't the result of an error like undefined is.\
A variable containing a null value will be red in the variable viewer.\

null cannot be manually created at this time.

<!-- Can be typed as-is in an expression.\
Example: `null` -->

### Array

An Array is a special type known as a Data Structure, which can hold more than one value at a time. Learn more about arrays in our [Array Introduction section]({{ "commands/array#introduction" | relative_url }}).\
A variable containing an Array will be yellow in the variable viewer.\
Cannot be defined in an expression, and must be defined in a variable ahead of time. Can access values from within, inside an expression by using [Bracket Notation](#placeholder).\
Example: `myArray[0]`, `myArray[someNumber]`

### Object

An Object is another special type known as a Data Structure which can hold more than one value at a time.\
Unlike Arrays, Objects can contained named values, which are just variables! Learn more about objects in our [Object Introduction section]({{ "commands/object#introduction" | relative_url }}).\
A variable containing an Object will be purple in the variable viewer.\
Cannot be defined in an expression, and must be defined in a variable ahead of time. Can access variables from within, inside in an expression by using [Dot Notation](#placeholder).\
Examples: `myObject.someVariable`, `global.main_directory`

## Scopes

Variables can exist in three scopes:

- [Local](#local)
- [Button](#button)
- and [Global](#global)

The scope a variable is in, determines how you interact with variables in different contexts. For example, you might not be able to interact with a set of variables the same way when you are in one button vs another.

Scope allows you to have variables named the same and not fear accidentally overwriting other variables so long as they are in different scopes! One button can have variable `name`, and so can another, without risking any overlap!

Most of the time you will be dealing with local variables, while occasionally working with another button's variables, or even global variables. It really depends on what you are building!

### Local
Local variables are specific to the button you're working on and can be accessed directly without any extra steps—even if the button is set to non-persistent.\
This is what you will be using 99% of the time.

Using **Set String Variable command** lets you set a local variable containing a string easier.

### Button
Button variables are the same as local variables, just in a different button from the one you are currently working in.\
Button variables are stored in an object named after the button's ID, so you can use dot notation to interact with button variables. Example: `ID64.volunteers`
You can also interact with another button's variables easier by using **Get Button Variable** and **Set Button Variable** commands respectively, although it's recommended to get comfortable using dot notation.

### Global

{% include alert.html text="Do not pollute the global namespace unless you absolutely have to (which is almost always never!) It is always better to use either Local or Button variables. There is no benefit to using global variables when you can accomplish the same outcome with a button that has a unique ID." type="warning" %}


All global variables are stored inside a `global` object and are accessible from any button at all times.

Use the **Get Global Variable** command to get a global variable, or use [Dot Notation](#placeholder) like `global.someVariable`.\

A list of all global variables can be found below. Clicking on the name highlights the whole text for easy copying. Additionally, you can view global variables from your variable viewer.

{% include alert.html text="Do not attempt to overwrite these global variables!" type="danger" %}

| Variable | Type | Explanation|
|-------|--------|--------
{% include selectAll.html text="<code>administrator_mode</code>" %}| boolean | True if running in Administrator mode.
{% include selectAll.html text="<code>elapsed_time</code>" %}| number | Time in seconds since you started SAMMI.
{% include selectAll.html text="<code>main_directory</code>" %}| String | Main directory where SAMMI folder resides, using forward slashes (<code>/</code>). Useful for extension makers to be able to easily copy files.
{% include selectAll.html text="<code>main_directory_slash</code>" %}| String | Main directory where SAMMI folder resides, using backslashes (<code>\\</code>). Useful for sending file paths to OBS.
{% include selectAll.html text="<code>mouse_x</code>" %}| number | Current x position of your mouse.
{% include selectAll.html text="<code>mouse_y</code>" %}| number | Current y position of your mouse.
{% include selectAll.html text="<code>since_2020</code>" %}| number | Elapsed time in seconds since January 1st, 2020.
{:class='table table-secondary w-auto table-hover text-break' }

**SAMMI Variables**

| Variable | Type | Explanation|
|-------|--------|--------
{% include selectAll.html text="<code>api_port</code>" %}| number | The port number for the Local API server.
{% include selectAll.html text="<code>api_pw_enabled</code>" %}| boolean | Returns true if SAMMI Local API server has a password.
{% include selectAll.html text="<code>api_server_opened</code>" %}| boolean | Returns true if SAMMI Local API server is running.
{% include selectAll.html text="<code>bridge_connected</code>" %}| boolean | True if connected, false if not connected.
{% include selectAll.html text="<code>extensions</code>" %}| Object | Contains all extensions and their versions installed in Bridge (only if Bridge is connected to SAMMI)
{% include selectAll.html text="<code>browser_name</code>" %}| string | Browser name your Bridge connected to SAMMI is using.
{% include selectAll.html text="<code>client_language</code>" %}| string | Language SAMMI is currently using.
{% include selectAll.html text="<code>deck_connected</code>" %}| boolean | Returns true if SAMMI deck is connected, false if not.
{% include selectAll.html text="<code>deck_app_connected</code>" %}| boolean | True if connected, false if not connected. Lists the connected deck apps.
{% include selectAll.html text="<code>deck_app_port</code>" %}| number | The port number for SAMMI Panel.
{% include selectAll.html text="<code>SAMMI</code>" %}| Object | Contains information about your current SAMMI versions.
{% include selectAll.html text="<code>SAMMI.bridge_version</code>" %}| string | Your current SAMMI Bridge version.
{% include selectAll.html text="<code>SAMMI.deck_version</code>" %}| string | Your current SAMMI Deck version.
{% include selectAll.html text="<code>SAMMI.sammi_version</code>" %}| string | Your current SAMMI Core version.
{% include selectAll.html text="<code>bridge_port</code>" %}| number | The port number for SAMMI Bridge connections.
{% include selectAll.html text="<code>trigger_type</code>" %}| Array | All available trigger types.
{% include selectAll.html text="<code>Extensions</code>" %}| Object | Shows all currently installed extensions in Bridge connected to SAMMI. 
{:class='table table-secondary w-auto table-hover text-break' }

**Twitch Variables**

| Variable | Type | Explanation|
|-------|--------|--------
{% include selectAll.html text="<code>twitch_accounts</code>" %}| Array | All linked Twitch account login names.
{% include selectAll.html text="<code>twitch_chat_connected</code>" %}| boolean | Twitch chat connection status. True if connected, false if not connected.
{% include selectAll.html text="<code>twitch_client_id</code>" %}| string | SAMMI Twitch Client ID, used in Twitch API calls.
{:class='table table-secondary w-auto table-hover text-break' }

**OBS Variables**

Anything that contains `[obsName]` should be replaced with your OBS connection name. So `[obsName].connected` is `Main.connected`

| Variable | Type | Explanation|
|-------|--------|--------
{% include selectAll.html text="<code>obs_connections</code>" %}| Array | Names of all your OBS connections.
{% include selectAll.html text="<code>[obsName]</code>" %}| Object | Contains information about your main/alternate OBS connection.
{% include selectAll.html text="<code>[obsName].connected</code>" %} | boolean | Returns true if SAMMI is connected to that OBS.
{% include selectAll.html text="<code>[obsName].current_scene</code>" %} | string | Your selected OBS current scene.
{% include selectAll.html text="<code>[obsName].ip</code>" %} | string | The IP address of the OBS connection.
{% include selectAll.html text="<code>[obsName].obs_studio_version</code>" %} | string | Current OBS studio version the OBSws is connected to.
{% include selectAll.html text="<code>[obsName].obs_websocket_version</code>" %} | string |  Current OBS Websocket version the OBSws is connected to.
{% include selectAll.html text="<code>[obsName].port</code>" %} | number | The port of the OBS connection.
{% include selectAll.html text="<code>[obsName].previous_scene</code>" %} | string | Your selected OBS previous scene.
{% include selectAll.html text="<code>[obsName].type</code>" %} | string | OBSws selected type in OBS Connections, either `OBSws4`, `OBSws5` or `Auto`.
{:class='table table-secondary w-auto table-hover text-break' }

## Expressions

Expressions are formula-like text that get *evaluated* by SAMMI, then, returns a value based on that result. This is not your ordinary text!

Understanding expressions is fundamental in working with any values, the contents of variables, and more.

They let you do things like output the value stored in a variable, do quick math operations, pass values without them having to be in a variable first, or do a combination of those things, all just by typing some text with some special rules to follow.

Expressions are **only** allowed in\
[Expression Boxes](#placeholder) (Yellow Boxes), and\
[Text Boxes](#placeholder) (Any other colored text box) as long as it's wrapped inbetween `/$$/`.

Below, we'll go over everything you can do in an expression. There will be examples of using expressions to set values in variables; The command [Set Local Variable](#placeholder) allows us to set whatever value an expression evaluates to, in a variable. So we'll be using that for most examples! running the button will execute the command, and we will be look at the resulting variable in the Variable Viewer.



### Literals

Literals are a fancy word for saying, you are literally putting in a value.

Whether it just be a number, some text, a boolean, or even its just a value!

To input a number, write it as-is.\
Example: `10`, `-300`, `5.20`

To input a string, wrap your text around double quotes, or single quotes.\
Example: `"Hello World!"`, `'Welcome on in, thank you for the follow!'`

Text wrapped inside quotes won't be counted in overall expression evaluation.

{% include alert.html text="Writing string values via an expression to set to a variable is a big hassle avoiding mistakes, and doesn't support newlines. It is highly recommended to use the command <a href='#placeholder'>Set String Variable</a> to write text, as it uses a text box and doesn't have the overhead of special rules interfering with what you want to type." type="warning" %}

To input a boolean, write it as-is.\
Example: `true`, `false`

To input undefined, write it as-is.\
Example: `undefined`

null cannot be manually created at this time.

<!-- To input null, write it as-is.\
Example: `null` -->

Awesome! Let's look at some examples of using literals in expressions to set some values in variables.

{% include image.html w="100" external="true" src="https://i.imgur.com/qcZALHX.png" alt="" %}

{% include image.html w="100" external="true" src="https://i.imgur.com/9vg65M6.png" alt="" %}

### Expression Variables

Variables can be input into expressions, which will output it's contents. simply type the name of the variable!\
Example: `someVariable`, `latestFollower`, `raidersToday`

{% include alert.html text="Notice how there is a lack of quotes! This means that it is looking for a variable name to grab it's contents from, rather than inputting a string/text." type="info" %}

Often times you'll find yourself doing this to output a value stored in a variable in a text box, or to copy one variable's contents into another.

{% include image.html w="100" external="true" src="https://i.imgur.com/VOOzKjV.png" alt="" %}

{% include image.html w="100" external="true" src="https://i.imgur.com/nSVsYyW.png" alt="" %}

If working with a data structure in a variable like an Array, or an Object, you'll want to use an [Accessor](#placeholder) alongside the variable name containing said Array or Object in order to navigate inside it for values/variables to output.

{% include image.html w="100" external="true" src="https://i.imgur.com/T0WxgJm.png" alt="" %}

{% include image.html w="100" external="true" src="https://i.imgur.com/u7pCBel.png" alt="" %}

#### Accessors

An accessor is special syntax (set of rules) used in expressions and most text box parameters labelled "Variable Name" (check the documentation for each command) to navigate to locations in a data structure.

A valid accessor "path" allows you to get, *and* set values at said path.

There are only two types of accessors, [Dot Notation](#placeholder) for Objects, and [Bracket Notation](#placeholder) for Arrays, which you can learn more about in their respective sections.

Global Variables are stored in an Object called `global`
Button Variables are stored in an Object named after your button's ID. Example: `ID10`

You can combine multiple accessors together to form a longer accessor path if you have a deeply nested combination of data structures.

Examples:

| Accessor Path | Description |
|---------------|-------------|
| `recentFollowers[0]` | points to the value at index 0 of an array called `recentFollowers`. |
| `global.main_directory` | points to the variable `main_directory` in the `global` object. |
| `viewers.data[10].user_name` | points to the variable `user_name` in an object stored at index 10 of an array called `data`, which is stored in an object called `viewers`.|
{:class='table table-primary table-hover' }

### Math and Operations 

If you wish to do math, or other operations within an expression, you need to wrap your entire expression in parenthesis.

Now, any kind of operators you put in your expression will work.

Here is a list of all operators and example usage in expressions:

|Operator	|Name|	Example Input | Example Output |
|-------|--------|--------|-------|
|+|	Add	|`(3+2)`| `6`
| - |	Subtract|	`(3-2)` | `1`
| / |	Divide (including decimals)| `(3/2)` | `1.5`
| * |	Multiply|`(3*2)`|`6`
| ^ |	XOR	|`(3^2)`|`1`
| \|	| OR	|<code>(3|2)</code> | `3`
| &	 |AND	|`(3&2)` | `2`
| $ |	Hexadecimal	|`($FFF)` | `4095`
| mod |	Modulus (division remainder). Space required before and after mod.|	`(7 mod 3)` | `1`
|div|	Divide (no decimals). Space required before and after div.|	`(7 div 3)` | `2`
{:class='table table-primary table-hover' }

And here is a list of other operations you can do, known as expression functions. These are typically more advanced and provide specific behavior rather than just a math operation. The name of the function, then parenthesis wrapped around the value you want the function to run on, is how you use these.

|Expression Function | Description|	Example Input | Example Output |
| round() |	Round to nearest number|	`(round(3.4))` | `3`
| ceil() |	Ceil (Round up)	|`(ceil(3.4))`| `4`
| floor() |	Floor (Round down)	|`(floor(3.8))` | `3`
{:class='table table-primary table-hover' }

### Compound Expressions

Finally, we have compound expressions, which allow us to mix and match everything we've learned into a single expression!

We can mix Literals, Expression Variables, and Operations all together using `+` to concatinate them, so long as the expression is wrapped in parenthesis.

Here are some examples:

| Expression | Description | Output |
|------------|-------------|--------|
|`(counter + 1)`| A `counter` variable set to number value `3` plus `1`. | `4` |
|`("Hello " + " World!")`| Two literals being concatinated together | `"Hello World!"` |
{:class='table table-primary table-hover' }