---
title: "Variable operators"
num: 9
---

There's a significant difference between [White and Yellow box]({{ "commands/introduction#inputboxes" | relative_url }}).\
 The following examples show the usage in **yellow boxes**.

| Operator | Description |	Example |
|-------|--------|--------
| = |Assignment. Real values or strings. Strings need to be wrapped in double quotes. Asigns the value on the right to the variable on the right. `x = y` |`x = 7` , `x = "Hello World"`
|+=	 |Addition. Real values or strings. Strings need to be wrapped in double quote. Same as `x = x + y` |	`7 += 2` = 9 <br/>  `"Hello" += " World"` = "Hello World"
| -= |	Subtraction. Real values only. Same as `x = x - y`|	`7 -= 2` = 5
|*=|	Multiplication. Real values only. Same as `x = x * y`|	`7 *= 2` = 14
|/=|	Division. Real values only. Same as `x = x / y`	|`7 /= 2` = 3.5
|mod|	Modulus. Real values only. Returns the remainder of division.	|`7 mod 2` = 1
|div|	Integer division. Real values only. Same as division, but the remainder is discarded.	|`7 div 2` = 3
|concat|	Concatenation. Real values or strings. Returns a string with the two values one after the other.	|`7 concat 2` = "72"<br/>`"Hello" concat " World"` = "Hello World"<br/>`"Player " concat 1` = "Player 1"
|&=	|Bitwise AND. Real values only. Same as `x = x & y`	|`7 &= 2` = 2
|^=|	Bitwise XOR. Real values only. Same as  `x = x ^ y`|`7 ^= 2` = 5
|\|=|	Bitwise OR. Real values only. Same as `x = x \| y` |	<code>7 \|= 2</code> = 7
|<<| Bitwise Left-Shift. Real wavlues only. Same as `x = x << y`|`5 << 2` = 20
|>>| Bitwise Right-Shift. Real wavlues only. Same as `x = x >> y`|`5 >> 2` = 1
|Cos	|Returns a numeric value between -1 and 1, which represents the cosine of the angle given in radians.	|`Cos 90` = -0.45
|Sin|	Returns a numeric value between -1 and 1, which represents the sine of the angle given in radians	|`Sin 90` = 0.89
|Tan|	Returns a numeric value that represents the tangent of the angle. Tan = Sin/Cos.|	`Tan 90` = -2.00
{:class='table table-primary table-hover' }
