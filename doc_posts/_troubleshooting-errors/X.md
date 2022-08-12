---
title: Error Messages on Crash
num: 0
---

When SAMMI crashes, you will receive a pop up with details of which button and command caused it to crash. In most cases, the pop up will also provide details on why it crashed. This makes it easy for you to pinpoint what went wrong in your button in order for you to fix it.

For non-button errors, you will be asked if you want to send the error message directly to the devs on discord, and if you want to include a short message - please use this to describe what happened leading up to the crash. This does not require you to have a discord account, nor be in the server.

An example of the error log that is sent to the Discord is below:

```
Unknown Error at 1659755042
Error: Illegal Buffer Index -1
Script Name: gml_Script_scr_backup_load
Line Number: 0
Detailed Error:
ERROR in
action number 1
of Other Event: User Defined 15
for object obj_main:

Illegal Buffer Index -1
Stack Trace:
gml_Script_scr_backup_load (line 14)

Version
2022.4.0.alpha
Architecture
x64
OS Type + Version
os_windows, 655360
Developer Mode Enabled
0
Twitch Chat Connected
1
Pubsub Connected
1
Bridge Connected
0
User Comment
Crashing for no reason! HELP! OH NO! 
Extra Data
FATAL ERROR
####################################################
SAMMI Version: 2022.4.0.alpha
Unknown Error
```

All your error messages are automatically saved in your SAMMI folder, in chronological order, in the `error_log.txt` file.

It is crucial you copy or screenshot the error messages when asking for help in the discord server. 
