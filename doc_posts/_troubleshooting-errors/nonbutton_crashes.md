---
title: Non Button Crashes  
num: 2
---


These crashes may and may not be a user error, and are more complex to debug. The error can be anything from `Unknown Error`, `Twitch Pubsub Error` to `HTTP Error`. 

Generally you will not be able to tell why the crash occured, however you will be asked whether you want to send the error log directly to SAMMI Developers.   

{% include image.html w="75" src="nonbuttonCrash.png" alt="Non Button Error" %}

If you decide to send us the error log, you will be prompted to add a comment explaining what you were doing prior to crash. It's **extremely important to include as many details as possible**, so our SAMMI Developers can recreate the crash on their side and fix it.  

<figure>
  <blockquote class="blockquote">
    <p>With a proper comment, it may take us less than 10 minutes to fix a bug. Without one, we can spend a week trying to recreate a crash with no luck.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Christina from <cite title="SAMMI Devs">SAMMI Devs</cite>
  </figcaption>
</figure>

An example of the error log that was sent to us with a detailed comment explaining what led to the crash:

```jsx
Type: Internal Error
Error: ds_map_find_value argument 1 incorrect type (undefined) expecting a Number (YYGI32)
Script Name: gml_Object_obj_main_Draw_0 [416]
Detailed Error: ERROR in
action number 1
of Draw Event
for object obj_main:
ds_map_find_value argument 1 incorrect type (undefined) expecting a Number (YYGI32)
Stack Trace: gml_Object_obj_main_Draw_0 (line 416)

Version: 2022.5.1.0, Architecture: x64, OS: os_windows, 655360
devMode: 0, Pubsub: 1, Twitch Chat: 1, Bridge: 0
User ID: 0ad8f668ac, User Comment: I deleted a global variable called Main

Data: FATAL ERROR
####################################################
SAMMI Version: 2022.5.1.0
Unknown Error
```

Error logs are kept private and only SAMMI Developers have access to them. They are removed once the bug has been fixed and the fix has been deployed. We do not collect any personally identifiable information.
