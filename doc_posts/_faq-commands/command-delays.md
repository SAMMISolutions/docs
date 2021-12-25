---
title: Command Delays
num: 1
---

Command delays are absolute, they’re not related to each other. You can think of them as a timeline, where they don't affect each other in any way.

**Example 1:** If you set up the first command to trigger at 1000ms and the second command to trigger at 1000ms, both commands will trigger at 1000ms, one right after another (in this case order matters), exactly 1000ms from when the button was pressed.\
**Example 2:** If you set up your first command to trigger at 5000ms and your second command to trigger at 2000ms, the second command will be triggered exactly 2000ms from when you pressed the button and then first command will be triggered exactly 3000ms after it (5000ms from when you pressed the button).


**The command delay is superior to the command order, which means that a second command with a shorter delay will be always triggered before the first command with a longer delay.**

{% include alert.html text="You IF Statement commands must always have <strong>shorter or the same delay</strong> as all the other commands in the IF block. Otherwise the condition will be completely ignored and the block commands will be always executed." type="danger" %} 

Command delays must be set when you're creating your button. If you want the delay to be different each time, you can use Statement: Re-enable if and execute the particular command only after the specified condition changes.

