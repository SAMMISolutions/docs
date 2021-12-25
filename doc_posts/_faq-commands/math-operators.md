---
title: "Math: Change Variable operators"
num: 3
---

{% include alert.html text='All strings need to be wrapped in double quotes, such as <code>"Hello World"</code>.' type="warning" %} 


| Operator | Description |	Example |
|-------|--------|--------
| = |	Equal. Real values or strings. Strings need to be wrapped in double quotes. `x = y` |`x = 7` , `x = "Hello World"`
|+=	 |Addition. Real values or strings. Strings need to be wrapped in double quote. Same as `x = x + y` |	`7 += 2` = 9 <br/>  `"Hello" += "World"` = "Hello World"
| -= |	Subtraction. Real values only. Same as `x = x - y`|	`7 -= 2` = 5|
|Multiply|	Multiplication *=. Real values only. Same as `x = x * y`|	`7 *= 2` = 14
|Divide|	Division /=. Real values only. Same as `x = x / y`	|`7 /= 2` = 3.5
|DIV|	Integer division. Real values only. Same as division, but the remainder is discarded.	|`7 DIV 2` = 3
|MOD|	Modulus. Real values only. Returns the remainder of division.	|`7 MOD 2` = 1
|&=	|Bitwise AND. Real values only. Same as `x = x & y`	|`7 &= 2` = 2
|^=|	Bitwise XOR. Real values only. Same as  `x = x ^ y`|`7 ^= 2` = 5
|\|=|	Bitwise OR. Real values only. Same as `x = x | y` |	<code>7 |= 2</code> = 7
|Cos	|Returns a numeric value between -1 and 1, which represents the cosine of the angle given in radians.	|`Cos 90` = -0.45
|Sin|	Returns a numeric value between -1 and 1, which represents the sine of the angle given in radians	|`Sin 90` = 0.89
|Tan|	Returns a numeric value that represents the tangent of the angle. Tan = Sin/Cos.|	`Tan 90` = -2.00
{:class='table table-primary table-hover' }