---
title: "Try Block"
num: 8
version: 202640
redirect_from:
  - commands/356
---

Runs the commands inside the block in a protected area. If one of the commands inside the block causes a command execution error, SAMMI stops the block and continues without crashing the whole button execution.

| Box Name | Type | Description |
|-------|--------|--------
|Block|Statement Block|Commands inside this block are protected by the Try Block.
{:class='table table-primary'}

Example:

| Command Order | Command | What happens |
|-------|--------|--------
|1|Try Block|Starts the protected block.
|2|File: Get Information|Tries to read a file that may not exist.
|3|Popup Message|Only runs if the file command does not fail.
|4|Set Local Variable|Placed after the Try Block. Still runs even if the protected command failed.
{:class='table table-secondary w-auto table-hover text-break'}

This is useful when a command may fail because of a missing file, invalid JSON, unavailable OBS source, or another recoverable situation.

{% include alert.html text="Try Block catches command execution errors. It does not replace proper error checking for API responses, missing variables, or invalid user input." type="info" %}
