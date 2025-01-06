---
title: Async (Purple) Commands
num: 1.5
---

You might notice that some commands are coloured purple - these commands are ones that are not instantaneous. otherwise known as asynchronous.

The variable name listed in the Save Variable box of these commands (if present) will not be returned immediately, meaning commands ahead to run before it's returned. As such, you must [Wait until the variable exists](wait#waituntilvariableexists) to halt your button until the response is recieved. Please note that this variable must not be a variable that already exists, otherwise the `Wait Until Variable Exists` command will not run.

{% include alert.html text='It is common to add a `Delete Variable` command to delete the variable you are waiting for *before* the async command to ensure fresh data is waited for.' type="warning" %}

If the async command does not contain a Save Variable box, you may choose an arbitrary amount of time using the [Wait](wait) command.

You may also choose to let it continue without waiting if you don't need to know when it resolves.

{% include image.html w="75" src="purple-commands.png" alt="SAMMI Purple Commands" %}
