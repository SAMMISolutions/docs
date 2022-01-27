---
title: Number vs. String
num: 12
---

{% include alert.html text="You cannot execute number operations on strings and string operations on number values." type="warning" %} 

String in a programming language is a sequence of characters. It is used to represent text rather than numbers.\
Strings are contained within a pair of double quotes, i.e. `"Cat"` or `"Hello World"`.\
Strings can contain numbers, however you must realize that `"5"` doesn’t have the value of 5, it has the value of 0, the same as `"a"` does.\
You cannot add strings either, i.e. `"12" + "34"` isn’t `"46"`, it’s `"1234"`. `12 + 34` is `46`.\
If you wish to convert a string to a number, you can use [String to Number](commands/number#stringtonumber) command.




