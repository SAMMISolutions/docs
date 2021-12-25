---
title: Complex Math
num: 4
---

You can execute complex math operations in every parameter box, using a mix of variables and real values.
- Each time you want LB to execute any kind of math, you need to wrap the whole sequence in parentheses: `(some math operation)`, for example `(variable+3*5+round(variable2))` or `(variable+10)`.
- If you just want to insert a stack or variable name, it still needs to be wrapped in `( )`, for example `(variable)`.
- For stacks you can use `([x]stackname)` where x is  the position of the stack value.
- There is a maximum of 256 characters per input box. 

|Operator	|Name|	Example (without parentheses) |
|-------|--------|--------|
|+|	Add	|`3+2`
| - |	Subtract|	`3-2`
| / |	Divide (including decimals)|	`3/2` = 1.5
| * |	Multiply|	`3*2` = 6
| ^ |	XOR	|`3^2` = 1
| \|	| OR	|<code>3|2</code> = 3
| &	 |AND	|`3&2` = 2
| $ |	Hexadecimal	|`$FFF` = 4095
| round() |	Round to nearest integer|	`round(3.4)` = 3
| ceil() |	Ceil (Round up)	|`ceil(3.4)` = 4
| floor() |	Floor (Round down)	|`floor(3.8)` = 3
| mod |	Modulus (division remainder). Space required before and after mod.|	`7 mod 3` = 1 or `(7+3) mod (2+4)` = 4
|div|	Divide (no decimals). Space required before and after div.|	`7 div 3` = 2 or `(7+3) div (2+4)` = 1
{:class='table table-primary table-hover' }

 