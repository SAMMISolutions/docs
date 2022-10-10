---
title: Error Messages on Crash
num: 0
---

When SAMMI crashes, you will receive a pop up with details of which button and command caused it to crash. In most cases, the pop up will also provide details on why it crashed. This makes it easy for you to pinpoint what went wrong in your button in order for you to fix it.

For non-button errors, you will be asked if you want to send the error log directly to the SAMMI Developers, and if you want to include a short message - **please use this to describe what happened leading up to the crash**.

An example of the error log that is sent to us is below:

```jsx
Type: Internal Error
Error: ds_map_find_value argument 1 incorrect type (undefined) expecting a Number (YYGI32)
Script Name: gml_Object_obj_main_Other_68 [49]
Detailed Error: ERROR in
action number 1
of Async Event: Networking
for object obj_main:

ds_map_find_value argument 1 incorrect type (undefined) expecting a Number (YYGI32)
Stack Trace: gml_Object_obj_main_Other_68 (line 49)

Version: 2022.4.4, Architecture: x64, OS: os_windows, 655360
devMode: 0, Pubsub: 0, Twitch Chat: 0, Bridge: 0
User ID: ec3008847a, User Comment: 

Data: FATAL ERROR
####REDACTED################################################
SAMMI Version: 2022.4.4
Unknown Error
```

Error logs are kept private and only SAMMI Developers have access to them. They are removed once the bug has been fixed and the fix has been deployed. We do not collect any personally identifiable information.

All your error messages are automatically saved in your SAMMI folder, in chronological order, in the `error_log.txt` file.

It is crucial you copy or screenshot the error messages when asking for help in the Discord server. 
