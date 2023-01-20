---
title: Complex Math
num: 11
---

You can execute complex math operations in every parameter box, using a mix of variables and real values.
Note that there's a significant difference between [White and Yellow box]({{ "commands/introduction#inputboxes" | relative_url }}).

Each time you want SAMMI to execute any kind of math, you need to wrap the whole sequence in parentheses: `(some math operation)`, for example `(variable+3*5+round(variable2))` or `(variable+10)` (applies for yellow boxes, as you must use `/$$/` in white boxes).

The following examples show the usage in **yellow boxes**.

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
| round() |	Round to nearest number|	`round(3.4)` = 3
| ceil() |	Ceil (Round up)	|`ceil(3.4)` = 4
| floor() |	Floor (Round down)	|`floor(3.8)` = 3
| mod |	Modulus (division remainder). Space required before and after mod.|	`7 mod 3` = 1 or `(7+3) mod (2+4)` = 4
|div|	Divide (no decimals). Space required before and after div.|	`7 div 3` = 2 or `(7+3) div (2+4)` = 1
{:class='table table-primary table-hover' }

