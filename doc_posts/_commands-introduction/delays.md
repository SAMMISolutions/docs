---
title: Command delays
num: 3
---

{% include alert.html text="This is considered legacy, and <b>heavily recommended to not use!</b> A future update will visually hide them by default to prevent newer users and discourage existing users from continuing their usage. Please use the <a href="#placeholder">Wait For Timeout</a> command instead." type="warning" %}

**Command delays are absolute and not related to each other.** You can think of them as a timeline, they do not affect each other in any way.  

**Example 1:** If you set up the first command to trigger at 1000ms and the second command to trigger at 1000ms, both commands will trigger at 1000ms, one right after another (in this case order matters), exactly 1000ms from when the button was pressed.\
**Example 2:** If you set up your first command to trigger at 5000ms and your second command to trigger at 2000ms, the second command will be triggered exactly 2000ms from when you pressed the button and then first command will be triggered exactly 3000ms after it (5000ms from when you pressed the button).

**The command delay is superior to the command order, which means that a second command with a shorter delay will be always triggered before the first command with a longer delay.**

{% include image.html w="75" src="delay_example.png" alt="Example showing how command delays work" %}

You cannot use variables in command delays, but you can use the [Wait for Timeout](wait#waitfortimeout) command instead, which is preferred to use overall instead of delays, as delays are confusing and can introduce hard to solve issues.