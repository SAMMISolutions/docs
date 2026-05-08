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
|1|Comment|Optional comment to explain what the example does.|
|2|Try Block|Starts the protected block.|
|3|Alert Message|Shows `Test Started`.|
|4|Set Local Variable|Fails because the variable `b` does not exist.|
|5|Alert Message|This command is still inside the Try Block and will not run because the previous command failed.|
|6|Comment|Optional comment after the Try Block.|
|7|Alert Message|Shows `Continuing`, because the button continues after the Try Block.|
{:class='table table-secondary w-auto table-hover text-break'}

In this example, `Set Local Variable: a = (b*0)` fails because `b` does not exist. Without a Try Block, this error would stop the button execution or crash SAMMI. With a Try Block, SAMMI catches the error, skips the remaining commands inside the block, and continues with the next command after the block.

<img src="/docs/assets/images/commands-statements/try-block-example.png" class="img-fluid rounded w-100" alt="Try Block example showing a failed command inside the block and execution continuing afterwards">

Expected output:

```text
Test Started
Continuing
```

## Important Notes

- `Try Block` only catches errors from commands inside the block.
- When a command inside the block fails, the remaining commands inside the Try Block are skipped.
- Button execution continues with the next command after the Try Block.
- `Try Block` is useful for optional actions, fallback logic, file checks, API requests, and commands that may fail depending on external data.

{% include alert.html text="Try Block catches command execution errors inside the block. If a command fails, the remaining commands inside the Try Block are skipped and execution continues after the block." type="info" %}
