---
title: "Mix It Up: Run Command"
num: 4
redirect_from:
  - commands/320
---

Runs a specific Mix It Up command. Requires you to supply its ID which you can retrieve by using [Mix It Up: Get All Commands](#mixitupgetallcommands) command.  

You can optionally pass arguments to the command, please refer to the [Mix It Up Special Identifiers](https://wiki.mixitupapp.com/en/special-identifiers#arguments) documentation. 

{% include alert.html text="Developer API in Mix It Up-Services must be enabled" type="info" %} 

| Box Name | Type | Description | 
|-------|--------|--------|
|Command ID|String | Command ID of the Mix It Up command to run
|Platform|String|The specific platform to run this command on (default = Twitch)
|Arguments|String (optional)| Optional arguments to pass to the Mix It Up command
{:class='table table-primary'} 

{% include media_modal.html vid="mixitup_runcommand.mp4" img="mix_it_up_run_command.png" w="50" btn="1" alt="Running a Mix It Up command" pastebin="FJhMchSy" %} 
