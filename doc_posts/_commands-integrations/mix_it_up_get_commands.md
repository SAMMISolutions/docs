---
title: "Mix It Up: Get All Commands"
num: 3
redirect_from:
  - commands/319
---

Returns a specific or all available Mix It Up commands.  
Fill out the Command Name box to return a specific command information (stored as an object), or leave it empty to return an array of all available Mix It Up commands.

{% include alert.html text="Developer API in Mix It Up-Services must be enabled" type="info" %} 

{% include alert.html text="This command needs some time to execute, either delay your next commands by 1-2 seconds or use <a href='/docs/commands/wait#waituntilvariableexists'>Wait Until Variable Exists</a> command." type="warning" %}

| Box Name | Type | Description | 
|-------|--------|--------|
|Save Variable As|String | Variable name to save the result
|Command Name|String (optional)|The specific Mix It Up command name (will return the first occurence), leave empty to return all
{:class='table table-primary'}
