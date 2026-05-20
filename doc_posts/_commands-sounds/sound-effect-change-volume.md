---
title: "Sound Effect Change Volume"
num: 3
redirect_from:
  - commands/192
  - commands/obs-sound-volume
---

Temporarily changes volume of your currently playing sound effect. Provide its ID that you set up in Play Sound Effect command.

This works the same for sound effects played on a specific Audio Device; use the Sound ID saved by Play Sound Effect.

| Box Name | Type | Description | 
|-------|--------|--------|
|Sound ID|String|Sound Effect ID. If you use a variable, enter the variable name as the ID, not the variable's value.
|Volume|Number {% include asterisk.html%}|Volume % to change to
|Duration (ms)|Number {% include asterisk.html%}| How long the command will take to change the volume (0 is instant)
{:class='table table-primary' }
