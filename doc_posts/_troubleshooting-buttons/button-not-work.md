---
title: Button doesn’t do what I want
num: 3
---

There are almost infinite ways a button can go wrong, so it’s impossible to be exhaustive here. We will give you some tips and useful things you can try to find the culprit.

#### Tips to troubleshoot

- **Use the Variable Viewer**. It’s a powerful tool that shows you the variables, arrays and objects in each button, as well as what value they are currently set to. That way you can see if a variable is being populated, if it has the correct value, whether it’s the correct type (it’s a number, a string or an array?) or if it even exists at all.
- **Check for error messages**. Some errors are shown in SAMMI as yellow messages at the bottom. If you have any of those, they would be a good indicator of what’s going wrong.
- **Isolate the problem**. If you have many commands in a button, it can be difficult to find the one that’s not doing what it’s supposed to do. Try to divide the button into smaller pieces and test them one by one. You can turn off a command with the ‘Off’ tick on the right side of each command.
- **Troubleshooting a command**: If you find the command that’s not working (or the button has only one command) go to the documentation of that command and try to figure out what you are doing wrong. For some common issues, check the ‘Common Errors with Commands’ section below.
- **Check for misspellings, extra spaces and typo’s**. We have all misspelled a source name, a setting or a variable. It happens. Go over every box to find out.
- **TEST!** The only way to know if a button works is by testing. Try different triggers. Try different values. If it uses a wildcard pull, try adding a set variable command to override it and trigger the button with the SAMMI Deck. If a filter doesn't work, try with another filter or source. If a command with a variable doesn’t work, change the variable for the actual value so you know if it’s the command that’s wrong or it’s the variable. Play, change things, so you know better how it is working, what's wrong and what’s right.

#### Undefined

If you see the word ‘undefined’ (in error messages, crashes, text sources, chat, etc), that means you are using a variable that has not been defined previously. That can either mean you have to define it yourself (see Init Variables) or that you are not waiting enough time for a command (like Fetch OBS Data, Get HTTP Request, Get User/Game/Channel Info or an extension command) to retrieve information (use Wait Until Variable Exists command to fix it).

#### Variables

Variables, arrays and objects are a fundamental part of SAMMI. You need to know how to use them to unlock the full potential of SAMMI. Please read the variable introduction about how to use them and how to use the [White and Yellow Boxes]({{ "commands/variables#whitevsyellowboxforparameters" | relative_url }}). if you are not sure.

#### Showing previous information, results only work after the second press or actions are being made in the incorrect order (or at the same time).

There is probably a problem with your delays (or wait commands, see Common Errors with Commands below). Delays in commands are effective from the start of the button, not from the last command, no matter what order your commands are in. If your first command has a delay of 2000ms and your second command has a delay of 0ms, the second command will run first, and then the first command. Check Command Delays for more information about them.

#### Issues with Filters and Sources

Check whether you are connected to OBS. Check Common Issues in Troubleshooting. If the source is inside a group, try taking it out to see if that makes a difference. The OBS websocket has a lot of issues working with groups, so if you use groups and SAMMI cannot find them or work correctly with them, consider using nested scenes instead.

#### Errors with Commands

| Command | Common Issue |
|-------|--------|
|Statements|Most statements are blocks that can hold commands inside of them. Make sure the colored outline surrounds all commands it should apply to.|
|Statements|A statement will not take effect if it has a higher delay than the commands that are inside of it.|
|If|An If Statement has an ‘if’ section and an ‘else’ section. Make sure your commands are in the correct part.|
|Re-enable/Repeat|Loops don’t take into account the delays inside them. All the commands inside a loop should have the same delay. If you need different delays, there are workarounds like moving them all to another button and trigger that inside the loop. |
|Trigger Pull|You can use the little icon on the right of the pull value box to get the correct name of the value to pull.|
|Trigger Pull/Wildcard Pull|The value you pull will always be a string. If you need to do math with it you need to convert it to a number with a String to Number command.|
|Wait Until Variable…|Wait commands are only useful if the variable doesn’t exist previously or don’t have the desired value. When retriggering the same button, you need to delete (or change) those variables before using the wait again. You can either delete the variables at the end or turn off Local Variable Persist in the button settings.|
|Source Change Volume/Motion: Source Volume|You need to add a number between 0 and 1. This number does NOT match with the numbers in LB1. You can figure out what number you need by going into OBS, clicking any cog in your audio mixer and selecting Advanced Audio Properties. Check the box above the Volume % column, and read the % from there. If it says 50%, you need to enter 0.5|
|Trigger OBS Hotkey Sequence|You shouldn’t write the exact key you want to press, but the OBS name for that key. Check the documentation.|
|Trigger Button|If you are auto-triggering the button, turn the queue on (in the button and in the command). The ‘hidden delay’ field cannot be left blank. |
|Sound Effects|SAMMI sound goes through the default output device of your pc when SAMMI is opened. If you want to change where you want to hear SAMMI (or use an audio cable), change to that device before launching SAMMI. Once opened, you can change the default output device (back) to whatever you want and it will not affect SAMMI.|
{:class='table table-primary' }
