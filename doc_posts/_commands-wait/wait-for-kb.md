---
title: Wait For Keyboard Button Status
num: 11
redirect_from:
  - commands/157
---

Pauses a button execution and waits until a specific button is pressed/unpressed to continue with the rest of the commands.


| Box Name | Type | Description | 
|-------|--------|--------
|Button|Dropdown|Which keyboard button to wait for
|Press|Checkbox|Checked = wait until the button is pressed, Unchecked = wait until the button is not pressed 
|Timeout After (ms)|Number {% include asterisk.html%}|How long to wait in milliseconds until resuming normal command flow (`0` will wait indefinitely)
{:class='table table-primary'}








