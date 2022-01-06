---
title: "Introduction"
num: 0
---

Conditional statements are used to perform different actions based on different conditions.\
 If a condition is true, you can perform one action and if the condition is false, you can perform another action.      

- If - Commands to be executed if the specified condition is true.
- Else - Commands to be executed if the specified condition is false.
- And - All specified conditions need to be true.
- Or - At least one of the specified conditions needs to be true.
- Switch - Perform different actions based on different conditions (cases). 

#### Difference between If/Else and Switch
**If/Else statement** takes a specific condition and checks whether the condition is truthy or falsy. If the condition is true, then the if statement executes a specific code block. If the condition is false, then the else statement executes a different code block.  

  - **Example of checking what color a viewer chose with If/Else:**
    ```
    If color == "green" { execute block of commands }
       Else if color == "yellow" { execute block of commands }
          Else if color == "blue" { execute block of commands }
             Else if color == "pink" { execute block of commands }
    ```
    {% include image.html w="75" src="nested_if.png" alt="Nested If/Else Statements" %} As you can see, you would need to nest multiple If/Else statements to check for all the possible colors. This could get quite unreadable.

**Switch statement** is a multiple-choice selection statement. You decide what to execute for each case.  

  - **Example of checking what color a viewer chose with Switch:**
    ```
    Switch color
    Case green { execute block of commands }
    Case yellow { execute block of commands }
    Case blue { execute block of commands }
    Case pink { execute block of commands }
    ```  
    {% include image.html w="75" src="switch.png" alt="Switch Statement" %} Using Switch statement for multiple conditions is so much easier to read! And if you have a lot of conditions to check, the execution should be also faster.











